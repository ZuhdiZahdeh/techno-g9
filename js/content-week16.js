/* content-week15.js — Modal content for Week 15 (Logic + My Blocks)
   Exposes: window.WEEK15
*/
window.WEEK15 = {

  /* Objectives */
  g1: {
    title: '١) نطاق المهارات',
    body: `
      <ul>
        <li>شروط If/Else/ElseIf للحالات المختلفة.</li>
        <li>حلقات: repeat / forever / repeat until.</li>
        <li>عوامل منطقية: and / or / not، مقارنات: < > =.</li>
        <li>إجراءات مخصّصة (My Blocks) بمدخلات لإعادة الاستخدام.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) شروط If / ElseIf / Else',
    body: `
      <ul>
        <li>بناء قرارات واضحة وتجنّب التداخل غير الضروري.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
when [green flag v] clicked
  if <(score) > (10)> then
    say [ممتاز!] for 1 seconds
  else
    if <(score) > (5)> then
      say [جيد!] for 1 seconds
    else
      say [واصل التقدّم] for 1 seconds
    end
  end
      </pre>
    `
  },

  g3: {
    title: '٣) الحلقات: repeat / forever / repeat until',
    body: `
      <ul>
        <li><b>repeat N</b> لتكرار محدود، <b>forever</b> لتحديث مستمر، <b>repeat until</b> لشروط توقف.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
# مؤقّت تنازلي
Variables: time
when [green flag v] clicked
  set [time v] to [20]
  repeat until <(time) = (0)>
    wait (1) seconds
    change [time v] by (-1)
  end
  broadcast [timeup v]
      </pre>
    `
  },

  g4: {
    title: '٤) العوامل المنطقية والمقارنات',
    body: `
      <ul>
        <li>استخدم and/or لدمج الشروط، وnot لعكس المنطق.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
# داخل حلقة forever
if <<touching [coin v]?> and <not <(paused) = [1]>>> then
  change [score v] by (1)
end
      </pre>
    `
  },

  g5: {
    title: '٥) My Blocks مع مدخلات (إجراءات)',
    body: `
      <ul>
        <li>أنشئ إجراءً للحركة داخل الحدود، وآخر لتحديث HUD.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
# Define a custom block with inputs:
define MoveWithinBounds (speed)
change x by (speed)
if <(x position) > (220)> then go to x:(220) y:(y position)
if <(x position) < (-220)> then go to x:(-220) y:(y position)

define UpdateHUD (score) (time)
say (join [نتيجة: ] (score)) for 0.2 seconds

# Usage:
when [right arrow v] key pressed
  MoveWithinBounds (6)

when [green flag v] clicked
  UpdateHUD (score) (time)
      </pre>
      <p class="tag">سمِّ الإجراءات بوضوح: <b>MoveWithinBounds</b>، <b>UpdateHUD</b>.</p>
    `
  },

  g6: {
    title: '٦) حفظ/لقطة وتسليم',
    body: `
      <ul>
        <li>File → Save to your computer (.sb3)</li>
        <li>لقطة شاشة تُظهر منطق الشروط/الإجراءات أثناء العمل.</li>
        <li>اسم الملف: <b>G9_Logic_Blocks_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  /* Stations */
  st_cond: {
    title: 'محطة Conditions — قرارات واضحة',
    body: `
      <ul>
        <li>اكتب If/Else لسلوك "مستوى الطاقة": منخفض/متوسط/مرتفع.</li>
      </ul>
    `
  },

  st_loops: {
    title: 'محطة Loops — تكرار/توقّف',
    body: `
      <ul>
        <li>نفّذ repeat 10 لتحريك تدريجي، وrepeat until للتوقف عند حافة المنصة.</li>
      </ul>
    `
  },

  st_ops: {
    title: 'محطة Operators — and/or/not',
    body: `
      <ul>
        <li>شرط: لمس عملة <b>و</b> عدم التوقّف المؤقت (paused=0) → زيادة score.</li>
      </ul>
    `
  },

  st_blocks: {
    title: 'محطة My Blocks — إجراءان مخصّصان',
    body: `
      <ul>
        <li>أنشئ MoveWithinBounds(speed) و UpdateHUD(score,time).</li>
        <li>استدعِ الأول مع مفاتيح الاتجاه، والثاني كل ثانية.</li>
      </ul>
    `
  },

  st_refactor: {
    title: 'محطة Refactor — ترتيب الكود',
    body: `
      <ul>
        <li>انقل الأكواد المكرّرة من الأسبوع 10/14 داخل My Blocks.</li>
      </ul>
    `
  },

  st_debug: {
    title: 'محطة Debug/Export',
    body: `
      <ul>
        <li>عالج شرطًا لا يعمل (أقواس/and-or)، ثم احفظ .sb3 + Screenshot.</li>
      </ul>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وأمثلة قبل/بعد (Refactor).</li>
        <li><b>٥–٤٥ د</b>: ٦ محطات × ٥–٧ دقائق.</li>
        <li><b>٤٥–٥٠ د</b>: تقويم سريع وتسليم.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح (Refactor)',
    body: `
      <ul>
        <li>قلّل التكرار باستخدام My Blocks بمدخلات.</li>
        <li>اجعل الشروط قصيرة وواضحة (سطر/شرطان بحدّ أقصى).</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع (تحسين الأداء)',
    body: `
      <ul>
        <li>اجمع التحديثات داخل حلقة واحدة (forever) بدل عدة حلقات متوازية.</li>
        <li>استخدم متغيّر <b>paused</b> لتعطيل منطق محدّد عند الحاجة.</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة (رقمية)',
    body: `
      <ul>
        <li>حفظ محلي متكرّر، لا ملفات غير موثوقة.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG)',
    body: `
      <ul>
        <li>تسمية عربية واضحة للإجراءات والمتغيّرات، تكبير الخط عند الحاجة.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'Quiz قصير (٨ بنود) + مفاتيح',
    body: `
      <ol>
        <li>ElseIf مفيد لحالات متعددة متسلسلة. <b>(صواب)</b></li>
        <li>repeat until يتوقف عندما يصبح الشرط صوابًا. <b>(صواب)</b></li>
        <li>and يُعيد صوابًا إذا كان أحد الشرطين صوابًا. <b>(خطأ)</b></li>
        <li>not يعكس نتيجة الشرط. <b>(صواب)</b></li>
        <li>My Blocks تسمح بإنشاء إجراءات بلا مدخلات فقط. <b>(خطأ)</b></li>
        <li>يمكن تمرير متغيّرات كمدخلات لإجراءات مخصّصة. <b>(صواب)</b></li>
        <li>المقارنة < يختبر "أصغر من". <b>(صواب)</b></li>
        <li>forever تنتهي تلقائيًا بعد 10 ثوانٍ. <b>(خطأ)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة مهام (٣ تمارين)',
    body: `
      <ul>
        <li>١) اكتب شرطًا يبدّل المظهر إلى "تحذير" إذا time < 5.</li>
        <li>٢) نفّذ repeat 20 لتحريك الكائن، وتوقّف عند edge باستخدام repeat until.</li>
        <li>٣) أنشئ UpdateHUD(score,time) واستدعِه كل ثانية.</li>
      </ul>
    `
  },

  assess_project: {
    title: 'Mini-Project (إجراءات + منطق)',
    body: `
      <ul>
        <li>المتطلبات: إجراءان مخصّصان + شرط مركّب and/or + حلقة أساسية واحدة.</li>
        <li>اسم الملف: <b>G9_Logic_Mini_GroupX_v1.sb3</b> + Screenshot أثناء التشغيل.</li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>شروط منطقية</td><td>If/Else واضحة وصحيحة</td><td>6</td></tr>
          <tr class="row"><td>حلقات</td><td>حلقة أساسية منظمة</td><td>4</td></tr>
          <tr class="row"><td>My Blocks</td><td>إجراءان بمدخلات</td><td>6</td></tr>
          <tr class="row"><td>تنظيم/لقطة</td><td>تسمية عربية + Screenshot</td><td>2</td></tr>
          <tr class="row"><td>الزمن</td><td>تسليم في الوقت</td><td>2</td></tr>
        </tbody>
      </table>
    `
  },

  /* Resources */
  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>Scratch (ويب/أوفلاين)، مشاريع الأسابيع 10–14 لإعادة الهيكلة.</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li>شروط/حلقات/عوامل منطقية + My Blocks (مصادر تعليمية مفتوحة).</li>
      </ul>
    `
  }

};
