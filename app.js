const toggle = document.getElementById('theme-toggle');
const preferredTheme = localStorage.getItem('arham-portfolio-theme');

if (preferredTheme === 'dark') document.body.classList.add('dark');

const updateThemeIcon = () => {
  const isDark = document.body.classList.contains('dark');
  toggle.textContent = isDark ? '☀' : '☾';
  toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
};

updateThemeIcon();

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('arham-portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeIcon();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll('.links a[href^="#"]')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.removeAttribute('aria-current'));
    const activeLink = navLinks.find((link) => link.getAttribute('href') === '#' + entry.target.id);
    if (activeLink) activeLink.setAttribute('aria-current', 'page');
  });
}, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));
const lightbox = document.getElementById('image-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('.project-shot').forEach((shot) => {
  shot.addEventListener('click', () => {
    const image = shot.querySelector('img');
    lightboxImage.src = shot.dataset.lightbox;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
  });
});

closeLightbox?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
