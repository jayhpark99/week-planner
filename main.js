var $addEntryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal');
var $container = document.querySelector('.container');
var $submitButton = document.querySelector('[type="submit"]');
$addEntryButton.addEventListener('click', modalOn);
function modalOn(event) {
  $container.className = 'container background';
  $modal.className = 'modal center';
  $addEntryButton.className = 'entry-button hidden';
}
$submitButton.addEventListener('submit', modalOff);
function modalOff(event) {
  event.preventDefault();
  $container.className = 'container';
  $modal.className = 'modal center hidden';
  $addEntryButton.className = 'entry-button';
}
