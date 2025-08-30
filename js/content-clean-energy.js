/* content-clean-energy.js
   Holds modal content for the Clean Energy lesson
   Exposes: window.CONTENT
*/
window.CONTENT = {

  g1: {
    title: '١) تعريف الطاقة النظيفة وأمثلة حياتية',
    body: `
      <h4>تعريف موجز</h4>
      <p>الطاقة النظيفة هي طاقة <b>متجددة منخفضة الانبعاثات</b> مثل: الشمس، الرياح، المياه، الحرارة الجوفية. تقلّل التلوث وتدعم الاستدامة.</p>
      <h4>أمثلة قريبة من حياتنا</h4>
      <ul>
        <li>سخّان شمسي منزلي يوفّر فاتورة الكهرباء.</li>
        <li>أضواء حدائق تعمل بخلايا شمسية صغيرة.</li>
        <li>عنفات رياح لتغذية مرافق نائية بالطاقة.</li>
      </ul>
      <p class="tag">نشاط: موقف يمكن استبداله في المدرسة بمصدر طاقة أنظف.</p>
    `
  },

  g2: {
    title: '٢) شرح مكونات العنفة الهوائية',
    body: `
      <ul>
        <li><b>الريش/الشفرات:</b> تلتقط طاقة الرياح وتحوّلها إلى دوران.</li>
        <li><b>المحور:</b> ينقل العزم.</li>
        <li><b>علبة السرعة:</b> في نماذج معيّنة لرفع السرعة.</li>
        <li><b>المولّد:</b> يحوّل الحركة إلى كهرباء.</li>
      </ul>
      <table class="tbl">
        <thead><tr><th>المكوّن</th><th>الدور</th></tr></thead>
        <tbody>
          <tr class="row"><td>الريش</td><td>التقاط طاقة الرياح</td></tr>
          <tr class="row"><td>المحور</td><td>نقل الحركة</td></tr>
          <tr class="row"><td>المولّد</td><td>إنتاج الكهرباء</td></tr>
        </tbody>
      </table>
      <p class="tag">سؤال: كيف يؤثر طول الريشة وزاويتها على الأداء؟</p>
    `
  },

  g3: {
    title: '٣) قياس V/I — رياح/شمس',
    body: `
      <h4>خطوات عامة (سلامة أولًا)</h4>
      <ul>
        <li>استخدم جهدًا منخفضًا (٣–٦V) مع تثبيت الوصلات.</li>
        <li>قِس <b>V</b> على طرفي الحمل، و<b>I</b> في السلسلة.</li>
      </ul>
      <h4>جدول بيانات</h4>
      <table class="tbl">
        <thead><tr><th>التجربة</th><th>الإعداد</th><th>V (فولت)</th><th>I (أمبير)</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>رياح</td><td>سرعة منخفضة</td><td></td><td></td><td></td></tr>
          <tr class="row"><td>رياح</td><td>سرعة عالية</td><td></td><td></td><td></td></tr>
          <tr class="row"><td>شمس</td><td>زاوية ٣٠° (بدون تظليل)</td><td></td><td></td><td></td></tr>
          <tr class="row"><td>شمس</td><td>زاوية ٦٠° (تظليل جزئي)</td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <p>تقدير الاستطاعة: <b>P ≈ V × I</b> للمقارنة.</p>
    `
  },

  g4: {
    title: '٤) تحليل السرعة/الزاوية/التظليل',
    body: `
      <ul>
        <li><b>السرعة ↑ ⇒ القدرة ↑</b></li>
        <li><b>زاوية مناسبة</b> للوح الشمسي تزيد الالتقاط.</li>
        <li><b>التظليل الجزئي</b> يخفض الخرج بوضوح.</li>
      </ul>
      <p class="tag">مهمة: ارسم مخططًا عموديًا يوضّح تغيّر P بين الحالات.</p>
    `
  },

  g5: {
    title: '٥) تصميم 3D على Tinkercad وتحضيره للطباعة',
    body: `
      <h4>اختيار القطعة</h4>
      <ul>
        <li>حامل زاوية للّوح الشمسي.</li>
        <li>محور + ريشة عنفة.</li>
        <li>دفّاعة مياه صغيرة.</li>
      </ul>
      <h4>Tinkercad</h4>
      <ul>
        <li>Units = <b>mm</b>، ضع Ruler، استخدم Align.</li>
        <li>الفتحات كـ <b>Hole</b> ثم Group، ثم تصدير <b>.STL</b>.</li>
        <li>سماحية الفتحات: +0.2~0.4 مم عن القطر الاسمي.</li>
      </ul>
      <h4>إعداد الطباعة (PLA)</h4>
      <ul>
        <li>Layer: مسودة | Infill: 10–15% | Walls: 2</li>
        <li>قلّل Supports بتوجيه مناسب | Brim اختياري.</li>
      </ul>
      <p class="tag">بعد الطباعة: أعد القياس بنفس الإعداد للمقارنة.</p>
    `
  },

  g6: {
    title: '٦) التقويم والخلاصة',
    body: `
      <ul>
        <li>اختبار قصير (٥ بنود).</li>
        <li>ورقة عمل (جدول V/I + ٣ أسئلة تحليل).</li>
        <li>مهمة Scratch/مطوية تربط النتائج بالرسالة.</li>
        <li>بطاقة خروج: سبب اختيار طاقة نظيفة في المدرسة.</li>
      </ul>
    `
  },

  st_wind: {
    title: 'محطة الرياح — قياس وتجريب',
    body: `
      <ul>
        <li>سرعتان (منخفض/عالٍ) باتجاه العنفة.</li>
        <li>قِس V و I وسجّل الملاحظات.</li>
        <li>سلامة: تثبيت المروحة وإبعاد الشعر/الملابس.</li>
      </ul>
    `
  },

  st_sun: {
    title: 'محطة الشمس — زاوية وتظليل',
    body: `
      <ul>
        <li>زاوية ٣٠° بدون تظليل ← قِس V/I.</li>
        <li>زاوية ٦٠° مع تظليل جزئي ← قِس V/I.</li>
        <li>ناقش: أي زاوية أفضل ولماذا؟</li>
      </ul>
    `
  },

  st_water: {
    title: 'محطة المياه (اختياري) — دفّاعة صغيرة',
    body: `
      <ul>
        <li>ركّب دفّاعة على عمود محرك صغير.</li>
        <li>اختبرها تحت تيار ماء معتدل.</li>
        <li>قارن الحركة/الخرج بتغيير عدد الشفرات.</li>
      </ul>
    `
  },

  st_elec: {
    title: 'محطة الإلكترونيات — LED + مقاومة',
    body: `
      <ul>
        <li>وصل LED مع مقاومة (٢٢٠–٣٣٠Ω) على بروتوبورد.</li>
        <li>قِس V عبر المقاومة و I في السلسلة.</li>
        <li>لاحظ تغيّر السطوع وتأثير المقاومة.</li>
      </ul>
    `
  },

  st_scratch: {
    title: 'محطة Scratch — بث وتزامن',
    body: `
      <p>مشهد زرَّين: "رياح" و"شمس".</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: power, sunAngle, windSpeed
Buttons: when clicked -> broadcast [wind] / [sun]
Turbine: when I receive [wind] -> repeat 20 { turn 15 } change [power v] by (windSpeed)
Battery: when I receive [sun] -> repeat 20 { change [power v] by (sunAngle) }
      </pre>
      <p>أدخل قيمًا من القياسات لتجسيد تأثيرها بصريًا.</p>
    `
  },

  st_3d: {
    title: 'محطة Tinkercad/الطابعة',
    body: `
      <ol>
        <li>اختر نموذجًا صغيرًا (حامل زاوية/محور+ريشة/دفّاعة).</li>
        <li>Tinkercad: Align | Hole | Export STL (mm).</li>
        <li>Slicer: Draft layer, Infill 10–15%, Walls 2, قلّل Supports.</li>
        <li>اختبر الملاءمة بعد الطباعة (سماحية الفتحات +0.2~0.4 مم).</li>
      </ol>
    `
  },

  timeline: {
    title: 'الخطة الزمنية (٩٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٧ د</b>: تهيئة وعرض محفّز.</li>
        <li><b>٧–٤٧ د</b>: محطات (٦×٦ دقائق + انتقالات قصيرة).</li>
        <li><b>٤٧–٥٥ د</b>: مشاركة نتائج + شرح موجّه.</li>
        <li><b>٥٥–٨٠ د</b>: توسّع (Scratch/وسائط + Tinkercad/طباعة).</li>
        <li><b>٨٠–٩٠ د</b>: تقويم (اختبار + ورقة عمل + بطاقة خروج).</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح (Explain)',
    body: `
      <ul>
        <li>السرعة ↑ ⇒ القدرة ↑ في الرياح (ضمن الأمان).</li>
        <li>الزاوية المناسبة للوح الشمسي تزيد الالتقاط؛ التظليل يقلّل الخرج.</li>
        <li>ربط النتائج بسلوك Scratch لتجسيد الفكرة بصريًا.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع (Elaborate): Scratch/وسائط',
    body: `
      <ul>
        <li>أضِف رسالة تنبيه عند بلوغ power حدًا معينًا.</li>
        <li>صمّم مطوية: "الطاقة النظيفة في مدرستي".</li>
        <li>أدرج QR يقود إلى مشروع Scratch أو صور التجربة.</li>
      </ul>
    `
  },

  safety: {
    title: 'إرشادات السلامة',
    body: `
      <ul>
        <li>جهود منخفضة (٣–٦V) وتثبيت الوصلات قبل التشغيل.</li>
        <li>إبعاد الشعر والملابس الفضفاضة عن المراوح.</li>
        <li>عدم لمس فوهة/سرير الطابعة (ساخنة)، تهوية جيدة.</li>
        <li>تجفيف محيط المياه ومنع الانزلاق.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG 2.1 AA)',
    body: `
      <ul>
        <li>تباين مرتفع، تكبير خط، تنقّل بلوحة المفاتيح.</li>
        <li>نصوص بديلة للصور، مواد PDF نصية.</li>
        <li>إتاحة وقت إضافي للمهمات العملية عند الحاجة.</li>
      </ul>
    `
  },

  assess_quiz: {
    title: 'الاختبار القصير (٥ بنود) + مفاتيح',
    body: `
      <ol>
        <li>الطاقة النظيفة: لا تنضب ولا تلوّث. <b>(صحيح: ب)</b></li>
        <li>علبة السرعة ترفع سرعة الدوران ناحية المولّد. <b>(ب)</b></li>
        <li>التظليل الجزئي يقلّل التيار/القدرة. <b>(ب)</b></li>
        <li>زاوية غير مناسبة تقلّل الخرج. <b>(صواب)</b></li>
        <li>بث الرسائل في Scratch للمزامنة. <b>(صواب)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة عمل مخبرية',
    body: `
      <h4>جدول البيانات</h4>
      <table class="tbl">
        <thead><tr><th>التجربة</th><th>الإعداد</th><th>V</th><th>I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>رياح</td><td>منخفضة</td><td></td><td></td><td></td></tr>
          <tr class="row"><td>رياح</td><td>عالية</td><td></td><td></td><td></td></tr>
          <tr class="row"><td>شمس</td><td>٣٠°</td><td></td><td></td><td></td></tr>
          <tr class="row"><td>شمس</td><td>٦٠° + تظليل</td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <h4>أسئلة تحليل</h4>
      <ul>
        <li>أثر تغيّر السرعة/الزاوية على V/I؟</li>
        <li>لماذا يقلّ الخرج مع التظليل؟</li>
        <li>أي إعداد تقترحه لمدرستنا؟ ولماذا؟</li>
      </ul>
    `
  },

  assess_scratch: {
    title: 'مهمة Scratch/مطوية',
    body: `
      <ul>
        <li>مشهد زرَّين (رياح/شمس) + عدّاد طاقة بالقيم المقاسة.</li>
        <li>بديل: مطوية A4 ثلاث طيات بعنوان "الطاقة النظيفة في مدرستي".</li>
        <li>تسليم: لقطة/ملف .sb3 أو PDF + QR اختياري.</li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>البند</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>قياسات دقيقة</td><td>V/I كاملة ومنظّمة</td><td>4</td></tr>
          <tr class="row"><td>تحليل وتحسين</td><td>مقارنة قبل/بعد منطقية</td><td>4</td></tr>
          <tr class="row"><td>نموذج 3D</td><td>أبعاد وسماحية مناسبة</td><td>4</td></tr>
          <tr class="row"><td>إعداد الطباعة</td><td>Orientation/Supports/Infill</td><td>3</td></tr>
          <tr class="row"><td>Scratch/وسائط</td><td>ربط النتائج بسرد بصري</td><td>3</td></tr>
          <tr class="row"><td>عرض وخاتمة</td><td>بطاقة خروج/تقرير</td><td>2</td></tr>
        </tbody>
      </table>
    `
  },

  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>عنفة/مروحة تعليمية + مولّد صغير.</li>
        <li>خلية/لوح شمسي ٣–٦V + حمل (LED/مروحة صغيرة).</li>
        <li>DMM، بروتوبورد، أسلاك، مقاومات ٢٢٠–٣٣٠Ω، LED.</li>
        <li>طابعة ثلاثية الأبعاد (PLA) + Cura/PrusaSlicer.</li>
        <li>Scratch + Tinkercad (حسابات الطلاب).</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Tinkercad</b>: <span class="tag">tinkercad.com</span></li>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li>أدلة Slicer (Cura/PrusaSlicer) للمبتدئين.</li>
      </ul>
    `
  }

};
