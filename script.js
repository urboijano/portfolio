// Typewriter effect
const text = "BSIT Major in Network Security | Metal Enthusiast";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start typewriter effect when page loads
window.onload = () => {
  typeWriter();
  
  // Burger menu functionality
  const burger = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
};

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project, .service').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease-out';
  observer.observe(element);
});

// Project category filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const projects = document.querySelectorAll('.project');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    projects.forEach(project => {
      if (category === 'all' || project.getAttribute('data-category') === category) {
        project.style.display = 'block';
        project.style.opacity = '0';
        setTimeout(() => {
          project.style.opacity = '1';
        }, 100);
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Service category filtering
const serviceCategoryButtons = document.querySelectorAll('[data-service-category]');
const services = document.querySelectorAll('.service');

serviceCategoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    serviceCategoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-service-category');

    services.forEach(service => {
      if (category === 'all' || service.getAttribute('data-service-category') === category) {
        service.style.display = 'block';
        service.style.opacity = '0';
        setTimeout(() => {
          service.style.opacity = '1';
        }, 100);
      } else {
        service.style.display = 'none';
      }
    });
  });
});