document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Mobile menu toggle (if you add a hamburger menu)
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.main-nav ul');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Highlight active nav link on scroll (if using section IDs)
  const sections = document.querySelectorAll('main > section, main > div.departments-grid');
  const navLinks = document.querySelectorAll('.main-nav a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id') || '';
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

$(document).ready(function() {
  // Make all department bodies collapsible
  $('.dept-header').css('cursor', 'pointer').attr('title', 'Click to expand/collapse');
  // Uncomment the next line if you want them collapsed by default:
  // $('.dept-body').hide();

  $('.dept-header').on('click', function() {
    $(this).next('.dept-body').slideToggle(250);
    $(this).toggleClass('open');
  });
});
