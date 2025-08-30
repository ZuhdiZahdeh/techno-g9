/* content-week5.js — Modal content for Week 5 (Hydropower)
   Exposes: window.WEEK5
*/
window.WEEK5 = {

  /* Objectives */
  g1: {
    title: '١) لماذا طاقة المياه؟',
    body: `
      <ul>
        <li>مصدر نظيف يمكن استثماره في مناطق جريان/ارتفاع مناسب.</li>
        <li>تعليمياً: تحويل طاقة وضع/حركية إلى كهربائية يمكن قياسها.</li>
        <li>يرتبط مباشرة بتصميم دفّاعة/عجلة مائية وقياس ناتجها.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) أساسيات النظام المائي (مبسّط)',
    body: `
      <ul>
        <li><b>التدفّق (Flow):</b> كمية الماء المارّة (منخفض/عالٍ في الصف).</li>
        <li><b>الارتفاع (Head):</b> فرق الارتفاع بين الخزان والعجلة/الدفّاعة.</li>
        <li><b>الدفّاعة/العجلة:</b> شفرات/أكواب تحول اندفاع الماء إلى دوران.</li>
        <li><b>المولد/الدينامو:</b> يحوّل الحركة إلى كهرباء.</li>
      </ul>
      <p class="tag">الفكرة المبسّطة: زيادة التدفق/الارتفاع ↗ قد ترفع القدرة ضمن حدود الأمان.</p>
    `
  },

  g3: {
    title: '٣) بروتوكول قياس V/I (تدفّق/ارتفاع)',
    body: `
      <h4>السلامة أولاً</h4>
      <ul>
        <li>فصل الماء عن الدارات الكهربائية؛ أرضية جافة؛ مناشف جاهزة.</li>
        <li>استخدم جهدًا منخفضًا (٣–٦V) وحِملًا بسيطًا (LED/مقاومة).</li>
      </ul>
      <h4>خطوات القياس</h4>
      <ul>
        <li>اضبط <b>تدفّقين</b> (منخفض/عالٍ) أو <b>ارتفاعين</b> للماء.</li>
        <li>ركّب الدفّاعة على عمود الدينامو التعليمي.</li>
        <li>قِس <b>V</b> على الحمل و<b>I</b> في السلسلة، ثمّ قرّب <b>P ≈ V×I</b>.</li>
      </ul>
      <table class="tbl">
        <thead><tr><th>الحالة</th><th>تدفّق/ارتفاع</th><th>V (فولت)</th><th>I (أمبير)</th><th>P≈V×I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>١</td><td>تدفّق منخفض</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>٢</td><td>تدفّق عالٍ</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>٣</td><td>ارتفاع أكبر (اختياري)</td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    `
  },

  g4: {
    title: '٤) تحليل التدفق/الارتفاع وعدد الشفرات',
    body: `
      <ul>
        <li><b>التدفّق ↑</b> غالبًا <b>القدرة ↑</b> (اندفاع ماء أكبر على الشفرات).</li>
        <li><b>الارتفاع ↑</b> يزيد طاقة الوضع المحوّلة إلى حركة.</li>
        <li>عدد الشفرات وزاويتها يؤثران على الالتقاط والجرّ (سحب/مقاومة).</li>
      </ul>
      <p class="tag">مهمة: قارن بين دفّاعة 6 و8 شفرات (نظريًا) — أيّهما ترجّح؟ ولماذا؟</p>
    `
  },

  g5: {
    title: '٥) تصميم Impeller/Wheel على Tinkercad',
    body: `
      <h4>مواصفات مقترحة (وظيفية وبسيطة)</h4>
      <ul>
        <li><b>قرص:</b> قطر Ø40–60 مم، سماكة 3 مم.</li>
        <li><b>شفرات:</b> 6–8 شفرات 8×20×2 مم (لزّقها على القرص بمحاذاة متساوية).</li>
        <li><b>حُبَيك/محور:</b> ثقب مركزي 2.2–2.4 مم لعمود 2 مم (سماحية +0.2~0.4 مم).</li>
        <li>Units=mm، Ruler، Align، Duplicate+Rotate لتوزيع الشفرات، Export <b>.STL</b>.</li>
        <li>الطباعة (PLA): Layer مسودة، Infill 10–15%، Walls 2، قلّل Supports.</li>
      </ul>
      <p class="tag">بعد الطباعة: اختبر الملاءمة والدوران، ثم أعد قياس V/I للحالة الأفضل.</p>
    `
  },

  g6: {
    title: '٦) ربط النتائج في Scratch',
    body: `
      <p>غيّر عدّاد القدرة وفق التدفق/الارتفاع (نسبيًا) لعرض الفكرة بصريًا.</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: flow (1..2), head (1..2), power
Buttons: [Low Flow], [High Flow], [Low Head], [High Head]
when [Low Flow v] clicked  -> set [flow v] to (1); broadcast [water]
when [High Flow v] clicked -> set [flow v] to (2); broadcast [water]
when [Low Head v] clicked  -> set [head v] to (1); broadcast [water]
when [High Head v] clicked -> set [head v] to (2); broadcast [water]

when I receive [water]
  set [power v] to (0)
  repeat 20
    change [power v] by ((flow * head) * 2) // تمثيل نسبي مبسّط
      </pre>
      <p>أدخل قيَمًا نسبية من جدول مجموعتك — هذا نموذج بصري مبسّط لاختصار المفهوم.</p>
    `
  },

  /* Stations */
  st_setup: {
    title: 'محطة إعداد الماء/الخزان',
    body: `
      <ul>
        <li>خزان صغير/مضخة + أنبوب اتجاهي، وعاء تجميع للماء.</li>
        <li>افصل منطقة الماء عن الدارات الكهربائية؛ أرضية جافة.</li>
      </ul>
    `
  },

  st_flow: {
    title: 'محطة التدفق/الارتفاع',
    body: `
      <ul>
        <li>اضبط تدفّقين (منخفض/عالٍ) أو ارتفاعين (فرق مستوى).</li>
        <li>ارصد فرق الأداء أثناء تدوير الدفّاعة.</li>
      </ul>
    `
  },

  st_impeller: {
    title: 'محطة تركيب الدفّاعة',
    body: `
      <ul>
        <li>ركّب الدفّاعة المطبوعة على العمود (Press-fit).</li>
        <li>تحقّق من الاتزان ومنع الاحتكاك الجانبي.</li>
      </ul>
    `
  },

  st_elec: {
    title: 'محطة الإلكترونيات/الحِمل',
    body: `
      <ul>
        <li>LED + مقاومة 220–330Ω أو مروحة صغيرة كحِمل.</li>
        <li>قِس V/I باستخدام DMM، واحفظ القراءات في الجدول.</li>
      </ul>
    `
  },

  st_scratch: {
    title: 'محطة Scratch — تمثيل تدفّق/ارتفاع',
    body: `
      <p>زرّان للتدفّق (Low/High) وزرّان للارتفاع (Low/High) + عدّاد قدرة.</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
[Low Flow]  -> set flow=1;  broadcast [water]
[High Flow] -> set flow=2;  broadcast [water]
[Low Head]  -> set head=1;  broadcast [water]
[High Head] -> set head=2;  broadcast [water]
      </pre>
      <p>التقط لقطة شاشة لاستخدامها في التقرير/المطوية.</p>
    `
  },

  st_3d: {
    title: 'محطة Tinkercad/الطباعة — دفّاعة/عجلة',
    body: `
      <ol>
        <li>أنشئ قرصًا بقطر 40–60 مم وسماكة 3 مم.</li>
        <li>أضف 6–8 شفرات 8×20×2 مم موزعة بانتظام (Duplicate+Rotate).</li>
        <li>ثقب مركزي 2.2–2.4 مم لعمود 2 مم.</li>
        <li>Export STL → Slicer: Draft, Infill 10–15%, Walls 2.</li>
      </ol>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وصورة لعجلة مائية/سد صغير.</li>
        <li><b>٥–٣٠ د</b>: محطات (5×5 دقائق + انتقالات).</li>
        <li><b>٣٠–٣٨ د</b>: تجميع سريع للنتائج وشرح العلاقة.</li>
        <li><b>٣٨–٤٨ د</b>: Scratch + تحسين تصميم الدفّاعة 3D.</li>
        <li><b>٤٨–٥٠ د</b>: بطاقة خروج/تسليم ورقة القياس.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>بصورة مبسّطة: القدرة تتأثر بالتدفّق والارتفاع (Flow × Head).</li>
        <li>شكل الشفرة وزاويتها يؤثران على الالتقاط والكفاءة.</li>
        <li>Scratch يحوّل الأرقام إلى مشهد بصري يقنع الصف.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع — تحسين التصميم/الكود',
    body: `
      <ul>
        <li>جرّب عدد شفرات مختلفًا أو زاوية ميل أكبر/أصغر (ضمن الأمان).</li>
        <li>أضف شرطًا: إذا power &gt; حد → رسالة "تدفّق قوي".</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة',
    body: `
      <ul>
        <li>فصل الماء عن الكهرباء؛ أرضية جافة؛ مناشف جاهزة.</li>
        <li>جهود منخفضة (٣–٦V) وتثبيت الوصلات بإحكام.</li>
        <li>عدم لمس فوهة/سرير الطابعة، تهوية جيدة.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول',
    body: `
      <ul>
        <li>تباين عالٍ، تكبير خط، تنقّل بلوحة المفاتيح.</li>
        <li>نسخ PDF نصية من الورقة/الاختبار.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'الاختبار القصير (٥ بنود) + مفاتيح',
    body: `
      <ol>
        <li>طاقة المياه تستغل تدفّق/ارتفاع الماء لإنتاج حركة. <b>(صحيح)</b></li>
        <li>زيادة التدفق غالبًا لا تغيّر القدرة. <b>(خطأ)</b></li>
        <li>عدد الشفرات وزاويتها قد يؤثران على الأداء. <b>(صحيح)</b></li>
        <li>P ≈ V × I صيغة تقريبية للمقارنة. <b>(صحيح)</b></li>
        <li>في Scratch نستخدم broadcast لمزامنة الكائنات. <b>(صحيح)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة قياس (تدفّق/ارتفاع)',
    body: `
      <table class="tbl">
        <thead><tr><th>الحالة</th><th>تدفّق/ارتفاع</th><th>V</th><th>I</th><th>P≈V×I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>١</td><td>منخفض</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>٢</td><td>عالٍ</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>٣</td><td>ارتفاع أكبر</td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <ul>
        <li>استنتج أي إعداد أعطى قدرة أعلى ولماذا.</li>
      </ul>
    `
  },

  assess_project: {
    title: 'مشروع 3D/Scratch (مصغّر)',
    body: `
      <ul>
        <li>3D: دفّاعة/عجلة STL + لقطة شاشة تصميم.</li>
        <li>Scratch: أزرار تدفّق/ارتفاع تغيّر عدّاد القدرة.</li>
        <li>تسليم: مجلّد يحوي الملفات والصور.</li>
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
          <tr class="row"><td>تحليل</td><td>استنتاج أثر التدفّق/الارتفاع</td><td>5</td></tr>
          <tr class="row"><td>تصميم 3D</td><td>ملاءمة أبعاد/سماحية/اتزان</td><td>5</td></tr>
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
        <li>خزان/مضخة صغيرة + أنبوب لتوليد تدفّق قابل للتحكم.</li>
        <li>دفّاعة/عجلة مطبوعة 3D + دينامو/مولّد تعليمي.</li>
        <li>DMM، بروتوبورد، LED، مقاومات.</li>
        <li>حواسيب (Scratch/Tinkercad)، طابعة ٣D (PLA)، Slicer.</li>
        <li>مناشف وأدوات تجفيف للحفاظ على منطقة جافة.</li>
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
