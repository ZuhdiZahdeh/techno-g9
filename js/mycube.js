(function () {
  'use strict';
  var key = 'techno-g9:mycube-checklist:v1';
  var checks = Array.from(document.querySelectorAll('[data-cube-check]'));
  var progress = document.getElementById('cube-progress-bar');
  var label = document.getElementById('progress-label');
  var status = document.getElementById('check-status');
  document.getElementById('progress-region').hidden = false;
  function update() {
    var count = checks.filter(function (check) { return check.checked; }).length;
    progress.value = count;
    label.textContent = 'أنجزت ' + count + ' من ' + checks.length + ' بنود';
    status.textContent = count === checks.length ? 'أحسنت! أكملت مراجعة تصميمك. افتخر بإنجازك، وواصل التجربة والإبداع!' : '';
  }
  try {
    var saved = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(saved)) checks.forEach(function (check) { check.checked = saved.includes(check.dataset.cubeCheck); });
    localStorage.setItem('techno-g9:last-lesson', 'html/activity-my-cube.html');
  } catch (error) { /* The activity works even when storage is unavailable. */ }
  checks.forEach(function (check) {
    check.addEventListener('change', function () {
      update();
      try { localStorage.setItem(key, JSON.stringify(checks.filter(function (item) { return item.checked; }).map(function (item) { return item.dataset.cubeCheck; }))); }
      catch (error) { /* Keep this session interactive. */ }
    });
  });
  update();
})();
