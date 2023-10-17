// Vanilla JS code to handle animations

document.querySelectorAll('.transition-enter').forEach(el => {
  const delay = el.getAttribute('data-delay');
  el.style.opacity = 0; 
  setTimeout(() => {
    el.style.opacity = 1;
    el.classList.add('transition-enter-active');
  }, delay);
});

document.querySelectorAll('.zoom-transition-enter').forEach(el => {
  const delay = el.getAttribute('data-delay');
  el.style.opacity = 0; 
  setTimeout(() => {
    el.style.opacity = 1;
    el.classList.add('.zoom-transition-enter-active');
  }, delay);
});