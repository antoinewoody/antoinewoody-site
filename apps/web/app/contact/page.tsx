import type {Metadata} from "next";
import {ContactForm} from "@/components/contact-form";
import {site} from "@/lib/site";

export const metadata:Metadata={
  title:"Contact",
  description:"Contact Antoine Woody about private advisory, executive advisory, sound experiences, retreats, workshops, speaking, and collaborations."
};

export default function Page(){
  return <>
    <section className="shell pageHero">
      <p className="eyebrow">CONTACT</p>
      <h1>Start with what is real.</h1>
      <p>Share what is taking your attention and what you want this conversation to help clarify.</p>
    </section>
    <section className="band">
      <div className="shell contactLayout">
        <div>
          <p className="eyebrow">PRIVATE INQUIRY</p>
          <h2>Keep it simple.</h2>
          <p className="contactAside">For direct email: <a className="textLink" href={"mailto:" + site.email}>{site.email}</a></p>
        </div>
        <ContactForm/>
      </div>
    </section>
  </>;
}