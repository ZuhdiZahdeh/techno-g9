(function () {
  "use strict";

  var search = document.getElementById("lessonSearch");
  var clear = document.getElementById("clearSearch");
  var cards = Array.from(document.querySelectorAll(".lesson-card"));
  var empty = document.getElementById("emptyState");
  var continueLink = document.getElementById("continueLink");
  var storageKey = "techno-g9:last-lesson";

  function normalize(value) {
    return (value || "")
      .toLowerCase()
      .replace(/[أإآ]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/ى/g, "ي")
      .trim();
  }

  function filterLessons() {
    var query = normalize(search.value);
    var visibleCount = 0;

    cards.forEach(function (card) {
      var haystack = normalize(card.getAttribute("data-search") + " " + card.textContent);
      var matches = !query || haystack.indexOf(query) !== -1;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    clear.hidden = !query;
    empty.hidden = visibleCount !== 0;
  }

  document.querySelectorAll("[data-lesson-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      try {
        localStorage.setItem(storageKey, link.getAttribute("href"));
      } catch (error) {
        /* The site remains fully usable when browser storage is unavailable. */
      }
    });
  });

  try {
    var lastLesson = localStorage.getItem(storageKey);
    var validLesson = document.querySelector('[data-lesson-link][href="' + lastLesson + '"]');
    if (lastLesson && validLesson) continueLink.setAttribute("href", lastLesson);
  } catch (error) {
    /* Keep the default first-lesson link. */
  }

  search.addEventListener("input", filterLessons);
  clear.addEventListener("click", function () {
    search.value = "";
    filterLessons();
    search.focus();
  });
})();
