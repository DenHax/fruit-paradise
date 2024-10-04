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
