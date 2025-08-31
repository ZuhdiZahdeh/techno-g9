/* content-exam-scratch.js — Exam content (Scratch) */
window.EXAM_SCRATCH = {
  info: {
    title: 'التعليمات العامة',
    body: `
      <ul>
        <li>المدّة: <b>٩٠ دقيقة</b> — العلامة الكلية: <b>١٠٠</b>.</li>
        <li>اقرأ المطلوب لكل قسم، واكتب الكتل بصيغة نصية دقيقة عند الحاجة.</li>
        <li>التزم بالتسمية العربية/الإنجليزية الواضحة للمتغيّرات والرسائل.</li>
      </ul>
    `
  },
  weights: {
    title: 'توزيع العلامات',
    body: `
      <ul>
        <li>(أ) اختيار من متعدد: ٢٤</li>
        <li>(ب) صواب/خطأ: ٨</li>
        <li>(ج) أسئلة قصيرة: ١٨</li>
        <li>(د) قراءة كود وتتبع: ٢٠</li>
        <li>(هـ) مشروع مصغّر: ٢٠</li>
        <li>(و) تصحيح أخطاء: ١٠</li>
        <li><b>المجموع = ١٠٠</b></li>
      </ul>
    `
  },
  A: {
    title: 'القسم (أ): اختيار من متعدد — ٢٤',
    body: `
      <ol>
        <li>مركز المنصّة: أ) (١٠٠,١٠٠) ب) <b>(٠,٠)</b> ج) (-٢٢٠,١٦٠) د) (٠,١٦٠)</li>
        <li><code>go to x:.. y:..</code>: أ) حركة نسبية ب) <b>قفزة لموضع محدّد</b> ج) تغيير اتجاه د) دوران</li>
        <li><code>when green flag clicked</code>: أ) أصوات فقط ب) <b>تهيئة عامة</b> ج) نصوص د) لا شيء</li>
        <li><code>broadcast [intro]</code>: أ) لون ب) <b>تزامن</b> ج) حذف متغيّر د) تدوير</li>
        <li><code>start sound</code>/<code>stop all sounds</code>: أ) مظهر ب) <b>تشغيل/إيقاف صوت</b> ج) بث د) تحريك</li>
        <li>الشعار الأفضل: أ) Bitmap ب) <b>Vector</b> ج) نص فقط د) لا فرق</li>
        <li><code>set [score] to 0</code> ثم <code>change [score] by 1</code>: أ) إنقاص ب) <b>تهيئة ثم زيادة</b> ج) إزالة د) لا شيء</li>
        <li><code>answer</code> يخزن: أ) score ب) <b>آخر إجابة من ask</b> ج) رسالة د) حجم الخط</li>
        <li><code>repeat until (time=0)</code> يتوقف عندما: أ) يبدأ الزمن ب٠ ب) <b>يصير الشرط صوابًا</b> ج) ينقص مرة د) عند المسافة</li>
        <li><code>and</code> صواب عندما: أ) أحدهما صواب ب) <b>كلاهما صواب</b> ج) دومًا د) لا يعمل</li>
        <li>My Blocks تسمح: أ) تجميع كتل مع مدخلات ب) متغيرات فقط ج) أصوات فقط د) لا شيء</li>
        <li><code>next costume</code> يُستخدم عادة لـ: أ) خلفية ب) <b>أنيميشن المظاهر</b> ج) حذف كائن د) تحويل Vector</li>
      </ol>
    `
  },
  B: {
    title: 'القسم (ب): صواب/خطأ — ٨',
    body: `
      <ol>
        <li>y الموجب يعني نزولًا. <b>خطأ</b></li>
        <li>يمكن إظهار قيمة المتغيّر على المنصّة. <b>صواب</b></li>
        <li>broadcast لا يفيد في تسلسل المشاهد. <b>خطأ</b></li>
        <li>play sound until done قد يوقف كتلًا أخرى في نفس الكائن. <b>صواب</b></li>
        <li>يمكن تحويل الرسم بين Vector وBitmap. <b>صواب</b></li>
        <li>يمكن اختيار عنصر عشوائي من لائحة بـ pick random. <b>صواب</b></li>
        <li>repeat حلقة بلا نهاية. <b>خطأ</b></li>
        <li>My Blocks قد تقبل مدخلات. <b>صواب</b></li>
      </ol>
    `
  },
  C: {
    title: 'القسم (ج): أسئلة قصيرة — ١٨',
    body: `
      <ol>
        <li>فرّق بين <code>go to</code> و<code>move 10 steps</code> بمثال.</li>
        <li>لماذا نستخدم <code>broadcast</code> بدل تكرار الكتل في عدة كائنات؟</li>
        <li>فائدة <code>stop all sounds</code> عند الانتقال بين المشاهد الصوتية؟</li>
        <li>متى تفضّل Vector عند تصميم شعار؟</li>
        <li>استخدام نموذجي لـ <code>answer</code> مع مثال سؤال.</li>
        <li>فائدة إنشاء My Block مثل <code>MoveWithinBounds(speed)</code>؟</li>
      </ol>
    `
  },
  D: {
    title: 'القسم (د): قراءة كود وتتبع — ٢٠',
    body: `
      <h4>٢٧) تتبّع حركة ونقاط</h4>
      <p>تهيئة: <code>set [score]=0</code>. عند يمين: <code>change x by 10 → next costume → if &lt;touching [coin]?&gt; then change [score] by 1</code>.</p>
      <ul>
        <li>أ) خمس ضغطات يمين دون لمس coin: ماذا يحدث؟</li>
        <li>ب) في المرة السادسة لُمس coin: ما التغيير؟</li>
        <li>ج) اكتب شرطًا يقيّد <code>x ≤ 220</code>.</li>
      </ul>
      <h4>٢٨) تسلسل بث</h4>
      <p>تهيئة: <code>broadcast [intro] → wait (2) → broadcast [news] → wait (2) → broadcast [end]</code></p>
      <ul>
        <li>أ) ما المطلوب في "Presenter" لعرض تحية في intro؟</li>
        <li>ب) ما المطلوب في "Reporter" لقول سطر في news؟</li>
        <li>ج) كتلة تغيّر الخلفية في end.</li>
      </ul>
    `
  },
  E: {
    title: 'القسم (هـ): مشروع مصغّر — ٢٠',
    body: `
      <p><b>٢٩)</b> اختر واحدًا:</p>
      <ul>
        <li><b>(أ)</b> نشرة طاقة نظيفة: زران (Intro/News) يبثّان رسائل؛ كائنان يستقبلان ويعرضان نصّين؛ تبديل خلفية واحد؛ لقطة شاشة.</li>
        <li><b>(ب)</b> عدّاد طاقة: زرّان (Wind/Sun) يزيدان <code>power</code> (٢×٢٠ و٣×٢٠) ورسالة "الشمس كافية" عند <code>power &gt; 60</code>.</li>
      </ul>
      <p>المعايير: تهيئة ٥ | بث/استقبال ٦ | منطق التغيير/الظهور ٦ | تنظيم/لقطة ٣ = <b>٢٠</b></p>
    `
  },
  F: {
    title: 'القسم (و): تصحيح أخطاء — ١٠',
    body: `
      <p><b>٣٠)</b> الكود:</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">repeat until &lt;(time) = (0)&gt;
  wait (1)
  change [time] by (1)
end</pre>
      <p>صحّح ليصبح عدادًا تنازليًا من ٢٠ ويبث <code>[timeup]</code> عند الصفر.</p>
    `
  },
  keys: {
    title: 'نموذج الإجابة والروبركات (للمعلّم)',
    body: `
      <h4>مفاتيح مختصرة</h4>
      <p><b>أ)</b> ١(ب) ٢(ب) ٣(ب) ٤(ب) ٥(ب) ٦(ب) ٧(ب) ٨(ب) ٩(ب) ١٠(ب) ١١(أ) ١٢(ب)</p>
      <p><b>ب)</b> ١٣ خ، ١٤ ص، ١٥ خ، ١٦ ص، ١٧ ص، ١٨ ص، ١٩ خ، ٢٠ ص</p>
      <h4>سُلّم تصحيح موجز</h4>
      <ul>
        <li><b>ج)</b> (٣ لكل سؤال): فكرة صحيحة ٢ + مثال/صياغة ١.</li>
        <li><b>د)</b> (١٠ لكل بند): تتبّع صحيح ٥ + كتل مطلوبة ٣ + تنظيم ٢.</li>
        <li><b>هـ)</b> ٢٠ نقطة وفق المعايير (تهيئة/بث/منطق/لقطة).</li>
        <li><b>و)</b> ١٠: عدّ تنازلي صحيح ٨ + بث عند الصفر ٢.</li>
      </ul>
    `
  }
};
