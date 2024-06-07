document.addEventListener('DOMContentLoaded', function() {
  const aboutLink = document.querySelector('nav ul li a[href="#about"]');
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = 'about.html'; // Redirect to about.html
  });
});
