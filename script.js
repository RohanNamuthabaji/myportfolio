/* ============================================================
   NAMUTHABAJI ROHAN — Portfolio JavaScript
   ✏️ Edit: modal content data at the top of this file
   ============================================================ */

'use strict';

/* ─── PROJECT MODAL DATA ────────────────────────────────────────
   ✏️ Edit: update project details, links here
   ────────────────────────────────────────────────────────────── */
const projectData = {
  parking: {
    title: 'Smart Parking System',
    icon: 'fa-parking',
    overview: `A full-stack web application that provides real-time slot tracking for parking facilities.
      Users can view available slots, book in advance, and get live updates — eliminating the need for
      manual management and reducing operational overhead by 40%.`,
    highlights: [
      '⚡ Real-time slot availability using polling-based backend',
      '📊 Admin dashboard with occupancy analytics',
      '🔒 Secure user authentication and session management',
      '⬇️ 40% reduction in manual management effort',
    ],
    tech: ['HTML', 'CSS', 'Python (Flask)', 'MySQL', 'REST API', 'Jinja2'],
    liveUrl: null,
    githubUrl: null,  // ✏️ Edit: add your GitHub URL
  },
  nutri: {
    title: 'NutriAI',
    icon: 'fa-apple-alt',
    overview: `An AI-powered diet planning application that calculates personalized nutrition plans
      based on BMI (Body Mass Index) and TDEE (Total Daily Energy Expenditure). The system adapts
      recommendations to individual user goals — cutting, bulking, or maintenance — with 30% improved
      response time over initial benchmarks.`,
    highlights: [
      '🧠 AI-driven meal suggestions based on caloric targets',
      '📐 Dynamic BMI and TDEE computation engine',
      '⚡ 30% improved response time through optimized API calls',
      '📱 Fully responsive, mobile-first design',
    ],
    tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'AI/ML', 'Nutrition APIs'],
    liveUrl: 'https://rohannamuthabaji.github.io/NutriAi/',
    githubUrl: 'https://github.com/RohanNamuthabaji/NutriAi',
  },
  attendance: {
    title: 'Attendance Management System',
    icon: 'fa-clipboard-check',
    overview: `An automated attendance tracking system designed to replace error-prone manual
      processes in institutional environments. The system logs attendance digitally, generates
      reports, and flags anomalies — reducing manual errors by 50% and saving significant
      administrative time.`,
    highlights: [
      '✅ Automated digital attendance logging',
      '📋 Report generation (daily, weekly, monthly)',
      '🚨 Anomaly detection and absence alerts',
      '⬇️ 50% reduction in manual errors',
    ],
    tech: ['Java', 'MySQL', 'REST API', 'JDBC', 'HTML', 'CSS'],
    liveUrl: null,
    githubUrl: null, // ✏️ Edit: add your GitHub URL
  },
  nlp: {
    title: 'Text Classification using NLP',
    icon: 'fa-language',
    overview: `A multi-model text classification pipeline implementing traditional NLP techniques.
      The project compares TF-IDF vectorization combined with Logistic Regression and Naive Bayes
      classifiers, evaluating precision, recall, and F1-score across multiple text categories.`,
    highlights: [
      '📝 TF-IDF based feature extraction pipeline',
      '⚖️ Logistic Regression vs Naive Bayes comparison',
      '📊 Detailed classification report with F1-score metrics',
      '🔬 Preprocessing: tokenization, stopword removal, stemming',
    ],
    tech: ['Python', 'scikit-learn', 'NLTK', 'TF-IDF', 'Logistic Regression', 'Naive Bayes', 'Pandas'],
    liveUrl: null,
    githubUrl: null, // ✏️ Edit: add your GitHub URL
  },
};


/* ─── PRELOADER ─────────────────────────────────────────────── */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
    // Trigger initial hero reveal animations
    document.querySelectorAll('#hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 150);
    });
  }, 1800);
});


/* ─── SCROLL PROGRESS BAR ───────────────────────────────────── */
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('scroll-progress').style.width = pct + '%';
}


/* ─── NAVBAR ────────────────────────────────────────────────── */
const navbar  = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

function updateNavbar() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
function highlightNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
        link.style.color = 'var(--white)';
      }
    }
  });
}


