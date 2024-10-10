const loves = document.querySelectorAll('.love-logo');

loves.forEach(love => {
  love.addEventListener('click', function() {
    if (love.style.background == 'rgb(252, 15, 192)') {
      love.style.background = 'transparent';
    } else {
      love.style.background = '#FC0FC0';
    }
  });
});

o
function toggleHeader() {
  const nav_head = document.querySelector(".nav-container");
  if (nav_head.style.display === 'none' || nav_head.style.display === '') {
    nav_head.style.display = 'flex';
  } else {
    nav_head.style.display = 'none';
  }
}
