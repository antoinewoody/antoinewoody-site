import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
import {insights} from "@/lib/insights";

export default function sitemap():MetadataRoute.Sitemap{
  const paths=["","/about","/listen","/advisory","/sound","/insights","/contact","/book","/privacy",...insights.map(item=>"/insights/" + item.slug)];
  return paths.map(path=>({
    url:site.url + path,
    lastModified:new Date(),
    changeFrequency:path.startsWith("/insights/")?"monthly":"weekly",
    priority:path===""?1:path==="/contact"||path==="/book"?0.9:0.75
  }));
}