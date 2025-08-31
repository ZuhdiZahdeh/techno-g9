/* lesson-week9-app.js — wires buttons, modal, timer, font toggle
   Depends on: content-week9.js, ui-helpers.js
*/
(function(){
  const { $, $$, openModal, closeModal, arabicDigits } = window.UI;

  // Wire modal buttons
  $$('[data-open]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.getAttribute('data-open');
      const entry = window.WEEK9[key];
      if(!entry) return;
      openModal(entry.title, entry.body);
    });
  });

  // Close actions
  $('#closeModal').onclick = closeModal;
  $('#closeBottom').onclick = closeModal;
  window.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
  $('#printModal').onclick = () => window.print();

  // Font toggle
  let big = false;
  $('#toggleFont').onclick = () => {
    big = !big;
    document.body.style.fontSize = big ? '18px' : '';
  };

  // 5-min focus timer with Arabic digits
  let timerActive = false, timerId=null, remaining=300;
  const updateTimerLabel = () => {
    const mm = String(Math.floor(remaining/60)).padStart(2,'0');
    const ss = String(remaining%60).padStart(2,'0');
    $('#startFocus').textContent = `العدّ التنازلي: ${arabicDigits(`${mm}:${ss}`)} (إيقاف)`;
  };

  $('#startFocus').onclick = () => {
    if(timerActive){
      clearInterval(timerId); timerActive=false;
      $('#startFocus').textContent = 'بدء مؤقّت ٥ دقائق للمحطات';
      return;
    }
    timerActive = true; remaining = 300;
    updateTimerLabel();
    timerId = setInterval(()=>{
      remaining--;
      updateTimerLabel();
      if(remaining<=0){
        clearInterval(timerId); timerActive=false;
        $('#startFocus').textContent = 'انتهى الوقت! إعادة؟';
        alert('انتهى الوقت!');
      }
    }, 1000);
  };
})();
