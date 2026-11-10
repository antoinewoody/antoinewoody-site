"use client";

import {FormEvent,useRef,useState} from "react";

const reasons=["Private Advisory","Executive Advisory","Sound / Retreat / Workshop","Speaking / Collaboration","Other"];

export function ContactForm(){
  const startedAt=useRef(Date.now());
  const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [message,setMessage]=useState("");

  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form=event.currentTarget;
    const data=Object.fromEntries(new FormData(form).entries());
    const response=await fetch("/api/contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...data,startedAt:startedAt.current})});
    const result=await response.json().catch(()=>({}));
    if(response.ok){
      form.reset();
      setStatus("sent");
      setMessage("Thank you. Your message has been received.");
      startedAt.current=Date.now();
    }else{
      setStatus("error");
      setMessage(result.message || "Something went wrong. Please try again.");
    }
  }

  return <form className="contactForm" onSubmit={submit}>
    <div className="formGrid">
      <label>Full name<input name="name" autoComplete="name" required minLength={2}/></label>
      <label>Email<input name="email" type="email" autoComplete="email" required/></label>
      <label>Phone / WhatsApp — optional<input name="phone" autoComplete="tel"/></label>
      <label>Reason for reaching out<select name="interest" required defaultValue=""><option value="" disabled>Select one</option>{reasons.map(reason=><option key={reason}>{reason}</option>)}</select></label>
    </div>
    <label>What would make this conversation valuable?<textarea name="message" rows={6} required minLength={12}/></label>
    <label className="honeypot" aria-hidden="true">Company website<input name="company_website" tabIndex={-1} autoComplete="off"/></label>
    <div className="formActions">
      <button className="button primary" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Send inquiry"}</button>
      <p className={"formStatus " + status} aria-live="polite">{message}</p>
    </div>
  </form>;
}