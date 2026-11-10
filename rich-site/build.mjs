import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const SOURCE="https://antoine-woody-preview.vercel.app";
const OUT="dist";

const pages=[
  ["","index.html"],
  ["about/","about/index.html"],
  ["advisory/","advisory/index.html"],
  ["contact/","contact/index.html"],
  ["privacy/","privacy/index.html"],
  ["sound/","sound/index.html"],
  ["insights/","insights/index.html"],
  ["insights/corporate-healing-retreats/","insights/corporate-healing-retreats/index.html"],
  ["insights/healing-what-it-means-to-feel-whole/","insights/healing-what-it-means-to-feel-whole/index.html"],
  ["insights/sound-healing-for-executives/","insights/sound-healing-for-executives/index.html"],
  ["insights/sound-healing-research/","insights/sound-healing-research/index.html"]
];

const textFiles=["styles.css","script.js","contact.css","robots.txt","sitemap.xml","llms.txt","feed.xml"];
const binaryFiles=["assets/antoine-hd.png","assets/favicon.svg","assets/logo.svg","assets/sound-therapy-hero-poster.jpg"];

const replacements={
  "index.html":[
    ["A private place to think clearly, hear yourself honestly and make decisions that reflect who you are becoming","A private place to think clearly, hear yourself honestly and make aligned decisions"],
    ["Founders, executives, entrepreneurs, physicians, creatives, family-business leaders and high performers often have many people depending on them — and very few places where they can think out loud without performing, protecting or managing everyone else","People carrying meaningful responsibility often have many people depending on them — and very few places to think out loud without performing, protecting or managing everyone else"],
    ["You carry meaningful responsibility and want a confidential place to put some of it down","You carry meaningful responsibility and want somewhere confidential to put some of it down"],
    ["You value honest reflection but also want movement, not conversation for its own sake","You value honest reflection and movement — not conversation for its own sake"],
    ["You want support shaped around your actual life rather than a generic program","You want support shaped around your life, not a generic program"],
    ["You are successful in important areas of life but know something internally needs more attention","You are successful in important areas but know something inside needs more attention"],
    ["You want support that strengthens your independence instead of creating dependence","You want support that strengthens independence, not dependence"],
    ["Premium advisory is valuable when better decisions, cleaner communication and stronger internal capacity affect more than one part of your life. The work is designed to reduce the hidden cost of indecision, emotional reactivity, overextension and carrying everything alone","Better decisions, cleaner communication and stronger internal capacity affect every part of life. The work reduces the cost of indecision, reactivity, overextension and carrying everything alone"],
    ["The goal is not dependence. It is greater capacity — until the method becomes something you can carry within yourself","The goal is greater capacity — until the method becomes yours"],
    ["You are investing in a relationship that remembers the pattern, sees the connections and does not require you to start from zero every time something important changes","A relationship that remembers the pattern, sees the connections and does not make you start from zero when life changes"],
    ["For a defined period of change, transition or focused personal work where clarity, accountability and integration can create meaningful movement","For a season of change or focused personal work where clarity, accountability and integration can create movement"],
    ["The premium is not for prestige. It is for continuity, depth and a trusted relationship that can reduce wasted time, repeated mistakes and unnecessary emotional friction around decisions that matter","The premium is for continuity, depth and a trusted relationship that reduces wasted time, repeated mistakes and emotional friction around decisions that matter"],
    ["For more than 15 years, I’ve been exploring one question in many different forms: what actually helps a human being feel whole, fulfilled and alive","For more than 15 years, I’ve been exploring what helps people feel whole, fulfilled and alive"],
    ["That search has taken me through personal transformation, mediation, conflict resolution, sound, breath, wellbeing, family, business and years of travel across different cultures. The work I do now is shaped as much by lived experience as it is by training","That search has taken me through transformation, mediation, conflict resolution, sound, breath, wellbeing, family, business and cultures around the world. My work is shaped by both training and lived experience"],
    ["Sound, breath and vibration can create another doorway into relaxation, presence and body awareness. I use sound as a complementary tool — not as a replacement for medical or mental-health care","Sound, breath and vibration can support relaxation, presence and body awareness. I use them as complementary tools — not replacements for medical or mental-health care"],
    ["A discreet, no-pressure conversation to understand what you are carrying, what you want to change and whether this level of support is the right fit","A discreet conversation to understand what you are carrying, what you want to change and whether this support fits"]
  ],
  "about/index.html":[
    ["I grew up in Pittsburgh and moved to Atlanta when I was young. In my early twenties, I made the decision to leave the familiar and begin exploring the world — not simply to travel, but to discover who I was outside of the environments and expectations that had defined me","I grew up in Pittsburgh and moved to Atlanta young. In my early twenties, I left the familiar to discover who I was beyond the environments and expectations that had defined me"],
    ["There was a time when I struggled with depression, anxiety, low self-worth and people-pleasing. I knew what it felt like to make progress and still feel lonely inside it. I spent too much energy measuring myself through other people’s opinions and trying to live in ways I thought would make me acceptable","I know what it feels like to make progress and still feel lonely inside it. I struggled with depression, anxiety, low self-worth and people-pleasing, and spent too much energy measuring myself through other people’s opinions"],
    ["Travel showed me that family, success, spirituality, health, happiness, community and even strength can look very different depending on where you stand. My journey has taken me through Africa, Europe, Asia, the Americas and the Middle East — including Qatar, Saudi Arabia and the UAE. The more I traveled, the less interested I became in one-size-fits-all answers","Travel showed me that family, success, health, spirituality and strength look different depending on where you stand. My journey across Africa, Europe, Asia, the Americas and the Middle East — including Qatar, Saudi Arabia and the UAE — made me less interested in one-size-fits-all answers"],
    ["I became interested in healing because I needed it too. I wanted to understand what makes someone happy, fulfilled, connected and able to live a life that feels like their own — not simply a life that looks good from the outside","I became interested in healing because I needed it too. I wanted to understand what helps someone feel fulfilled, connected and able to live a life that feels like their own"],
    ["Human beings need other human beings. Not to rescue us or make our decisions for us, but to reflect us, challenge us, support us and sometimes remind us of what we cannot see clearly while we are inside the experience","We need other human beings — not to rescue us, but to reflect, challenge, support and sometimes show us what we cannot see clearly from inside the experience"]
  ],
  "advisory/index.html":[
    ["The highest-value problems are rarely solved by more information. They are solved by seeing the pattern sooner, asking a better question, making a cleaner decision and following through without losing months to avoidance, overthinking or emotional friction","The highest-value problems rarely need more information. They need the pattern seen sooner, a better question, a cleaner decision and follow-through without months lost to avoidance or overthinking"],
    ["The work is tailored to the person rather than forced into a script. The distinction is primarily the depth, continuity and level of context that best fits your current responsibilities","The work is tailored to the person, not forced into a script. The depth and continuity simply match your current responsibilities"],
    ["For a defined period of change, transition or focused personal work where better decisions and stronger internal capacity can create meaningful movement across several areas of life","For a defined season of change or focused personal work where better decisions and stronger internal capacity can create movement"],
    ["For founders, leaders and people carrying complex responsibility who want a consistent private sounding board that already understands the context behind the next decision","For founders and leaders carrying complex responsibility who want a private sounding board that already understands the context"],
    ["The first conversation is about understanding what you are carrying and whether this level of support is worth the investment for you","The first conversation is about what you are carrying and whether this level of support feels worth the investment"],
    ["Private advisory is not psychotherapy, psychiatric care, medical diagnosis or treatment, legal advice, financial advice or emergency support. When a situation requires licensed or specialized care, the appropriate next step is referral rather than pretending one relationship should do everything","Private advisory is not psychotherapy, psychiatric or medical care, legal or financial advice, or emergency support. When licensed or specialized care is needed, referral is the right next step"]
  ],
  "sound/index.html":[
    ["The evidence base includes singing bowls, music and other sound-based interventions. Didgeridoo-specific clinical research is still limited, so the research is used to inform the work without pretending every instrument produces the same result","The evidence spans singing bowls, music and other sound-based interventions. Didgeridoo-specific clinical research remains limited, so I use the research without pretending every instrument produces the same result"],
    ["People often come to sound work because they want to feel less braced and more present in their own body","People often come to sound work to feel less braced and more present in their body"],
    ["The Insights library separates what sound-healing research supports from what is still theory, tradition or personal experience","The Insights library separates what research supports from theory, tradition and personal experience"]
  ],
  "contact/index.html":[
    ["A few honest details are enough for me to understand what brings you here and what kind of conversation may be useful","A few honest details are enough to understand what brings you here and what kind of conversation may help"],
    ["This form is not monitored for emergencies or crisis support. Advisory and wellness services are not a substitute for medical or mental-health care.","This form is not for emergencies or crisis support. Advisory and wellness services do not replace medical or mental-health care."]
  ]
};

