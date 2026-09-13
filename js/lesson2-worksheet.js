(function () {
  "use strict";

  var STORAGE_KEY = "techno-g9:worksheet:l2-applications:v2";
  var form = document.getElementById("lesson2Worksheet");
  var status = document.getElementById("worksheetStatus");
  var progress = document.getElementById("worksheetProgress");
  var progressText = document.getElementById("worksheetProgressText");
  var saveTimer = null;
  var printMode = "filled";
  var printedTextareaStyles = [];

  if (!form) return;

  var answerControls = Array.prototype.slice.call(form.querySelectorAll("[data-answer]"));
  answerControls.forEach(function (control) {
    if (!control.getAttribute("aria-label") && control.getAttribute("data-label") && !control.labels.length) {
      control.setAttribute("aria-label", control.getAttribute("data-label"));
    }
  });

  function shuffle(items) {
    for (var index = items.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var item = items[index];
      items[index] = items[swapIndex];
      items[swapIndex] = item;
    }
    return items;
  }

  function randomizeChoiceOrder() {
    form.querySelectorAll("#terms select, #applications select, #benefits-challenges select").forEach(function (select) {
      var placeholder = select.options[0];
      var choices = shuffle(Array.prototype.slice.call(select.options, 1));
      select.textContent = "";
      select.appendChild(placeholder);
      choices.forEach(function (choice) { select.appendChild(choice); });
    });

    var benefits = form.querySelector("#benefits-challenges .mcq-options");
    if (benefits) {
      shuffle(Array.prototype.slice.call(benefits.children)).forEach(function (choice) {
        benefits.appendChild(choice);
      });
    }
  }

  function say(message) {
    if (status) status.textContent = message;
  }

  function arabicNumber(value) {
    try {
      return new Intl.NumberFormat("ar").format(value);
    } catch (error) {
      return String(value);
    }
  }

  function controlKey(control) {
    return control.name || control.id;
  }

  function controlsForKey(key) {
    return answerControls.filter(function (control) {
      return controlKey(control) === key;
    });
  }

  function isGroupAnswered(controls) {
    controls = controls.filter(function (control) { return !control.disabled; });
    if (!controls.length) return true;
    var type = controls[0].type;
    if (type === "checkbox") {
      var container = controls[0].closest("[data-min-selected]");
      var minimum = container ? Number(container.getAttribute("data-min-selected")) || 1 : 1;
      return controls.filter(function (control) { return control.checked; }).length >= minimum;
    }
    if (type === "radio") {
      return controls.some(function (control) { return control.checked; });
    }
    return controls.some(function (control) { return String(control.value || "").trim() !== ""; });
  }

  function requiredBlocks() {
    return Array.prototype.slice.call(form.querySelectorAll("[data-response]")).filter(function (block) {
      return block.querySelector("[data-answer]:not([data-optional])");
    });
  }

  function blockAnswered(block) {
    return missingControlsInBlock(block).length === 0;
  }

  function updateProgress() {
    var blocks = requiredBlocks();
    var answered = blocks.filter(blockAnswered).length;
    if (progress) {
      progress.max = Math.max(blocks.length, 1);
      progress.value = answered;
    }
    if (progressText) {
      progressText.textContent = "أكملت " + arabicNumber(answered) + " من " + arabicNumber(blocks.length);
    }
    return { answered: answered, total: blocks.length };
  }

  function serialize() {
    var values = Object.create(null);
    answerControls.forEach(function (control) {
      if (control.disabled) return;
      var key = controlKey(control);
      if (!key) return;
      if (control.type === "radio") {
        if (!(key in values)) values[key] = "";
        if (control.checked) values[key] = control.value;
      } else if (control.type === "checkbox") {
        if (!Array.isArray(values[key])) values[key] = [];
        if (control.checked) values[key].push(control.value);
      } else {
        values[key] = control.value;
      }
    });
    return {
      version: 2,
      savedAt: new Date().toISOString(),
      values: values
    };
  }

  function save(showMessage) {
    try {
      var draft = serialize();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      window.localStorage.setItem("techno-g9:last-lesson", "html/worksheet-l2-applications.html");
      if (showMessage) {
        say("حُفظت مسودتك على هذا الجهاز في " + new Date(draft.savedAt).toLocaleTimeString("ar", { hour: "2-digit", minute: "2-digit" }) + ".");
      }
      return true;
    } catch (error) {
      if (showMessage) say("تعذر الحفظ المحلي في هذا المتصفح. نزّل إجاباتك أو اطبعها قبل الإغلاق.");
      return false;
    }
  }

  function scheduleSave() {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(function () { save(false); }, 700);
  }

  function restore() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var draft = JSON.parse(raw);
      if (!draft || !draft.values) return;
      answerControls.forEach(function (control) {
        var key = controlKey(control);
        if (!key || !(key in draft.values)) return;
        var value = draft.values[key];
        if (control.type === "radio") {
          control.checked = value === control.value;
        } else if (control.type === "checkbox") {
          control.checked = Array.isArray(value) && value.indexOf(control.value) !== -1;
        } else {
          control.value = value;
        }
      });
      updateConditionalCorrections();
      var savedDate = draft.savedAt ? new Date(draft.savedAt).toLocaleString("ar") : "سابقًا";
      say("استُعيدت مسودتك المحفوظة بتاريخ " + savedDate + ".");
    } catch (error) {
      say("لم نتمكن من استعادة المسودة السابقة، ويمكنك البدء بإجابة جديدة.");
    }
  }

  function updateConditionalCorrections() {
    form.querySelectorAll("[data-correction-for]").forEach(function (wrapper) {
      var name = wrapper.getAttribute("data-correction-for");
      var chosen = form.querySelector('input[name="' + name + '"]:checked');
      var input = wrapper.querySelector("input, textarea");
      var active = chosen && chosen.value === "false";
      wrapper.classList.toggle("is-active", Boolean(active));
      if (input) {
        if (!active) input.value = "";
        input.disabled = !active;
      }
    });
  }

  function clearIncomplete() {
    form.querySelectorAll(".is-incomplete").forEach(function (element) {
      element.classList.remove("is-incomplete");
    });
    answerControls.forEach(function (control) {
      control.removeAttribute("aria-invalid");
    });
  }

  function missingControlsInBlock(block) {
    var controls = Array.prototype.slice.call(block.querySelectorAll("[data-answer]:not([data-optional]):not(:disabled)"));
    var groups = Object.create(null);
    var missing = [];
    controls.forEach(function (control) {
      var key = controlKey(control);
      if (!key) return;
      if (!groups[key]) groups[key] = [];
      groups[key].push(control);
    });
    Object.keys(groups).forEach(function (key) {
      if (!isGroupAnswered(groups[key])) {
        missing.push(groups[key].find(function (control) { return !control.checked; }) || groups[key][0]);
      }
    });
    var correction = block.querySelector("[data-correction-for].is-active input, [data-correction-for].is-active textarea");
    if (correction && !String(correction.value || "").trim()) missing.push(correction);
    return missing;
  }

  function checkCompleteness() {
    clearIncomplete();
    var missingControls = [];
    requiredBlocks().forEach(function (block) {
      var blockMissing = missingControlsInBlock(block);
      if (blockMissing.length) {
        missingControls = missingControls.concat(blockMissing);
        block.classList.add("is-incomplete");
        blockMissing.forEach(function (item) { item.setAttribute("aria-invalid", "true"); });
      }
    });

    var snapshot = updateProgress();
    if (!missingControls.length) {
      say("أحسنت! أجبت عن جميع الحقول المطلوبة. راجع دقة إجاباتك مع المعلم ثم احفظها أو اطبعها.");
      save(false);
      return;
    }

    say("تبقّى " + arabicNumber(missingControls.length) + " موضعًا يحتاج إلى إجابة أو تصويب. أُبرزت المواضع الناقصة.");
    if (snapshot.answered < snapshot.total && missingControls[0]) {
      missingControls[0].focus({ preventScroll: true });
      var target = missingControls[0].closest("[data-response]") || missingControls[0];
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function labelFor(control) {
    return control.getAttribute("data-label") || control.getAttribute("aria-label") || controlKey(control);
  }

  function valueForKey(key) {
    var controls = controlsForKey(key);
    if (!controls.length) return "";
    if (controls[0].type === "radio") {
      var checkedRadio = controls.find(function (control) { return control.checked; });
      if (!checkedRadio) return "";
      var radioLabel = checkedRadio.closest("label");
      return radioLabel ? radioLabel.textContent.trim() : checkedRadio.value;
    }
    if (controls[0].type === "checkbox") {
      return controls.filter(function (control) { return control.checked; }).map(function (control) {
        var checkboxLabel = control.closest("label");
        return checkboxLabel ? checkboxLabel.textContent.trim() : control.value;
      }).join("، ");
    }
    if (controls[0].tagName === "SELECT") {
      var option = controls[0].options[controls[0].selectedIndex];
      return option && controls[0].value ? option.textContent.trim() : "";
    }
    return String(controls[0].value || "").trim();
  }

  function downloadAnswers() {
    var seen = Object.create(null);
    var lines = [
      "ورقة عمل الدرس الثاني: تطبيقات الطاقة النظيفة",
      "تاريخ التنزيل: " + new Date().toLocaleString("ar"),
      ""
    ];
    answerControls.forEach(function (control) {
      if (control.disabled) return;
      var key = controlKey(control);
      if (!key || seen[key]) return;
      seen[key] = true;
      lines.push(labelFor(control) + ": " + (valueForKey(key) || "—"));
    });
    var blob = new Blob(["\ufeff" + lines.join("\n")], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "اجابات-ورقة-عمل-تطبيقات-الطاقة-النظيفة.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    save(false);
    say("نُزّلت نسخة نصية من إجاباتك. احتفظ بها في مكان آمن.");
  }

  function prepareTextareasForPrint(blank) {
    printedTextareaStyles = [];
    if (blank) return;
    form.querySelectorAll("textarea").forEach(function (textarea) {
      printedTextareaStyles.push({
        element: textarea,
        height: textarea.style.height,
        overflow: textarea.style.overflow
      });
      textarea.style.height = Math.max(textarea.scrollHeight, textarea.offsetHeight) + "px";
      textarea.style.overflow = "visible";
    });
  }

  function restoreTextareasAfterPrint() {
    printedTextareaStyles.forEach(function (saved) {
      saved.element.style.height = saved.height;
      saved.element.style.overflow = saved.overflow;
    });
    printedTextareaStyles = [];
  }

  function printWorksheet(blank) {
    printMode = blank ? "blank" : "filled";
    clearIncomplete();
    document.body.classList.toggle("print-blank", blank);
    document.body.classList.toggle("print-filled", !blank);
    prepareTextareasForPrint(blank);
    say(blank ? "ستُطبع نسخة فارغة من ورقة العمل." : "ستُطبع ورقة العمل مع إجاباتك الحالية.");
    if (!blank) save(false);
    window.print();
  }

  function clearWorksheet() {
    var confirmed = window.confirm("هل تريد مسح جميع إجابات ورقة العمل والمسودة المحفوظة على هذا الجهاز؟ لا يمكن التراجع عن هذه الخطوة.");
    if (!confirmed) {
      say("لم تُمسح الإجابات.");
      return;
    }
    form.reset();
    clearIncomplete();
    updateConditionalCorrections();
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (error) { /* Continue normally. */ }
    updateProgress();
    say("مُسحت الإجابات والمسودة المحفوظة. يمكنك البدء من جديد.");
    var first = form.querySelector("input, select, textarea");
    if (first) first.focus();
  }

  form.addEventListener("input", function () {
    clearIncomplete();
    updateProgress();
    scheduleSave();
  });

  form.addEventListener("change", function () {
    updateConditionalCorrections();
    clearIncomplete();
    updateProgress();
    scheduleSave();
  });

  var saveButton = document.getElementById("saveWorksheet");
  var checkButton = document.getElementById("checkWorksheet");
  var downloadButton = document.getElementById("downloadWorksheet");
  var clearButton = document.getElementById("clearWorksheet");
  var printFilledButton = document.getElementById("printWorksheetFilled");
  var printBlankButton = document.getElementById("printWorksheetBlank");
  var bottomPrintButton = document.getElementById("bottomPrintWorksheet");

  if (saveButton) saveButton.addEventListener("click", function () { save(true); });
  if (checkButton) checkButton.addEventListener("click", checkCompleteness);
  if (downloadButton) downloadButton.addEventListener("click", downloadAnswers);
  if (clearButton) clearButton.addEventListener("click", clearWorksheet);
  if (printFilledButton) printFilledButton.addEventListener("click", function () { printWorksheet(false); });
  if (printBlankButton) printBlankButton.addEventListener("click", function () { printWorksheet(true); });
  if (bottomPrintButton) bottomPrintButton.addEventListener("click", function () { printWorksheet(false); });

  window.addEventListener("afterprint", function () {
    document.body.classList.remove("print-blank", "print-filled");
    restoreTextareasAfterPrint();
    printMode = "filled";
  });

  window.addEventListener("pagehide", function () { save(false); });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") save(false);
  });

  randomizeChoiceOrder();
  restore();
  updateConditionalCorrections();
  updateProgress();
}());
