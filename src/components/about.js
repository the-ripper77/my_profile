export async function renderAboutInto(container) {
  if (!container) return;
  try {
    const res = await fetch('/src/Pages/about.html', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    container.innerHTML = html;
  } catch (e) {
    console.error('Failed to load /src/Pages/about.html', e);
    container.innerHTML = '<p>Failed to load about content.</p>';
  }
}

export function createAboutSection() {
  const section = document.createElement('section');
  section.id = 'about';
  section.setAttribute('aria-label', 'About');

  const heading = document.createElement('h1');
  heading.textContent = 'About Me';

  const paragraph = document.createElement('p');
  paragraph.textContent = "Hi, I'm the author of this site. I write about technology, design, and my personal projects. Thanks for stopping by!";

  section.appendChild(heading);
  section.appendChild(paragraph);
  return section;
}

