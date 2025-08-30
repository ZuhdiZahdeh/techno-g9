/* content-week7.js — Modal content for Week 7 (Review + Midterm Prep)
   Exposes: window.WEEK7
*/
window.WEEK7 = {

  /* Objectives */
  g1: {
    title: '١) نطاق المراجعة',
    body: `
      <ul>
        <li>مفاهيم الطاقة النظيفة (رياح/شمس/مياه) والتمييز عن الأحفورية.</li>
        <li>قياسات <b>V/I</b> وقدرة <b>P ≈ V×I</b> وتفسير التغيّر (سرعة/زاوية/تدفّق).</li>
        <li>أساسيات Scratch: البثّ/الاستقبال، المتغيّرات، عدّادات.</li>
        <li>Tinkercad/٣D: القياسات بالـ mm، السماحية، اتجاه الطباعة.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) خريطة مفاهيم الوحدة',
    body: `
      <ul>
        <li>مصادر: شمس/رياح/مياه ← تطبيقات منزلية/مدرسية.</li>
        <li>مختبر: رياح (السرعة) | شمس (الزاوية/التظليل) | مياه (التدفّق/الارتفاع).</li>
        <li>مخرجات: قياسات V/I، تقارير مختبر، وسائط/Scratch، نماذج ٣D.</li>
      </ul>
      <p class="tag">نشاط: صُمم خريطة بعقد وروابط (3–5 عقد رئيسة تكفي).</p>
    `
  },

  g3: {
    title: '٣) قياس V/I والقدرة (تذكير سريع)',
    body: `
      <ul>
        <li>الجهد <b>V</b> على طرفي الحمل؛ التيار <b>I</b> في السلسلة.</li>
        <li><b>P ≈ V×I</b> للمقارنة النسبية بين الحالات.</li>
        <li>ثبّت التوصيلات وخفّض الضوضاء لتحسين الاستقرار.</li>
      </ul>
      <table class="tbl">
        <thead><tr><th>الحالة</th><th>V</th><th>I</th><th>P≈V×I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>رياح منخفضة</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>رياح عالية</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>شمس ٤٥°</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>تدفّق عالٍ</td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    `
  },

  g4: {
    title: '٤) Blueprint امتحان منتصف الفصل',
    body: `
      <ul>
        <li><b>قسم نظري (٢٠ درجة):</b> ١٢ MCQ + ٤ صواب/خطأ + ٢ قصيرة.</li>
        <li><b>قسم عملي مختبر (١٥ درجة):</b> سؤال تفسير قياسات/رسم توصيل بسيط.</li>
        <li><b>قسم برمجة/وسائط (٥ درجات):</b> بثّ/متغيّر يغيّر عدّادًا + لقطة.</li>
        <li>الزمن: ٤٥ دقيقة. مسموح آلة حاسبة بسيطة.</li>
      </ul>
      <p class="tag">ركّز على: تفسير التأثير (سرعة/زاوية/تظليل/تدفّق) بالأدلة.</p>
    `
  },

  g5: {
    title: '٥) Speed-Run Scratch (٥–٧ د)',
    body: `
      <p>مشهد زرّين + عدّاد قدرة.</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: power, factor
[Wind]  -> set factor=2; broadcast [go]
[Sun]   -> set factor=3; broadcast [go]
when I receive [go]
  set power to 0
  repeat 20
    change power by factor
      </pre>
      <p>التقاط لقطة شاشة بعد تشغيل الزرين.</p>
    `
  },

  g6: {
    title: '٦) مراجعة Tinkercad/الطباعة ٣D',
    body: `
      <ul>
        <li>سماحية الفتحات: +0.2~0.4 مم عن قطر العمود.</li>
        <li>اتجاه الطباعة يقلّل الدعامات ويزيد المتانة.</li>
        <li>إعادة تسمية الملفات: <b>G9_9A_Part_GroupX_v2.stl</b></li>
      </ul>
    `
  },

  /* Stations */
  st_map: {
    title: 'محطة الخريطة (٧ د)',
    body: `
      <ul>
        <li>لوح ماركر: مصادر — تجارب — مخرجات — تطبيقات.</li>
        <li>التقاط صورة للخريطة كمرجع للمذاكرة.</li>
      </ul>
    `
  },

  st_measure: {
    title: 'محطة القياس (٧ د)',
    body: `
      <ul>
        <li>قراءة V/I لحالتين (رياح منخفضة/عالية أو زاويتين).</li>
        <li>حساب P النسبي بسرعة.</li>
      </ul>
    `
  },

  st_errors: {
    title: 'محطة كشف الأخطاء (٧ د)',
    body: `
      <ul>
        <li>صُوَر ثلاث دوائر، اكتشف الخطأ: توصيل مقلوب/مقياس غير صحيح/مقاومة خاطئة.</li>
        <li>اكتب التصحيح المختصر.</li>
      </ul>
    `
  },

  st_scratch: {
    title: 'محطة Scratch (٧ د)',
    body: `
      <p>Speed-Run: زرّان + متغيّر + عدّاد.</p>
      <p>تحقّق من اتجاه النص العربي وصحّح أسماء المتغيّرات.</p>
    `
  },

  st_3dqa: {
    title: 'محطة 3D/QA (٧ د)',
    body: `
      <ul>
        <li>راجع ملف STL: الأبعاد/الثقوب/السماحية/الاتجاه.</li>
        <li>اقترح تعديلًا واحدًا لتحسين الأداء.</li>
      </ul>
    `
  },

  st_quiz: {
    title: 'محطة Quiz (٧ د)',
    body: `
      <p>بنود قصيرة (٨ أسئلة) لتشخيص المنشورات النهائية قبل الامتحان.</p>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وعرض أهداف المراجعة.</li>
        <li><b>٥–٤٥ د</b>: ٦ محطات (٦×٦–٧ د مع انتقالات سريعة).</li>
        <li><b>٤٥–٥٠ د</b>: تلخيص/خطة مذاكرة (نقاط قوة/تحسين).</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>اربط كل قياس بسلوك فيزيائي: سرعة/زاوية/تظليل/تدفّق.</li>
        <li>في Scratch: البثّ = تزامن، المتغيّرات = تتبّع القيم.</li>
        <li>في ٣D: السماحية والاتجاه يُغيّران <b>الملاءمة والمتانة</b>.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع (تكامل النتائج)',
    body: `
      <ul>
        <li>أعد رسم مخطط عمودي يقارن قدرة الحالات الأربع.</li>
        <li>صِغ ٣ جُمل أدلّة يمكنك استخدامها في الامتحان.</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة',
    body: `
      <ul>
        <li>جهود منخفضة (٣–٦V)، تثبيت الوصلات، فصل الماء عن الكهرباء.</li>
        <li>Scratch/تصفح آمن بحساب المدرسة.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG)',
    body: `
      <ul>
        <li>تباين عالٍ، تكبير خط، وصف بديل للصور.</li>
        <li>نسخ PDF نصية لورقة الخريطة والـ Quiz.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'Quiz مراجعة (٨ بنود) + مفاتيح',
    body: `
      <ol>
        <li>زيادة سرعة الرياح ترفع القدرة غالبًا. <b>(صواب)</b></li>
        <li>التظليل الجزئي لا يؤثر على خرج اللوح الشمسي. <b>(خطأ)</b></li>
        <li>P ≈ V×I صيغة تقريبية للمقارنة. <b>(صواب)</b></li>
        <li>في Scratch نستخدم broadcast للمزامنة. <b>(صواب)</b></li>
        <li>السماحية 0.0 مم توصية جيدة للفتحات. <b>(خطأ)</b></li>
        <li>قياس V يكون على طرفي الحمل. <b>(صواب)</b></li>
        <li>زيادة التدفق قد ترفع القدرة المائية. <b>(صواب)</b></li>
        <li>زاوية ٤٥° قد تكون أفضل من ٦٠° لبعض الأوقات. <b>(صواب)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة خريطة مفاهيم (قابلة للطباعة)',
    body: `
      <table class="tbl">
        <thead><tr><th>العقدة</th><th>الوصف</th><th>روابط</th></tr></thead>
        <tbody>
          <tr class="row"><td>مصادر الطاقة النظيفة</td><td></td><td>↔</td></tr>
          <tr class="row"><td>مختبر (رياح/شمس/مياه)</td><td></td><td>↔</td></tr>
          <tr class="row"><td>V/I و P≈V×I</td><td></td><td>↔</td></tr>
          <tr class="row"><td>Scratch (بث/متغيّر)</td><td></td><td>↔</td></tr>
          <tr class="row"><td>3D (سماحية/اتجاه)</td><td></td><td>↔</td></tr>
        </tbody>
      </table>
    `
  },

  assess_blueprint: {
    title: 'Blueprint الامتحان (ملخّص الطالب)',
    body: `
      <ul>
        <li>نظري (٢٠): مفاهيم + تطبيقات + تفسير تغيّر القدرة.</li>
        <li>عملي (١٥): سؤال قياسات و/أو رسم توصيل صحيح.</li>
        <li>برمجة/وسائط (٥): بث/متغيّر + لقطة عدّاد.</li>
        <li>نصيحة: ابدأ بالأسهل، ثم العملي، ثم عد للأسئلة المفتوحة.</li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر للمراجعة الصفّية (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>البند</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>خريطة مفاهيم</td><td>3–5 عقد وروابط واضحة</td><td>5</td></tr>
          <tr class="row"><td>قياسات</td><td>جدول V/I صحيح + P</td><td>5</td></tr>
          <tr class="row"><td>Scratch</td><td>زرّان + عدّاد + لقطة</td><td>4</td></tr>
          <tr class="row"><td>3D/QA</td><td>ملاحظة صحيحة للسماحية/الاتجاه</td><td>3</td></tr>
          <tr class="row"><td>خطة مذاكرة</td><td>نقطتا قوة + نقطة تحسين</td><td>3</td></tr>
        </tbody>
      </table>
    `
  },

  /* Resources */
  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>لوح ماركر/بطاقات لاصقة، DMM، بروتوبورد، LED/مقاومات.</li>
        <li>حواسيب (Scratch/Tinkercad)، نماذج 3D جاهزة للمراجعة.</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li><b>Tinkercad</b>: <span class="tag">tinkercad.com</span></li>
      </ul>
    `
  }

};
