/* Play pre-generated lesson MP3s with pause/resume and explicit replay. */
(() => {
  'use strict';
  let active = null;
  let generation = 0;
  let loadingTimer;

  function render(entry, state, text) {
    entry.state = state;
    const playing = state === 'playing' || state === 'loading';
    entry.button.dataset.playing = String(playing);
    entry.button.dataset.state = state;
    entry.label.textContent = playing ? 'إيقاف مؤقت' : state === 'paused' ? 'متابعة الاستماع' : entry.idleLabel;
    entry.card.classList.toggle('is-reading', playing);
    entry.restart.hidden = state === 'idle';
    entry.status.textContent = text;
  }

  function pauseActive(text = 'تم الإيقاف مؤقتًا. اضغط «متابعة الاستماع» للمتابعة من الموضع نفسه.') {
    generation += 1;
    clearTimeout(loadingTimer);
    if (!active) return;
    const entry = active;
    active = null;
    entry.audio.pause();
    // Deliberately preserve currentTime, including when switching recordings.
    render(entry, 'paused', text);
  }

  function start(entry, fromBeginning = false) {
    pauseActive();
    if (entry.audio.error) entry.audio.load();
    if (fromBeginning || entry.audio.ended) {
      try { entry.audio.currentTime = 0; } catch (_) { /* Metadata not loaded. */ }
    }
    active = entry;
    const session = ++generation;
    render(entry, 'loading', 'جارٍ تحميل التسجيل…');
    loadingTimer = setTimeout(() => {
      if (active === entry && session === generation) entry.status.textContent = 'يستغرق تحميل الصوت وقتًا أطول. تحقّق من اتصال الإنترنت أو حاول مرة أخرى.';
    }, 15000);
    const failed = () => {
      if (active !== entry || session !== generation) return;
      pauseActive('تعذّر تشغيل التسجيل. تحقّق من اتصال الإنترنت وحاول مرة أخرى.');
    };
    try {
      const play = entry.audio.play();
      if (play) play.catch(failed);
    } catch (_) { failed(); }
  }

  document.querySelectorAll('[data-lesson-audio]').forEach(button => {
    const audio = document.getElementById(button.dataset.lessonAudio);
    const status = document.getElementById(button.dataset.audioStatus);
    const card = button.closest('.study-card, .wide-card, [data-lesson-audio-container]');
    const restart = document.querySelector('[data-audio-restart="' + button.dataset.lessonAudio + '"]');
    if (!audio || !status || !card || !restart) return;
    const label = button.querySelector('[data-audio-label]');
    const entry = {button, audio, status, card, restart, label, idleLabel:label.textContent, state:'idle'};
    button.addEventListener('click', () => {
      if (active === entry) pauseActive();
      else start(entry);
    });
    restart.addEventListener('click', () => start(entry, true));
    audio.addEventListener('playing', () => {
      if (active !== entry) { audio.pause(); return; }
      clearTimeout(loadingTimer);
      render(entry, 'playing', 'جارٍ الاستماع بصوت أنس…');
    });
    audio.addEventListener('waiting', () => {
      if (active === entry) entry.status.textContent = 'جارٍ تحميل بقية التسجيل…';
    });
    audio.addEventListener('pause', () => {
      if (active === entry && !audio.ended && audio.paused) pauseActive();
    });
    audio.addEventListener('ended', () => {
      if (active !== entry) return;
      generation += 1;
      clearTimeout(loadingTimer);
      active = null;
      try { audio.currentTime = 0; } catch (_) { /* Media became unavailable. */ }
      render(entry, 'idle', 'انتهى التسجيل. يمكنك الاستماع مرة أخرى.');
    });
    audio.addEventListener('error', () => {
      if (active === entry) pauseActive('تعذّر تحميل التسجيل. تحقّق من اتصال الإنترنت وحاول مرة أخرى.');
    });
    audio.controls = false;
    audio.hidden = true;
    button.hidden = false;
    render(entry, 'idle', '');
  });
  window.addEventListener('pagehide', () => pauseActive());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && active) pauseActive('توقف التسجيل مؤقتًا عند مغادرة الصفحة. اضغط «متابعة الاستماع» للمتابعة من الموضع نفسه.');
  });
})();
