import {put} from "@vercel/blob";
import {randomUUID} from "node:crypto";

export const runtime="nodejs";

const allowed=new Set(["Private Advisory","Executive Advisory","Sound / Retreat / Workshop","Speaking / Collaboration","Other"]);
const clean=(value:unknown,max:number)=>String(value ?? "").trim().slice(0,max);
const emailOk=(value:string)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request:Request){
  let body:Record<string,unknown>;
  try{body=await request.json();}catch{return Response.json({ok:false,message:"Invalid submission"},{status:400});}

  if(clean(body.company_website,200))return Response.json({ok:true});

  const name=clean(body.name,120);
  const email=clean(body.email,160).toLowerCase();
  const phone=clean(body.phone,60);
  const interest=clean(body.interest,80);
  const message=clean(body.message,1800);
  const startedAt=Number(body.startedAt || 0);
  const elapsed=startedAt ? Date.now()-startedAt : null;

  if(name.length<2 || !emailOk(email) || !allowed.has(interest) || message.length<12){
    return Response.json({ok:false,message:"Please complete the required fields."},{status:400});
  }
  if(elapsed!==null && elapsed<1800){
    return Response.json({ok:false,message:"Please wait a moment and try again."},{status:429});
  }

  const now=new Date();
  const id=randomUUID();
  const record={id,receivedAt:now.toISOString(),name,email,phone:phone || null,interest,message};
  const day=now.toISOString().slice(0,10);

  await put("contact-submissions/" + day + "/" + id + ".json",JSON.stringify(record,null,2),{
    access:"private",
    contentType:"application/json",
    addRandomSuffix:false
  });

  return Response.json({ok:true});
}