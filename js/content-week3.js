/* content-week3.js — Modal content for Week 3 (Wind Turbine)
   Exposes: window.WEEK3
*/
window.WEEK3 = {

  /* Objectives */
  g1: {
    title: '١) لماذا طاقة الرياح؟',
    body: `
      <ul>
        <li>مصدر نظيف متجدد، مناسب للمناطق المفتوحة/المرتفعة.</li>
        <li>إمكانات تعليمية: تحويل طاقة حركية إلى كهربائية يمكن قياسها.</li>
        <li>يرتبط مباشرة بتصميم هندسي (شكل/زاوية الريشة/السرعة).</li>
      </ul>
    `
  },

  g2: {
    title: '٢) مكوّنات العنفة بإيجاز',
    body: `
      <ul>
        <li><b>الريشة/الشفرات:</b> التقاط طاقة الرياح وتحويلها لدوران.</li>
        <li><b>المحور (Hub):</b> تجميع الريش ونقل العزم.</li>
        <li><b>المولّد:</b> تحويل الحركة إلى كهرباء (تيار/جهد).</li>
        <li><b>هيكل/قاعدة:</b> تثبيت واتزان.</li>
      </ul>
      <p class="tag">سؤال موجّه: ما أثر طول الريشة وزاوية ميلها على الأداء؟</p>
    `
  },

  g3: {
    title: '٣) بروتوكول قياس V/I (رياح)',
    body: `
      <h4>السلامة أولاً</h4>
      <ul>
        <li>ثبّت العنفة بعيدًا عن الشعر/الملابس، استخدم جهدًا منخفضًا للدوائر.</li>
      </ul>
      <h4>خطوات القياس</h4>
      <ul>
        <li>اضبط مصدر الهواء على مستويين (منخفض/عالٍ).</li>
        <li>قِس <b>V</b> على الحمل (مثلاً LED/مقاومة)، و<b>I</b> في السلسلة.</li>
        <li>سجّل القيم في جدول، وقدّر <b>P ≈ V × I</b>.</li>
      </ul>
      <table class="tbl">
        <thead><tr><th>السرعة</th><th>V (فولت)</th><th>I (أمبير)</th><th>P≈V×I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>منخفضة</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>عالية</td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    `
  },

  g4: {
    title: '٤) تحليل السرعة والزاوية',
    body: `
      <ul>
        <li><b>السرعة ↑ ⇒ القدرة ↑</b> (ضمن حدود الأمان).</li>
        <li>زاوية ميل الريشة تؤثر على الالتقاط والجرّ (Drag/Lift مبسّط).</li>
        <li>الاتزان مهم لتقليل الاهتزاز وتحسين القياس.</li>
      </ul>
      <p class="tag">مهمة: ارسم عمودين يبيّنان فروق القدرة بين منخفض/عالٍ.</p>
    `
  },

  g5: {
    title: '٥) تصميم Hub+Blade على Tinkercad',
    body: `
      <h4>مواصفات مقترحة</h4>
      <ul>
        <li><b>محور (Hub):</b> أسطوانة Ø14×8 مم، ثقب محوري 2.2–2.4 مم لعمود 2 مم.</li>
        <li><b>ريشة بسيطة:</b> 60×12×2.5 مم، زاوية ميل 8–12°.</li>
        <li>استخدم <b>Units=mm</b>، <b>Ruler</b>، <b>Align</b>، و<b>Hole</b> لعمل الفتحات.</li>
        <li>Export → <b>.STL</b>، ثم إعداد الطباعة: Layer مسودة، Infill 10–15%، Walls 2.</li>
      </ul>
      <p class="tag">اختبار ملاءمة: جرّب Press-fit على العمود؛ استخدم سماحية +0.2~0.4 مم.</p>
    `
  },

  g6: {
    title: '٦) ربط النتائج في Scratch',
    body: `
      <p>اظهر تأثير تغيّر السرعة على عدّاد القدرة بصريًا.</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: windSpeed (1..2), power
Buttons: [Low Wind], [High Wind]
when [Low Wind v] clicked  -> set [windSpeed v] to (1);  broadcast [wind]
when [High Wind v] clicked -> set [windSpeed v] to (2);  broadcast [wind]
when I receive [wind]
  repeat 20
    turn 15
    change [power v] by (windSpeed * 2)
      </pre>
      <p>ادخل السرعات النسبية وفق قياسات مجموعتك.</p>
    `
  },

  /* Stations */
  st_wind: {
    title: 'محطة الرياح — إعداد وتجريب',
    body: `
      <ul>
        <li>ثبت العنفة أمام مصدر الهواء (منخفض/عالٍ).</li>
        <li>تأكد من الاتزان وعدم الاحتكاك.</li>
        <li>جهّز جدولًا لتدوين الملاحظات قبل القياس الكهربائي.</li>
      </ul>
    `
  },

  st_measure: {
    title: 'محطة القياس — DMM',
    body: `
      <ul>
        <li>قِس الجهد (V) على طرفي الحمل، والتيار (I) في السلسلة.</li>
        <li>أعد القياس لمستويين من السرعة.</li>
        <li>احسب القدرة التقريبية P ≈ V×I.</li>
      </ul>
    `
  },

  st_elec: {
    title: 'محطة الإلكترونيات — LED + مقاومة',
    body: `
      <ul>
        <li>ركّب LED مع مقاومة 220–330Ω على بروتوبورد.</li>
        <li>قارن سطوع LED بين السرعات المختلفة.</li>
        <li>نظافة التوصيلات = قراءات أكثر استقرارًا.</li>
      </ul>
    `
  },

  st_scratch: {
    title: 'محطة Scratch — تمثيل بصري',
    body: `
      <p>زرّان للتحكم بالسرعة، بثّ واحد "wind"، عدّاد قدرة يرتفع نسبيًا.</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
[Low Wind] -> set windSpeed=1; broadcast [wind]
[High Wind] -> set windSpeed=2; broadcast [wind]
      </pre>
      <p>أضف رسالة "السرعة عالية" عند تجاوز حدّ القدرة.</p>
    `
  },

  st_3d: {
    title: 'محطة Tinkercad/الطباعة — Hub+Blade',
    body: `
      <ol>
        <li>صمّم محورًا وثقبًا مناسبًا لعمود المحرّك (2 مم → 2.2–2.4 مم).</li>
        <li>ارسم ريشة مسطّحة بزاوية ميل بسيطة.</li>
        <li>Export STL → Slicer: Draft، Infill 10–15%، Walls 2.</li>
        <li>اختبر الملاءمة بعد الطباعة، وعدّل السماحية عند الحاجة.</li>
      </ol>
    `
  },

  st_share: {
    title: 'محطة مشاركة النتائج',
    body: `
      <ul>
        <li>شارِك قيمة P التقريبية للسرعتين.</li>
        <li>ما التعديل الأول الذي ستجربه على الريشة لتحسين الأداء؟</li>
      </ul>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وصورة عنفة/سؤال محفّز.</li>
        <li><b>٥–٣٠ د</b>: محطات (٥×٥ دقائق + انتقالات).</li>
        <li><b>٣٠–٣٨ د</b>: تجميع سريع للنتائج وشرح العلاقة.</li>
        <li><b>٣٨–٤٨ د</b>: Scratch + تحسين تصميم 3D قصير.</li>
        <li><b>٤٨–٥٠ د</b>: بطاقة خروج/تسليم ورقة القياس.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>السرعة تؤثر مباشرة على القدرة المنتَجة (تصوّر نسبي مبسّط).</li>
        <li>زاوية الميل والاتزان يقلّلان الفواقد.</li>
        <li>ميزة Scratch: تحويل الأرقام إلى مشهد مرئي مقنع.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع — تحسين التصميم/الكود',
    body: `
      <ul>
        <li>جرّب ريشة أعرض/أطول ضمن حدود الأمان.</li>
        <li>أضف شرطًا في Scratch: إن power &gt; حد معيّن → رسالة تحذير.</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة',
    body: `
      <ul>
        <li>تثبيت المراوح والعنفات، منع اقتراب الشعر/الملابس.</li>
        <li>جهود منخفضة (٣–٦V) وتثبيت التوصيلات جيدًا.</li>
        <li>عدم لمس فوهة/سرير الطابعة، تهوية جيدة.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول',
    body: `
      <ul>
        <li>تباين عالٍ، تكبير خط عند الحاجة، تنقّل بلوحة المفاتيح.</li>
        <li>نسخ PDF نصية من الورقة/الاختبار.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'الاختبار القصير (٥ بنود) + مفاتيح',
    body: `
      <ol>
        <li>وظيفة الريشة: تحويل طاقة الرياح إلى دوران. <b>(صحيح)</b></li>
        <li>السرعة الأعلى تعني قدرة أكبر غالبًا. <b>(صواب)</b></li>
        <li>الاتزان الجيد يقلّل الاهتزاز ويحسّن القياس. <b>(صواب)</b></li>
        <li>P ≈ V × I صيغة تقريبية للمقارنة. <b>(صواب)</b></li>
        <li>في Scratch نستخدم broadcast لمزامنة كائنات. <b>(صواب)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة قياس (جدول V/I)',
    body: `
      <table class="tbl">
        <thead><tr><th>السرعة</th><th>V</th><th>I</th><th>P≈V×I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>منخفضة</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>عالية</td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <ul>
        <li>استنتج علاقة السرعة بالقدرة من بياناتك.</li>
      </ul>
    `
  },

  assess_project: {
    title: 'مشروع 3D/Scratch (مصغّر)',
    body: `
      <ul>
        <li>3D: Hub+Blade وفق مواصفات الصف، STL + لقطة شاشة.</li>
        <li>Scratch: عدّاد قدرة يتأثر بزرّي السرعة (1/2) مع رسالة حد أعلى.</li>
        <li>تسليم: مجلّد صغير يحوي الملفات والصور.</li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>البند</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>قياسات دقيقة</td><td>V/I وجداول مكتملة</td><td>6</td></tr>
          <tr class="row"><td>تحليل</td><td>استخلاص علاقة السرعة بالقدرة</td><td>5</td></tr>
          <tr class="row"><td>تصميم 3D</td><td>ملاءمة أبعاد وسماحية</td><td>5</td></tr>
          <tr class="row"><td>Scratch</td><td>تمثيل بصري واضح</td><td>2</td></tr>
          <tr class="row"><td>خاتمة</td><td>بطاقة خروج واضحة</td><td>2</td></tr>
        </tbody>
      </table>
    `
  },

  /* Resources */
  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>عنفة/مروحة تعليمية + مولّد/دينامو صغير.</li>
        <li>DMM، بروتوبورد، LED، مقاومات.</li>
        <li>حواسيب (Scratch/Tinkercad)، طابعة ٣D (PLA)، Slicer.</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li><b>Tinkercad</b>: <span class="tag">tinkercad.com</span></li>
        <li>Slicer (Cura/PrusaSlicer): إعدادات مسودة تعليمية.</li>
      </ul>
    `
  }

};
