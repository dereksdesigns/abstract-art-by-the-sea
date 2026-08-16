// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Tideline: fills as the visitor scrolls down the page
const tideline = document.querySelector('.tideline');

function updateTideline() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  tideline.style.width = pct + '%';
}

window.addEventListener('scroll', updateTideline, { passive: true });
updateTideline();

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxArt = document.getElementById('lightboxArt');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');

document.querySelectorAll('.piece').forEach(piece => {
  piece.addEventListener('click', () => {
    const img = piece.querySelector('.piece-art');
    lightboxArt.src = img.src;
    lightboxArt.alt = img.alt;
    lightboxTitle.textContent = piece.dataset.title;
    lightboxDesc.textContent = piece.dataset.desc;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

lightbox.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});
