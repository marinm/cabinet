function flatten(bookmarkItems) {

  if (bookmarkItems.length < 1) return [];

  const list = [];
  const queue = [bookmarkItems[0]];

  while (queue.length > 0) {
    const item = queue.shift();

    // It's a bookmark. Add it to the return list.
    if (item.url) list.push(item);

    // It's a folder. Add all its children to the line to be processed.
    if (item.children) queue.push(...item.children);
  }

  return list;
}

function sort_by_date_desc(bookmarkItems) {
  return bookmarkItems.sort((a,b) => a.dateAdded < b.dateAdded ? 1 : -1);
}


function allBookmarks() {
  return new Promise((resolve, reject) => {
    browser.bookmarks.getTree().then((bookmarkItems) => {
        const flat = flatten(bookmarkItems);
        const sorted = sort_by_date_desc(flat);
        resolve(sorted);
    });
  });
}


const bookmarks = {
  all:
  function() {
    return allBookmarks();
  },
};

export default bookmarks;