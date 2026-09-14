'use strict';
(() => {
  const root = document.getElementById('brake-demo');
  if (!root) return;
  const wind = root.querySelector('#app-wind');
  const brake = root.querySelector('#app-brake');
  const rotor = root.querySelector('#app-rotor');
  const status = root.querySelector('#app-brake-status');
  const ar = n => new Intl.NumberFormat('ar-u-nu-arab', {maximumFractionDigits: 1}).format(n);
  function update() {
    const w = Number(wind.value), b = Number(brake.value);
    const ratio = (w / 15) * (1 - b / 100);
    const result = [w, b, Math.round(ratio * 100), Math.round(Math.pow(ratio, 3) * 100)];
    root.querySelector('#app-wind-value').textContent = ar(w) + ' م/ث';
    root.querySelector('#app-brake-value').textContent = ar(b) + '٪';
    wind.setAttribute('aria-valuetext', ar(w) + ' مترًا في الثانية');
    brake.setAttribute('aria-valuetext', ar(b) + ' بالمئة');
    rotor.style.animationDuration = (ratio > 0 ? 1.4 / ratio : 1) + 's';
    rotor.style.animationPlayState = ratio > 0 ? 'running' : 'paused';
    status.textContent = (w === 0 ? 'لا توجد رياح؛ الدوران والتوليد متوقفان.' : b === 100 ? 'توقف كامل في النموذج رغم وجود الرياح.' : 'الدوران النسبي: ' + ar(result[2]) + '٪، والإنتاج النسبي: ' + ar(result[3]) + '٪.');
  }
  [wind, brake].forEach(input => input.addEventListener('input', update));
  root.querySelectorAll('[data-brake-preset]').forEach(button => button.addEventListener('click', () => {
    brake.value = button.dataset.brakePreset;
    update();
  }));
  root.querySelector('#app-brake-reset').addEventListener('click', () => {
    wind.value = '8'; brake.value = '0'; update();
  });
  update();
})();
