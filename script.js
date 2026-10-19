/* ============================================================
   NAMUTHABAJI ROHAN — Portfolio JavaScript
   Updated Portfolio Version
   ============================================================ */

'use strict';

/* ─── PROJECT MODAL DATA ───────────────────────────────────── */

const projectData = {

  /* ─────────────────────────────────────────────────────────
     01. AI CAREER AGENT
     ───────────────────────────────────────────────────────── */
  aiCareer: {
    title: 'AI Career Agent',
    icon: 'fa-robot',
    image: 'images/ai-career-agent.png',

    overview: `An AI-powered automation platform designed to streamline internship
      opportunity discovery and analysis. The system uses the Google Gemini API
      to analyze job descriptions, classify opportunities, and organize relevant
      information through structured workflows.`,

    highlights: [
      '🤖 Google Gemini API integration for job description analysis',
      '🔎 Automated classification of internship opportunities',
      '📊 Google Sheets API for structured opportunity tracking',
      '🛡️ Input validation and error handling for reliable workflows',
      '🧪 Debugging and quality checks across automation workflows'
    ],

    tech: [
      'JavaScript',
      'Google Gemini API',
      'Google Sheets API',
      'n8n',
      'REST APIs',
      'Git',
      'GitHub'
    ],

    liveUrl: null,
    githubUrl: 'https://github.com/RohanNamuthabaji/AI-Career-Agent'
  },


  /* ─────────────────────────────────────────────────────────
     02. ENTERPRISE BANKING MANAGEMENT SYSTEM
     ───────────────────────────────────────────────────────── */
  banking: {
    title: 'Enterprise Banking Management System',
    icon: 'fa-university',
    image: 'images/banking-system.png',

    overview: `A Java-based banking management application designed to handle
      core banking operations including account management, deposits,
      withdrawals, transactions, and fund transfers using object-oriented
      programming and the Collections Framework.`,

    highlights: [
      '🏦 Account creation and banking operations',
      '💳 Deposits, withdrawals and fund transfers',
      '☕ Object-Oriented Programming principles in Java',
      '🗂️ Collections Framework for data management',
      '🛡️ Input validation and exception handling',
      '🧪 Positive and negative test scenarios with debugging'
    ],

    tech: [
      'Java',
      'OOP',
      'Collections Framework',
      'Exception Handling',
      'Git',
      'GitHub'
    ],

    liveUrl: null,
    githubUrl: 'https://github.com/RohanNamuthabaji/BankingSystem'
  },


  /* ─────────────────────────────────────────────────────────
     03. NUTRIAI
     ───────────────────────────────────────────────────────── */
 nutri: {
    title: 'NutriAI – AI-Powered Diet Planner',
    icon: 'fa-apple-alt',
    image: 'images/nutriai.png',

    overview: `A web-based nutrition planning application that generates
      personalized diet recommendations based on user information.
      The application calculates BMI and TDEE values and provides
      recommendations according to individual goals.`,

    highlights: [
      '🥗 Personalized nutrition recommendations',
      '📐 BMI calculation',
      '🔥 TDEE calculation',
      '🎯 Recommendations based on individual goals',
      '🧪 Input validation and functional testing',
      '🐛 Debugging and issue identification'
    ],

    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'AI/ML',
      'Git',
      'GitHub'
    ],

    liveUrl: 'https://rohannamuthabaji.github.io/NutriAi/',
    githubUrl: 'https://github.com/RohanNamuthabaji/NutriAi'
  },


  /* ─────────────────────────────────────────────────────────
     04. ATTENDANCE MANAGEMENT
     ───────────────────────────────────────────────────────── */
  attendance: {
    title: 'Attendance Management System',
    icon: 'fa-clipboard-check',
    image: 'images/attendance.png',

    overview: `A software application designed to digitally manage student
      attendance records and simplify attendance tracking and record
      management.`,

    highlights: [
      '✅ Digital attendance record management',
      '📋 Student attendance tracking',
      '🗄️ MySQL database integration',
      '🔌 REST API based application structure',
      '☕ Java-based backend development'
    ],

    tech: [
      'Java',
      'MySQL',
      'REST API',
      'JDBC',
      'HTML',
      'CSS'
    ],

    liveUrl: null,
    githubUrl: null
  },


  /* ─────────────────────────────────────────────────────────
     05. TEXT CLASSIFICATION USING NLP
     ───────────────────────────────────────────────────────── */
  nlp: {
    title: 'Text Classification using NLP',
    icon: 'fa-language',
    image: 'images/text-classification.png',

    overview: `A machine learning project focused on text classification using
      traditional Natural Language Processing techniques. The project uses
      TF-IDF feature extraction and compares classification approaches
      for text-based prediction.`,

    highlights: [
      '📝 Text preprocessing and feature extraction',
      '📊 TF-IDF based text representation',
      '⚖️ Logistic Regression classification',
      '🧠 Naive Bayes classification',
      '📈 Model evaluation using classification metrics',
      '🐍 Python and scikit-learn based implementation'
    ],

    tech: [
      'Python',
      'scikit-learn',
      'NLP',
      'TF-IDF',
      'Logistic Regression',
      'Naive Bayes',
      'Pandas'
    ],

    liveUrl: null,
    githubUrl: null
  },


  /* ─────────────────────────────────────────────────────────
     06. SMART PARKING SYSTEM
     ───────────────────────────────────────────────────────── */
  parking: {
    title: 'Smart Parking System',
    icon: 'fa-parking',
    image: 'images/smart-parking.png',

    overview: `A web-based parking management application designed to help
      users view parking slot availability and manage parking information
      digitally.`,

    highlights: [
      '🅿️ Digital parking slot management',
      '📊 Parking availability information',
      '👨‍💼 Administrative management functionality',
      '🗄️ MySQL database integration',
      '🐍 Flask-based backend'
    ],

    tech: [
      'HTML',
      'CSS',
      'Python',
      'Flask',
      'MySQL',
      'REST API'
    ],

    liveUrl: null,
    githubUrl: null
  }

};


