import type {Metadata} from "next";

export const metadata:Metadata={title:"Privacy",description:"Privacy information for AntoineWoody.com."};

export default function Page(){
  return <section className="shell articlePage">
    <p className="eyebrow">PRIVACY</p>
    <h1>Privacy, simply.</h1>
    <div className="articleBody">
      <p>Information you submit through the contact form is used to understand and respond to your inquiry.</p>
      <p>Contact submissions are stored privately on Vercel infrastructure. They are not sold to advertisers or used for unrelated marketing.</p>
      <p>Please do not submit medical records, passwords, financial account details, or other highly sensitive information through the form.</p>
    </div>
  </section>;
}