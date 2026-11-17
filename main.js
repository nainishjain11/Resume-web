// mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });
}

// dark and light mode toggle
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      themeToggle.innerText = 'Dark Mode';
    } else {
      themeToggle.innerText = 'Light Mode';
    }
  });
}

// random fact generator
const factBtn = document.getElementById('fact-btn');
const factText = document.getElementById('fact-text');

const facts = [
  'Pitched "We Grill Patties For Da Baddies" on stage at ISB Hyderabad and walked away with Best Presentation.',
  'Currently balancing an IIM Bangalore degree in Digital Business while preparing for Chartered Accountancy (CA).',
  'Won overall 1st place and ₹12,000 in cash cheques at Maharaja’s Entrepreneur Challenge against 30+ teams.',
  'Graduated with a 91.2% distinction in CBSE Class 12 Commerce while serving as NDPS Cultural Secretary.',
  'Pitched "Caraville", a mobile caravan hospitality venture, winning jury honors at the Sahodaya Business Pitch.',
  'Builds automated Python and AI scripts to track equities and macroeconomic trends.'
];

if (factBtn && factText) {
  factBtn.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.innerText = facts[randomIndex];
  });
}

// highlight current page link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(function (link) {
  const linkHref = link.getAttribute('href');
  if (linkHref === currentPage || linkHref === './' + currentPage || (currentPage === '' && linkHref === './index.html')) {
    link.classList.add('active');
  }
});
