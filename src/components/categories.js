export async function renderCategoriesInto(container) {
  if (!container) return;
  try {
    const res = await fetch('/src/Pages/categories.html', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    container.innerHTML = html;
  } catch (e) {
    console.error('Failed to load /src/Pages/categories.html', e);
    container.innerHTML = '<p>Failed to load categories content.</p>';
  }
}

export function createCategoriesSection() {
  const section = document.createElement('section');
  section.id = 'categories';
  section.setAttribute('aria-label', 'Categories');

  const heading = document.createElement('h1');
  heading.textContent = 'Categories';

  const list = document.createElement('ul');
  const categories = ['Technology', 'Design', 'Travel', 'Lifestyle', 'Photography'];
  categories.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
  });

  section.appendChild(heading);
  section.appendChild(list);
  return section;
}

