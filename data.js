var data = {
  view: '',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', handleUnload);
function handleUnload(event) {
  var myStorage = window.localStorage;
  var JSONData = JSON.stringify(data);
  myStorage.setItem('weekly-planner-data', JSONData);
}

var previousData = localStorage.getItem('weekly-planner-data');
if (previousData !== null) {
  data = JSON.parse(previousData);
}
