/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//
var $addEntryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.background');
var $container = document.querySelector('.container');
var $submitButton = document.querySelector('[type="submit"]');
var $date = document.querySelector('select');
var $time = document.querySelector('[type="time"]');
var $description = document.querySelector('textarea');
var $form = document.querySelector('form');
var $tbody = document.querySelector('tbody');
var $table = document.querySelector('.scheduled-events');
var $weekDayButtons = document.querySelector('.weekdays');

//
$addEntryButton.addEventListener('click', modalOn);
//
function modalOn(event) {

  $modal.className = 'background';
  $addEntryButton.className = 'entry-button hidden';
  $table.className = 'column-full scheduled-events hidden';
  $weekDayButtons.className = 'column-full justify-space-evenly weekdays hidden';

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
  var renderedObject = renderTable(dataObj);
  $tbody.prepend(renderedObject);
  data.entries.unshift(dataObj);
  $container.className = 'container';
  $modal.className = 'modal center hidden';
  $addEntryButton.className = 'entry-button';

}
//
function renderTable(entry) {

  var $tr = document.createElement('tr');
  var $tdTime = document.createElement('td');
  var $tdDescription = document.createElement('td');
  //
  $tdTime.textContent = entry.time;
  $tdDescription.textContent = entry.description;

  //
  $tr.appendChild($tdTime);
  $tr.appendChild($tdDescription);

  return $tr;

}
