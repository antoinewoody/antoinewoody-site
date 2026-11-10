import type {Metadata} from "next";
import Link from "next/link";
import {insights} from "@/lib/insights";

export const metadata:Metadata={
  title:"Insights",
  description:"Insights from Antoine Woody on healing, sound, human performance, executive wellness, and corporate retreats."
};

export default function Page(){
  return <>
    <section className="shell pageHero">
      <p className="eyebrow">INSIGHTS</p>
      <h1>Useful ideas. Less noise.</h1>
      <p>Writing on healing, sound, pressure, performance, and the human life underneath it all.</p>
    </section>
    <section className="shell section insightList">
      {insights.map(item=><article className="insightRow" key={item.slug}>
        <div><p className="eyebrow">{item.eyebrow}</p><h2>{item.title}</h2></div>
        <div><p>{item.description}</p><Link className="textLink" href={"/insights/" + item.slug}>Read →</Link></div>
      </article>)}
    </section>
  </>;
}