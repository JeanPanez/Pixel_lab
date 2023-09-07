var productButton = document.getElementById('productButton');
var aside = document.getElementById('aside');

var closingIcon = document.getElementById('closingIcon');

productButton.addEventListener('click', function () {
  aside.style.display = 'block';
});

closingIcon.addEventListener('click', function () {
  aside.style.display = 'none';
});