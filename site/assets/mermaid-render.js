import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'strict',
  theme: 'base',
  flowchart: {
    curve: 'linear',
    htmlLabels: true,
    useMaxWidth: false,
    nodeSpacing: 32,
    rankSpacing: 42,
  },
  themeVariables: {
    fontFamily: 'IBM Plex Sans, Inter, system-ui, sans-serif',
    fontSize: '14px',
    primaryColor: '#ffffff',
    primaryTextColor: '#17243a',
    primaryBorderColor: '#718096',
    lineColor: '#526176',
    secondaryColor: '#f4f8ff',
    tertiaryColor: '#eef5ff',
    clusterBkg: '#fbfaf7',
    clusterBorder: '#cbd5e1',
    edgeLabelBackground: '#fbfaf7',
  },
});

const diagrams = [...document.querySelectorAll('[data-mermaid-source]')];

for (const [index, container] of diagrams.entries()) {
  try {
    const sourceUrl = container.dataset.mermaidSource;
    const response = await fetch(sourceUrl, { cache: 'force-cache' });
    if (!response.ok) throw new Error(`Could not load Mermaid source: ${response.status}`);

    const source = await response.text();
    const id = `mermaid-${index}-${Math.random().toString(36).slice(2)}`;
    const { svg, bindFunctions } = await mermaid.render(id, source);

    const rendered = document.createElement('div');
    rendered.className = 'mermaid-svg';
    rendered.innerHTML = svg;
    container.prepend(rendered);
    bindFunctions?.(rendered);

    const fallback = container.querySelector('.mermaid-fallback');
    if (fallback) fallback.hidden = true;
    container.classList.add('mermaid-ready');
  } catch (error) {
    container.classList.add('mermaid-error');
    console.warn('Mermaid diagram fallback retained.', error);
  }
}
