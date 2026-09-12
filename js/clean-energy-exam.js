(function () {
  "use strict";

  var printButton = document.getElementById("printExam");
  var clearButton = document.getElementById("clearExam");
  var status = document.getElementById("examStatus") || document.querySelector("[data-exam-status]");
  var examRoot = document.getElementById("cleanEnergyExam") || document.querySelector("main") || document;

  try {
    window.localStorage.setItem("techno-g9:last-lesson", "html/exam-clean-energy-student.html");
  } catch (error) {
    /* The exam remains usable when browser storage is unavailable. */
  }

  function updateStatus(message) {
    if (!status) return;
    status.textContent = message;
  }

  if (printButton) {
    printButton.addEventListener("click", function () {
      updateStatus("تم فتح نافذة الطباعة. راجع إعدادات الطابعة قبل المتابعة.");
      window.print();
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      var confirmed = window.confirm("هل أنت متأكد من مسح جميع إجاباتك المكتوبة والمحددة؟ لا يمكن التراجع عن هذه الخطوة.");
      if (!confirmed) {
        updateStatus("لم يتم مسح الإجابات.");
        return;
      }

      examRoot.querySelectorAll('.exam-question input[type="text"], .exam-question textarea').forEach(function (control) {
        control.value = "";
      });

      examRoot.querySelectorAll('.exam-question input[type="radio"]').forEach(function (control) {
        control.checked = false;
      });

      updateStatus("تم مسح إجاباتك. يمكنك البدء من جديد.");
    });
  }
}());
