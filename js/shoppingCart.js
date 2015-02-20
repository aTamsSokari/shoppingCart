// JavaScript source code
var items = document.querySelectorAll('.item');
var cart = document.getElementById('cartItems');

document.addEventListener('dragstart', function (e) {
  items = e.target;
  e.target.style.opacity = '0.6';  // this / e.target is the source node.
  e.target.dataTransfer.setData('text/html', this.innerHTML);
  e.target.dataTransfer.effectAllowed = "move";
  $('h2').fadeIn('fast');
  $(e.target).hover(
    function () { $('div', this).fadeIn(); },
    function () { $('div', this).fadeOut(); }
  );
}, false);

document.addEventListener('dragend', function (e) {
  e.target.style.opacity = '';
  e.target.style.fadeOut = 'fast';
}, false);

document.addEventListener('dragover', function (e) {
  e.preventDefault();
  if (event.target.className == 'dropzone') {
    event.target.style.backgroundColor = 'burlywood';
  }
}, false);

document.addEventListener('dragenter', function (e) {
  if(event.target.className == 'dropzone') {
    event.target.style.backgroundColor = 'brown';
  }
}, false);

document.addEventListener("dragleave", function (event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }
}, false);

document.addEventListener("drop", function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className== "dropzone" ) {
    event.target.style.background = "";
    items.parentNode.removeChild(items);
    event.target.appendChild(items);
  }
}, false);