/* ─── PRELOADER ─────────────────────────────────────────────── */

window.addEventListener('load', () => {

  const preloader = document.getElementById('preloader');

  if (!preloader) return;

  setTimeout(() => {

    preloader.classList.add('hidden');

    // Trigger initial hero reveal animations
    document.querySelectorAll('#hero .reveal').forEach((el, i) => {

      setTimeout(() => {
        el.classList.add('visible');
      }, 200 + i * 150);

    });

  }, 1800);

});


/* ─── SCROLL PROGRESS BAR ───────────────────────────────────── */

function updateScrollProgress() {

  const scrollTop = window.scrollY;

  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const pct =
    docHeight > 0
      ? (scrollTop / docHeight) * 100
      : 0;

  const progressBar =
    document.getElementById('scroll-progress');

  if (progressBar) {
    progressBar.style.width = pct + '%';
  }

}


/* ─── NAVBAR ────────────────────────────────────────────────── */

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');


function updateNavbar() {

  if (!navbar) return;

  if (window.scrollY > 60) {

    navbar.classList.add('scrolled');

  } else {

    navbar.classList.remove('scrolled');

  }

}


/* Mobile menu */

if (navToggle && navLinks) {

  navToggle.addEventListener('click', () => {

    navToggle.classList.toggle('open');

    navLinks.classList.toggle('open');

    document.body.style.overflow =
      navLinks.classList.contains('open')
        ? 'hidden'
        : '';

  });


  /* Close mobile menu on link click */

  navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navToggle.classList.remove('open');

      navLinks.classList.remove('open');

      document.body.style.overflow = '';

    });

  });

}


/* ─── ACTIVE NAVIGATION ─────────────────────────────────────── */

const sections =
  document.querySelectorAll('section[id]');


function highlightNav() {

  const scrollY = window.scrollY + 120;

  sections.forEach(section => {

    const top = section.offsetTop;

    const height = section.offsetHeight;

    const id = section.getAttribute('id');

    const link =
      document.querySelector(
        `.nav-links a[href="#${id}"]`
      );

    if (!link) return;

    if (
      scrollY >= top &&
      scrollY < top + height
    ) {

      document
        .querySelectorAll('.nav-links a')
        .forEach(a => {
          a.style.color = '';
        });

      link.style.color = 'var(--white)';

    }

  });

}


/* ─── SCROLL REVEAL ─────────────────────────────────────────── */

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

        }

      });

    },

    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }

  );


