const MAX_URL_LENGTH = 50;
const MAX_LABEL_LENGTH = 40;

const format = {
  chop:
  function(str) {
    return str.substring(0, MAX_URL_LENGTH);
  },
  
  chop_label:
  function(label) {
    const ellipses = (label.length > MAX_LABEL_LENGTH) ? '...' : '';
    return label.substring(0, MAX_LABEL_LENGTH) + ellipses;
  },
  
  yyyy_mm_dd:
  function(unix_timestamp_ms) {
    const date = new Date(unix_timestamp_ms);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  },

  LinkRow:
  function({url, title, dateAdded}) {

    const location = new URL(url);
  
    const host = url ? location.hostname : null;
    const label = title;
  
    return `
        <li class="link-container">
            <div class="date-added">
                ${this.yyyy_mm_dd(dateAdded)}
            </div>
  
            <div class="link-title">
                <a href="${url}" class="link" target="blank">${label}</a>
            </div>
  
            <div class="hostname">
                <span class="hostname">${host}</span>
            </div>            
        </li>
    `;

    //<i class="fa-solid fa-grip-lines grip"></i>
    // <i class="fas fa-times icon-delete"></i>
  },

  HistoryRow:
  function({id, url, title, lastVisitTime}) {

    const location = new URL(url);
  
    const host = url ? location.hostname : null;
    const label = title;
  
    return `
        <li class="link-container">
            <div class="date-added">
                ${this.yyyy_mm_dd(lastVisitTime)}
            </div>
  
            <div class="link-title">
                <a href="${url}" class="link" target="blank">${label}</a>
            </div>
  
            <div class="hostname">
                <span class="hostname">${host}</span>
            </div>            
        </li>
    `;

    //<i class="fa-solid fa-grip-lines grip"></i>
    // <i class="fas fa-times icon-delete"></i>
  }
};

export default format;