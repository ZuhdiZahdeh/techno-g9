/* content-week4.js — Modal content for Week 4 (Solar PV)
   Exposes: window.WEEK4
*/
window.WEEK4 = {

  /* Objectives */
  g1: {
    title: '١) لماذا الطاقة الشمسية؟',
    body: `
      <ul>
        <li>مصدر نظيف واسع الانتشار، مناسب للأسطح والأسوار والحدائق.</li>
        <li>تطبيقات منزلية ومدرسية: سخان شمسي، إنارة حدائق، شحن أجهزة.</li>
        <li>تجريب سهل بجهود منخفضة ونتائج قابلة للقياس.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) مبدأ الخلية الشمسية (PV) — مبسّط',
    body: `
      <ul>
        <li>الفوتونات تحرّر إلكترونات → تيار كهربائي عند توصيل حمل.</li>
        <li>الألواح = خلايا موصولة (سلسلة/توازٍ) لزيادة الجهد/التيار.</li>
        <li>الخرج يتأثر بشدة الإضاءة وزاوية السقوط ودرجة الحرارة.</li>
      </ul>
      <p class="tag">هدفنا اليوم: ملاحظة <b>الزاوية</b> و<b>التظليل</b> وتأثيرهما على V/I.</p>
    `
  },

  g3: {
    title: '٣) بروتوكول قياس V/I — زاوية/تظليل',
    body: `
      <h4>السلامة أولاً</h4>
      <ul>
        <li>استخدم مصدر ضوء آمن (شمس مباشرة أو مصباح LED قوي غير حار).</li>
        <li>أبعد العينين عن وهج المصباح/الشمس؛ لا تلامس أي أجزاء ساخنة.</li>
      </ul>
      <h4>خطوات القياس</h4>
      <ul>
        <li>قِس <b>V</b> على طرفي الحمل (LED/مقاومة)، و<b>I</b> في السلسلة.</li>
        <li>الزوايا المقترحة: 30°، 45°، 60° باستخدام حامل/منقلة.</li>
        <li>جرّب <b>تظليلًا جزئيًا</b> (¼ من اللوح) وسجّل الفرق.</li>
      </ul>
      <table class="tbl">
        <thead><tr><th>الحالة</th><th>الإعداد</th><th>V (فولت)</th><th>I (أمبير)</th><th>P≈V×I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>زاوية</td><td>30° — بلا تظليل</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>زاوية</td><td>45° — بلا تظليل</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>زاوية</td><td>60° — بلا تظليل</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>تظليل</td><td>45° — تظليل جزئي ¼</td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    `
  },

  g4: {
    title: '٤) تحليل زاوية الميل والتظليل',
    body: `
      <ul>
        <li><b>زاوية مناسبة</b> تزيد التقاط الضوء (خاصة عند الظهيرة).</li>
        <li><b>التظليل الجزئي</b> قد يخفض الخرج بوضوح بسبب تأثر سلاسل الخلايا.</li>
        <li>اربط النتائج ببيئتنا المدرسية: أفضل ميل لساعتنا الدراسية؟</li>
      </ul>
      <p class="tag">مهمة: ارسم عمودياً P لأربع حالات، وحدّد الأفضل.</p>
    `
  },

  g5: {
    title: '٥) تصميم Solar Tilt Bracket على Tinkercad',
    body: `
      <h4>مواصفات مقترحة (وظيفية وبسيطة)</h4>
      <ul>
        <li><b>قاعدة:</b> 60×40×5 مم (حواف مكسّرة خفيفة).</li>
        <li><b>ذراع:</b> 60×12×5 مم مع شِقوق زوايا (30°/45°/60°).</li>
        <li><b>ثقوب تثبيت:</b> 3–4 مم (سماحية +0.2~0.4 مم).</li>
        <li>Units=mm، Ruler، Align، Hole → Group → Export <b>.STL</b>.</li>
        <li>الطباعة (PLA): Layer مسودة، Infill 10–15%، Walls 2، قلّل Supports.</li>
      </ul>
      <p class="tag">بعد الطباعة: أعد القياس على 30° و45° وقارن النتائج.</p>
    `
  },

  g6: {
    title: '٦) ربط النتائج في Scratch',
    body: `
      <p>استخدم زرين للزاوية (30°/45°) وخياري طقس (صحو/غيم جزئي) لتغيير عدّاد القدرة.</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: sunAngle (30 or 45), shade (0 or 25), power
when [Angle 30 v] clicked -> set [sunAngle v] to (30); broadcast [sun]
when [Angle 45 v] clicked -> set [sunAngle v] to (45); broadcast [sun]
when [Clear v] clicked    -> set [shade v]    to (0);  broadcast [sun]
when [Cloud v] clicked    -> set [shade v]    to (25); broadcast [sun]

when I receive [sun]
  set [power v] to (0)
  repeat 20
    change [power v] by (( (sunAngle = 45) ? 4 : 3 ) * (100 - shade) / 100)
      </pre>
      <p>هذا تمثيل نسبي مبسّط لعرض الفكرة بصريًا (ليس نموذجًا فيزيائيًا دقيقًا).</p>
    `
  },

  /* Stations */
  st_setup: {
    title: 'محطة إعداد الشمس/المصدر الضوئي',
    body: `
      <ul>
        <li>إن أمكن في فناء المدرسة: قياسات تحت الشمس.</li>
        <li>بديل صفّي: مصباح LED قوي (بدون حرارة عالية) + مسافة ثابتة.</li>
        <li>ضبط مكان اللوح لتجنّب الوهج على أعين الطلاب.</li>
      </ul>
    `
  },

  st_angle: {
    title: 'محطة زاوية الميل',
    body: `
      <ul>
        <li>قياس V/I عند 30°، 45°، 60° باستخدام منقلة/حامل 3D.</li>
        <li>سجّل القيم بدقة وثبّت الزمن/الظروف.</li>
      </ul>
    `
  },

  st_shadow: {
    title: 'محطة التظليل الجزئي',
    body: `
      <ul>
        <li>ضع ورقة/شريط ظل لتغطية ¼ من اللوح.</li>
        <li>قِس V/I عند زاوية ثابتة (مثلاً 45°) مع/بدون تظليل.</li>
        <li>قارن الفرق وناقش السبب.</li>
      </ul>
    `
  },

  st_elec: {
    title: 'محطة الإلكترونيات — اختيار الحِمل',
    body: `
      <ul>
        <li>جرّب LED مع مقاومة 220–330Ω، أو مروحة صغيرة.</li>
        <li>لاحظ اختلاف V/I حسب الحِمل (لمحة عن "نقطة القدرة القصوى" بصورة مبسطة).</li>
      </ul>
    `
  },

  st_scratch: {
    title: 'محطة Scratch — تمثيل زاوية/تظليل',
    body: `
      <p>زرّان للزاوية (30/45) وزرّان للطقس (صحو/غيم جزئي) → عدّاد قدرة.</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
[Angle 30] -> set sunAngle=30; broadcast [sun]
[Angle 45] -> set sunAngle=45; broadcast [sun]
[Clear]    -> set shade=0;    broadcast [sun]
[Cloud]    -> set shade=25;   broadcast [sun]
      </pre>
      <p>التقط لقطة شاشة لاستخدامها في المطوية/التقرير.</p>
    `
  },

  st_3d: {
    title: 'محطة Tinkercad/الطباعة — حامل زاوية',
    body: `
      <ol>
        <li>أنشئ قاعدة 60×40×5 مم وذراع 60×12×5 مم.</li>
        <li>أضف شقوق زوايا 30/45/60° وثقوب تثبيت 3–4 مم (+0.2~0.4 مم سماحية).</li>
        <li>Export STL → Slicer: Draft، Infill 10–15%، Walls 2، قلّل Supports.</li>
        <li>بعد الطباعة: طبّق القياسات على زاويتين وقارن النتائج.</li>
      </ol>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وصورتان (لوح + زاوية).</li>
        <li><b>٥–٣٠ د</b>: محطات (5×5 دقائق + انتقالات).</li>
        <li><b>٣٠–٣٨ د</b>: تجميع سريع للنتائج وشرح العلاقة.</li>
        <li><b>٣٨–٤٨ د</b>: Scratch + تحسين حامل الزاوية 3D.</li>
        <li><b>٤٨–٥٠ د</b>: بطاقة خروج/تسليم ورقة القياس.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>زاوية الميل تضبط كمية الضوء الواصلة إلى الخلايا.</li>
        <li>التظليل الجزئي قد يقلّل الخرج بشكل واضح.</li>
        <li>التمثيل البرمجي يساعدنا على "رؤية" الأثر بسرعة للصف كله.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع — تحسين التصميم/الكود',
    body: `
      <ul>
        <li>أضف فتحة زاوية إضافية (مثلاً 35°) لاختبار أدق.</li>
        <li>في Scratch: أضف شريط تقدم يغيّر لونه مع القدرة.</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة',
    body: `
      <ul>
        <li>جهود منخفضة (٣–٦V) وتثبيت الوصلات جيدًا.</li>
        <li>تجنّب وهج المصباح/الشمس مباشرةً على العينين.</li>
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
        <li>الخلايا الشمسية تولّد تيارًا عند سقوط الضوء. <b>(صحيح)</b></li>
        <li>زاوية الميل لا تؤثر على الخرج. <b>(خطأ)</b></li>
        <li>التظليل الجزئي قد يقلّل القدرة. <b>(صحيح)</b></li>
        <li>P ≈ V × I صيغة تقريبية للمقارنة. <b>(صحيح)</b></li>
        <li>في Scratch نستخدم broadcast لمزامنة الكائنات. <b>(صحيح)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة قياس (زاوية/تظليل)',
    body: `
      <table class="tbl">
        <thead><tr><th>الحالة</th><th>الإعداد</th><th>V</th><th>I</th><th>P≈V×I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>زاوية</td><td>30° — بلا تظليل</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>زاوية</td><td>45° — بلا تظليل</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>زاوية</td><td>60° — بلا تظليل</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>تظليل</td><td>45° — تظليل جزئي ¼</td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <ul><li>حدّد الإعداد الأفضل لمدرستك واستدلّ ببياناتك.</li></ul>
    `
  },

  assess_project: {
    title: 'مشروع 3D/Scratch (مصغّر)',
    body: `
      <ul>
        <li>3D: حامل زاوية STL + لقطة شاشة تصميم.</li>
        <li>Scratch: زوايا/طقس تؤثر على عدّاد القدرة (كما في الكود أعلاه).</li>
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
          <tr class="row"><td>تحليل</td><td>زاوية/تظليل واستنتاج منطقي</td><td>5</td></tr>
          <tr class="row"><td>تصميم 3D</td><td>ملاءمة أبعاد/سماحية</td><td>5</td></tr>
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
        <li>لوح/خلية شمسية ٣–٦V + حِمل (LED/مروحة صغيرة).</li>
        <li>DMM، منقلة/حامل (يفضل حامل 3D مطبوع).</li>
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