document
  .querySelectorAll('.reveal:not(#hero .reveal)')
  .forEach(el => {

    revealObserver.observe(el);

  });


/* ─── SKILL BARS ────────────────────────────────────────────── */

const skillObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const bars =
          entry.target.querySelectorAll(
            '.skill-bar-item'
          );

        bars.forEach((bar, i) => {

          const pct =
            bar.getAttribute('data-pct');

          const fill =
            bar.querySelector('.skill-bar-fill');

          if (!fill) return;

          setTimeout(() => {

            fill.style.width = pct + '%';

          }, i * 120);

        });

        skillObserver.unobserve(entry.target);

      });

    },

    {
      threshold: 0.3
    }

  );


document
  .querySelectorAll('.skill-group')
  .forEach(group => {

    skillObserver.observe(group);

  });


/* ─── ANIMATED COUNTERS ─────────────────────────────────────── */

function animateCounter(
  el,
  target,
  duration = 1600
) {

  if (!el) return;

  const numericTarget =
    Number(target);

  if (Number.isNaN(numericTarget)) return;

  let start = 0;

  const step =
    numericTarget /
    (duration / 16);

  const timer =
    setInterval(() => {

      start += step;

      if (start >= numericTarget) {

        el.textContent =
          Number.isInteger(numericTarget)
            ? numericTarget
            : numericTarget.toFixed(2);

        clearInterval(timer);

      } else {

        el.textContent =
          Number.isInteger(numericTarget)
            ? Math.floor(start)
            : start.toFixed(2);

      }

    }, 16);

}


const counterObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counters =
          entry.target.querySelectorAll(
            '.counter'
          );

        counters.forEach(counter => {

          const target =
            counter.getAttribute(
              'data-target'
            );

          animateCounter(
            counter,
            target
          );

        });

        counterObserver.unobserve(
          entry.target
        );

      });

    },

    {
      threshold: 0.4
    }

  );


const achievementsSection =
  document.getElementById(
    'achievements'
  );


if (achievementsSection) {

  counterObserver.observe(
    achievementsSection
  );

}


/* ─── TYPED TEXT EFFECT ─────────────────────────────────────── */

const typedStrings = [

  'Software Development Engineer',

  'Java Developer',

  'DSA Enthusiast',

  'Backend Developer',

  'System Design Learner'

];


let typedIdx = 0;

let charIdx = 0;

let isDeleting = false;


function typeLoop() {

  const el =
    document.getElementById(
      'typed-text'
    );

  if (!el) return;

  const current =
    typedStrings[typedIdx];

  const displayed =
    isDeleting

      ? current.substring(
          0,
          charIdx - 1
        )

      : current.substring(
          0,
          charIdx + 1
        );


  el.textContent =
    displayed;


  charIdx =
    isDeleting
      ? charIdx - 1
      : charIdx + 1;


  let delay =
    isDeleting
      ? 45
      : 90;


  if (
    !isDeleting &&
    charIdx > current.length
  ) {

    delay = 2000;

    isDeleting = true;

  }

  else if (
    isDeleting &&
    charIdx === 0
  ) {

    isDeleting = false;

    typedIdx =
      (typedIdx + 1) %
      typedStrings.length;

    delay = 400;

  }


  setTimeout(
    typeLoop,
    delay
  );

}


setTimeout(
  typeLoop,
  2200
);


/* ─── PROJECT MODALS ────────────────────────────────────────── */

const overlay =
  document.getElementById(
    'modal-overlay'
  );

const modalContent =
  document.getElementById(
    'modal-content'
  );


