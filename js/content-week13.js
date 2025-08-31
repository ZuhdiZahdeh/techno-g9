/* content-week13.js — Modal content for Week 13 (Scratch Paint Editor)
   Exposes: window.WEEK13
*/
window.WEEK13 = {

  /* Objectives */
  g1: {
    title: '١) نطاق المهارات',
    body: `
      <ul>
        <li>إنشاء أشكال متجهة نظيفة (Rectangle/Ellipse/Polygon/Line).</li>
        <li>فهم الفرق بين <b>Vector</b> و<b>Bitmap</b> والتحويل بينهما.</li>
        <li>التحكم بـ <b>Stroke</b> (السُمك/الطرف) و<b>Fill</b> (لون/تدرّج).</li>
        <li>كتابة <b>نص عربي</b> صحيح الاتجاه ومحاذاته وOutline.</li>
        <li>الطبقات/المجموعات/المحاذاة/التوزيع/عمليات union/subtract المبسّطة.</li>
        <li>التصدير والأنيميشن بالمظاهر (Sprite costumes).</li>
      </ul>
    `
  },

  g2: {
    title: '٢) Vector vs Bitmap — متى نستخدم كلًا؟',
    body: `
      <ul>
        <li><b>Vector</b>: دقة لا نهائية عند التكبير، مثالي للشعارات/الأيقونات.</li>
        <li><b>Bitmap</b>: صور نقطية (رُسُومات/صور حقيقية).</li>
        <li>تحويل: <b>Convert to Vector</b> / <b>Convert to Bitmap</b> (افعلها بحذر).</li>
      </ul>
      <p class="tag">قاعدة الصف: الشعار = Vector، الصورة الفوتوغرافية = Bitmap.</p>
    `
  },

  g3: {
    title: '٣) Stroke / Fill / Gradients',
    body: `
      <ul>
        <li><b>Stroke</b>: سمك 2–6 px، طرف مستدير، لون داكن للنصوع.</li>
        <li><b>Fill</b>: ألوان الهوية (Teal/Indigo/Amber) بتباين مناسب.</li>
        <li><b>Gradient</b>: خطيّ/دائري—خفيف جدًا؛ لا تُكثر منه.</li>
      </ul>
      <p class="tag">نصيحة: اجعل Stroke أثخن قليلًا عند أحجام صغيرة (16–32px).</p>
    `
  },

  g4: {
    title: '٤) نص عربي — محاذاة واتجاه وOutline',
    body: `
      <ul>
        <li>أدخل النص، فعّل RTL من نظامك، اختر خطًا مقروءًا.</li>
        <li>أضف Stroke رفيعًا حول النص لتحسين التباين.</li>
        <li>محاذاة مع العنصر/الشعار عبر أدوات Align وDistribute.</li>
      </ul>
      <p class="tag">مثال: كلمة <b>التكنولوجيا</b> بوزن وسط + Outline 2px داكن.</p>
    `
  },

  g5: {
    title: '٥) طبقات/Grouping وعمليات (Boolean-like)',
    body: `
      <ul>
        <li>رتّب العناصر: <b>Forward/Backward</b>، <b>Bring to Front/Back</b>.</li>
        <li><b>Group</b>/<b>Ungroup</b> لتسهيل التحريك.</li>
        <li>شكل أيقونة: دمج دائرتين (Union) أو طرح شكل (Subtract) عبر القصّ اليدوي.</li>
      </ul>
      <p class="tag">حافظ على <b>snap</b> والمحاذاة الشبكية لتناسق الحواف.</p>
    `
  },

  g6: {
    title: '٦) تصدير/أنيميشن مظاهر',
    body: `
      <ul>
        <li>اصنع مظهرين: <b>Logo-A</b> و<b>Logo-B</b> (تفصيل/وميض بسيط).</li>
        <li>بدّل بينهما بالبرمجة (next costume) لصناعة وميض قصير.</li>
        <li>Export Costume كـ PNG إذا احتجت استخدامه خارج المشروع.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
when [green flag v] clicked
  repeat (6)
    next costume
    wait (0.2) seconds
  end
      </pre>
    `
  },

  /* Stations */
  st_shapes: {
    title: 'محطة الأشكال',
    body: `
      <ul>
        <li>ارسم دائرة/مستطيل مع Stroke 4px وFill بلون الهوية.</li>
        <li>انسخ/حاذِ العناصر على شبكة متناسقة.</li>
      </ul>
    `
  },

  st_vector: {
    title: 'محطة Vector/Bitmap',
    body: `
      <ul>
        <li>تأكّد أنّ وضع الرسم Vector (Convert to Vector).</li>
        <li>جرّب التحويل لBitmap ثم عُد للVector ولاحظ الفرق.</li>
      </ul>
    `
  },

  st_style: {
    title: 'محطة Stroke/Fill',
    body: `
      <ul>
        <li>اضبط Stroke=3–4، حاوِل Gradient خفيف داخل عنصر واحد.</li>
        <li>اختبر تباين اللون على خلفية فاتحة/داكنة.</li>
      </ul>
    `
  },

  st_text: {
    title: 'محطة النص العربي',
    body: `
      <ul>
        <li>أدخل "التكنولوجيا ٩" بخط واضح + Outline 2px.</li>
        <li>حاذِ النص فوق الأيقونة، جرّب محاذاة مركزية.</li>
      </ul>
    `
  },

  st_layers: {
    title: 'محطة الطبقات/Grouping',
    body: `
      <ul>
        <li>رتّب: الأيقونة أسفل، النص أعلى، الشريط خلفي.</li>
        <li>Group ثم حرك المجموعة كوحدة واحدة.</li>
      </ul>
    `
  },

  st_export: {
    title: 'محطة التصدير/الأنيميشن',
    body: `
      <ul>
        <li>أنشئ Logo-A/Logo-B (وميض بسيط أو تغيير لون Stroke).</li>
        <li>next costume + wait 0.2s → وميض (3–5 ثوانٍ).</li>
        <li>Export Costume كـ PNG إذا لزم.</li>
      </ul>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وعرض أمثلة شعارات مدرسية.</li>
        <li><b>٥–٤٥ د</b>: ٦ محطات × ٥–٧ دقائق.</li>
        <li><b>٤٥–٥٠ د</b>: تقويم سريع وتسليم.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>الشعار الجيد يعمل بأبيض/أسود أيضًا (اختبره).</li>
        <li>سمك Stroke يحدّد قابلية القراءة عند 32px و16px.</li>
        <li>حافظ على هوية ألوان الصف (Teal/Indigo/Amber).</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع (لوغو متحرك)',
    body: `
      <ul>
        <li>أضف Motion خفيف (scale 90→100%) أثناء الوميض.</li>
        <li>أدرج صوت نقرة خافت عند التبديل (اختياري).</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة',
    body: `
      <ul>
        <li>لا تستخدم صورًا محمية دون إذن؛ فضّل الأشكال المتجهة الأصلية.</li>
        <li>حافظ على ملفات المشروع منظمة (تسمية المظاهر).</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG)',
    body: `
      <ul>
        <li>اختبر التباين، استخدم Outline للنصوص فوق الخلفيات الملونة.</li>
        <li>أعطِ أسماء عربية واضحة للمظاهر: Logo-A/Logo-B.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'Quiz قصير (٨ بنود) + مفاتيح',
    body: `
      <ol>
        <li>Vector يبقى حادًا عند التكبير. <b>(صواب)</b></li>
        <li>Stroke هو تعبئة العنصر. <b>(خطأ)</b></li>
        <li>يمكن تحويل الرسم بين Vector/Bitmap. <b>(صواب)</b></li>
        <li>Outline يساعد على وضوح النص فوق الخلفيات. <b>(صواب)</b></li>
        <li>Group يجعل العناصر تتحرك كوحدة واحدة. <b>(صواب)</b></li>
        <li>Gradient القوي دائمًا أفضل. <b>(خطأ)</b></li>
        <li>next costume يفيد لوميض الشعار. <b>(صواب)</b></li>
        <li>يُفضّل اختبار الشعار على 16×16 بكسل. <b>(صواب)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة مهام (٣ تمارين)',
    body: `
      <ul>
        <li>١) ارسم أيقونة بسيطة (دائرة/歯 ترس مبسط) مع Stroke/Fill مناسبين.</li>
        <li>٢) اكتب "التكنولوجيا ٩" بخط واضح + Outline + محاذاة مع الأيقونة.</li>
        <li>٣) أنشئ Logo-A/Logo-B لتبديل لون/تفصيل بسيط.</li>
      </ul>
    `
  },

  assess_project: {
    title: 'Mini-Project (لوغو/ستيكر متحرك 3–5 ثوانٍ)',
    body: `
      <ul>
        <li>المتطلبات: مظهران على الأقل + وميض next costume + لقطة شاشة أثناء الحركة.</li>
        <li>اسم الملف: <b>G9_Painter_Logo_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>نظافة المتجهات</td><td>Stroke/Fill متسقان، حواف نظيفة</td><td>6</td></tr>
          <tr class="row"><td>قابلية القراءة</td><td>نص واضح بأحجام صغيرة</td><td>5</td></tr>
          <tr class="row"><td>أنيميشن</td><td>تبديل مظاهر سلس (وميض قصير)</td><td>4</td></tr>
          <tr class="row"><td>تنظيم/لقطة</td><td>تسمية عربية/لقطة حركة</td><td>3</td></tr>
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
        <li>Scratch (ويب/أوفلاين)، لوحات ألوان متناسقة (Teal/Indigo/Amber).</li>
        <li>أمثلة شعارات مدرسية وأيقونات تعليمية بسيطة.</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li>دروس Paint Editor الرسمية/المفتوحة (Vector basics, text, layers).</li>
      </ul>
    `
  }

};
