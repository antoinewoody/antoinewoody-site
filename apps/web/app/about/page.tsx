import type {Metadata} from "next";
import {BookingCta} from "@/components/cta";

export const metadata:Metadata={
  title:"About",
  description:"Antoine Woody's philosophy and approach to private human performance advisory."
};

export default function Page(){
  return <>
    <section className="shell pageHero">
      <p className="eyebrow">ABOUT ANTOINE</p>
      <h1>The person behind the performance matters.</h1>
      <p>Antoine Woody works across human performance, emotional well-being, communication, breath, sound, and whole-person development.</p>
    </section>

    <section className="band">
      <div className="shell article">
        <h2>Built through experience.</h2>
        <p>His work grew from personal transformation: questioning inherited beliefs, changing environments, learning the body, and building a life around clarity rather than approval.</p>

        <h2>Across cultures and contexts.</h2>
        <p>His work has taken him across the United States, Kenya, Saudi Arabia, Qatar, the UAE, and beyond—working with people who carry meaningful responsibility.</p>

        <h2>Human first.</h2>
        <p>Deep listening. Direct reflection. Practical action. The goal is not dependence. It is greater capacity.</p>
        <BookingCta/>
      </div>
    </section>
  </>;
}