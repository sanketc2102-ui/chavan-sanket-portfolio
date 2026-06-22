/* ─── HAMBURGER ──────────────────────────── */
const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');
function toggleMenu() {
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

/* ─── SCROLL REVEAL ──────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── SKILL BARS (animated on scroll) ───── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stack-card').forEach(el => skillObserver.observe(el));

/* ─── ACTIVE NAV ─────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const scrollHandler = () => {
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 120;
    if (window.scrollY >= top) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', scrollHandler, { passive: true });

/* ─── SKILL BAR COLORS FOR BACKEND ──────── */
// Apply green gradient to backend card skill bars
const backendCard = document.querySelector('.stack-card:nth-child(2)');
if (backendCard) {
  backendCard.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.background = 'linear-gradient(90deg, #00ff88, rgba(0,255,136,0.4))';
  });
}
