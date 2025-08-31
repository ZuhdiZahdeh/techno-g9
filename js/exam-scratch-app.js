/* exam-scratch-app.js — wire buttons, modal, 90-min timer, teacher toggle */
(function(){
  const { $, $$, openModal, closeModal, arabicDigits } = window.UI;

  // modal wiring
  $$('[data-open]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.getAttribute('data-open');
      const entry = window.EXAM_SCRATCH[key];
      if(!entry) return;

      if(key === 'keys'){
        const teacher = new URLSearchParams(location.search).get('teacher');
        if(!teacher){
          openModal('تنبيه', '<p>خاص بالمعلّم — استخدم <b>?teacher=1</b> لعرض المفاتيح.</p>');
          return;
        }
      }
      openModal(entry.title, entry.body);
    });
  });

  // modal controls
  $('#closeModal').onclick = closeModal;
  $('#closeBottom').onclick = closeModal;
  $('#printModal').onclick  = () => window.print();
  window.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

  // font toggle
  let big = false;
  $('#toggleFont').onclick = () => {
    big = !big; document.body.style.fontSize = big ? '18px' : '';
  };

  // 90-min timer
  let timerActive = false, timerId=null, remaining=90*60;
  const updateTimer = () => {
    const mm = String(Math.floor(remaining/60)).padStart(2,'0');
    const ss = String(remaining%60).padStart(2,'0');
    $('#startTimer').textContent = `العدّ التنازلي: ${arabicDigits(`${mm}:${ss}`)} (إيقاف)`;
  };
  $('#startTimer').onclick = () => {
    if(timerActive){
      clearInterval(timerId); timerActive=false;
      $('#startTimer').textContent = 'بدء مؤقّت ٩٠ دقيقة';
      return;
    }
    timerActive=true; remaining=90*60; updateTimer();
    timerId = setInterval(()=>{
      remaining--; updateTimer();
      if(remaining<=0){
        clearInterval(timerId); timerActive=false;
        $('#startTimer').textContent = 'انتهى الوقت!'; alert('انتهى الوقت! الرجاء التسليم.');
      }
    },1000);
  };
})();
