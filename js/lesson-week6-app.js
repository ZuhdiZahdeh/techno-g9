/* home.js — Generate lesson cards + search filter + quick actions */

const LESSONS = [
  {
    id: 'w1',
    title: 'الأسبوع ١: الدرس المتكامل — الطاقة النظيفة × Scratch × Tinkercad × طباعة ٣D',
    href: 'html/lesson-clean-energy.html',
    emoji: '⚡',
    desc: 'أهداف/محطات/تقويم + تجربة رياح/شمس/مياه وتمثيل برمجي.',
    tags: ['طاقة', 'Scratch', '3D', 'مختبر']
  },
  {
    id: 'w2',
    title: 'الأسبوع ٢: الطاقة النظيفة مقابل الأحفوري — المقارنة والحُجج',
    href: 'html/lesson-week2-clean-vs-fossil.html',
    emoji: '⚖️',
    desc: 'تصنيف ومصفوفة قرار + مشروع وسائط/Scratch + طباعة حامل بطاقات.',
    tags: ['مقارنة', 'وسائط', 'Scratch', '3D']
  },
  {
    id: 'w3',
    title: 'الأسبوع ٣: طاقة الرياح — العنفة وقياسات V/I',
    href: 'html/lesson-week3-wind-turbine.html',
    emoji: '🌬️',
    desc: 'عنفة مصغّرة + قياس DMM + تصميم Hub+Blade على Tinkercad.',
    tags: ['رياح', 'V/I', 'Scratch', '3D']
  },
  {
    id: 'w4',
    title: 'الأسبوع ٤: الطاقة الشمسية — PV وزاوية الميل والتظليل',
    href: 'html/lesson-week4-solar-pv.html',
    emoji: '☀️',
    desc: 'زاوية الميل/التظليل + حامل زاوية 3D + تمثيل برمجي للقدرة.',
    tags: ['شمس', 'زاوية', 'تظليل', '3D', 'V/I']
  },
  {
    id: 'w5',
    title: 'الأسبوع ٥: طاقة المياه — التدفق/الارتفاع ودفّاعة 3D',
    href: 'html/lesson-week5-hydro-power.html',
    emoji: '💧',
    desc: 'تدفّق/ارتفاع + دفّاعة/عجلة مائية 3D + تمثيل بصري في Scratch.',
    tags: ['مياه', 'تدفّق', 'ارتفاع', '3D', 'V/I']
  }
];

// Helpers
const $ = (sel, el=document) => el.querySelector(sel);
const grid = $('#lessonsGrid');
const renderCard = (lesson) => {
  const wrapper = document.createElement('article');
  wrapper.className = 'card lesson-card';
  wrapper.setAttribute('role','listitem');
  wrapper.innerHTML = `
    <div>
      <div class="lesson-head">
        <div class="lesson-emoji" aria-hidden="true">${lesson.emoji}</div>
        <h2>${lesson.title}</h2>
      </div>
      <p>${lesson.desc}</p>
      <div class="tags">
        ${lesson.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
    <div class="card-actions">
      <a class="btn open" href="${lesson.href}">فتح الدرس</a>
      <a class="btn outline" href="${lesson.href}" target="_blank" rel="noopener">فتح في تبويب جديد</a>
    </div>
  `;
  return wrapper;
};

const renderAll = (data) => {
  grid.innerHTML = '';
  if (!data.length){
    const empty = document.createElement('div');
    empty.className = 'card col-12';
    empty.innerHTML = '<p>لا توجد نتائج مطابقة لبحثك.</p>';
    grid.appendChild(empty);
    return;
  }
  data.forEach(item => grid.appendChild(renderCard(item)));
};

// Initial render
renderAll(LESSONS);

// Search filter
const box = $('#searchBox');
const clearBtn = $('#clearSearch');
const normalize = s => (s || '').toString().toLowerCase().trim();

box.addEventListener('input', () => {
  const q = normalize(box.value);
  const filtered = LESSONS.filter(l =>
    normalize(l.title).includes(q) ||
    normalize(l.desc).includes(q) ||
    l.tags.some(tag => normalize(tag).includes(q))
  );
  renderAll(filtered);
});

clearBtn.addEventListener('click', () => {
  box.value = '';
  renderAll(LESSONS);
  box.focus();
});

// Quick: open newest (آخر أسبوع)
$('#openNewest').addEventListener('click', () => {
  // يعتمد على ترتيب LESSONS (آخر عنصر هو الأحدث)
  const newest = LESSONS[LESSONS.length - 1];
  window.location.href = newest.href;
});
