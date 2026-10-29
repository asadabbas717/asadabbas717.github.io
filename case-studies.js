(() => {
  'use strict';
  function revealCase() {
    const target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    const disclosure = target.closest('details');
    if (disclosure) { disclosure.open = true; target.scrollIntoView(); }
  }
  addEventListener('hashchange', revealCase);
  revealCase();
})();
