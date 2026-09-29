/* Narration for the atoms/materials page; initialized before lesson-audio.js. */
(() => {
  'use strict';
  if (document.body.dataset.lessonPage !== 'atoms-materials') return;
  const base = new URL('../audio/digital-world/atoms-materials/', document.currentScript.src);
  function recording(key, label = 'استمع للفقرة') {
    const box = document.createElement('div');
    box.className = 'atoms-narration';
    box.dataset.lessonAudioContainer = '';
    box.dataset.narration = key;
    const id = 'atoms-' + key + '-audio', status = id + '-status';
    box.innerHTML = `<div class="lesson-audio-controls no-print"><button type="button" class="lesson-audio-button" hidden data-lesson-audio="${id}" aria-controls="${id}" data-audio-status="${status}" aria-describedby="${status}"><svg class="audio-speaker-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/></svg><svg class="audio-pause-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14" stroke-width="4"/></svg><svg class="audio-play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7Z" fill="currentColor" stroke="none"/></svg><span data-audio-label>${label}</span></button><button type="button" class="lesson-audio-restart" hidden data-audio-restart="${id}" aria-controls="${id}" title="إعادة الاستماع من البداية"><span aria-hidden="true">↻</span> من البداية</button></div><audio id="${id}" class="lesson-audio-native no-print" controls preload="none" src="${new URL('anas-' + key + '.mp3', base).href}" aria-label="${label} بصوت أنس"></audio><p id="${status}" class="lesson-audio-status no-print" role="status" aria-live="polite"></p>`;
    return box;
  }
  function attach(selector, key, label, position = 'append') {
    const target = document.querySelector(selector);
    if (!target) return;
    const box = recording(key, label);
    target[position](box);
    return box;
  }
  attach('.lesson-hero', 'intro', 'استمع للمقدمة والأهداف');
  attach('.opening-question', 'opening', 'استمع لسؤال البداية');
  attach('#atom .section-lead', 'atom-intro', 'استمع للفقرة', 'after');
  attach('.silicon-identity', 'silicon-atom', 'استمع لشرح النموذج', 'after');
  attach('#atom .reading-grid article:nth-child(1)', 'neutral');
  attach('#atom .reading-grid article:nth-child(2)', 'bonds');
  attach('#atom-video > div:first-child', 'atom-video-intro', 'استمع لتوجيه المشاهدة');
  attach('#atom details.think', 'atom-think-q', 'استمع لسؤال توقف وفكّر', 'before');
  attach('#atom details.think', 'atom-think-a', 'استمع للإجابة');
  attach('#materials .section-lead', 'materials-intro', 'استمع للفقرة', 'after');
  attach('#materials .insight > div', 'importance');
  attach('#silicon > div:first-child', 'silicon-video-intro', 'استمع لتوجيه المشاهدة');
  attach('#materials details.think', 'materials-think-q', 'استمع لسؤال توقف وفكّر', 'before');
  attach('#materials details.think', 'materials-think-a', 'استمع للإجابة');
  attach('.review-instruction', 'review-intro', 'استمع لتعليمات المراجعة', 'after');
  for (let n = 1; n <= 3; n++) {
    attach('#review-' + n + '-question', 'review-' + n + '-q', 'استمع للسؤال', 'after');
    attach('#review-' + n + '-answer', 'review-' + n + '-a', 'استمع للإجابة');
  }
  attach('#takeaway', 'takeaway', 'استمع للخلاصة');
  attach('#resources > p', 'sources', 'استمع لمصادر الدرس وحدود النماذج', 'after');
  for (const [selector, name] of [['#atom-video', 'atom'], ['#silicon', 'silicon']]) {
    attach(selector + ' .video-question > p', name + '-video-q', 'استمع للسؤال', 'after');
    attach(selector + ' .video-question details', name + '-video-a', 'استمع للتفسير');
  }
  function switchable(selector, after, keys, initial, attribute) {
    const host = document.createElement('div');
    host.className = 'atoms-choice-narration';
    const boxes = keys.map(key => {
      const box = recording(key, 'استمع للشرح المختار');
      box.hidden = key !== initial;
      host.append(box);
      return box;
    });
    document.querySelector(after).after(host);
    document.querySelectorAll(selector).forEach(button => button.addEventListener('click', () => {
      boxes.forEach(box => {
        const selected = box.dataset.narration === button.getAttribute(attribute);
        if (!selected) box.querySelector('audio').pause();
        box.hidden = !selected;
      });
    }));
  }
  switchable('[data-particle]', '#atom-info', ['proton', 'neutron', 'electron', 'valence'], 'electron', 'data-particle');
  switchable('[data-material]', '.material-result', ['conductor', 'insulator', 'semiconductor'], 'conductor', 'data-material');
  // Narration and the existing video voiceovers must never overlap.
  document.addEventListener('play', event => {
    if (!(event.target instanceof HTMLMediaElement)) return;
    document.querySelectorAll('audio,video').forEach(media => {
      if (media !== event.target && !media.paused) media.pause();
    });
  }, true);
})();
