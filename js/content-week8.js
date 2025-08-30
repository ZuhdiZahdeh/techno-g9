/* content-week8.js — Modal content for Week 8 (Midterm Exam)
   Exposes: window.WEEK8
*/
window.WEEK8 = {

  /* Overview */
  g1: {
    title: 'خارطة الدرجات (Blueprint)',
    body: `
      <ul>
        <li><b>القسم النظري (٢٠):</b> ١٢ اختيار من متعدد + ٤ صواب/خطأ + ٢ قصيرة.</li>
        <li><b>العملي المختبري (١٥):</b> قراءات V/I + تفسير أثر (سرعة/زاوية/تظليل/تدفّق).</li>
        <li><b>البرمجة/وسائط (٥):</b> بث/متغيّر يغيّر عدّادًا + لقطة شاشة.</li>
        <li>المدة: ٤٥ دقيقة. يُسمح بآلة حاسبة بسيطة.</li>
      </ul>
    `
  },

  g2: {
    title: 'تعليمات المراقبة',
    body: `
      <ul>
        <li>ترقيم الأوراق فور التوزيع، منع مشاركة الأدوات بين المجموعات أثناء الحل.</li>
        <li>قسم العملي: تنظيم الدور على محطة القياس، مراقبة الالتزام بالسلامة.</li>
        <li>قسم البرمجة: مشروع Scratch محلي/أوفلاين أو حساب المدرسة، حفظ لقطة شاشة.</li>
        <li>تسليم بحسب الترتيب: نظري → عملي → برمجة/وسائط.</li>
      </ul>
    `
  },

  g3: {
    title: 'المادة المسموح بها',
    body: `
      <ul>
        <li>آلة حاسبة بسيطة، مسطرة/منقلة للزاوية، لا هواتف.</li>
        <li>لا مذكرات/كتب، لا تبادل أوراق خارج ورقة الامتحان.</li>
      </ul>
    `
  },

  /* Print packages */
  pkg_cover: {
    title: 'غلاف الامتحان (قابل للطباعة)',
    body: `
      <table class="tbl">
        <thead><tr><th>البند</th><th>المحتوى</th></tr></thead>
        <tbody>
          <tr class="row"><td>المادة</td><td>الصف التاسع — مبحث التكنولوجيا</td></tr>
          <tr class="row"><td>نوع الامتحان</td><td>منتصف الفصل (Midterm)</td></tr>
          <tr class="row"><td>المدة</td><td>٤٥ دقيقة</td></tr>
          <tr class="row"><td>الاسم</td><td>................................................</td></tr>
          <tr class="row"><td>الشعبة</td><td>..............</td></tr>
          <tr class="row"><td>التاريخ</td><td>........../........../..........</td></tr>
          <tr class="row"><td>التوقيع</td><td>المراقب: ..................</td></tr>
        </tbody>
      </table>
    `
  },

  pkg_answer: {
    title: 'ورقة الإجابة (القسم النظري)',
    body: `
      <h4>اختيار من متعدد (١–١٢)</h4>
      <table class="tbl">
        <thead><tr><th>السؤال</th><th>أ</th><th>ب</th><th>ج</th><th>د</th></tr></thead>
        <tbody>
          ${Array.from({length:12}).map((_,i)=>`<tr class="row"><td>${i+1}</td><td>☐</td><td>☐</td><td>☐</td><td>☐</td></tr>`).join('')}
        </tbody>
      </table>
      <h4>صواب/خطأ (١٣–١٦)</h4>
      <table class="tbl">
        <thead><tr><th>السؤال</th><th>صواب</th><th>خطأ</th></tr></thead>
        <tbody>
          ${[13,14,15,16].map(n=>`<tr class="row"><td>${n}</td><td>☐</td><td>☐</td></tr>`).join('')}
        </tbody>
      </table>
      <h4>أسئلة قصيرة (١٧–١٨)</h4>
      <ul><li>١٧) ..............................................................</li><li>١٨) ..............................................................</li></ul>
    `
  },

  pkg_lab: {
    title: 'ورقة العملي (مختبر) — V/I وP≈V×I',
    body: `
      <table class="tbl">
        <thead><tr><th>الحالة</th><th>الإعداد</th><th>V</th><th>I</th><th>P≈V×I</th><th>ملاحظة</th></tr></thead>
        <tbody>
          <tr class="row"><td>١</td><td>رياح منخفضة / زاوية ٣٠° / تدفّق منخفض</td><td></td><td></td><td></td><td></td></tr>
          <tr class="row"><td>٢</td><td>رياح عالية / زاوية ٤٥° / تدفّق عالٍ</td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <h4>سؤال تفسير</h4>
      <p>اشرح سبب اختلاف القدرة بين الحالتين، مستشهداً بالعامل المؤثر (سرعة/زاوية/تظليل/تدفّق).</p>
    `
  },

  pkg_prog: {
    title: 'ورقة البرمجة/وسائط — Scratch (٥ درجات)',
    body: `
      <p>أنشئ مشهدًا يحوي زرّين (Wind/Sun أو Flow/Head) ومتغيّر <b>power</b> يتغيّر بعد البثّ.</p>
      <pre dir="ltr" style="white-space:pre-wrap;background:#0f172a;border:1px solid rgba(148,163,184,.25);padding:10px;border-radius:10px">
Variables: power, factor
[Btn A] -> set factor=2; broadcast [go]
[Btn B] -> set factor=3; broadcast [go]
when I receive [go]
  set power to 0
  repeat 20
    change power by factor
      </pre>
      <p>أرفق لقطة شاشة للمشهد أثناء التشغيل.</p>
    `
  },

  /* Theory */
  theory_spec: {
    title: 'مواصفات القسم النظري (٢٠ درجة)',
    body: `
      <ul>
        <li>رياح/عنفة (٤ بنود): مكوّنات/السرعة/الاتزان.</li>
        <li>شمس/PV (٤ بنود): زاوية الميل/التظليل.</li>
        <li>مياه (٢ بند): تدفّق/ارتفاع.</li>
        <li>V/I وP≈V×I (٢ بند): تعريف/تطبيق بسيط.</li>
        <li>ص/خ (٤ بنود): تصحيح مفاهيم شائعة.</li>
        <li>قصيرة (٢ بند): تفسير مبسّط لعامل مؤثر.</li>
      </ul>
    `
  },

  theory_key: {
    title: 'مفتاح تصحيح مختصر (للمعلّم)',
    body: `
      <ul>
        <li>اختيار من متعدد: الإجابات النموذجية محفوظة في نموذج التصحيح.</li>
        <li>ص/خ: ٢ لكل بند، خصم نصف درجة للغموض.</li>
        <li>قصيرة: ٣ درجات لكل إجابة: (مصطلح صحيح ١ / تفسير منطقي ٢).</li>
      </ul>
    `
  },

  /* Lab */
  lab_tasks: {
    title: 'مهام العملي (١٥ درجة)',
    body: `
      <ul>
        <li>قياس V/I لحالتين محددتين بوضوح.</li>
        <li>حساب P التقريبية وكتابة ملاحظة عن العامل المؤثر.</li>
        <li>سلامة وأمان الأجهزة أثناء القياس.</li>
      </ul>
    `
  },

  lab_rubric: {
    title: 'روبرك العملي (١٥)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>دقة القراءات</td><td>V/I صحيحان ومستقران</td><td>6</td></tr>
          <tr class="row"><td>حساب P</td><td>P≈V×I وتفسير صحيح</td><td>4</td></tr>
          <tr class="row"><td>سلامة</td><td>توصيلات آمنة/منظمة</td><td>3</td></tr>
          <tr class="row"><td>تنظيم ورقة</td><td>جدول وملاحظات واضحة</td><td>2</td></tr>
        </tbody>
      </table>
    `
  },

  /* Programming */
  code_task: {
    title: 'مهمة البرمجة/وسائط (٥)',
    body: `
      <ul>
        <li>زرّان + بثّ + متغيّر + عدّاد يتغيّر بصريًا.</li>
        <li>أسماء عربية سليمة/أو إنجليزية واضحة.</li>
        <li>إرفاق لقطة شاشة للمشهد أثناء التشغيل.</li>
      </ul>
    `
  },

  code_rubric: {
    title: 'روبرك البرمجة (٥)',
    body: `
      <table class="tbl">
        <thead><tr><th>المعيار</th><th>الوصف</th><th>الدرجة</th></tr></thead>
        <tbody>
          <tr class="row"><td>وظيفية</td><td>عمل الأزرار والبثّ</td><td>2</td></tr>
          <tr class="row"><td>متغيّر/عدّاد</td><td>تغيّر واضح ومقروء</td><td>2</td></tr>
          <tr class="row"><td>لقطة/تنسيق</td><td>تسمية/لقطة صحيحة</td><td>1</td></tr>
        </tbody>
      </table>
    `
  },

  /* Remedial */
  remed_sheet: {
    title: 'نموذج تحليل الأخطاء (بعد التسليم)',
    body: `
      <table class="tbl">
        <thead><tr><th>البند</th><th>إجابتي</th><th>الإجابة الصحيحة</th><th>سبب الخطأ</th><th>كيف أصلح؟</th></tr></thead>
        <tbody>
          ${Array.from({length:6}).map(()=>`<tr class="row"><td></td><td></td><td></td><td></td><td></td></tr>`).join('')}
        </tbody>
      </table>
    `
  },

  remed_plan: {
    title: 'خطة تحسين أسبوعية (mini-plan)',
    body: `
      <ul>
        <li>هدف هذا الأسبوع: .................................................</li>
        <li>تمرين عملي (١): ...................................................</li>
        <li>تمرين برمجي (٢): .................................................</li>
        <li>مراجعة نظرية (٣): .................................................</li>
        <li>موعد متابعة: ....../....../......</li>
      </ul>
    `
  },

  /* Ops */
  resources: {
    title: 'قائمة الموارد',
    body: `
      <ul>
        <li>أوراق مطبوعة: غلاف، إجابة، عملي، برمجة.</li>
        <li>DMM، بروتوبورد، LED/مقاومات، عنفة/لوح/دفّاعة (تعليمي).</li>
        <li>حواسيب (Scratch)، مؤقّت صفّي، أظرف تسليم.</li>
      </ul>
    `
  },

  procedures: {
    title: 'إجراءات سريعة',
    body: `
      <ul>
        <li>قبل البدء: توزيع الغلاف والأرقام، شرح الأقسام باختصار.</li>
        <li>أثناء الامتحان: إدارة الدور على العملي، مراقبة السلامة.</li>
        <li>بعد التسليم: تجميع/ترقيم/أرشفة، إعلان خطة العلاج السريعة.</li>
      </ul>
    `
  }

};
