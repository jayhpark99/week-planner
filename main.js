var $addEntryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal');
var $container = document.querySelector('.container');
$addEntryButton.addEventListener('click', modalOn);
function modalOn(event) {
  $container.className = 'container background';
  $modal.className = 'modal center';
  $addEntryButton.className = 'entry-button hidden';
}