function openModal(key) {

  const data = projectData[key];

  if (!data || !overlay || !modalContent) {
    return;
  }


  /* ─────────────────────────────────────────────────────────
     PROJECT IMAGE
     ───────────────────────────────────────────────────────── */

  const imageHTML = data.image
    ? `
      <div class="modal-project-image">
        <img
          src="${data.image}"
          alt="${data.title}"
          loading="lazy"
        >
      </div>
    `
    : '';


  /* ─────────────────────────────────────────────────────────
     PROJECT HIGHLIGHTS
     ───────────────────────────────────────────────────────── */

  const highlightsHTML =
    data.highlights
      .map(
        highlight => `
          <li>
            ${highlight}
          </li>
        `
      )
      .join('');


  /* ─────────────────────────────────────────────────────────
     TECHNOLOGY TAGS
     ───────────────────────────────────────────────────────── */

  const techHTML =
    data.tech
      .map(
        tech => `
          <span>${tech}</span>
        `
      )
      .join('');


  /* ─────────────────────────────────────────────────────────
     PROJECT LINKS
     ───────────────────────────────────────────────────────── */

  let linksHTML = '';


  if (data.liveUrl || data.githubUrl) {

    linksHTML = `
      <div class="modal-links">
    `;


    if (data.liveUrl) {

      linksHTML += `
        <a
          href="${data.liveUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-external-link-alt"></i>
          Live Demo
        </a>
      `;

    }


    if (data.githubUrl) {

      linksHTML += `
        <a
          href="${data.githubUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
          GitHub
        </a>
      `;

    }


    linksHTML += `
      </div>
    `;

  }


  /* ─────────────────────────────────────────────────────────
     MODAL CONTENT
     ───────────────────────────────────────────────────────── */

  modalContent.innerHTML = `

    ${imageHTML}


    <div class="modal-project-heading">

      <div class="modal-project-icon">

        <i class="fas ${data.icon}"></i>

      </div>


      <h2>
        ${data.title}
      </h2>

    </div>


    <p class="modal-project-overview">
      ${data.overview}
    </p>


    <div class="modal-highlight">

      <ul>

        ${highlightsHTML}

      </ul>

    </div>


    <p class="modal-tech-label">
      Tech Stack
    </p>


    <div class="modal-tech">

      ${techHTML}

    </div>


    ${linksHTML}

  `;


  /* ─────────────────────────────────────────────────────────
     OPEN MODAL
     ───────────────────────────────────────────────────────── */

  overlay.classList.add('open');

  document.body.style.overflow = 'hidden';

}


/* Close modal when clicking outside */

if (overlay) {

  overlay.addEventListener(
    'click',
    (event) => {

      if (
        event.target === overlay
      ) {

        closeModal();

      }

    }
  );

}


/* Close modal with Escape */

document.addEventListener(
  'keydown',
  event => {

    if (
      event.key === 'Escape'
    ) {

      closeModal();

    }

  }
);


/* Expose functions globally
   because index.html uses onclick="" */

window.openModal =
  openModal;

window.closeModal =
  closeModal;


/* ─── CONTACT FORM ───────────────────────────────────────────── */

/*
  Current version uses a success simulation.

  Later, if Rohan wants actual email delivery,
  we can connect Formspree or another form service.
*/

function handleFormSubmit(e) {

  e.preventDefault();


  const btn =
    e.target.querySelector(
      'button[type="submit"]'
    );

  const successDiv =
    document.getElementById(
      'form-success'
    );


  if (!btn || !successDiv) {
    return;
  }


  btn.textContent =
    'Sending…';

  btn.disabled =
    true;


  /* Temporary success simulation */

  setTimeout(() => {

    btn.style.display =
      'none';

    successDiv.style.display =
      'flex';

    e.target.reset();

  }, 1200);

}


window.handleFormSubmit =
  handleFormSubmit;


/* ─── FOOTER YEAR ────────────────────────────────────────────── */

const yearEl =
  document.getElementById(
    'year'
  );


if (yearEl) {

  yearEl.textContent =
    new Date().getFullYear();

}


/* ─── SMOOTH SCROLL ──────────────────────────────────────────── */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(anchor => {

    anchor.addEventListener(
      'click',
      function(e) {

        const target =
          document.querySelector(
            this.getAttribute('href')
          );

        if (!target) return;


        e.preventDefault();


        const offset =
          80;


        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          offset;


        window.scrollTo({

          top: top,

          behavior: 'smooth'

        });

      }
    );

  });


/* ─── MASTER SCROLL LISTENER ────────────────────────────────── */

window.addEventListener(
  'scroll',
  () => {

    updateScrollProgress();

    updateNavbar();

    highlightNav();

  },
  {
    passive: true
  }
);


/* ─── INITIAL STATE ─────────────────────────────────────────── */

updateNavbar();

updateScrollProgress();

highlightNav();