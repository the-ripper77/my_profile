export async function renderFriendsInto(container) {
  if (!container) return;
  try {
    const res = await fetch('/src/Pages/friends.html', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    container.innerHTML = html;
  } catch (e) {
    console.error('Failed to load /src/Pages/friends.html', e);
    container.innerHTML = '<p>Failed to load friends content.</p>';
  }
}

export function createFriendsSection() {
  const section = document.createElement('section');
  section.id = 'friends';
  section.setAttribute('aria-label', 'Friends');

  const heading = document.createElement('h1');
  heading.textContent = 'Friends';

  const list = document.createElement('ul');
  const friends = [
    { name: 'Alice', url: 'https://example.com/alice' },
    { name: 'Bob', url: 'https://example.com/bob' },
    { name: 'Charlie', url: 'https://example.com/charlie' }
  ];
  friends.forEach(({ name, url }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noreferrer noopener';
    a.textContent = name;
    li.appendChild(a);
    list.appendChild(li);
  });

  section.appendChild(heading);
  section.appendChild(list);
  return section;
}

