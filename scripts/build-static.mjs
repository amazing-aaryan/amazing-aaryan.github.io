import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');
const site = path.join(root, 'site');
const publicDir = path.join(root, 'public');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

function copyTree(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, dest, { recursive: true, force: true });
}

copyTree(publicDir, out);
copyTree(site, out);

const icons = {
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.3"/><path d="M5.7 19c1.5-3.4 3.7-5.1 6.3-5.1s4.8 1.7 6.3 5.1"/></svg>',
  brief: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="7" width="16" height="11" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M4 11.5h16"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="6" height="6" rx="1.3"/><rect x="14" y="4" width="6" height="6" rx="1.3"/><rect x="4" y="14" width="6" height="6" rx="1.3"/><rect x="14" y="14" width="6" height="6" rx="1.3"/></svg>',
  paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3.5h7l4 4V20H7z"/><path d="M14 3.5V8h4M10 12h5M10 15h5"/></svg>',
};

function nav(active) {
  const items = [
    ['About', '/', 'user'],
    ['Experiences', '/experiences/', 'brief'],
    ['Projects', '/projects/', 'grid'],
    ['Papers', '/papers/', 'paper'],
  ];
  return `<div class="site-nav-wrap"><nav class="site-nav" aria-label="Primary">${items.map(([label, href, icon]) => `<a class="nav-link" href="${href}"${label === active ? ' aria-current="page"' : ''}><span class="nav-icon">${icons[icon]}</span>${label}</a>`).join('')}</nav></div>`;
}

const footer = '<footer class="site-footer"><div>© 2026 Aaryan Srivastava</div><div class="footer-links"><a href="https://www.linkedin.com/in/aaryan21/" target="_blank" rel="noopener">LinkedIn</a><a href="https://github.com/amazing-aaryan" target="_blank" rel="noopener">GitHub</a><a href="mailto:aaryansr@umich.edu">Email</a><span class="footer-phrase">Build for a better tomorrow.</span></div></footer>';

function detailPage({ active, backHref, backLabel, eyebrow, title, meta, summary, body, link }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} · Aaryan Srivastava</title><meta name="description" content="${summary.replaceAll('"', '&quot;')}"><meta name="theme-color" content="#fbfaf7"><link rel="stylesheet" href="/assets/styles.css"></head><body>${nav(active)}<main class="page"><article class="detail-page"><a class="detail-back" href="${backHref}">← ${backLabel}</a><div class="eyebrow">${eyebrow}</div><h1 class="display">${title}</h1><div class="detail-meta">${meta}</div><section class="detail-block"><h2>Overview</h2><p>${summary}</p>${body ? `<p>${body}</p>` : ''}${link ? `<div style="margin-top:22px"><a class="link-pill" href="${link.href}"${link.external ? ' target="_blank" rel="noopener"' : ''}>${link.label} →</a></div>` : ''}</section></article></main>${footer}<script src="/assets/site.js" defer></script></body></html>`;
}

