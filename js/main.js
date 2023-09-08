var productButtons = document.querySelectorAll('.productButton');
var aside = document.getElementById('aside');
var closingIcon = document.getElementById('closingIcon');

productButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    aside.style.display = 'block';
  });
});

closingIcon.addEventListener('click', function () {
  aside.style.display = 'none';
});