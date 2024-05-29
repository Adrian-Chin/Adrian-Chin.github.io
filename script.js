document.addEventListener('DOMContentLoaded', function() {
  const h1Element = document.querySelector('h1');
  h1Element.addEventListener('mouseover', function() {

  });
  h1Element.addEventListener('mouseout', function() {
    h1Element.style.textDecoration = 'none';
    h1Element.style.fontWeight = 'normal';
  });
});