function applyReplacements(path,text){
  const pairs=replacements[path] || [];
  for(const [from,to] of pairs){
    if(!text.includes(from)){
      console.warn("Copy target not found:",path,from.slice(0,80));
      continue;
    }
    text=text.replace(from,to);
  }
  return text;
}

async function fetchChecked(url){
  const response=await fetch(url);
  if(!response.ok) throw new Error(`${response.status} ${url}`);
  return response;
}

async function saveText(sourcePath,outPath,transform){
  const response=await fetchChecked(SOURCE + "/" + sourcePath);
  let text=await response.text();
  if(transform) text=transform(text);
  await mkdir(dirname(join(OUT,outPath)),{recursive:true});
  await writeFile(join(OUT,outPath),text);
}

for(const [sourcePath,outPath] of pages){
  await saveText(sourcePath,outPath,(text)=>applyReplacements(outPath,text));
}

for(const file of textFiles){
  await saveText(file,file,(text)=>{
    if(file!=="styles.css") return text;
    return text + `

/* Surgical hero cleanup: preserve the original portrait and rich layout,
   while visually suppressing event lettering in the background. */
.portrait{isolation:isolate}
.portrait img{object-position:center 16%;filter:saturate(.98) contrast(1.02) brightness(.94)}
.portrait:after{
  content:"";
  position:absolute;
  inset:0;
  z-index:2;
  pointer-events:none;
  border-radius:22px;
  background:
    linear-gradient(90deg,
      rgba(8,17,13,.82) 0%,
      rgba(8,17,13,.46) 18%,
      rgba(8,17,13,.08) 37%,
      rgba(8,17,13,.02) 52%,
      rgba(8,17,13,.12) 66%,
      rgba(8,17,13,.52) 84%,
      rgba(8,17,13,.84) 100%);
}
`;
  });
}

for(const file of binaryFiles){
  const response=await fetchChecked(SOURCE + "/" + file);
  const data=new Uint8Array(await response.arrayBuffer());
  await mkdir(dirname(join(OUT,file)),{recursive:true});
  await writeFile(join(OUT,file),data);
}

console.log("Built rich site from approved source with copy-only edits.");
