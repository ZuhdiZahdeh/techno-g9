/* content-week9.js — Modal content for Week 9 (Scratch Review)
   Exposes: window.WEEK9
*/
window.WEEK9 = {

  /* Objectives */
  g1: {
    title: '١) نطاق المراجعة',
    body: `
      <ul>
        <li>الواجهة: المنصة، قائمة الكائنات، الملابس، الأصوات، مساحة الأكواد.</li>
        <li>الإحداثيات: المحور (x,y) وحافة المنصة، الاتجاهات.</li>
        <li>الحركة والمظاهر: move/turn/goto/glide + say/think/switch costume.</li>
        <li>الأحداث: عند النقر/العلم الأخضر/لوحة المفاتيح.</li>
        <li>متغيّر بسيط: عدّاد score/steps.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) جولة في الواجهة',
    body: `
      <ul>
        <li>المنصة (Stage) لعرض النتائج.</li>
        <li>الكائنات (Sprites) وإضافة/حذف/تكرار.</li>
        <li>لوح الكتل (Blocks) حسب الفئة: Motion, Looks, Events, Control, Sensing, Operators, Variables.</li>
        <li>منطقة الأكواد، التبديل للملابس/الأصوات.</li>
      </ul>
    `
  },

  g3: {
    title: '٣) الإحداثيات (x,y) والاتجاه',
    body: `
      <ul>
        <li>المركز (0,0). اليمين x+ ، اليسار x- ، الأعلى y+ ، الأسفل y-.</li>
        <li>goto x:.. y:.. ، glide 1 secs to x:.. y:..</li>
        <li>اتجاه الحركة: point in direction / towards mouse-pointer.</li>
      </ul>
    `
  },

  g4: {
    title: '٤) الحركة والمظاهر (Quick Patterns)',
    body: `
      <ul>
        <li>تحريك خطوة بخطوة: repeat 10 → move 10 steps.</li>
        <li>دوران ناعم: repeat 24 → turn 15 degrees.</li>
        <li>مظاهر: switch costume to .. ثم next costume مع الانتقال.</li>
      </ul>
    `
  },

  g5: {
    title: '٥) الأحداث والمتغيّرات',
    body: `
      <ul>
        <li>when green flag clicked — تهيئة المشهد.</li>
        <li>when space key pressed — إطلاق حركة/مؤثر.</li>
        <li>متغيّر: score ← set score to 0 → change score by 1.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
when [green flag] clicked
  set [score v] to [0]
when [space v] key pressed
  change [score v] by (1)
      </pre>
    `
  },

  g6: {
    title: '٦) الحفظ والتصدير',
    body: `
      <ul>
        <li>Save now / Save as.</li>
        <li>File → Save to your computer (.sb3).</li>
        <li>لقطة شاشة للمشهد أثناء التشغيل.</li>
      </ul>
    `
  },

  /* Stations */
  st_tour: {
    title: 'محطة Tour — الواجهة',
    body: `
      <ul>
        <li>تحديد أقسام الواجهة عمليًا (Stage/Sprites/Blocks/Code).</li>
        <li>إضافة Sprite جديد وتجربة Costume آخر.</li>
      </ul>
    `
  },

  st_motion: {
    title: 'محطة Motion — تحريك بسيط',
    body: `
      <ul>
        <li>goto x:0 y:0 ثم glide إلى (100, 80).</li>
        <li>repeat 10 → move 10 steps → turn 15°.</li>
      </ul>
    `
  },

  st_events: {
    title: 'محطة Events — تفعيل بالحاسوب',
    body: `
      <ul>
        <li>when green flag clicked → ابدأ من المركز.</li>
        <li>when right arrow key pressed → move 10.</li>
        <li>when left arrow key pressed → move -10.</li>
      </ul>
    `
  },

  st_var: {
    title: 'محطة Variable — عدّاد',
    body: `
      <ul>
        <li>أنشئ متغيّر score، اجعله يظهر على المنصة.</li>
        <li>space → change score by 1 ، r → set score to 0.</li>
      </ul>
    `
  },

  st_debug: {
    title: 'محطة Debug — إصلاح سريع',
    body: `
      <ul>
        <li>مشهد جاهز به خطأ (اتجاه معكوس/قيمة أولية ناقصة).</li>
        <li>اكتشف الخطأ وأصلحه، ثم التقط لقطة.</li>
      </ul>
    `
  },

  st_export: {
    title: 'محطة Export — حفظ وتسليم',
    body: `
      <ul>
        <li>File → Save to your computer (.sb3).</li>
        <li>التقاط Screenshot للمشهد أثناء التشغيل.</li>
      </ul>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة واسترجاع سريع للمفاهيم.</li>
        <li><b>٥–٤٥ د</b>: ٦ محطات × ٥–٧ دقائق (انتقالات سريعة).</li>
        <li><b>٤٥–٥٠ د</b>: تقويم (Quiz + ورقة مهام + تسليم Mini).</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>ابدأ من البسيط: حركة → حدث → متغيّر واحد.</li>
        <li>التسمية الواضحة للمتغيّرات والكائنات تسهّل الفهم لاحقًا.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع — Intro قصير',
    body: `
      <ul>
        <li>اصنع Intro من ٣ لقطات (عنوان/تحية/بدء).</li>
        <li>أضف تغييرًا في المظهر بين اللقطات.</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة (رقمية)',
    body: `
      <ul>
        <li>استخدام حسابات المدرسة وحفظ محلي من حين لآخر.</li>
        <li>عدم تنزيل ملفات غير موثوقة.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG)',
    body: `
      <ul>
        <li>تكبير خط، تباين عالٍ، وأسماء عربية سليمة.</li>
        <li>شرح لفظي + نصي للخطوات.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'Quiz قصير (٨ بنود) + مفاتيح',
    body: `
      <ol>
        <li>الإحداثي (0,0) هو مركز المنصة. <b>(صواب)</b></li>
        <li>move 10 steps ينقل الكائن إلى اليسار دائمًا. <b>(خطأ)</b></li>
        <li>when green flag clicked يُستخدم للتهيئة. <b>(صواب)</b></li>
        <li>score متغيّر لتخزين نقاط اللاعب. <b>(صواب)</b></li>
        <li>glide يحافظ على موضع x,y ثابتًا. <b>(خطأ)</b></li>
        <li>يمكن إظهار قيمة المتغيّر على المنصة. <b>(صواب)</b></li>
        <li>costume يغيّر مظهر الكائن. <b>(صواب)</b></li>
        <li>y موجب يعني نزولاً لأسفل. <b>(خطأ)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة مهام (٣ تمارين)',
    body: `
      <ul>
        <li>١) اجعل الكائن ينطلق من (0,0) إلى (120,80) خلال ١ ثانية.</li>
        <li>٢) عند الضغط على السهم الأيمن يتحرك 10 خطوات، وعند الأيسر يعود.</li>
        <li>٣) أضف متغيّر score يزداد عند ضغط المسافة ويُصفّر عند r.</li>
      </ul>
    `
  },

  assess_project: {
    title: 'مشروع Mini (٥–٧ دقائق)',
    body: `
      <ul>
        <li>مشهد صغير: حركة + حدث + متغيّر (score).</li>
        <li>التقط لقطة شاشة أثناء تغيّر score.</li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>حركة صحيحة</td><td>go/glide/turn مناسب</td><td>6</td></tr>
          <tr class="row"><td>أحداث</td><td>علم أخضر/مفاتيح تعمل</td><td>4</td></tr>
          <tr class="row"><td>متغيّر</td><td>score يعمل ويظهر</td><td>4</td></tr>
          <tr class="row"><td>تنظيم/لقطة</td><td>تسمية واضحة + Screenshot</td><td>3</td></tr>
          <tr class="row"><td>التزام بالزمن</td><td>تسليم في الوقت</td><td>3</td></tr>
        </tbody>
      </table>
    `
  },

  /* Resources */
  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>Scratch (ويب/أوفلاين)، حسابات المدرسة.</li>
        <li>قوالب Starter بسيطة (ملف .sb3).</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li>دروس الواجهة والإحداثيات (مصادر مفتوحة موثوقة).</li>
      </ul>
    `
  }

};
