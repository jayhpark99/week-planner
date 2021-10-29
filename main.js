/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//
var $addEntryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal');
var $container = document.querySelector('.container');
var $submitButton = document.querySelector('[type="submit"]');
var $date = document.querySelector('select');
var $time = document.querySelector('[type="time"]');
var $description = document.querySelector('textarea');
var $form = document.querySelector('form');
//
$addEntryButton.addEventListener('click', modalOn);
//
function modalOn(event) {
  $container.className = 'container background';
  $modal.className = 'modal center';
  $addEntryButton.className = 'entry-button hidden';
}
$form.addEventListener('submit', submitHandler);
//
function submitHandler(event) {
  event.preventDefault();
  var dataObj = {
    date: $date.value,
    time: $time.value,
    description: $description.value,
    entryId: data.nextEntryId++
  };
  data.entries.unshift(dataObj);
  $container.className = 'container';
  $modal.className = 'modal center hidden';
  $addEntryButton.className = 'entry-button';
}
//
