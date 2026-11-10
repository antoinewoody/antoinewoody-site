import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {JsonLd} from "@/components/json-ld";
import {getInsight,insights} from "@/lib/insights";
import {site} from "@/lib/site";

export function generateStaticParams(){
  return insights.map(item=>({slug:item.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const article=getInsight(slug);
  if(!article)return {};
  return {title:article.title,description:article.description,alternates:{canonical:"/insights/" + article.slug}};
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const article=getInsight(slug);
  if(!article)notFound();
  const url=site.url + "/insights/" + article.slug;
  const schema={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.description,author:{"@type":"Person",name:"Antoine Woody",url:site.url},publisher:{"@type":"Person",name:"Antoine Woody"},mainEntityOfPage:url};
  return <>
    <JsonLd data={schema}/>
    <article className="shell articlePage">
      <p className="eyebrow">{article.eyebrow}</p>
      <h1>{article.title}</h1>
      <p className="articleDek">{article.description}</p>
      <div className="articleBody">
        {article.body.map((paragraph,i)=><p key={i}>{paragraph}</p>)}
        {article.sources?.length ? <div className="sources">
          <h2>Sources</h2>
          {article.sources.map(source=><a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a>)}
        </div> : null}
      </div>
      <Link className="textLink" href="/insights">← All insights</Link>
    </article>
  </>;
}