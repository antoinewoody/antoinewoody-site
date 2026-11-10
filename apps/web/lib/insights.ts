export type Insight={
  slug:string;
  title:string;
  eyebrow:string;
  description:string;
  body:string[];
  sources?:{label:string;href:string}[];
};

export const insights:Insight[]=[
  {
    slug:"healing-what-it-means-to-feel-whole",
    title:"Healing: What It Means to Feel Whole",
    eyebrow:"HEALING",
    description:"Healing is not the same as fixing yourself. It is often the work of becoming more integrated, honest, and able to respond.",
    body:[
      "Healing language can quietly turn life into a permanent repair project. Every emotion becomes a symptom. Every difficult season becomes evidence that something is wrong.",
      "A more useful frame is integration. Can you feel what is present without handing it every decision? Can you understand a pattern without making it your identity? Can you build a life that reflects what you know now?",
      "The goal is not to become untouched by difficulty. It is to become more available to your own life—clearer, more connected, and more capable of choosing what comes next."
    ]
  },
  {
    slug:"sound-healing-research",
    title:"Sound Healing: What the Research Actually Says",
    eyebrow:"RESEARCH",
    description:"A grounded look at what research supports, what remains preliminary, and how to talk about sound without overstating the evidence.",
    body:[
      "The phrase “sound healing” covers several different practices, and the evidence is not equally strong across all of them. Research on music therapy and structured music interventions is broader than research on singing bowls, gongs, didgeridoo, or other specific instruments.",
      "A meta-analysis of music-therapy studies reported effects on psychological and physiological stress-related outcomes. A separate systematic review and meta-analysis of voluntary slow breathing found increases in vagally mediated heart-rate variability during and after practice.",
      "Instrument-specific studies are smaller. A widely cited observational study of 62 adults reported lower tension and anxiety after a singing-bowl meditation, but it did not include a control group, so it cannot establish that the bowls caused the changes.",
      "The practical conclusion is simple: sound can be used as a structured environment for relaxation, attention, breath, and reflection. It should not be marketed as a replacement for medical or mental-health treatment."
    ],
    sources:[
      {label:"Music therapy for stress reduction — systematic review and meta-analysis",href:"https://pubmed.ncbi.nlm.nih.gov/33176590/"},
      {label:"Slow breathing and heart-rate variability — systematic review and meta-analysis",href:"https://pubmed.ncbi.nlm.nih.gov/35623448/"},
      {label:"Singing bowl sound meditation — observational study",href:"https://pubmed.ncbi.nlm.nih.gov/27694559/"}
    ]
  },
  {
    slug:"sound-healing-for-executives",
    title:"Sound Healing for Executives: A Practical Reset",
    eyebrow:"EXECUTIVE WELLNESS",
    description:"Why high-pressure leaders may benefit from experiences that reduce input before asking for more output.",
    body:[
      "High performers are often given more information when what they need is less input. Another framework, another dashboard, or another conversation can become additional cognitive load.",
      "A well-designed sound session changes the environment instead of demanding another answer. The value is not mystical. It is the interruption: fewer decisions, less verbal processing, slower breathing, and enough quiet to notice what sustained pressure has been covering.",
      "For executives, the most useful outcome is often not relaxation by itself. It is returning to the next decision with more bandwidth, perspective, and presence."
    ]
  },
  {
    slug:"corporate-healing-retreats",
    title:"Corporate Healing Retreats That Transfer Back to Work",
    eyebrow:"CORPORATE WELLNESS",
    description:"A retreat creates value when the experience changes how people return to pressure, communication, and responsibility.",
    body:[
      "A beautiful retreat can still fail if the experience disappears the moment everyone opens their laptop again.",
      "The strongest programs connect recovery with real work: how people communicate under pressure, how leaders notice overload, how teams create space before escalation, and how individuals recover without waiting for burnout.",
      "Sound, breath, reflection, movement, and confidential conversation can create a powerful reset. The design question is what participants can still use on an ordinary Tuesday."
    ]
  }
];

export function getInsight(slug:string){
  return insights.find(item=>item.slug===slug);
}