/* ========== Lightbox (reusable) ==========
   - يربط تلقائيًا بكل .w-thumbs في الصفحة
   - يدعم التخصيص عبر data-full-w / data-full-h على حاوية المعرض
   - الصورة الكاملة تُؤخذ من data-full على <img> وإلا src نفسه
   - يصدّر WLightbox.bind(root, {w,h}) للربط اليدوي عند الحاجة
*/
(function(){
  function buildBox(w,h){
    var box = document.createElement('div');
    box.className = 'w-lightbox';
    box.id = 'wLightbox';
    if(w) box.style.setProperty('--lb-w', w + 'px');
    if(h) box.style.setProperty('--lb-h', h + 'px');
    box.innerHTML =
      '<div class="card" role="dialog" aria-modal="true">' +
        '<img id="wLbImg" alt="">' +
        '<div class="w-actions">' +
          '<button class="btn ghost" id="wLbOpen" type="button">فتح في تبويب جديد ↗</button>' +
          '<button class="btn danger" id="wLbClose" type="button">إغلاق ✕</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(box);
    return box;
  }

  function ensureBox(opts){
    var box = document.getElementById('wLightbox');
    if(!box) box = buildBox(opts && opts.w, opts && opts.h);
    return box;
  }

  function bind(root, opts){
    root = root || document;
    opts = opts || {};
    var box = ensureBox(opts);
    var img = box.querySelector('#wLbImg');
    var openBtn = box.querySelector('#wLbOpen');
    var closeBtn= box.querySelector('#wLbClose');

    function open(full, alt, size){
      if(size && size.w) box.style.setProperty('--lb-w', size.w + 'px');
      if(size && size.h) box.style.setProperty('--lb-h', size.h + 'px');
      img.src = full; img.alt = alt || '';
      box.classList.add('open');
      openBtn.onclick = function(){ window.open(full, '_blank'); };
    }
    function close(){ box.classList.remove('open'); }

    // اربط جميع معارض .w-thumbs
    root.querySelectorAll('.w-thumbs').forEach(function(container){
      var cSize = {
        w: parseInt(container.getAttribute('data-full-w') || opts.w || 540, 10),
        h: parseInt(container.getAttribute('data-full-h') || opts.h || 305, 10)
      };
      container.querySelectorAll('img').forEach(function(th){
        th.addEventListener('click', function(){
          var full = th.getAttribute('data-full') || th.src;
          open(full, th.alt, cSize);
        });
      });
    });

    // إغلاق بالزر/بالنقر خارج/بالـEsc
    closeBtn.addEventListener('click', close);
    box.addEventListener('click', function(e){ if(e.target === box) close(); });
    window.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
  }

  // ربط تلقائي عند تحميل DOM
  function auto(){ bind(document, {}); }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', auto);
  }else{
    auto();
  }

  // تصدير دالة الربط اليدوي
  window.WLightbox = { bind: bind };
})();
