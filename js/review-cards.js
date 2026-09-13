'use strict';
// Progressive enhancement: the full answer is available if scripts cannot run.
document.querySelectorAll('.review-card').forEach(card => {
  const button = card.querySelector('.review-toggle');
  const answer = card.querySelector('.review-answer');
  if (!button || !answer) return;
  answer.hidden = true;
  button.hidden = false;
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'إظهار الإجابة';
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    answer.hidden = expanded;
    button.setAttribute('aria-expanded', String(!expanded));
    button.textContent = expanded ? 'إظهار الإجابة' : 'إخفاء الإجابة';
  });
});