/* ─── SCROLL REVEAL ─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Don't unobserve — keeps state if user scrolls back
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

// Observe all reveal elements (except hero — handled by preloader)
document.querySelectorAll('.reveal:not(#hero .reveal)').forEach(el => {
  revealObserver.observe(el);
});


/* ─── SKILL BARS ────────────────────────────────────────────── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.skill-bar-item');
      bars.forEach((bar, i) => {
        const pct = bar.getAttribute('data-pct');
        setTimeout(() => {
          bar.querySelector('.skill-bar-fill').style.width = pct + '%';
        }, i * 120);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-group').forEach(group => skillObserver.observe(group));


/* ─── ANIMATED COUNTERS ─────────────────────────────────────── */
function animateCounter(el, target, duration = 1600) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.counter');
      counters.forEach(counter => {
        animateCounter(counter, parseInt(counter.getAttribute('data-target')));
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const achievementsSection = document.getElementById('achievements');
if (achievementsSection) counterObserver.observe(achievementsSection);


/* ─── TYPED TEXT EFFECT ─────────────────────────────────────── */
// ✏️ Edit: add/remove roles from this array
const typedStrings = [
  'Software Development Engineer',
  'Backend Architect',
  'DSA Enthusiast',
  'System Design Learner',
  'Full Stack Developer',
];

let typedIdx   = 0;
let charIdx    = 0;
let isDeleting = false;

function typeLoop() {
  const el       = document.getElementById('typed-text');
  if (!el) return;

  const current  = typedStrings[typedIdx];
  const displayed = isDeleting
    ? current.substring(0, charIdx - 1)
    : current.substring(0, charIdx + 1);

  el.textContent = displayed;
  charIdx = isDeleting ? charIdx - 1 : charIdx + 1;

  let delay = isDeleting ? 45 : 90;

  if (!isDeleting && charIdx > current.length) {
    delay = 2000;          // pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    typedIdx = (typedIdx + 1) % typedStrings.length;
    delay = 400;
  }

  setTimeout(typeLoop, delay);
}

// Start after preloader
setTimeout(typeLoop, 2200);


/* ─── PROJECT MODALS ────────────────────────────────────────── */
const overlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');

function openModal(key) {
  const data = projectData[key];
  if (!data) return;

  const highlightsHTML = data.highlights.map(h =>
    `<li style="font-size:0.95rem; color:var(--gray-300); margin-bottom:0.4rem; line-height:1.6;">${h}</li>`
  ).join('');

  const techHTML = data.tech.map(t =>
    `<span>${t}</span>`
  ).join('');

  let linksHTML = '';
  if (data.liveUrl || data.githubUrl) {
    linksHTML = `<div class="modal-links">`;
    if (data.liveUrl) {
      linksHTML += `<a href="${data.liveUrl}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
    }
    if (data.githubUrl) {
      linksHTML += `<a href="${data.githubUrl}" target="_blank"><i class="fab fa-github"></i> GitHub</a>`;
    }
    linksHTML += `</div>`;
  }

  modalContent.innerHTML = `
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem;">
      <div style="width:44px; height:44px; border:1px solid rgba(255,255,255,0.15);
        display:flex; align-items:center; justify-content:center; font-size:1.2rem; color:var(--gray-400);">
        <i class="fas ${data.icon}"></i>
      </div>
      <h2>${data.title}</h2>
    </div>
    <p>${data.overview}</p>
    <div class="modal-highlight">
      <ul style="padding-left:0; list-style:none;">
        ${highlightsHTML}
      </ul>
    </div>
    <p style="font-family:var(--font-mono); font-size:0.65rem; letter-spacing:0.18em;
      text-transform:uppercase; color:var(--gray-500); margin-bottom:0.6rem;">Tech Stack</p>
    <div class="modal-tech">${techHTML}</div>
    ${linksHTML}
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Expose to global scope (used inline in HTML)
window.openModal  = openModal;
window.closeModal = closeModal;


/* ─── CONTACT FORM ──────────────────────────────────────────── */
// ✏️ Edit: To make this actually send emails, integrate Formspree:
//   1. Go to https://formspree.io and create a free account
//   2. Create a form and get your form ID
//   3. Replace the fetch URL: 'https://formspree.io/f/YOUR_FORM_ID'
//   4. Remove the setTimeout simulation below

function handleFormSubmit(e) {
  e.preventDefault();

  const btn = e.target.querySelector('button[type="submit"]');
  const successDiv = document.getElementById('form-success');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // ── SIMULATION (replace with real Formspree call) ──
  setTimeout(() => {
    btn.style.display = 'none';
    successDiv.style.display = 'flex';
    e.target.reset();
  }, 1200);

  /* ── REAL FORMSPREE INTEGRATION (uncomment when ready) ──
  const formData = new FormData(e.target);
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      btn.style.display = 'none';
      successDiv.style.display = 'flex';
      e.target.reset();
    } else {
      btn.textContent = 'Error — try again';
      btn.disabled = false;
    }
  })
  .catch(() => {
    btn.textContent = 'Error — try again';
    btn.disabled = false;
  });
  */
}

window.handleFormSubmit = handleFormSubmit;


/* ─── FOOTER YEAR ───────────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ─── SMOOTH SCROLL (fallback for older browsers) ──────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ─── MASTER SCROLL LISTENER ────────────────────────────────── */
window.addEventListener('scroll', () => {
  updateScrollProgress();
  updateNavbar();
  highlightNav();
}, { passive: true });

// Init on load
updateNavbar();
updateScrollProgress();
