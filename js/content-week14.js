/* content-week14.js — Modal content for Week 14 (Variables & Lists)
   Exposes: window.WEEK14
*/
window.WEEK14 = {

  /* Objectives */
  g1: {
    title: '١) نطاق المهارات',
    body: `
      <ul>
        <li>إنشاء متغيّرات: set/change/show/hide.</li>
        <li>مؤقّت/عداد بسيط وHUD على المنصّة.</li>
        <li>إنشاء لائحة (List) وإدارتها: add/insert/delete/replace/length/item #.</li>
        <li>Quiz مصغّر قائم على لائحة + ask/answer.</li>
      </ul>
    `
  },

  g2: {
    title: '٢) المتغيّرات (set / change / show)',
    body: `
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: score, lives
when [green flag v] clicked
  set [score v] to [0]
  set [lives v] to [3]
  show variable [score v]
  show variable [lives v]

when [coin v] clicked
  change [score v] by (1)
      </pre>
      <p>أظهر/أخفِ المتغيّرات على المنصّة حسب الحاجة (HUD).</p>
    `
  },

  g3: {
    title: '٣) مؤقّت/عداد وHUD',
    body: `
      <ul>
        <li>مؤقّت بسيط عبر حلقة: wait 1 sec + change time by 1.</li>
        <li>عداد تنازلي: start from N → change by -1 حتى 0.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: time
when [green flag v] clicked
  set [time v] to [30]
  repeat until <(time) = (0)>
    wait (1) seconds
    change [time v] by (-1)
  end
  broadcast [timeup v]
      </pre>
    `
  },

  g4: {
    title: '٤) اللوائح (Lists): add/insert/delete/replace',
    body: `
      <ul>
        <li>أنشئ لائحة اسمها <b>questions</b> وأخرى <b>answers</b> (مطابقة).</li>
        <li>عمليات شائعة: add (في النهاية)، insert (في موضع)، delete (عنصر)، replace (استبدال)، item # (قراءة)، length (الطول).</li>
        <li>فحص فهرس آمن: 1 ≤ index ≤ length.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
add [الرياح طاقة نظيفة؟ (نعم/لا)] to [questions v]
add [نعم] to [answers v]

set [i v] to [1]
if <(i) > (length of [questions v])> then
  set [i v] to (1)
end
      </pre>
    `
  },

  g5: {
    title: '٥) Quiz عبر لائحة + answer',
    body: `
      <ul>
        <li>نسير بفهرس <b>i</b> على اللائحة: نقرأ السؤال → نسأل المستخدم → نقارن بالجواب.</li>
        <li>تطبيع الإجابة (اختياريًا): تحويل إلى حروف صغيرة ومقارنة.</li>
      </ul>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: i, score
Lists: questions, answers
when [green flag v] clicked
  set [score v] to [0]
  set [i v] to [1]
  repeat (length of [questions v])
    ask (item (i) of [questions v]) and wait
    if <(answer) = (item (i) of [answers v])> then
      change [score v] by (1)
      say [إجابة صحيحة!] for 1 seconds
    else
      say (join [الصحيح: ] (item (i) of [answers v])) for 1 seconds
    end
    change [i v] by (1)
  end
  say (join [نتيجتك: ] (score)) for 2 seconds
      </pre>
    `
  },

  g6: {
    title: '٦) حفظ/لقطة وتسليم',
    body: `
      <ul>
        <li>File → Save to your computer (.sb3)</li>
        <li>لقطة شاشة لعرض المتغيّرات والنتيجة النهائية.</li>
        <li>اسم الملف: <b>G9_Data_Quiz_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  /* Stations */
  st_vars: {
    title: 'محطة Variables',
    body: `
      <ul>
        <li>أنشئ score/lives، جرّب set/change/show/hide.</li>
      </ul>
    `
  },

  st_timer: {
    title: 'محطة Timer',
    body: `
      <ul>
        <li>عداد تنازلي من 20 ثانية يبثّ [timeup] عند الصفر.</li>
      </ul>
    `
  },

  st_hud: {
    title: 'محطة HUD',
    body: `
      <ul>
        <li>اعرض score/time في زاوية المنصة (تحريك موضع الفقاعات إن لزم).</li>
      </ul>
    `
  },

  st_list: {
    title: 'محطة List Basics',
    body: `
      <ul>
        <li>أنشئ questions/answers وأضف عنصرين على الأقل.</li>
        <li>اختبر insert/delete/replace وlength.</li>
      </ul>
    `
  },

  st_quiz: {
    title: 'محطة List Quiz',
    body: `
      <ul>
        <li>اكتب حلقة تسأل 2–3 أسئلة وتقارن مع answers.</li>
        <li>زد score على الإجابة الصحيحة.</li>
      </ul>
    `
  },

  st_debug: {
    title: 'محطة Debug/Export',
    body: `
      <ul>
        <li>حل مشكلة فهرس خارج النطاق، ثم احفظ .sb3 + Screenshot.</li>
      </ul>
    `
  },

  /* Flow */
  timeline: {
    title: 'الخطة الزمنية (٤٥–٥٠ دقيقة)',
    body: `
      <ul>
        <li><b>٠–٥ د</b>: تهيئة وأمثلة متغيّرات/لوائح.</li>
        <li><b>٥–٤٥ د</b>: ٦ محطات × ٥–٧ دقائق.</li>
        <li><b>٤٥–٥٠ د</b>: تقويم سريع وتسليم.</li>
      </ul>
    `
  },

  explain: {
    title: 'نقاط الشرح',
    body: `
      <ul>
        <li>تسمية عربية واضحة: <b>النتيجة</b>/<b>الوقت</b> أو إنجليزية بسيطة.</li>
        <li>فهرس آمن: 1 ≤ i ≤ length.</li>
        <li>إعادة الاستخدام: نفس نمط اللائحة يصلح لمسابقات أو جرد أدوات مختبر.</li>
      </ul>
    `
  },

  elaborate: {
    title: 'التوسّع (أسئلة/مخزون)',
    body: `
      <ul>
        <li>اختر سؤالًا عشوائيًا: item (pick random 1 to length).</li>
        <li>مشروع بديل: لائحة أدوات مختبر (add/remove) مع عدّاد عناصر.</li>
      </ul>
    `
  },

  /* Safety & Accessibility */
  safety: {
    title: 'إرشادات السلامة (رقمية)',
    body: `
      <ul>
        <li>لا تحفظ بيانات شخصية داخل اللوائح.</li>
        <li>استخدم حسابات المدرسة واحفظ محليًا.</li>
      </ul>
    `
  },

  access: {
    title: 'إتاحة الوصول (WCAG)',
    body: `
      <ul>
        <li>اعرض المتغيّرات بخط كبير، التباين مرتفع.</li>
        <li>أسماء عربية سليمة للمتغيّرات واللوائح.</li>
      </ul>
    `
  },

  /* Assessment */
  assess_quiz: {
    title: 'Quiz قصير (٨ بنود) + مفاتيح',
    body: `
      <ol>
        <li>set يعيّن قيمة المتغيّر مباشرة. <b>(صواب)</b></li>
        <li>change ينقص/يزيد القيمة الحالية. <b>(صواب)</b></li>
        <li>length of [list] يعطي عدد العناصر. <b>(صواب)</b></li>
        <li>item (0) of [list] عنصر صحيح. <b>(خطأ)</b></li>
        <li>insert يضيف عنصرًا في موضع محدّد. <b>(صواب)</b></li>
        <li>delete (last) يمسح آخر عنصر. <b>(صواب)</b></li>
        <li>answer تُخزّن آخر إجابة من ask. <b>(صواب)</b></li>
        <li>يمكن استخدام pick random لاختيار عنصر عشوائي. <b>(صواب)</b></li>
      </ol>
    `
  },

  assess_ws: {
    title: 'ورقة مهام (٣ تمارين)',
    body: `
      <ul>
        <li>١) أنشئ score/time وابدأ time من 15 ثانية (عداد تنازلي).</li>
        <li>٢) أنشئ questions/answers مع عنصرين، واطبع طول اللائحتين.</li>
        <li>٣) نفّذ حلقة تسأل عنصرين وتزيد score عند الإجابة الصحيحة.</li>
      </ul>
    `
  },

  assess_project: {
    title: 'Mini-Project (Quiz ٣ أسئلة)',
    body: `
      <ul>
        <li>متطلبات: 3 أسئلة + مقارنة answer + عرض score النهائي + Screenshot.</li>
        <li>اسم الملف: <b>G9_Data_Quiz_Mini_GroupX_v1.sb3</b></li>
      </ul>
    `
  },

  assess_rubric: {
    title: 'روبرك مختصر (20 نقطة)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>متغيّرات</td><td>set/change + HUD واضح</td><td>6</td></tr>
          <tr class="row"><td>مؤقّت</td><td>عداد تنازلي يعمل ويبثّ عند الصفر</td><td>4</td></tr>
          <tr class="row"><td>لوائح</td><td>إنشاء/قراءة/طول/فهرس آمن</td><td>5</td></tr>
          <tr class="row"><td>تنظيم/لقطة</td><td>تسمية عربية + Screenshot نهائي</td><td>3</td></tr>
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
        <li>Scratch (ويب/أوفلاين)، قائمة أسئلة صفّية قصيرة.</li>
      </ul>
    `
  },

  links: {
    title: 'روابط مفيدة',
    body: `
      <ul>
        <li><b>Scratch</b>: <span class="tag">scratch.mit.edu</span></li>
        <li>أمثلة ask/answer وقوائم (مصادر تعليمية مفتوحة).</li>
      </ul>
    `
  }

};
