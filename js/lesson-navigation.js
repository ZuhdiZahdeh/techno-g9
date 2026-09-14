(function () {
  "use strict";
  try {
    localStorage.setItem("techno-g9:last-lesson", "html/" + window.location.pathname.split("/").pop());
  } catch (error) {
    /* Reading and navigation remain available without browser storage. */
  }
})();
