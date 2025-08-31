/* content-week10.js — Modal content for Week 10 (Scratch Control)
   Exposes: window.WEEK10
*/
window.WEEK10 = {

  /* Objectives */
  g1: {
    title: '١) نطاق المهارات',
    body: `
      <ul>
        <li>تحكّم بالمفاتيح: يمين/يسار/أعلى/أسفل + سرعة.</li>
        <li>حدود المنصّة والارتداد.</li>
        <li>أنيميشن بالمظاهر (2–3 إطارات).</li>
        <li>اصطدام مع عائق/هدف وتحديث نقاط.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) مخطط تحكّم بالمفاتيح',
    body: `
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: speed
when [green flag] clicked
  set [speed v] to (6)
  go to x:(0) y:(0)
when [right arrow v] key pressed
  change x by (speed)
  switch costume to [walk-right v]
when [left arrow v] key pressed
  change x by ((0 - speed))
  switch costume to [walk-left v]
when [up arrow v] key pressed
  change y by (speed)
when [down arrow v] key pressed
  change y by ((0 - speed))
      </pre>
      <p>حافظ على <b>direction</b> مناسب عند تبديل المظهر.</p>
    `
  },

  g3: {
    title: '٣) حدود/ارتداد',
    body: `
      <ul>
        <li>طريقة ١ (Scratch جاهزة): <b>if on edge, bounce</b> (للكائنات المتحركة بالاتجاه).</li>
        <li>طريقة ٢ (يدوي): قصّ الإحداثيات داخل الحدود.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
# clamp within stage bounds (approx: x -220..220, y -160..160)
if <(x position) > (220)> then go to x:(220) y:(y position)
if <(x position) < (-220)> then go to x:(-220) y:(y position)
if <(y position) > (160)> then go to x:(x position) y:(160)
if <(y position) < (-160)> then go to x:(x position) y:(-160)
      </pre>
    `
  },

  g4: {
    title: '٤) أنيميشن بالمظاهر (Walk Cycle)',
    body: `
      <ul>
        <li>مظهران/ثلاثة: walk-1 / walk-2 / stand.</li>
        <li>بدّل المظهر كل خطوة/خطوتين للحركة السلسة.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
when [right arrow v] key pressed
  change x by (speed)
  next costume
when [left arrow v] key pressed
  change x by ((0 - speed))
  next costume
      </pre>
    `
  },

  g5: {
    title: '٥) اصطدام + نقاط',
    body: `
      <ul>
        <li>تحقق الاصطدام: <b>touching [obstacle]</b> أو <b>touching color</b>.</li>
        <li>تحديث النقاط/الصحة: score / lives.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: score
when [green flag] clicked
  set [score v] to (0)
forever
  if <touching [coin v]?> then
    change [score v] by (1)
    hide [coin v]  // or move coin to a new random position
  end
end
      </pre>
    `
  },

  g6: {
    title: '٦) حفظ/لقطة وتسليم',
    body: `
      <ul>
        <li>File → Save to your computer (.sb3)</li>
        <li>التقاط لقطة شاشة أثناء الحركة وتحديث score.</li>
        <li>تسمية ملف واضحة: <b>G9_Control_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  /* Stations */
  st_keys: {
    title: 'محطة Keys — حركة بمفاتيح الاتجاه',
    body: `
      <ul>
        <li>طبّق يمين/يسار/أعلى/أسفل بسرعة 6.</li>
        <li>بدّل المظهر يمين/يسار.</li>
      </ul>
    `
  },

  st_borders: {
    title: 'محطة Borders — قص داخل الحدود',
    body: `
      <ul>
        <li>امنع الخروج من المنصة عبر if/then + go to.</li>
        <li>اختبر زوايا الشاشة الأربع.</li>
      </ul>
    `
  },

  st_anim: {
    title: 'محطة Animation — Walk Cycle',
    body: `
      <ul>
        <li>بدّل المظهر كل نقرة مفتاح، وأضف "stand" عند التوقف.</li>
      </ul>
    `
  },

  st_collision: {
    title: 'محطة Collision — Coin/Obstacle',
    body: `
      <ul>
        <li>اصطدام مع "coin" يزيد score.</li>
        <li>(اختياري) اصطدام مع "rock" يُنقِص "lives".</li>
      </ul>
    `
  },

  st_hud: {
    title: 'محطة HUD/Score — عرض النقاط',
    body: `
      <ul>
        <li>أظهر score على المنصة، لوّن العداد، وأضف صوتًا قصيرًا عند جمع العملة.</li>
      </ul>
    `
  },

  st_export: {
    title: 'محطة Debug/Export',
    body: `
      <ul>
        <li>صحّح خطأ بسيط (اتجاه/حدود)، ثم احفظ .sb3 + Screenshot.</li>
      </ul>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وعرض الهدف.</li>
        <li><b>٥–٤٥ د</b>: ٦ محطات × ٥–٧ دقائق.</li>
        <li><b>٤٥–٥٠ د</b>: تقويم سريع وتسليم.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>الفرق بين <b>change x/y</b> و<b>go to</b> (إزاحة مقابل قفزة).</li>
        <li>سرعة/تسارع مبسّط: speed يزيد/ينقص تدريجيًا لنعومة الحركة.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: speed
when [space v] key pressed
  change [speed v] by (1)  // تسارع
when [s v] key pressed
  change [speed v] by (-1) // تباطؤ
      </pre>
    `
  },

  elaborate: {
    title: 'التوسّع — تحسينات لعب',
    body: `
      <ul>
        <li>Trail بسيط عبر رسم/قلم أو تأثيرات Looks.</li>
        <li>Random coin position: go to x:(pick random -200 to 200) y:(pick random -140 to 140)</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة (رقمية)',
    body: `
      <ul>
        <li>استخدم حسابات المدرسة واحفظ محليًا بشكل متكرر.</li>
        <li>لا تُنزِّل ملفات عشوائية.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG)',
    body: `
      <ul>
        <li>تكبير خط، تباين عالٍ، تسمية عربية سليمة للمتحولات.</li>
        <li>شرح لفظي + نصي للخطوات.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'Quiz قصير (٨ بنود) + مفاتيح',
    body: `
      <ol>
        <li>change x by 10 يحرك لليمين عادةً. <b>(صواب)</b></li>
        <li>if on edge, bounce يعمل لكل أنماط الحركة. <b>(خطأ)</b></li>
        <li>next costume يفيد للأنيميشن أثناء المشي. <b>(صواب)</b></li>
        <li>touching [coin]? مفيد لاكتشاف جمع النقاط. <b>(صواب)</b></li>
        <li>يمكن إظهار score على المنصة. <b>(صواب)</b></li>
        <li>go to يضيف على الموضع الحالي دائمًا. <b>(خطأ)</b></li>
        <li>speed متغيّر للتحكم بالسرعة. <b>(صواب)</b></li>
        <li>clamp يعني تقييد قيمة داخل مدى. <b>(صواب)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة مهام (٣ تمارين)',
    body: `
      <ul>
        <li>١) طبّق تحكّم بمفاتيح الاتجاه مع سرعة 6 وحدود المنصة.</li>
        <li>٢) أضف أنيميشن مظهرين أثناء المشي يمين/يسار.</li>
        <li>٣) أضف عملة "coin": عند لمسها يزيد score وتنتقل لموضع عشوائي.</li>
      </ul>
    `
  },

  assess_project: {
    title: 'Mini-Project (٥–٧ دقائق)',
    body: `
      <ul>
        <li>مشهد صغير: تحكّم + حدود + نقاط + لقطة شاشة.</li>
        <li>تسمية ملف: <b>G9_Control_Mini_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>تحكّم بالمفاتيح</td><td>يمين/يسار/أعلى/أسفل يعمل</td><td>6</td></tr>
          <tr class="row"><td>حدود/ارتداد</td><td>لا خروج عن المنصة</td><td>4</td></tr>
          <tr class="row"><td>أنيميشن</td><td>تبديل مظاهر أثناء المشي</td><td>4</td></tr>
          <tr class="row"><td>نقاط</td><td>تحديث score عند جمع coin</td><td>4</td></tr>
          <tr class="row"><td>لقطة/تنظيم</td><td>Screenshot + أسماء واضحة</td><td>2</td></tr>
        </tbody>
      </table>
    `
  },

  /* Resources */
  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>Scratch (ويب/أوفلاين)، Sprites بسيطة (player/coin/rock).</li>
        <li>مؤثر صوتي قصير عند الجمع.</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li>مراجع أنيميشن بسيط وتبديل مظاهر.</li>
      </ul>
    `
  }

};
