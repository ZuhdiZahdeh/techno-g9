/* lesson-week4-app.js — wires buttons to modal, adds timer & font toggle
   Depends on: content-week4.js (defines window.WEEK4), ui-helpers.js (defines window.UI)
*/
(function(){
  const { $, $$, openModal, closeModal, arabicDigits } = window.UI;

  // Helper: open card by key with graceful fallback
  function openCard(key){
    const dict = window.WEEK4 || {};
    const entry = dict[key];
    if(!entry){
      openModal('المحتوى غير متوفر', `
        <p class="muted">لا توجد بطاقة بالمفتاح: <code>${key}</code>.</p>
        <p>تأكد من أنك حدّثت الملف <code>js/content-week4.js</code> إلى آخر إصدار،
        وأن وسم السكربت في الصفحة يستخدم <code>?v=20251019</code> لتجاوز التخزين المؤقت.</p>
      `);
      return;
    }
    openModal(entry.title, entry.body);
  }

  // Wire clicks for all data-open buttons
  $$('[data-open]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.getAttribute('data-open');
      openCard(key);
    });
  });

  // Print modal
  $('#printModal')?.addEventListener('click', ()=>{
    window.print();
  });

  // Close modal
  $('#closeModal')?.addEventListener('click', closeModal);
  $('#closeBottom')?.addEventListener('click', closeModal);

  // Font toggle (like Week 2)
  let large = false;
  $('#toggleFont')?.addEventListener('click', ()=>{
    document.documentElement.style.setProperty('--base-font-size', large ? '16px' : '18px');
    large = !large;
  });

  // 5-minute focus timer (like Week 2)
  let timerId = null, timerActive = false, remaining = 300;
  function updateTimerLabel(){
    const mm = Math.floor(remaining/60);
    const ss = remaining%60;
    $('#startFocus').textContent = `الوقت المتبقي: ${arabicDigits(String(mm).padStart(2,'0'))}:${arabicDigits(String(ss).padStart(2,'0'))}`;
  }
  $('#startFocus')?.addEventListener('click', ()=>{
    if(timerActive){
      clearInterval(timerId); timerActive=false;
      $('#startFocus').textContent = 'بدء مؤقّت ٥ دقائق';
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
  });

  // Dev console hint: list available keys
  console.log('[WEEK4 keys]', Object.keys(window.WEEK4||{}));
})();
