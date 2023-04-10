// script for mobile toggle button

const menuBtn = document.querySelector(".menuBtn");
const sidebar = document.querySelector(".navlinks");
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
});

// script for active navlinks
const links = document.querySelectorAll('.l1');

if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

// script for dropdown link
