/* Play pre-generated lesson MP3s. No API credentials or speech synthesis. */
(() => {
  'use strict';
  let active = null;
  let generation = 0;
  let loadingTimer;

  function message(entry, text) {
    entry.status.textContent = text;
  }

  function reset(text = '') {
    generation += 1;
    clearTimeout(loadingTimer);
    if (!active) return;
    const entry = active;
    active = null;
    entry.audio.pause();
    try { entry.audio.currentTime = 0; } catch (_) { /* Media not loaded yet. */ }
    entry.button.dataset.playing = 'false';
    entry.label.textContent = 'استمع للفقرة';
    entry.card.classList.remove('is-reading');
    message(entry, text);
  }

  document.querySelectorAll('[data-lesson-audio]').forEach(button => {
    const audio = document.getElementById(button.dataset.lessonAudio);
    const status = document.getElementById(button.dataset.audioStatus);
    if (!audio || !status) return;
    const entry = {button, audio, status, label:button.querySelector('[data-audio-label]'), card:button.closest('.study-card, .wide-card')};

    button.addEventListener('click', () => {
      if (active === entry) {
        reset('تم إيقاف التسجيل. اضغط للاستماع من البداية.');
        return;
      }
      reset();
      active = entry;
      const session = generation;
      button.dataset.playing = 'true';
      entry.label.textContent = 'إيقاف الصوت';
      entry.card.classList.add('is-reading');
      message(entry, 'جارٍ تحميل التسجيل…');
      loadingTimer = setTimeout(() => {
        if (active === entry && session === generation) message(entry, 'يستغرق تحميل الصوت وقتًا أطول. تحقّق من اتصال الإنترنت أو حاول مرة أخرى.');
      }, 15000);
      // Retry a failed network request when the student clicks again.
      if (audio.error) audio.load();
      try {
        const play = audio.play();
        if (play) play.catch(() => {
          if (active === entry && session === generation) reset('تعذّر تشغيل التسجيل. تحقّق من اتصال الإنترنت وحاول مرة أخرى.');
        });
      } catch (_) {
        reset('تعذّر تشغيل التسجيل. حاول مرة أخرى.');
      }
    });
    audio.addEventListener('playing', () => {
      if (active !== entry) return;
      clearTimeout(loadingTimer);
      message(entry, 'جارٍ الاستماع بصوت أنس…');
    });
    audio.addEventListener('waiting', () => {
      if (active === entry) message(entry, 'جارٍ تحميل بقية التسجيل…');
    });
    audio.addEventListener('ended', () => {
      if (active === entry) reset('انتهى التسجيل. يمكنك الاستماع مرة أخرى.');
    });
    audio.addEventListener('error', () => {
      if (active === entry) reset('تعذّر تحميل التسجيل. تحقّق من اتصال الإنترنت وحاول مرة أخرى.');
    });
    audio.controls = false;
    audio.hidden = true;
    button.hidden = false;
  });
  window.addEventListener('pagehide', () => reset());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && active) reset('توقف التسجيل عند مغادرة الصفحة. اضغط للاستماع من البداية.');
  });
})();
