const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const backToTop = document.getElementById('backToTop');
const yearEl = document.getElementById('currentYear');
const revealEls = document.querySelectorAll('.reveal');
const sections = [...document.querySelectorAll('main section[id]')];

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('is-open', !isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    }
  });
}

if (backToTop) {
  const updateBackToTop = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 500);
  };

  updateBackToTop();
  window.addEventListener('scroll', updateBackToTop, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

const setActiveNav = () => {
  const scrollPosition = window.scrollY + 140;

  let current = sections[0]?.id || '';
  sections.forEach(section => {
    if (section.offsetTop <= scrollPosition) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('is-active', href === `#${current}`);
  });
};

setActiveNav();
window.addEventListener('scroll', setActiveNav, { passive: true });
window.addEventListener('resize', setActiveNav);
