// Designer Portfolio – Interactions
(function() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const body = document.body;
  // Removed theme/type select variables as the design is fixed

  // Mobile nav toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('open');
    });
  }

  // Close mobile nav on link click
  nav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (header.classList.contains('open')) {
        header.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Intersection reveal (Smooth fade/slide-up animation)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Portfolio filter logic
  const tabs = document.querySelectorAll('.tab');
  const items = document.querySelectorAll('.portfolio-item');

  // Initialize aria-selected for tabs
  tabs.forEach(t => {
    const isActive = t.classList.contains('active');
    t.setAttribute('aria-selected', String(isActive));
  });

  function applyFilter(filter) {
    items.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || filter === category) {
        item.style.display = 'block';
        item.classList.add('reveal-up');
        observer.observe(item);
      } else {
        item.style.display = 'none';
        item.classList.remove('in', 'reveal-up');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      applyFilter(filter);
    });
  });

  // Apply initial filter for the active tab on load (defaults to Branding)
  const activeTab = document.querySelector('.tab.active') || tabs[0];
  if (activeTab) {
    const initialFilter = activeTab.getAttribute('data-filter');
    applyFilter(initialFilter);
  }

  // Lightbox logic
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lightbox-image');
  const lbTitle = document.getElementById('lightbox-title');
  const lbDesc = document.getElementById('lightbox-desc');
  const lbClose = document.querySelector('.lightbox-close');
  let lastFocus = null;

  function openLightbox({ src, title, desc }) {
    if (!lightbox) return;
    lastFocus = document.activeElement;
    lbImage.src = src;
    lbTitle.textContent = title || '';
    lbDesc.textContent = desc || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lbClose?.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImage.removeAttribute('src');
    if (lastFocus) lastFocus.focus();
  }

  items.forEach(card => {
    const link = card.querySelector('.card-link');
    link?.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox({
        src: card.getAttribute('data-image'),
        title: card.getAttribute('data-title'),
        desc: card.getAttribute('data-description'),
      });
    });
  });

  lbClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('open')) {
      closeLightbox();
    }
  });

})();