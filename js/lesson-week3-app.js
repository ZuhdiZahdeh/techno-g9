/* lesson-week3-app.js — wire modals + timer + font toggle (safe vanilla JS) */
(function () {
  // تأكد أن Helpers محمّلة
  var UI = window.UI || {};
  var $  = UI.$  || function(sel, el){ return (el||document).querySelector(sel); };
  var $$ = UI.$$ || function(sel, el){ return Array.from((el||document).querySelectorAll(sel)); };

  // فتح المودال بأمان
  function open(entry){
    if(!entry || !UI.openModal) return;
    UI.openModal(entry.title, entry.body);
  }

  // ربط كل أزرار data-open
  $$('#app [data-open]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var key   = btn.getAttribute('data-open');
      var entry = window.WEEK3 && window.WEEK3[key];
      if(!entry) return;
      open(entry);
    });
  });

  // أزرار إغلاق/طباعة
  var closeTop    = $('#closeModal');
  var closeBottom = $('#closeBottom');
  var printBtn    = $('#printModal');

  if(closeTop)    closeTop.onclick    = UI.closeModal || function(){};
  if(closeBottom) closeBottom.onclick = UI.closeModal || function(){};
  if(printBtn)    printBtn.onclick    = function(){ window.print(); };

  window.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && UI.closeModal) UI.closeModal();
  });

  // تكبير الخط
  var big = false;
  var toggleFont = $('#toggleFont');
  if(toggleFont){
    toggleFont.onclick = function(){
      big = !big;
      document.body.style.fontSize = big ? '18px' : '';
    };
  }

  // مؤقّت 5 دقائق
  var startBtn   = $('#startFocus');
  var timerId    = null;
  var remaining  = 300;
  var active     = false;

  function digits(s){
    return (UI.arabicDigits ? UI.arabicDigits(s) : s);
  }
  function updateLabel(){
    var mm = String(Math.floor(remaining/60)).padStart(2,'0');
    var ss = String(remaining%60).padStart(2,'0');
    if(startBtn) startBtn.textContent = 'العدّ التنازلي: ' + digits(mm+':'+ss) + ' (إيقاف)';
  }

  if(startBtn){
    startBtn.onclick = function(){
      if(active){
        clearInterval(timerId); active=false;
        startBtn.textContent = 'بدء مؤقّت ٥ دقائق للأنشطة';
        return;
      }
      active = true; remaining = 300; updateLabel();
      timerId = setInterval(function(){
        remaining--; updateLabel();
        if(remaining<=0){
          clearInterval(timerId); active=false;
          startBtn.textContent = 'انتهى الوقت! إعادة؟';
          alert('انتهى الوقت!');
        }
      }, 1000);
    };
  }
})();