function writeRoute(route, html) {
  const dir = path.join(out, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

const work = [
  ['irene-ai-logistics','IRENE AI Logistics Platform','Founder · Jan 2026 – Present','An accountable AI logistics platform for nonprofit volunteer networks.','IRENE uses multimodal OCR and computer vision to improve sorting while preserving human review, confidence-aware workflows, and traceability.'],
  ['noscroll-app','NoScroll','Founder · May 2026 – Present','A mobile product built to redirect doom-scrolling moments into reading.','The product opens a low-friction reading surface at the moment a user would otherwise fall into passive scrolling, with native quote sharing for opt-in social discovery.'],
  ['scheduling-automation-system','Scheduling Automation System','Automation Builder · Dec 2025 – Feb 2026','Browser-level automation for a fragile class-scheduling workflow.','The system coordinates teacher availability and operational constraints through the same browser surface used by human coordinators and makes failures explicit rather than silent.'],
  ['wwi-service-dataset','WWI Soldier Service Dataset','Research Assistant · Jan 2026 – Present','A structured, queryable dataset of American World War I service records.','OCR and document-extraction workflows preserve uncertainty in period handwriting, military abbreviations, damaged pages, and inconsistent archival formatting.'],
  ['federal-litigation-bias-analysis','Federal Litigation Bias Analysis','Independent Researcher · Sep 2025 – Present','AI-assisted legal analytics for federal civil litigation outcomes.','The work structures public case records for statistical querying and source-grounded analysis while keeping exploratory findings separate from legal claims.'],
  ['visionary-summit','Visionary Summit','Founder · Nov 2023 – May 2025','A student-led Tallinn summit series connecting students with diplomats, founders, lawyers, NGOs, and venture leaders.','Programming brought together technology, law, diplomacy, entrepreneurship, and civic institutions while treating students as participants in public life rather than a passive audience.'],
];
for (const [slug,title,meta,summary,body] of work) {
  writeRoute(`work/${slug}`, detailPage({active:'Projects',backHref:'/projects/',backLabel:'Back to Projects',eyebrow:'Project',title,meta,summary,body}));
}

const research = [
  ['gotv-vs-persuasion-abm','GOTV versus Persuasion in U.S. Battleground States','2026 · Working paper · Complex Systems 270','An agent-based campaign model asking when turnout mobilization beats persuasion, and when network structure changes that answer.'],
  ['sacrifice-for-the-state','Sacrifice for the State: Identification or Disillusionment?','Ongoing · Active research · University of Michigan','A historical political-behavior project asking whether wartime sacrifice strengthens identification with the state or produces later disillusionment.'],
  ['federal-litigation-success-disparities','Assessing Federal Litigation Success Disparities','2025 · Working paper · Independent Research','An analysis of federal civil litigation outcomes across plaintiff type, court, category, time, and disposition signals.'],
  ['autonomous-agent-sentencing-disparities','Autonomous Agent-Driven Analysis of Federal Sentencing Disparities','2025 · Preprint · SSRN','A framework using autonomous analysis agents to query and cross-tabulate public sentencing data for human review.',{href:'https://ssrn.com/abstract=6545939',label:'Open on SSRN',external:true}],
  ['ai-regulation-eu-us','Why Has International Cooperation on AI Regulation Been Difficult Between the EU and the United States?','2025 · Preprint · SSRN','A comparison of the institutional, legal, and political-economy differences that complicate transatlantic AI governance cooperation.',{href:'https://ssrn.com/abstract=6662638',label:'Open on SSRN',external:true}],
  ['nehru-foreign-policy-cold-war',"How Successful Was India's Foreign Policy Under Jawaharlal Nehru During the Cold War?",'2025 · Preprint · SSRN','An evaluation of non-alignment, strategic autonomy, and the tensions between diplomatic principle and security outcomes in the early Cold War.',{href:'https://ssrn.com/abstract=6663358',label:'Open on SSRN',external:true}],
  ['llm-microtargeted-political-messaging','How Effectively Do LLM-Driven, Micro-Tailored Political Messages Influence Public Opinion?','2025 · Draft · Working draft','A study of whether low-cost LLM-tailored political messaging moves attitudes more effectively than generic campaign communication.'],
  ['loac-low-reciprocity','What Explains Variation in State Compliance with the Laws of Armed Conflict Under Conditions of Low Reciprocity?','2025 · Preprint · SSRN','A study of why states sometimes comply with humanitarian law even when opponents cannot reciprocate or meaningfully punish violations.',{href:'https://ssrn.com/abstract=6546018',label:'Open on SSRN',external:true}],
];
for (const [slug,title,meta,summary,link] of research) {
  writeRoute(`research/${slug}`, detailPage({active:'Papers',backHref:'/papers/',backLabel:'Back to Papers',eyebrow:'Research',title,meta,summary,link}));
}

// Preserve the historical PDF folder as a human-readable route as well.
writeRoute('research/federal-sentencing-disparities', detailPage({active:'Papers',backHref:'/papers/',backLabel:'Back to Papers',eyebrow:'Research',title:'Autonomous Agent-Driven Analysis of Federal Sentencing Disparities',meta:'2025 · Preprint · SSRN',summary:'A framework using autonomous analysis agents to query and cross-tabulate public sentencing data for human review.',link:{href:'/research/federal-sentencing-disparities/ssrn-6545939.pdf',label:'Open PDF',external:true}}));

fs.writeFileSync(path.join(out, '.nojekyll'), '\n');
console.log(`Built static portfolio to ${out}`);
