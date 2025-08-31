/* content-week12.js — Modal content for Week 12 (Scratch Audio)
   Exposes: window.WEEK12
*/
window.WEEK12 = {

  /* Objectives */
  g1: {
    title: '١) نطاق المهارات',
    body: `
      <ul>
        <li>تسجيل صوت داخل Scratch أو إدراج ملف صوتي قصير.</li>
        <li>تشغيل/إيقاف الصوت (start sound / stop all sounds).</li>
        <li>تعديل مستوى الصوت والتوازن (Volume/Pan) وتأثير Pitch.</li>
        <li>تزامن الصوت مع المشاهد عبر Broadcast وتسلسل زمني بسيط.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) تسجيل الصوت داخل Scratch',
    body: `
      <ul>
        <li>افتح تبويب <b>Sounds</b> ← انقر <b>Record</b> ← حدّد الميكروفون.</li>
        <li>نصائح: مكان هادئ، ثبّت الورقة، تحدّث بهدوء وثبات، جرّب 5–10 ثوانٍ.</li>
        <li>احذف الضوضاء بالبداية/النهاية بالقصّ (Trim) إن لزم.</li>
      </ul>
      <p class="tag">سمّ الصوت اسمًا واضحًا: <b>vo_intro</b>، <b>vo_scene</b>…</p>
    `
  },

  g3: {
    title: '٣) إدراج وتشغيل/إيقاف الصوت',
    body: `
      <ul>
        <li>إدراج ملف صوتي: <b>Choose a Sound</b> أو <b>Upload Sound</b> (قصير ≤ 20s).</li>
        <li>تشغيل: <b>start sound [vo_intro]</b> أو <b>play sound until done</b>.</li>
        <li>إيقاف: <b>stop all sounds</b> (عند الانتقال للمشهد التالي).</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
when [green flag v] clicked
  start sound [vo_intro v]
  wait (2) seconds
  broadcast [scene1 v]

when I receive [scene1 v]
  stop all sounds
  play sound [vo_scene v] until done
      </pre>
    `
  },

  g4: {
    title: '٤) المؤثرات (Pitch/Pan/Volume)',
    body: `
      <ul>
        <li><b>set volume to</b> / <b>change volume by</b> لضبط المستوى.</li>
        <li><b>set pan left/right</b> لتوزيع الصوت (يسار/يمين) إن توفر.</li>
        <li><b>set [pitch] effect to</b> أو <b>change [pitch] effect by</b> (خفيف جدًا لتجنّب التشويه).</li>
        <li><b>clear sound effects</b> لإلغاء التأثيرات قبل مقطع جديد.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
when I receive [scene1 v]
  set volume to (80) %
  set [pitch v] effect to (0)
  start sound [vo_scene v]
when I receive [emphasis v]
  change [pitch v] effect by (10)
  wait (0.5) seconds
  clear sound effects
      </pre>
    `
  },

  g5: {
    title: '٥) تزامن الصوت مع Broadcast',
    body: `
      <ul>
        <li>قسّم التعليق إلى جمل قصيرة: intro → solar → wind → end.</li>
        <li>في الكائن "Controller": بثّ رسائل بتوقيت.</li>
        <li>في كائن "Voice": تشغيل الصوت المناسب لكل رسالة.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
# Controller
when [green flag v] clicked
  broadcast [intro v]
  wait (3)
  broadcast [solar v]
  wait (3)
  broadcast [wind v]
  wait (3)
  broadcast [end v]

# Voice
when I receive [intro v]
  start sound [vo_intro v]
when I receive [solar v]
  start sound [vo_solar v]
      </pre>
    `
  },

  g6: {
    title: '٦) حفظ/لقطة وتسليم',
    body: `
      <ul>
        <li>File → Save to your computer (.sb3)</li>
        <li>التقاط لقطة شاشة أثناء تشغيل الصوت.</li>
        <li>اسم الملف: <b>G9_Audio_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  /* Stations */
  st_mic: {
    title: 'محطة Mic-Test',
    body: `
      <ul>
        <li>اختيار الميكروفون الصحيح، اختبار موجز 5 ثوانٍ.</li>
        <li>تأكّد من مستوى الإدخال وعدم الذروة (Clipping).</li>
      </ul>
    `
  },

  st_record: {
    title: 'محطة Record',
    body: `
      <ul>
        <li>سجّل جملة تعريفية للطاقة النظيفة (≤ 10 ثوانٍ).</li>
        <li>قص البداية/النهاية، أعد التسمية: vo_intro.</li>
      </ul>
    `
  },

  st_insert: {
    title: 'محطة Insert/Control',
    body: `
      <ul>
        <li>start sound / play until done / stop all sounds.</li>
        <li>زر Space لإيقاف الصوت فورًا (اختياري).</li>
      </ul>
    `
  },

  st_fx: {
    title: 'محطة FX',
    body: `
      <ul>
        <li>طبّق Pitch بسيط على كلمة للتأكيد، ثم clear sound effects.</li>
        <li>set volume to 80%، set pan left/right (إن متاح).</li>
      </ul>
    `
  },

  st_sync: {
    title: 'محطة Sync',
    body: `
      <ul>
        <li>قسّم التعليق إلى مقطعين (intro/solar) وبثّهما بتوقيت.</li>
        <li>شغّل الصوت المطابق عند الاستقبال.</li>
      </ul>
    `
  },

  st_export: {
    title: 'محطة Export',
    body: `
      <ul>
        <li>Save to your computer (.sb3) + Screenshot أثناء التشغيل.</li>
      </ul>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة ونصائح تسجيل.</li>
        <li><b>٥–٤٥ د</b>: ٦ محطات × ٥–٧ دقائق.</li>
        <li><b>٤٥–٥٠ د</b>: تقويم وتسليم.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>سجل جُملاً قصيرة واضحة بدل فقرة طويلة.</li>
        <li>لا ترفع Pitch كثيرًا؛ استخدمه كتمييز خفيف فقط.</li>
        <li>خطّة تزامن = رسائل + انتظار + تشغيل الصوت المناسب.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع (Voice-over)',
    body: `
      <ul>
        <li>جهّز نصًا ٣ جمل: "مقدمة" → "فائدة شمس/رياح" → "دعوة للفعل".</li>
        <li>أدرج أصوات نقرة/انتقال خافتة بين اللقطات.</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة',
    body: `
      <ul>
        <li>حافظ على مستوى صوت آمن، استخدم سماعات المدرسة.</li>
        <li>لا تشارك ملفات شخصية؛ استخدم حساب المدرسة.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG)',
    body: `
      <ul>
        <li>وفّر نصًا مكتوبًا يطابق التعليق الصوتي (تفريغ نصّي).</li>
        <li>استخدم تسميات عربية واضحة للأصوات (vo_intro/vo_solar).</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'Quiz قصير (٨ بنود) + مفاتيح',
    body: `
      <ol>
        <li>start sound يشغّل مقطعًا صوتيًا باسم محدّد. <b>(صواب)</b></li>
        <li>stop all sounds يوقف كل المقاطع الجارية. <b>(صواب)</b></li>
        <li>يمكن ضبط مستوى الصوت عبر set volume to %. <b>(صواب)</b></li>
        <li>change pitch effect by 50 آمن دائمًا. <b>(خطأ)</b></li>
        <li>يمكن مزامنة الصوت مع Broadcast. <b>(صواب)</b></li>
        <li>play sound until done لا يحجب بقية الكائنات. <b>(خطأ)</b></li>
        <li>clear sound effects يعيد المؤثرات لحالتها الافتراضية. <b>(صواب)</b></li>
        <li>يفضّل تسجيل فقرة طويلة بدل جمل قصيرة. <b>(خطأ)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة مهام صوتية (٣ تمارين)',
    body: `
      <ul>
        <li>١) سجّل جملة تعريفية (≤10s) وأدرجها كـ vo_intro.</li>
        <li>٢) أنشئ زرًا يشغّل الصوت ويوقفه (start/stop all sounds).</li>
        <li>٣) غيّر Pitch بسيط في كلمة ثم clear sound effects.</li>
      </ul>
    `
  },

  assess_project: {
    title: 'Mini-Project (تعليق صوتي ١٥–٢٠ ثانية)',
    body: `
      <ul>
        <li>مشهد الطاقة النظيفة: intro → solar → wind.</li>
        <li>رسائل + أصوات vo_ لكل جزء + لقطة شاشة أثناء التشغيل.</li>
        <li>اسم الملف: <b>G9_Audio_Mini_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>جودة التسجيل</td><td>وضوح/مستوى مناسب</td><td>6</td></tr>
          <tr class="row"><td>التحكم</td><td>start/stop/volume/pitch صحيح</td><td>5</td></tr>
          <tr class="row"><td>التزامن</td><td>Broadcast + توقيت سليم</td><td>5</td></tr>
          <tr class="row"><td>تنظيم/لقطة</td><td>أسماء عربية/لقطة تشغيل</td><td>2</td></tr>
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
        <li>ميكروفون/سماعات المدرسة، Scratch (ويب/أوفلاين).</li>
        <li>نصّ قصير حول الطاقة النظيفة (٣ جمل).</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li>دروس إدراج/تسجيل الأصوات ومؤثراتها (مصادر مفتوحة تعليمية).</li>
      </ul>
    `
  }

};
