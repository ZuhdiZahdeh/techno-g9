/* content-week11.js — Modal content for Week 11 (Broadcast & Sync)
   Exposes: window.WEEK11
*/
window.WEEK11 = {

  /* Objectives */
  g1: {
    title: '١) نطاق المهارات',
    body: `
      <ul>
        <li>broadcast [msg] و when I receive [msg].</li>
        <li>تصميم تسلسل مشاهد (Intro → News → End) أو (Red → Yellow → Green).</li>
        <li>تزامن كائنات متعددة: ظهور/اختفاء/مظاهر/أصوات.</li>
        <li>مؤقّتات بسيطة ومتحوّلات (stageIndex / step).</li>
      </ul>
    `
  },

  g2: {
    title: '٢) أنماط البثّ الأساسية',
    body: `
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
# Buttons sprite
when [green flag v] clicked
  broadcast [intro v]
when [space v] key pressed
  broadcast [next v]

# Presenter sprite
when I receive [intro v]
  show
  say [أهلاً بكم] for 2 seconds

# Reporter sprite
when I receive [next v]
  show
  say [الخبر التالي...] for 2 seconds
      </pre>
      <p>سمِّ الرسائل بوضوح: <b>intro</b>/<b>news</b>/<b>end</b> أو <b>red</b>/<b>yellow</b>/<b>green</b>.</p>
    `
  },

  g3: {
    title: '٣) تسلسل المشاهد (Scenes)',
    body: `
      <ul>
        <li>متغيّر <b>scene</b> أو <b>stageIndex</b> لتتبع المرحلة.</li>
        <li>بثّ رسالة عند كل انتقال وتبديل الخلفية/المظاهر.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: scene
when [green flag v] clicked
  set [scene v] to [0]
  broadcast [intro v]

when I receive [intro v]
  set [scene v] to [1]
  switch backdrop to [Studio v]

when I receive [news v]
  set [scene v] to [2]
  switch backdrop to [Field v]

when I receive [end v]
  set [scene v] to [3]
  switch backdrop to [Thanks v]
      </pre>
    `
  },

  g4: {
    title: '٤) تزامن كائنات متعدد',
    body: `
      <ul>
        <li>كائن المقدم/المراسل/الشريط السفلي/الشعار — كلٌّ يستقبل رسالة ويؤدي دوره.</li>
        <li>إظهار/إخفاء حسب المشهد، توقيت بسيط بـ wait.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
# Lower-third (شريط أخبار)
when I receive [news v]
  show
  say [خبر: استخدام الطاقة النظيفة...] for 2 seconds
  hide
      </pre>
    `
  },

  g5: {
    title: '٥) مؤقّتات/تأخير ومتحوّلات',
    body: `
      <ul>
        <li>متحوّل <b>step</b> لتحريك الشريط بالتتابع.</li>
        <li>wait 1 seconds لوقفات محسوبة.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: step
when I receive [news v]
  set [step v] to [0]
  show
  repeat (3)
    change [step v] by (1)
    say (join [فقرة ] (step)) for 1 seconds
  end
  hide
      </pre>
    `
  },

  g6: {
    title: '٦) حفظ/لقطة وتسليم',
    body: `
      <ul>
        <li>File → Save to your computer (.sb3)</li>
        <li>التقاط لقطة شاشة أثناء تبدّل المشاهد.</li>
        <li>اسم الملف: <b>G9_Broadcast_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  /* Stations */
  st_basics: {
    title: 'محطة Broadcast Basics',
    body: `
      <ul>
        <li>زر يبثّ [intro] وكائن يستقبلها ويعرض رسالة ترحيب.</li>
      </ul>
    `
  },

  st_scenes: {
    title: 'محطة Scene Flow',
    body: `
      <ul>
        <li>تسلسل intro → news → end مع تبديل الخلفية.</li>
        <li>مسافة (Space) تبثّ [next].</li>
      </ul>
    `
  },

  st_multi: {
    title: 'محطة Multi-Sprite Sync',
    body: `
      <ul>
        <li>المقدم يظهر في intro، المراسل في news، الشعار يظهر دائمًا.</li>
      </ul>
    `
  },

  st_timers: {
    title: 'محطة Timers',
    body: `
      <ul>
        <li>انتظار 1–2 ثانية بين الفقرات، أو عدّاد step يتغير 3 مرات.</li>
      </ul>
    `
  },

  st_debug: {
    title: 'محطة Debug',
    body: `
      <ul>
        <li>حل مشكلة: كائن لا يستجيب للرسالة (اسم الرسالة/حالة إخفاء/طبقات).</li>
      </ul>
    `
  },

  st_export: {
    title: 'محطة Export',
    body: `
      <ul>
        <li>حفظ .sb3 + لقطة شاشة لمشهد news أثناء التشغيل.</li>
      </ul>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة واسترجاع سريع للبثّ.</li>
        <li><b>٥–٤٥ د</b>: ٦ محطات × ٥–٧ دقائق.</li>
        <li><b>٤٥–٥٠ د</b>: تقويم وتسليم.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>سمِ الرسائل بأسماء واضحة ومتسقة.</li>
        <li>افصل بين منطق "التحكم" (زر/مُخرج) ومنطق "العرض" (كائنات تتجاوب).</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع (سيناريوهات)',
    body: `
      <ul>
        <li>نشرة أخبار من ٣ فقرات.</li>
        <li>إشارة ضوئية: red → green → yellow بحلقات.</li>
        <li>مسرح: intro → scene1 → scene2 → end.</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة (رقمية)',
    body: `
      <ul>
        <li>حسابات المدرسة، حفظ محلي، لا ملفات غير موثوقة.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG)',
    body: `
      <ul>
        <li>أسماء عربية سليمة للرسائل والمتحولات، تكبير خط عند الحاجة.</li>
        <li>شرح لفظي + نصي للتدفق.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'Quiz قصير (٨ بنود) + مفاتيح',
    body: `
      <ol>
        <li>broadcast يُستخدم لتزامن الكائنات. <b>(صواب)</b></li>
        <li>when I receive لا يعمل دون broadcast. <b>(خطأ)</b></li>
        <li>يمكن تبديل الخلفيات داخل مستلم الرسالة. <b>(صواب)</b></li>
        <li>الرسائل يجب أن تحمل أسماء فريدة وواضحة. <b>(صواب)</b></li>
        <li>wait داخل المستلم يؤخر بقية الكائنات دائمًا. <b>(خطأ)</b></li>
        <li>يمكن إظهار/إخفاء كائن عند استقبال رسالة. <b>(صواب)</b></li>
        <li>متغير scene مفيد لتتبع المرحلة الحالية. <b>(صواب)</b></li>
        <li>يمكن استخدام touching color بدل رسالة دائمًا. <b>(خطأ)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة مهام (٣ تمارين)',
    body: `
      <ul>
        <li>١) زر يبثّ [intro] وكائنان يستقبلان ويعرضان تحية.</li>
        <li>٢) تسلسل intro → news → end مع تبديل خلفيات.</li>
        <li>٣) شريط سفلي يظهر في news لثلاث فقرات (step 1..3).</li>
      </ul>
    `
  },

  assess_project: {
    title: 'Mini-Project (٥–٧ دقائق)',
    body: `
      <ul>
        <li>اختر: (نشرة أخبار/إشارة/مسرح).</li>
        <li>المتطلبات: رسالتان على الأقل، كائنان يستقبلان، تبديل خلفية واحد، لقطة شاشة.</li>
        <li>اسم الملف: <b>G9_Broadcast_Mini_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>تصميم الرسائل</td><td>أسماء واضحة وتدفّق منطقي</td><td>6</td></tr>
          <tr class="row"><td>تزامن الكائنات</td><td>استجابة صحيحة في الوقت</td><td>5</td></tr>
          <tr class="row"><td>المشاهد</td><td>تبديل خلفية/إظهار عناصر</td><td>4</td></tr>
          <tr class="row"><td>تنظيم/لقطة</td><td>Screenshot + تسمية سليمة</td><td>3</td></tr>
          <tr class="row"><td>التزام بالزمن</td><td>تسليم في الوقت</td><td>2</td></tr>
        </tbody>
      </table>
    `
  },

  /* Resources */
  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>Scratch (ويب/أوفلاين)، Sprites (مقدم/مراسل/شعار/إشارة).</li>
        <li>أصوات قصيرة (ding / whoosh)، خلفيات Studio/Field/City.</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li>مراجع أنماط البثّ والتزامن (مصادر تعليمية مفتوحة).</li>
      </ul>
    `
  }

};
