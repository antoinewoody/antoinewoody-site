import type {Metadata} from "next";
import {BookingCta} from "@/components/cta";
import {JsonLd} from "@/components/json-ld";

export const metadata:Metadata={
  title:"The LISTEN Method",
  description:"The LISTEN Method: Learn, Identify, Shift, Train, Embody, Navigate."
};

const steps=[
  ["Learn","Understand what is actually happening before trying to change it."],
  ["Identify","Separate the event, interpretation, emotion, behavior, and deeper pattern."],
  ["Shift","Create a perspective that opens more useful choices."],
  ["Train","Apply the insight in a real conversation, decision, habit, or challenge."],
  ["Embody","Repeat until the lesson becomes lived experience."],
  ["Navigate","Keep moving with perspective, support, and accountability."]
];

export default function Page(){
  const schema={"@context":"https://schema.org","@type":"HowTo",name:"The LISTEN Method",step:steps.map(([n,t],i)=>({"@type":"HowToStep",position:i+1,name:n,text:t}))};
  return <>
    <JsonLd data={schema}/>
    <section className="shell pageHero">
      <p className="eyebrow">THE LISTEN METHOD™</p>
      <h1>Learn clearly. Move differently.</h1>
      <p>A practical structure for turning insight into real-world change.</p>
    </section>

    <section className="shell section">
      <div className="grid3">
        {steps.map(([n,t],i)=><article className="card" key={n}>
          <span className="number">0{i+1}</span>
          <h3>{n}</h3>
          <p>{t}</p>
        </article>)}
      </div>
    </section>

    <section className="band dark">
      <div className="shell narrow">
        <p className="eyebrow">THE PRINCIPLE</p>
        <h2>Eventually, you should be able to ask yourself the questions you once needed someone else to ask.</h2>
        <p>The purpose is greater capacity—not dependence.</p>
        <BookingCta className="button light"/>
      </div>
    </section>
  </>;
}