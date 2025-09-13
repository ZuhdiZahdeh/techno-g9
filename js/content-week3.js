/* content-week3.js — Modal content for Week 3 (Wind Turbine)
   Exposes: window.WEEK3
*/
window.WEEK3 = {

  /* Objectives */
  g1: {
    title: '١) المفاهيم والتمييز',
    body: `
      <ul>
        <li><b>تعريف عنفة الرياح</b> وتمييزها عن <b>المروحة الكهربائية</b>.</li>
        <li>التعرّف إلى <b>DMM</b> ووضعيات القياس الأساسية (V/A/Ω).</li>
        <li>فهم <b>شدة التيار</b> و<b>فرق الجهد</b>.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) مكونات العنفة وآلية العمل',
    body: `
      <ul>
        <li>شفرات (Blades) — تلتقط طاقة الرياح.</li>
        <li>محور دوران (Shaft) + علبة سرعة (اختيارية).</li>
        <li>مولِّد كهربائي (Generator) + مكابح أمان.</li>
        <li>برج وحجرة معدّات.</li>
      </ul>
      <p class="tag">مبدأ التحويل: <b>طاقة حركية ⇢ حركة ميكانيكية ⇢ كهرباء</b>.</p>
    `
  },

  g3: {
    title: '٣) DMM وقياسات V/I',
    body: `
      <h4>DMM — Digital Multi Meter</h4>
      <ul>
        <li>قياس الجهد <b>V</b>: توصيل <b>على التوازي</b> مع الحمل (نطاق DCV).</li>
        <li>قياس التيار <b>A</b>: توصيل <b>على التوالي</b> مع الحمل (نطاق DCA، منفذ mA/10A بحسب الشدة).</li>
        <li>المنافذ الشائعة: <b>COM</b> (سالب)، <b>VΩmA</b>، <b>10A</b>.</li>
      </ul>
      <p class="tag">سلامة: ابدأ بنطاق مرتفع ثم انزل تدريجيًا للحصول على قراءة أدق.</p>
    `
  },

  g4: {
    title: '٤) تحليل النتائج',
    body: `
      <ul>
        <li>كلما زادت سرعة الهواء <b>زادت حركة العنفة</b> ⇒ ترتفع قيم <b>V</b> و<b>I</b>.</li>
        <li>زاوية الشفرة تؤثر على الالتقاط والكفاءة.</li>
        <li>قدرة تقديرية: <b>P ≈ V × I</b>.</li>
      </ul>
    `
  },

  g5: {
    title: '٥) تمثيل برمجي/3D',
    body: `
      <h4>Scratch</h4>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: windSpeed, V, I, P
When [Increase Speed] clicked -> change [windSpeed v] by 1 ; set [V v] to (windSpeed*0.2) ; set [I v] to (windSpeed*0.05) ; set [P v] to (V*I)
      </pre>
      <h4>Tinkercad</h4>
      <ul>
        <li>تصميم Hub + Blade بسيطة (ثخانة 2.5–3 مم) وتثبيت على محور صغير.</li>
      </ul>
    `
  },

  g6: {
    title: '٦) تقويم سريع',
    body: `
      <ol>
        <li>فرّق بين وظيفة <b>العنفة</b> و<b>المروحة</b>.</li>
        <li>أيّهما على التوازي؟ <b>قياس الجهد</b> أم <b>التيار</b>؟</li>
        <li>إذا كانت V=2.4V و I=120mA فكم P؟ (تقريبًا 0.288W)</li>
      </ol>
    `
  },

  /* Stations */
  st_wind: {
    title: 'محطة العنفة — سرعات مختلفة',
    body: `
      <ul>
        <li>وجّه هواءً بسرعتين (منخفض/عالٍ) نحو العنفة.</li>
        <li>سجّل V/I عند كل سرعة.</li>
      </ul>
    `
  },

  st_angle: {
    title: 'محطة زاوية الشفرات',
    body: `
      <ul>
        <li>غيّر زاوية الشفرة قليلًا (±5–10°) ولاحظ تأثيرها على V/I.</li>
        <li>ناقش كيف يؤثر الشكل/الزاوية على الكفاءة.</li>
      </ul>
    `
  },

  st_dmm: {
    title: 'محطة DMM — قراءة صحيحة',
    body: `
      <ul>
        <li>اضبط النطاق المناسب (DCV/DCA) قبل القياس.</li>
        <li>على <b>التوازي</b> لقياس V، وعلى <b>التوالي</b> لقياس I.</li>
      </ul>
    `
  },

  st_scratch: {
    title: 'محطة Scratch',
    body: `<p>بَرمِج منزلقًا للسرعة windSpeed واجعل V/I/P تتغيّر تبعًا له.</p>`
  },

  st_3d: {
    title: 'محطة Tinkercad',
    body: `<p>صمّم Hub + Blade واختبر التوازن والملاءمة بعد الطباعة.</p>`
  },

  /* Flow & Safety */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وسؤال تمهيدي.</li>
        <li><b>٥–٣٠ د</b>: محطات (٤×٦ دقائق + انتقالات).</li>
        <li><b>٣٠–٤٠ د</b>: مناقشة القراءات، حساب P ≈ V×I.</li>
        <li><b>٤٠–٥٠ د</b>: تمثيل برمجي/بطاقة خروج.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>العنفة تولِّد كهرباء من <b>الهواء</b>، والمروحة تستهلك كهرباء لتولِّد <b>هواء</b>.</li>
        <li>V/I يتأثران بالسرعة والحمل وزاوية الشفرة.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع',
    body: `
      <ul>
        <li>قارن بين شفرتين بطولين مختلفين.</li>
        <li>مشروع صغير: قياس P لسرعات متعددة ورسم مخطط عمودي.</li>
      </ul>
    `
  },

  safety: {
    title: 'إرشادات السلامة',
    body: `
      <ul>
        <li>تثبيت العنفة جيدًا وإبعاد الشعر/الملابس الفضفاضة.</li>
        <li>التعامل مع الشفرات بحذر، الجهود منخفضة (٣–٦V).</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول',
    body: `
      <ul>
        <li>تباين عالٍ، تكبير خط عند الحاجة.</li>
        <li>وصف بديل للصور.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'الاختبار القصير (٥ بنود)',
    body: `
      <ol>
        <li>العنفة تولِّد كهرباء من الهواء. <b>(صواب)</b></li>
        <li>لقياس الجهد نصل DMM على التوالي. <b>(خطأ: على التوازي)</b></li>
        <li>زيادة السرعة تزيد V/I غالبًا. <b>(صواب)</b></li>
        <li>P ≈ V×I. <b>(صواب)</b></li>
        <li>المروحة تشبه العنفة في الوظيفة. <b>(خطأ)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة قياسات V/I',
    body: `
      <table class="tbl">
        <thead><tr><th>الحالة</th><th>V (فولت)</th><th>I (أمبير)</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>سرعة منخفضة</td><td></td><td></td><td></td></tr>
          <tr class="row"><td>سرعة متوسطة</td><td></td><td></td><td></td></tr>
          <tr class="row"><td>سرعة عالية</td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>البند</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>قياسات V/I</td><td>جدول مكتمل ودقيق</td><td>8</td></tr>
          <tr class="row"><td>تحليل</td><td>استنتاج العلاقة مع السرعة</td><td>6</td></tr>
          <tr class="row"><td>سلامة</td><td>اتباع التعليمات</td><td>3</td></tr>
          <tr class="row"><td>عرض</td><td>تنظيم ولغة</td><td>3</td></tr>
        </tbody>
      </table>
    `
  },

  /* Resources */
  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>عنفة/مروحة تعليمية + مولِّد صغير.</li>
        <li>جهاز DMM، بروتوبورد، LED، مقاومات.</li>
        <li>مجفف/مروحة لتوليد تيار هوائي.</li>
        <li>حاسوب (Scratch) + Tinkercad.</li>
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
  },

  /* ==== Basic Concepts cards (as requested) ==== */
  w3_def_turbine: {
    title: 'تعريف عنفة الرياح',
    body: `
      <p>جهاز يحوّل <b>طاقة حركة الرياح</b> إلى <b>طاقة كهربائية</b> عبر دوران الشفرات ونقل الحركة إلى المولّد.</p>
    `
  },

  w3_fan_vs_turbine: {
    title: 'الفرق بين عنفة الرياح والمروحة الكهربائية',
    body: `
      <table class="tbl">
        <thead><tr><th>عنفة الرياح</th><th>المروحة الكهربائية</th></tr></thead>
        <tbody>
          <tr class="row"><td>تُنتِج كهرباء من الهواء</td><td>تستخدم كهرباء لتولّد هواء</td></tr>
          <tr class="row"><td>مولِّد كهربائي</td><td>محرك كهربائي</td></tr>
        </tbody>
      </table>
    `
  },

  w3_dmm: {
    title: 'تعريف جهاز القياس الرقمي DMM',
    body: `
      <p>جهاز يقيس <b>الجهد (V)</b> و<b>التيار (A)</b> و<b>المقاومة (Ω)</b>، ويضم منافذ COM وVΩmA و10A.</p>
      <ul>
        <li>قياس V: على التوازي مع الحمل (نطاق DCV).</li>
        <li>قياس I: على التوالي مع الحمل (نطاق DCA، المنفذ المناسب).</li>
      </ul>
    `
  },

  w3_note_wind: {
    title: 'ملاحظة',
    body: `
      <p><b>كلما زادت طاقة/سرعة الرياح</b> تزداد حركة العنفة الهوائية ويزداد <b>التيار</b> و<b>الجهد</b> الناتجان.</p>
    `
  },

  w3_current_def: {
    title: 'تعريف شدة التيار الكهربائي',
    body: `
      <p>معدل تدفق الشحنات الكهربائية في الدائرة، وحدته <b>الأمبير (A)</b>.</p>
    `
  },

  w3_voltage_def: {
    title: 'تعريف فرق الجهد الكهربائي',
    body: `
      <p>الطاقة اللازمة لنقل شحنة من نقطة إلى أخرى، وحدته <b>الفولت (V)</b>.</p>
    `
  },

  w3_principle: {
    title: 'مبدأ عمل عنفات الهواء',
    body: `
      <p>تحويل طاقة الهواء الحركية إلى حركة دورانية للشفرات ثم إلى كهرباء عبر المولِّد.</p>
    `
  },

  w3_q_bulb: {
    title: 'سؤال: لماذا لا يعمل المصباح أحيانًا مع وجود الهواء؟',
    body: `
      <ul>
        <li>السرعة غير كافية ⇒ الجهد أقل من حد إضاءة المصباح.</li>
        <li>توصيل خاطئ (سلسلة/توازي) أو قطبية عكسية.</li>
        <li>مقاومة الحمل كبيرة جدًا أو احتكاك مرتفع في الدوران.</li>
      </ul>
    `
  }
};
