'use strict';
// Formative feedback stays on the page and does not submit a student's answers.
document.querySelectorAll('[data-check-answer]').forEach(question => {
  const feedback = question.querySelector('.feedback');
  const button = question.querySelector('.check-answer');
  if (!feedback || !button) return;
  button.addEventListener('click', () => {
    const answer = question.querySelector('input[type="radio"]:checked');
    feedback.hidden = false;
    if (!answer) {
      feedback.textContent = 'اختر إجابة أولًا، ثم تحقّق منها.';
      delete feedback.dataset.correct;
      return;
    }
    const correct = answer.value === question.dataset.checkAnswer;
    feedback.dataset.correct = String(correct);
    feedback.textContent = (correct ? 'إجابة صحيحة. ' : 'راجع الفكرة: ') + question.dataset.explanation;
  });
  question.addEventListener('change', () => { feedback.hidden = true; });
});
document.querySelectorAll('[data-page-print]').forEach(button => {
  button.addEventListener('click', () => window.print());
});
