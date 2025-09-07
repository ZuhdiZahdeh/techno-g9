/* home.js — Lessons directory with search + type filter (teacher/student/exam) */

/* 1) Data (lessons + exams + student card) */
const LESSONS = [
  { id:'w1', title:'الأسبوع ١: الدرس المتكامل — الطاقة النظيفة × Scratch × Tinkercad × طباعة ٣D',
    href:'html/lesson-clean-energy.html', emoji:'⚡',
    desc:'أهداف/محطات/تقويم + تجربة رياح/شمس/مياه وتمثيل برمجي.', tags:['طاقة','Scratch','3D','مختبر'] },

  { id:'w2', title:'الأسبوع ٢: الطاقة النظيفة مقابل الأحفوري — المقارنة والحُجج',
    href:'html/lesson-week2-clean-vs-fossil.html', emoji:'⚖️',
    desc:'تصنيف ومصفوفة قرار + مشروع وسائط/Scratch + طباعة حامل بطاقات.', tags:['مقارنة','وسائط','Scratch','3D'] },

  { id:'w3', title:'الأسبوع ٣: طاقة الرياح — العنفة وقياسات V/I',
    href:'html/lesson-week3-wind-turbine.html', emoji:'🌬️',
    desc:'عنفة مصغّرة + قياس DMM + تصميم Hub+Blade على Tinkercad.', tags:['رياح','V/I','Scratch','3D'] },

  { id:'w4', title:'الأسبوع ٤: الطاقة الشمسية — PV وزاوية الميل والتظليل',
    href:'html/lesson-week4-solar-pv.html', emoji:'☀️',
    desc:'زاوية الميل/التظليل + حامل زاوية 3D + تمثيل برمجي للقدرة.', tags:['شمس','زاوية','تظليل','3D','V/I'] },

  { id:'w5', title:'الأسبوع ٥: طاقة المياه — التدفق/الارتفاع ودفّاعة 3D',
    href:'html/lesson-week5-hydro-power.html', emoji:'💧',
    desc:'تدفّق/ارتفاع + دفّاعة/عجلة مائية 3D + تمثيل بصري في Scratch.', tags:['مياه','تدفّق','ارتفاع','3D','V/I'] },

  { id:'w6', title:'الأسبوع ٦: مشروع وسائط — ملصق/مطوية بالطاقة النظيفة (A4 + QR + Scratch + 3D)',
    href:'html/lesson-week6-media-project.html', emoji:'📰',
    desc:'مشروع ملصق/مطوية مبني على بيانات الأسابيع 3–5 + QR + لقطة Scratch + ذكر 3D.', tags:['وسائط','ملصق','مطوية','QR','Scratch','3D'] },

  { id:'w7', title:'الأسبوع ٧: مراجعة الوحدة + الاستعداد لامتحان منتصف الفصل',
    href:'html/lesson-week7-review-midterm.html', emoji:'📚',
    desc:'خريطة مفاهيم، قياسات V/I، تصحيح أخطاء، Scratch سريع، مراجعة 3D، Blueprint الامتحان.', tags:['مراجعة','Midterm','V/I','Scratch','3D'] },

  { id:'w8', title:'الأسبوع ٨: امتحان منتصف الفصل (Midterm)',
    href:'html/lesson-week8-midterm-exam.html', emoji:'🧪',
    desc:'امتحان نظري + عملي مختبر + برمجة/وسائط + روبركات وتقويم علاجي.', tags:['Midterm','V/I','Scratch','3D','روبرك'] },

  { id:'w9',  title:'الأسبوع ٩: مراجعة Scratch — الواجهة والإحداثيات والحركة والأحداث',
    href:'html/lesson-week9-scratch-review.html', emoji:'🐱',
    desc:'جولة سريعة: الواجهة، (x,y)، الحركة، الأحداث، متغيّر score.', tags:['Scratch','Review','Intro'] },

  { id:'w10', title:'الأسبوع ١٠: Scratch — التحكّم بالكائن',
    href:'html/lesson-week10-scratch-control.html', emoji:'🎮',
    desc:'مفاتيح اتجاه، حدود/ارتداد، أنيميشن مظاهر، اصطدام، نقاط.', tags:['Scratch','Control','Animation','Score'] },

  { id:'w11', title:'الأسبوع ١١: Scratch — بثّ الرسائل واستقبالها',
    href:'html/lesson-week11-scratch-broadcast.html', emoji:'📡',
    desc:'تزامن كائنات، تسلسل مشاهد، مؤقّتات بسيطة، Mini-Project.', tags:['Scratch','Broadcast','Scenes'] },

  { id:'w12', title:'الأسبوع ١٢: Scratch — تسجيل الأصوات وإدراجها والتزامن',
    href:'html/lesson-week12-scratch-audio.html', emoji:'🎙️',
    desc:'تسجيل/إدراج صوت، Volume/Pitch، تزامن مع Broadcast.', tags:['Scratch','Audio','Broadcast'] },

  { id:'w13', title:'الأسبوع ١٣: Scratch — الرسّام (Paint Editor) والتصميم بالمتجهات',
    href:'html/lesson-week13-scratch-painter.html', emoji:'🎨',
    desc:'Vector/Bitmap، Stroke/Fill، نص عربي واضح، Logo متحرك.', tags:['Scratch','Painter','Vector','Logo'] },

  { id:'w14', title:'الأسبوع ١٤: Scratch — المتغيّرات واللوائح',
    href:'html/lesson-week14-scratch-data.html', emoji:'🧮',
    desc:'set/change/show، مؤقّت/عداد، HUD، List + ask/answer.', tags:['Scratch','Variables','Lists','Quiz'] },

  { id:'w15', title:'الأسبوع ١٥: Scratch — المنطق المتقدّم + My Blocks',
    href:'html/lesson-week15-scratch-logic.html', emoji:'🧩',
    desc:'If/Else، حلقات، and/or/not، إجراءات مخصّصة بمدخلات.', tags:['Scratch','Logic','MyBlocks','Refactor'] },

  { id:'w16', title:'الأسبوع ١٦: نهاية الفصل — عروض نهائية ومعرض وتأملات',
    href:'html/lesson-week16-end-term.html', emoji:'🎉',
    desc:'عرض ٣ دقائق، مراجعة أقران، تلميع وتسليم، أرشفة ومعرض.', tags:['Final','Showcase','Rubric','Archive'] },

  /* Exams */
  { id:'exam-tech', type:'exam', title:'امتحان شامل — كتاب التكنولوجيا (٩٠ دقيقة)',
    href:'html/exam-tech-term1.html', emoji:'🧪',
    desc:'امتحان يغطي الطاقة النظيفة والقياس V/I والقدرة P≈V×I وسلامة المختبر ومبادئ 3D.', tags:['Exam','Technology','Term1'] },

  { id:'exam-scratch', type:'exam', title:'امتحان شامل — كتاب سكراتش (٩٠ دقيقة)',
    href:'html/exam-scratch-term1.html', emoji:'💻',
    desc:'واجهة/حركة/أحداث، البثّ والصوت، الرسّام، المتغيّرات/اللوائح، والمنطق/My Blocks.', tags:['Exam','Scratch','Term1'] },

  /* Student guide (week1) */
  { id:'w1-student', type:'student', title:'دليل الطالب — الطاقة النظيفة (الأسبوع ١)',
    href:'html/lesson-clean-energy-student.html', emoji:'📘',
    desc:'ملخصات واضحة: تعريف، أهمية، مصادر، سلبيات، هل تعلم + الموارد والعرض.', tags:['Student','Review','Energy'] }
];

