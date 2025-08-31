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
  },
  // js/home.js  (أضِف في نهاية المصفوفة LESSONS)
{
  id: 'w6',
  title: 'الأسبوع ٦: مشروع وسائط — ملصق/مطوية بالطاقة النظيفة (A4 + QR + Scratch + 3D)',
  href: 'html/lesson-week6-media-project.html',
  emoji: '📰',
  desc: 'مشروع ملصق/مطوية مبني على بيانات الأسابيع 3–5 + QR + لقطة Scratch + ذكر 3D.',
  tags: ['وسائط','ملصق','مطوية','QR','Scratch','3D']
},
{
  id: 'w7',
  title: 'الأسبوع ٧: مراجعة الوحدة + الاستعداد لامتحان منتصف الفصل',
  href: 'html/lesson-week7-review-midterm.html',
  emoji: '📚',
  desc: 'خريطة مفاهيم، قياسات V/I، تصحيح أخطاء، Scratch سريع، مراجعة 3D، Blueprint الامتحان.',
  tags: ['مراجعة','Midterm','V/I','Scratch','3D']
},
{
  id: 'w8',
  title: 'الأسبوع ٨: امتحان منتصف الفصل (Midterm)',
  href: 'html/lesson-week8-midterm-exam.html',
  emoji: '🧪',
  desc: 'امتحان نظري + عملي مختبر + برمجة/وسائط + روبركات وتقويم علاجي.',
  tags: ['Midterm','V/I','Scratch','3D','روبرك']
},
 {
    id: 'w9',
    title: 'الأسبوع ٩: مراجعة Scratch — الواجهة والإحداثيات والحركة والأحداث',
    href: 'html/lesson-week9-scratch-review.html',
    emoji: '🐱',
    desc: 'جولة سريعة: الواجهة، (x,y)، الحركة، الأحداث، متغيّر score.',
    tags: ['Scratch','Review','Intro']
  },
  {
    id: 'w10',
    title: 'الأسبوع ١٠: Scratch — التحكّم بالكائن',
    href: 'html/lesson-week10-scratch-control.html',
    emoji: '🎮',
    desc: 'مفاتيح اتجاه، حدود/ارتداد، أنيميشن مظاهر، اصطدام، نقاط.',
    tags: ['Scratch','Control','Animation','Score']
  },
  {
    id: 'w11',
    title: 'الأسبوع ١١: Scratch — بثّ الرسائل واستقبالها',
    href: 'html/lesson-week11-scratch-broadcast.html',
    emoji: '📡',
    desc: 'تزامن كائنات، تسلسل مشاهد، مؤقّتات بسيطة، Mini-Project.',
    tags: ['Scratch','Broadcast','Scenes']
  },
  {
    id: 'w12',
    title: 'الأسبوع ١٢: Scratch — تسجيل الأصوات وإدراجها والتزامن',
    href: 'html/lesson-week12-scratch-audio.html',
    emoji: '🎙️',
    desc: 'تسجيل/إدراج صوت، Volume/Pitch، تزامن مع Broadcast.',
    tags: ['Scratch','Audio','Broadcast']
  },
  {
    id: 'w13',
    title: 'الأسبوع ١٣: Scratch — الرسّام (Paint Editor) والتصميم بالمتجهات',
    href: 'html/lesson-week13-scratch-painter.html',
    emoji: '🎨',
    desc: 'Vector/Bitmap، Stroke/Fill، نص عربي واضح، Logo متحرك.',
    tags: ['Scratch','Painter','Vector','Logo']
  },
  {
    id: 'w14',
    title: 'الأسبوع ١٤: Scratch — المتغيّرات واللوائح',
    href: 'html/lesson-week14-scratch-data.html',
    emoji: '🧮',
    desc: 'set/change/show، مؤقّت/عداد، HUD، List + ask/answer.',
    tags: ['Scratch','Variables','Lists','Quiz']
  },
  {
    id: 'w15',
    title: 'الأسبوع ١٥: Scratch — المنطق المتقدّم + My Blocks',
    href: 'html/lesson-week15-scratch-logic.html',
    emoji: '🧩',
    desc: 'If/Else، حلقات، and/or/not، إجراءات مخصّصة بمدخلات.',
    tags: ['Scratch','Logic','MyBlocks','Refactor']
  },
  {
    id: 'w16',
    title: 'الأسبوع ١٦: نهاية الفصل — عروض نهائية ومعرض وتأملات',
    href: 'html/lesson-week16-end-term.html',
    emoji: '🎉',
    desc: 'عرض ٣ دقائق، مراجعة أقران، تلميع وتسليم، أرشفة ومعرض.',
    tags: ['Final','Showcase','Rubric','Archive']
  },
   {
    id: 'exam-tech',
    type: 'exam',
    title: 'امتحان شامل — كتاب التكنولوجيا (٩٠ دقيقة)',
    href: 'html/exam-tech-term1.html',
    emoji: '🧪',
    desc: 'امتحان يغطي الطاقة النظيفة والقياس V/I والقدرة P≈V×I وسلامة المختبر ومبادئ 3D.',
    tags: ['Exam','Technology','Term1']
  },
  {
    id: 'exam-scratch',
    type: 'exam',
    title: 'امتحان شامل — كتاب سكراتش (٩٠ دقيقة)',
    href: 'html/exam-scratch-term1.html',
    emoji: '💻',
    desc: 'امتحان يغطي الواجهة/الحركة/الأحداث، البثّ والصوت، الرسّام، المتغيّرات/اللوائح، والمنطق/My Blocks.',
    tags: ['Exam','Scratch','Term1']
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

// Quick: open newest (آخر درس حقيقي وليس امتحان)
$('#openNewest').addEventListener('click', () => {
  // ابحث عن آخر عنصر type !== 'exam'
  for (let i = LESSONS.length - 1; i >= 0; i--) {
    const it = LESSONS[i];
    if (!it.type || it.type !== 'exam') {
      window.location.href = it.href;
      return;
    }
  }
  // fallback: إن لم يوجد دروس
  window.location.href = LESSONS[LESSONS.length - 1].href;
});

