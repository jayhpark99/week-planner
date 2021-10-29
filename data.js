var data = {
  view: '',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', handleUnload);
function handleUnload(event) {
  var myStorage = window.localStorage;
  var JSONdata = JSON.stringify(data);
  myStorage.setItem('week-planner-data', JSONdata);
}
