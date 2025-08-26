export async function renderHomeInto(container) {
    if (!container) return;
    try {
      const res = await fetch('/src/Pages/home.html', { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      container.innerHTML = html;
    } catch (e) {
      console.error('Failed to load /src/Pages/home.html', e);
      container.innerHTML = '<p>Failed to load content.</p>';
    }
  }
  
  
  