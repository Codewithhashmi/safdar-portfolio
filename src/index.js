// script.js

// Dark mode toggle button
const toggleBtn = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});

// Contact form submission (demo only)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Collect form data
  const formData = {
    name: contactForm.name.value.trim(),
    email: contactForm.email.value.trim(),
    message: contactForm.message.value.trim(),
  };

  // Simple validation
  if (!formData.name || !formData.email || !formData.message) {
    alert('Please fill out all fields.');
    return;
  }

  alert(`Thank you, ${formData.name}! Your message has been received.`);

  // Reset form
  contactForm.reset();

  // Here you can add real submission logic via fetch or XMLHttpRequest to a backend
});
