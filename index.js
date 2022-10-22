import bookmarks from "./bookmarks.js";
import history from "./history.js";
import format from "./format.js";

const MAX_URL_LENGTH = 50;
const MAX_LABEL_LENGTH = 40;

const history_ul = document.querySelector('#history');
const bookmarks_ul = document.querySelector('#bookmarks');


history.all().then(list => {
  list.forEach(item => {
    history_ul.insertAdjacentHTML('beforeend', format.HistoryRow(item));
  })
});

history.onVisited(function(item) {
  history_ul.insertAdjacentHTML('afterbegin', format.HistoryRow(item));
});


bookmarks.all().then(list => {
  list.forEach(item => {
    bookmarks_ul.insertAdjacentHTML('beforeend', format.LinkRow(item));
  })
});