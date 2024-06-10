document.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var text = document.querySelector('h1');
  text.style.top = (50 + scrollTop / 10) + '%'; // Adjust the division factor as needed for smoother or faster motion
});
