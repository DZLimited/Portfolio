// Sticky navbar + section highlighting
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon'); // ✅ fixed selector
let navbar = document.querySelector('.navbar');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close menu when scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Toggle navbar menu icon on click
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll Reveal animations
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .aboutimg', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .aboutcontent', { origin: 'right' });

// Typing animation
const typed = new Typed('.multipletext', {
  strings: ['Full-Stack Developer', 'React Native Developer', 'MERN Stack'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 100,
  loop: true
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(
      function () {
        status.innerHTML = "✅ Message sent successfully!";
        status.style.color = "green";
        form.reset();
      },
      function (error) {
        status.innerHTML = "❌ Failed to send message. Try again.";
        status.style.color = "red";
        console.error(error);
      }
    );
});

