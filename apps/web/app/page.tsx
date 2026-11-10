import Link from "next/link";
import {BookingCta} from "@/components/cta";
import {JsonLd} from "@/components/json-ld";
import {site} from "@/lib/site";

export default function Home(){
  const service={"@context":"https://schema.org","@type":"Service",name:"Private Human Performance Advisory",provider:{"@type":"Person",name:"Antoine Woody",url:site.url},areaServed:"Worldwide",description:site.description,url:site.url + "/advisory"};
  return <>
    <JsonLd data={service}/>
    <section className="hero shell">
      <div className="heroCopy">
        <p className="eyebrow">PRIVATE HUMAN PERFORMANCE ADVISORY</p>
        <h1>For the person everyone depends on.</h1>
        <p className="lede">A private space to think clearly, move through pressure, and stay rooted in what matters.</p>
        <div className="actions">
          <BookingCta/>
          <Link className="textLink" href="/advisory">Explore advisory →</Link>
        </div>
      </div>
      <figure className="heroPortrait">
        <img src="/antoine-original-hero.jpg" alt="Antoine Woody" />
      </figure>
    </section>

    <section className="statement">
      <div className="shell statementInner">
        <p className="eyebrow">THE WORK</p>
        <h2>Clarity under pressure.</h2>
        <p>Better decisions. Stronger relationships. Less emotional drag.</p>
      </div>
    </section>

    <section className="shell section editorial">
      <div>
        <p className="eyebrow">PRIVATE ADVISORY</p>
        <h2>Strengthen the person carrying the performance.</h2>
      </div>
      <div className="editorialBody">
        <p>A confidential partnership for the decisions, conversations, and patterns shaping your life now.</p>
        <Link className="textLink" href="/advisory">Private Advisory →</Link>
      </div>
    </section>

    <section className="dark section">
      <div className="shell methodFeature">
        <div>
          <p className="eyebrow">THE LISTEN METHOD™</p>
          <h2>See clearly. Move intentionally.</h2>
        </div>
        <div className="methodWords" aria-label="LISTEN Method">
          <span>Learn</span><span>Identify</span><span>Shift</span><span>Train</span><span>Embody</span><span>Navigate</span>
        </div>
        <Link className="textLink lightLink" href="/listen">Explore the method →</Link>
      </div>
    </section>

    <section className="shell section soundFeature">
      <p className="eyebrow">SOUND + REGULATION</p>
      <h2>Regulate the nervous system. Restore clarity.</h2>
      <p>Sound, breath, and deep listening for private sessions, groups, and retreats.</p>
      <Link className="textLink" href="/sound">Explore Sound →</Link>
    </section>

    <section className="shell section finalCta">
      <p className="eyebrow">BEGIN</p>
      <h2>You do not need more noise.</h2>
      <p>You may need a clearer place to hear yourself.</p>
      <BookingCta/>
    </section>
  </>;
}