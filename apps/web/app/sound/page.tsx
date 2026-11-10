import type {Metadata} from "next";
import Link from "next/link";
import {BookingCta} from "@/components/cta";
import {JsonLd} from "@/components/json-ld";
import {site} from "@/lib/site";

export const metadata:Metadata={
  title:"Sound Healing & Nervous System Wellness",
  description:"Private, group, retreat, and corporate sound experiences with Antoine Woody using didgeridoo, breath, rhythm, and deep listening."
};

export default function Page(){
  const schema={"@context":"https://schema.org","@type":"Service",name:"Sound and Nervous System Wellness",provider:{"@type":"Person",name:"Antoine Woody",url:site.url},url:site.url + "/sound",description:"Private, group, retreat, and corporate sound experiences using didgeridoo, breath, rhythm, and deep listening."};
  return <>
    <JsonLd data={schema}/>
    <section className="shell pageHero">
      <p className="eyebrow">SOUND</p>
      <h1>Sound that helps the system slow down.</h1>
      <p>Didgeridoo, breath, rhythm, and deep listening designed for recovery, reflection, and presence.</p>
      <div className="actions"><BookingCta label="Discuss a session"/></div>
    </section>

    <section className="band">
      <div className="shell grid3">
        <article className="card"><span className="number">01</span><h3>Downshift</h3><p>Create space after sustained pressure and stimulation.</p></article>
        <article className="card"><span className="number">02</span><h3>Reconnect</h3><p>Bring attention back into the body, breath, and present moment.</p></article>
        <article className="card"><span className="number">03</span><h3>Recover</h3><p>Use quiet, vibration, and reflection to support a meaningful reset.</p></article>
      </div>
    </section>

    <section className="shell section editorial">
      <div>
        <p className="eyebrow">EXPERIENCES</p>
        <h2>Private. Group. Corporate.</h2>
      </div>
      <div className="editorialBody">
        <p>Sessions can stand alone or be integrated into retreats, leadership experiences, and wellness programs. Group work can also include guided reflection and confidential conversation.</p>
      </div>
    </section>

    <section className="dark section">
      <div className="shell editorial">
        <div>
          <p className="eyebrow">THE EVIDENCE</p>
          <h2>Promising. Still developing.</h2>
        </div>
        <div className="editorialBody">
          <p>Research is stronger for music-based interventions and slow breathing than for specific “sound healing” instruments. The instrument-specific evidence is encouraging, but still preliminary.</p>
          <Link className="textLink lightLinkInline" href="/insights/sound-healing-research">See what the research actually says →</Link>
        </div>
      </div>
    </section>

    <section className="shell section finalCta">
      <h2>Experience it directly.</h2>
      <BookingCta label="Discuss a sound session"/>
    </section>
  </>;
}