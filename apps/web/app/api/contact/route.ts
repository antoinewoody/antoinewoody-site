import {randomUUID} from "node:crypto";

export const runtime="nodejs";

const allowed=new Set(["Private Advisory","Executive Advisory","Sound / Retreat / Workshop","Speaking / Collaboration","Other"]);
const clean=(value:unknown,max:number)=>String(value ?? "").trim().slice(0,max);
const emailOk=(value:string)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function storeSubmission(pathname:string,record:unknown){
  const token=process.env.BLOB_READ_WRITE_TOKEN?.trim();
  if(!token)throw new Error("Contact storage is not configured.");
  const storeId=token.split("_")[3] || "";
  if(!storeId)throw new Error("Contact storage configuration is invalid.");

  const response=await fetch("https://vercel.com/api/blob/?" + new URLSearchParams({pathname}),{
    method:"PUT",
    headers:{
      authorization:"Bearer " + token,
      "x-api-version":"13",
      "x-api-blob-request-attempt":"0",
      "x-api-blob-request-id":storeId + ":" + Date.now() + ":" + randomUUID(),
      "x-vercel-blob-store-id":storeId,
      "x-vercel-blob-access":"private",
      "x-content-type":"application/json",
      "x-add-random-suffix":"0"
    },
    body:JSON.stringify(record,null,2)
  });

  if(!response.ok)throw new Error("Contact storage request failed.");
}

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

  try{
    await storeSubmission("contact-submissions/" + day + "/" + id + ".json",record);
  }catch{
    return Response.json({ok:false,message:"Your message could not be saved. Please try again or email directly."},{status:503});
  }

  return Response.json({ok:true});
}