/* 2) Helpers & rendering */
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
      <a class="btn open" href="${lesson.href}">فتح</a>
      <a class="btn outline" href="${lesson.href}" target="_blank" rel="noopener">تبويب جديد</a>
    </div>`;
  return wrapper;
};

function renderAll(data){
  grid.innerHTML = '';
  if(!data.length){
    const empty = document.createElement('div');
    empty.className = 'card col-12';
    empty.innerHTML = '<p>لا توجد نتائج مطابقة.</p>';
    grid.appendChild(empty);
    return;
  }
  data.forEach(item => grid.appendChild(renderCard(item)));
}

/* 3) Search + Type Filter */
const box = $('#searchBox');
const clearBtn = $('#clearSearch');
const toolbar = document.querySelector('.home-toolbar');

const normalize = s => (s||'').toString().toLowerCase().trim();
const getType = it => (it.type ? it.type : 'teacher');

let currentType = 'all';
let query = '';

function compute(){
  const filteredByType = LESSONS.filter(it => currentType==='all' ? true : getType(it)===currentType);
  const q = normalize(query);
  const filtered = !q ? filteredByType :
    filteredByType.filter(l =>
      normalize(l.title).includes(q) ||
      normalize(l.desc).includes(q) ||
      l.tags.some(tag => normalize(tag).includes(q))
    );
  renderAll(filtered);
}

/* create type filter buttons */
const filterWrap = document.createElement('div');
filterWrap.style.display='flex';
filterWrap.style.gap='6px';
filterWrap.style.flexWrap='wrap';
filterWrap.style.marginTop='6px';
filterWrap.setAttribute('aria-label','مرشّح النوع');

function makeBtn(txt,val){
  const b=document.createElement('button');
  b.className='btn ghost';
  b.dataset.filter=val;
  b.textContent=txt;
  return b;
}
const fAll=makeBtn('الكل','all');
const fTeach=makeBtn('للمعلّم','teacher');
const fStud=makeBtn('للطلّاب','student');
const fExams=makeBtn('الامتحانات','exam');

filterWrap.append(fAll,fTeach,fStud,fExams);
toolbar.appendChild(filterWrap);

/* wire filter */
filterWrap.addEventListener('click',(e)=>{
  const b=e.target.closest('button[data-filter]');
  if(!b) return;
  currentType=b.dataset.filter;
  [...filterWrap.querySelectorAll('button')].forEach(x=>x.classList.remove('primary'));
  b.classList.add('primary');
  compute();
});
fAll.classList.add('primary'); // default

/* wire search */
box.addEventListener('input',()=>{ query=box.value; compute(); });
clearBtn.addEventListener('click',()=>{ box.value=''; query=''; compute(); });

/* Initial render */
compute();

/* 4) Open newest (skip exams) */
$('#openNewest').addEventListener('click', () => {
  for(let i=LESSONS.length-1;i>=0;i--){
    const it=LESSONS[i];
    if(getType(it)!=='exam'){ window.location.href = it.href; return; }
  }
  window.location.href = LESSONS[LESSONS.length-1].href;
});
