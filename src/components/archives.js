export async function renderArchivesInto(container) {
  if (!container) return;
  try {
    const res = await fetch('/src/Pages/archives.html', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    container.innerHTML = html;
  } catch (e) {
    console.error('Failed to load /src/Pages/archives.html', e);
    container.innerHTML = '<p>Failed to load archives content.</p>';
  }
}

export function createArchivesSection() {
  const section = document.createElement('section');
  section.id = 'archives';
  section.setAttribute('aria-label', 'Archives');

  const heading = document.createElement('h1');
  heading.textContent = 'Archives';

  const list = document.createElement('ul');
  const archives = [
    { month: 'January', year: 2025 },
    { month: 'December', year: 2024 },
    { month: 'November', year: 2024 }
  ];
  archives.forEach(({ month, year }) => {
    const li = document.createElement('li');
    li.textContent = `${month} ${year}`;
    list.appendChild(li);
  });

  section.appendChild(heading);
  section.appendChild(list);
  return section;
}

