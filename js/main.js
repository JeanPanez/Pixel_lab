var toggleButton = document.getElementById('toggleButton');
var miAside = document.getElementById('miAside');

toggleButton.addEventListener('click', function () {
  if (miAside.style.display === 'none' || miAside.style.display === '') {
    miAside.style.display = 'block';
  } else {
    miAside.style.display = 'none';
  }
});