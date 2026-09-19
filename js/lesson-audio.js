/* Read only explicitly selected lesson blocks. No autoplay or microphone. */
(() => {
  'use strict';
  const buttons = Array.from(document.querySelectorAll('[data-read-aloud]'));
  if (!buttons.length) return;
  const synth = window.speechSynthesis;
  let active = null;
  let utterance = null; // Keep the current utterance alive until its callback.
  let generation = 0;
  let startupTimer;

  function status(button, message) {
    document.getElementById(button.dataset.audioStatus).textContent = message;
  }

  function reset(message = '') {
    generation += 1; // Ignore callbacks from a cancelled or previous reading.
    clearTimeout(startupTimer);
    if (active) {
      active.dataset.playing = 'false';
      active.querySelector('[data-audio-label]').textContent = 'استمع للفقرة';
      active.closest('.study-card').classList.remove('is-reading');
      status(active, message);
    }
    active = null;
    utterance = null;
  }

  function stop(message = '') {
    reset(message);
    if (synth) synth.cancel();
  }

  function arabicVoice() {
    const voices = synth.getVoices().filter(voice => /^ar(?:[-_]|$)/i.test(voice.lang));
    return voices.find(voice => voice.default) || voices[0];
  }

  buttons.forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      if (!synth || !window.SpeechSynthesisUtterance) {
        status(button, 'القراءة الصوتية غير متاحة في هذا المتصفح. جرّب متصفحًا آخر يدعم الصوت العربي.');
        return;
      }
      if (active === button) {
        stop('تم إيقاف القراءة. اضغط للاستماع من البداية.');
        return;
      }
      stop();
      const voice = arabicVoice();
      if (!voice) {
        status(button, 'لم يتوفر صوت عربي بعد. جرّب الضغط مرة أخرى، أو استخدم جهازًا تتوفر فيه أصوات قراءة عربية.');
        return;
      }
      // Read the visible source so future wording changes stay synchronized.
      const parts = button.dataset.readAloud.split(/\s+/).flatMap(id => {
        const element = document.getElementById(id);
        return element ? (element.textContent.trim().match(/[^.؟!]+[.؟!]?/g) || []) : [];
      }).map(text => text.replace(/\s+/g, ' ').trim()).filter(Boolean);
      if (!parts.length) return;
      active = button;
      button.dataset.playing = 'true';
      button.querySelector('[data-audio-label]').textContent = 'إيقاف القراءة';
      button.closest('.study-card').classList.add('is-reading');
      status(button, 'جارٍ تجهيز الصوت…');
      const session = generation;

      function next(index) {
        if (session !== generation) return;
        if (index === parts.length) {
          reset('انتهت القراءة. يمكنك الاستماع مرة أخرى.');
          return;
        }
        utterance = new SpeechSynthesisUtterance(parts[index]);
        utterance.voice = voice;
        utterance.lang = voice.lang;
        utterance.rate = 0.9;
        utterance.onstart = () => {
          if (session !== generation) return;
          clearTimeout(startupTimer);
          status(button, 'جارٍ قراءة الفقرة وسؤال البداية…');
        };
        utterance.onend = () => {
          if (session !== generation) return;
          clearTimeout(startupTimer);
          next(index + 1);
        };
        utterance.onerror = () => {
          if (session === generation) stop('تعذّر تشغيل الصوت. حاول مرة أخرى وتحقّق من اتصال الإنترنت إذا كان الصوت يتطلبه.');
        };
        startupTimer = setTimeout(() => {
          if (session === generation) stop('لم يبدأ الصوت. حاول مرة أخرى أو استخدم متصفحًا آخر يدعم الصوت العربي.');
        }, 12000);
        try {
          synth.speak(utterance);
        } catch (_) {
          stop('تعذّر تشغيل الصوت. حاول مرة أخرى.');
        }
      }
      next(0);
    });
  });

  if (synth) {
    synth.getVoices(); // Some browsers load their voices asynchronously.
    synth.addEventListener('voiceschanged', () => {
      if (!active && arabicVoice()) buttons.forEach(button => status(button, ''));
    });
  }
  window.addEventListener('pagehide', () => stop());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && active) stop('توقفت القراءة عند مغادرة الصفحة. اضغط للاستماع من البداية.');
  });
})();
