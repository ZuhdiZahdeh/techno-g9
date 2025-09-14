/* ========== Lightbox (reusable) ==========
   - يلتقط نقر أي <img> داخل .w-thumbs (تفويض أحداث)
   - تخصيص الأبعاد عبر data-full-w / data-full-h على حاوية المعرض
   - يحافظ على النسبة عبر --lb-aspect
*/
(function(){
  function ensureBox(){
    var box = document.getElementById('wLightbox');
    if(!box){
      box = document.createElement('div');
      box.className = 'w-lightbox';
      box.id = 'wLightbox';
      box.innerHTML =
        '<div class="card" role="dialog" aria-modal="true">' +
          '<img id="wLbImg" alt="">' +
          '<div class="w-actions">' +
            '<button class="btn ghost" id="wLbOpen" type="button">فتح في تبويب جديد ↗</button>' +
            '<button class="btn danger" id="wLbClose" type="button">إغلاق ✕</button>' +
          '</div>' +
        '</div>';
      document.body.appendChild(box);
    }
    return box;
  }

  function applySize(box, size){
    if(!size) return;
    if(size.w) box.style.setProperty('--lb-w', size.w + 'px');
    if(size.h) box.style.setProperty('--lb-h', size.h + 'px');
    if(size.w && size.h) box.style.setProperty('--lb-aspect', size.w + ' / ' + size.h);
  }

  function getGallerySize(container){
    return {
      w: parseInt(container.getAttribute('data-full-w') || 720, 10),
      h: parseInt(container.getAttribute('data-full-h') || 400, 10)
    };
  }

  function open(full, alt, size){
    var box = ensureBox();
    applySize(box, size);
    var img = box.querySelector('#wLbImg');
    var openBtn = box.querySelector('#wLbOpen');
    var closeBtn= box.querySelector('#wLbClose');

    img.src = full; img.alt = alt || '';
    box.classList.add('open');
    openBtn.onclick = function(){ window.open(full, '_blank'); };

    function close(){ box.classList.remove('open'); }
    closeBtn.onclick = close;
    box.addEventListener('click', function(e){ if(e.target === box) close(); }, { once:true });
    window.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(); window.removeEventListener('keydown', esc);} });
  }

  // تفويض أحداث: أي نقرة على صورة داخل .w-thumbs
  document.addEventListener('click', function(ev){
    var img = ev.target.closest('.w-thumbs img');
    if(!img) return;
    var container = img.closest('.w-thumbs');
    var size = getGallerySize(container);
    var full = img.getAttribute('data-full') || img.src;
    open(full, img.alt, size);
  });

  // تصدير اختياري لإعادة الربط اليدوي (غير مطلوب مع التفويض)
  window.WLightbox = { bind: function(){} };
})();
