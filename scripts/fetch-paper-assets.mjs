import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const papers = [
  {
    target: 'public/research/nuclear-proliferation/nuclear-proliferation.pdf',
    url: 'https://cdn.prod.website-files.com/6657747affa93b41147cd15b/6a9223c28e9103b92ebd163d_FINALW26-compressed.pdf',
  },
  {
    target: 'public/research/ai-regulation-eu-us/ssrn-6662638.pdf',
    url: 'https://papers.ssrn.com/sol3/Delivery.cfm/6662638.pdf?abstractid=6662638&mirid=1',
  },
  {
    target: 'public/research/nehru-foreign-policy/ssrn-6663358.pdf',
    url: 'https://papers.ssrn.com/sol3/Delivery.cfm/6663358.pdf?abstractid=6663358&mirid=1',
  },
  {
    target: 'public/research/llm-political-messaging/ssrn-6662538.pdf',
    url: 'https://papers.ssrn.com/sol3/Delivery.cfm/6662538.pdf?abstractid=6662538&mirid=1&type=2',
  },
  {
    target: 'public/research/loac-low-reciprocity/ssrn-6546018.pdf',
    url: 'https://papers.ssrn.com/sol3/Delivery.cfm/6546018.pdf?abstractid=6546018&mirid=1',
  },
];

const headers = {
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36',
  accept: 'application/pdf,application/octet-stream;q=0.9,*/*;q=0.8',
  referer: 'https://papers.ssrn.com/',
};

for (const paper of papers) {
  const destination = path.join(root, paper.target);
  if (fs.existsSync(destination) && fs.statSync(destination).size > 1024) {
    console.log(`Using existing ${paper.target}`);
    continue;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  console.log(`Fetching ${paper.target}`);
  const response = await fetch(paper.url, { headers, redirect: 'follow' });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${paper.url}: ${response.status} ${response.statusText}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1024 || bytes.subarray(0, 5).toString() !== '%PDF-') {
    throw new Error(`Downloaded asset is not a valid PDF: ${paper.url}`);
  }
  fs.writeFileSync(destination, bytes);
}
