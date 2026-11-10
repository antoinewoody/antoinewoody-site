import type {Metadata} from "next";
import {BookingCta} from "@/components/cta";

export const metadata:Metadata={
  title:"Private Advisory",
  description:"Private and executive human performance advisory for founders, executives, entrepreneurs, creatives, and high performers."
};

export default function Page(){
  return <>
    <section className="shell pageHero">
      <p className="eyebrow">PRIVATE ADVISORY</p>
      <h1>A thinking partner for the life behind the title.</h1>
      <p>Confidential support for clearer decisions, stronger relationships, emotional steadiness, and more intentional direction.</p>
      <div className="actions"><BookingCta/></div>
    </section>

    <section className="band">
      <div className="shell split">
        <div>
          <p className="eyebrow">THE VALUE</p>
          <h2>Less noise. Better movement.</h2>
        </div>
        <div className="stack">
          <p><strong>Clearer decisions</strong><br/>Separate pressure from what actually matters.</p>
          <p><strong>Stronger conversations</strong><br/>Say what needs to be said with more precision.</p>
          <p><strong>Emotional steadiness</strong><br/>Respond with awareness instead of being driven by the moment.</p>
          <p><strong>Intentional direction</strong><br/>Align performance with the life you actually want.</p>
        </div>
      </div>
    </section>

    <section className="shell section">
      <p className="eyebrow">WAYS TO WORK TOGETHER</p>
      <div className="offerGrid">
        <article className="offerCard">
          <h2>Private Advisory</h2>
          <p>Whole-person work across life, relationships, decisions, habits, and performance.</p>
        </article>
        <article className="offerCard">
          <h2>Executive Advisory</h2>
          <p>Private support for leadership, pressure, communication, and high-stakes decisions.</p>
        </article>
      </div>
    </section>

    <section className="dark section">
      <div className="shell split">
        <div>
          <p className="eyebrow">FIT</p>
          <h2>You are likely a fit if…</h2>
        </div>
        <div className="checkList">
          <p>✓ You carry responsibility other people rarely see.</p>
          <p>✓ You value direct, confidential conversation.</p>
          <p>✓ You are willing to examine patterns, not just outcomes.</p>
          <p>✓ You want insight to become action.</p>
        </div>
      </div>
    </section>

    <section className="shell section finalCta">
      <h2>Start with one conversation.</h2>
      <BookingCta/>
    </section>
  </>;
}