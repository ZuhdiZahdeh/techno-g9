/* Student page helper: auto-fill gallery if images exist (w1-01.png .. w1-12.png) */
(function(){
  const gallery = document.querySelector('.gallery');
  if(!gallery) return;

  const base = gallery.getAttribute('data-path') || '../assets/study/week1/';
  const max = 12; // غيّر العدد عند الحاجة
  let found = 0;

  for(let i=1;i<=max;i++){
    const n = String(i).padStart(2,'0');
    const src = `${base}w1-${n}.png`;
    const img = new Image();
    img.onload = () => {
      const fig = document.createElement('figure');
      fig.innerHTML = `<img src="${src}" alt="صورة توضيحية ${i}"><figcaption>صورة ${i}</figcaption>`;
      gallery.appendChild(fig);
      found++;
    };
    img.onerror = ()=>{};
    img.src = src;
  }
})();
