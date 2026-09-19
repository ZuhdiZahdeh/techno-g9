/* Keep narration aligned with answers that the learner has chosen to reveal. */
(() => {
  'use strict';
  function pauseWithin(container) {
    container.querySelectorAll('audio').forEach(audio => {
      if (!audio.paused) audio.pause();
    });
  }
  document.querySelectorAll('.review-card').forEach(card => {
    const toggle = card.querySelector('.review-toggle');
    const answer = card.querySelector('.review-answer');
    if (toggle && answer) toggle.addEventListener('click', () => {
      if (answer.hidden) pauseWithin(answer);
    });
  });
  document.querySelectorAll('details').forEach(details => {
    details.addEventListener('toggle', () => {
      if (!details.open) pauseWithin(details);
    });
  });
})();
