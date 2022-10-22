const history = {
  all:
  function() {
    return browser.history.search({
      text: "",
      startTime: 0,
      maxResults: 10000
    });
  },

  onVisited:
  function(listener) {
    // Assumes the user does not manually change page titles in their history
    browser.history.onTitleChanged.addListener(
      function ({id, url, title}) {
        // Hack: Since .onTitleChanged passes in an incomplete HistoryItem (it
        // does not have a lastVisitTime property), manually add it
        const item = {
          id,
          url,
          title,
          lastVisitTime: Date.now()
        };

        listener(item);
      }
    );
  }
};

export default history;