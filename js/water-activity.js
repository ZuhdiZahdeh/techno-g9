(function () {
  "use strict";

  var flowRange = document.getElementById("flowRange");
  var headRange = document.getElementById("headRange");
  var loadSelect = document.getElementById("loadSelect");
  var flowValue = document.getElementById("flowValue");
  var headValue = document.getElementById("headValue");
  var stage = document.getElementById("simulatorStage");
  var waterStream = document.getElementById("waterStream");
  var heightGuideFill = document.getElementById("heightGuideFill");
  var heightGuideLabel = document.getElementById("heightGuideLabel");
  var turbineWheel = document.getElementById("turbineWheel");
  var loadUnit = document.getElementById("loadUnit");
  var bellIcon = document.getElementById("bellIcon");
  var lampIcon = document.getElementById("lampIcon");
  var loadLabel = document.getElementById("loadLabel");
  var relativeOutput = document.getElementById("relativeOutput");
  var turbineSpeedOutput = document.getElementById("turbineSpeedOutput");
  var rpmOutput = document.getElementById("rpmOutput");
  var voltageOutput = document.getElementById("voltageOutput");
  var currentAmpOutput = document.getElementById("currentAmpOutput");
  var loadStateOutput = document.getElementById("loadStateOutput");
  var outputMeter = document.getElementById("outputMeter");
  var outputFill = document.getElementById("outputFill");
  var simulationSummary = document.getElementById("simulationSummary");
  var runButton = document.getElementById("runSimulation");
  var recordButton = document.getElementById("recordResult");
  var resetButton = document.getElementById("resetSimulation");
  var clearButton = document.getElementById("clearResults");
  var printButton = document.getElementById("printActivity");
  var resultsBody = document.getElementById("resultsBody");
  var recordMessage = document.getElementById("recordMessage");
  var conclusionCard = document.getElementById("conclusionCard");
  var predictionFeedback = document.getElementById("predictionFeedback");
  var lastResult = null;
  var recordedCount = 0;
  var recordedConditions = {};

  var requiredElements = [
    flowRange, headRange, loadSelect, flowValue, headValue, stage, waterStream,
    heightGuideFill, heightGuideLabel, turbineWheel, loadUnit, bellIcon, lampIcon,
    loadLabel, relativeOutput, turbineSpeedOutput, rpmOutput, voltageOutput,
    currentAmpOutput, loadStateOutput, outputMeter, outputFill, simulationSummary,
    runButton, recordButton, resetButton, clearButton, printButton, resultsBody,
    recordMessage, conclusionCard, predictionFeedback
  ];

  if (requiredElements.some(function (element) { return !element; })) return;

  try {
    window.localStorage.setItem("techno-g9:last-lesson", "html/lesson-water-energy-student.html");
  } catch (error) {
    /* The activity remains fully usable when browser storage is unavailable. */
  }

  function numberValue(input) {
    return Number(input.value);
  }

  function loadName(value) {
    return value === "lamp" ? "مصباح 12V" : "جرس";
  }

  function classifySpeed(output) {
    if (output === 0) return "متوقف";
    if (output < 15) return "بطيء";
    if (output < 45) return "متوسط";
    if (output < 75) return "سريع";
    return "سريع جدًا";
  }

  function calculateLoadState(type, output) {
    if (output === 0) return type === "lamp" ? "مطفأ" : "لا يعمل";

    if (type === "lamp") {
      if (output < 18) return "إضاءة خافتة جدًا";
      if (output < 45) return "إضاءة خافتة";
      if (output < 75) return "إضاءة متوسطة";
      return "إضاءة قوية";
    }

    if (output < 18) return "لا يرنّ";
    if (output < 45) return "صوت ضعيف";
    return "يرنّ بوضوح";
  }

  function setLoadVisual(type, output, isRunning) {
    var isLamp = type === "lamp";
    var glow = isRunning ? output / 100 : 0;

    bellIcon.hidden = isLamp;
    lampIcon.hidden = !isLamp;
    loadLabel.textContent = isLamp ? "مصباح 12 فولت" : "جرس كهربائي";
    loadUnit.style.setProperty("--load-glow-size", (22 * glow).toFixed(1) + "px");
    loadUnit.style.setProperty("--load-opacity", String(0.35 + glow * 0.65));
    bellIcon.classList.remove("is-active");
    lampIcon.classList.remove("is-active");

    if (!isRunning) return;
    if (isLamp && output >= 8) lampIcon.classList.add("is-active");
    if (!isLamp && output >= 18) bellIcon.classList.add("is-active");
  }

  function stopOutput(message) {
    stage.classList.remove("is-running");
    turbineWheel.classList.remove("is-spinning");
    relativeOutput.textContent = "0%";
    turbineSpeedOutput.textContent = message || "جاهز";
    rpmOutput.textContent = "0 دورة/د";
    voltageOutput.textContent = "0.0 V";
    currentAmpOutput.textContent = "0.00 A";
    loadStateOutput.textContent = message || "جاهز";
    outputFill.style.width = "0%";
    outputMeter.setAttribute("aria-valuenow", "0");
    simulationSummary.textContent = "اضبط القيم ثم شغّل التجربة.";
    recordButton.disabled = true;
    lastResult = null;
    setLoadVisual(loadSelect.value, 0, false);
  }

  function updateControls() {
    var flow = numberValue(flowRange);
    var head = numberValue(headRange);
    var headRatio = head / 10;
    var streamWidth = flow === 0 ? 0 : 5 + (flow / 100) * 25;

    flowValue.textContent = flow + "%";
    headValue.textContent = head + " م";
    flowRange.setAttribute("aria-valuetext", flow + " بالمئة");
    headRange.setAttribute("aria-valuetext", head + " أمتار");
    stage.style.setProperty("--head-offset", (headRatio * 88).toFixed(1) + "px");
    stage.style.setProperty("--stream-width", streamWidth.toFixed(1) + "px");
    stage.style.setProperty("--stream-opacity", flow === 0 ? "0" : String(0.42 + (flow / 100) * 0.55));
    heightGuideFill.style.height = (headRatio * 100) + "%";
    heightGuideLabel.textContent = head + " م";
    stopOutput("جاهز");
    recordMessage.textContent = "اضغط تشغيل التجربة لمشاهدة النتيجة.";
  }

  function showPredictionFeedback() {
    var selected = document.querySelector('input[name="prediction"]:checked');
    if (!selected) {
      predictionFeedback.textContent = "يمكنك الآن اختيار توقّع ثم مقارنة الحالات المختلفة.";
      return;
    }

    if (selected.value === "best") {
      predictionFeedback.textContent = "توقّع صحيح: يجتمع أكبر تدفق مع أكبر ارتفاع فتكون الطاقة المتاحة أعلى.";
    } else {
      predictionFeedback.textContent = "قارن توقّعك بحالة التدفق المرتفع والارتفاع الكبير، ثم غيّر عاملًا واحدًا في كل مرة.";
    }
  }

  function buildSummary(flow, head, output, speed, loadState) {
    if (flow === 0) {
      return "انقطع جريان الماء؛ لذلك توقف التوربين وأصبح الإنتاج صفرًا مهما كان الارتفاع.";
    }
    if (head === 0) {
      return "لا يوجد فرق ارتفاع في النموذج؛ لذلك لا تتوافر طاقة سقوط لتدوير التوربين.";
    }
    return "عند تدفق " + flow + "% وارتفاع " + head + " م، كان الإنتاج النسبي " + output + "%، ودوران التوربين " + speed + "، وحالة الحمل: " + loadState + ".";
  }

  function runSimulation() {
    var flow = numberValue(flowRange);
    var head = numberValue(headRange);
    var type = loadSelect.value;
    var outputRatio = (flow / 100) * (head / 10);
    var output = Math.round(outputRatio * 100);
    var voltage = output === 0 ? 0 : 12 * Math.sqrt(outputRatio);
    var current = 0.6 * outputRatio;
    var rpm = output === 0 ? 0 : Math.round(80 + 1120 * Math.sqrt(outputRatio));
    var speed = classifySpeed(output);
    var loadState = calculateLoadState(type, output);

    lastResult = {
      flow: flow,
      head: head,
      load: loadName(type),
      output: output,
      speed: speed,
      voltage: voltage.toFixed(1) + " V",
      current: current.toFixed(2) + " A"
    };

    relativeOutput.textContent = output + "%";
    turbineSpeedOutput.textContent = speed;
    rpmOutput.textContent = rpm + " دورة/د";
    voltageOutput.textContent = voltage.toFixed(1) + " V";
    currentAmpOutput.textContent = current.toFixed(2) + " A";
    loadStateOutput.textContent = loadState;
    outputFill.style.width = output + "%";
    outputMeter.setAttribute("aria-valuenow", String(output));
    simulationSummary.textContent = buildSummary(flow, head, output, speed, loadState);
    recordButton.disabled = recordedCount >= 6;
    stage.classList.remove("is-running");
    turbineWheel.classList.remove("is-spinning");
    turbineWheel.style.setProperty("--turbine-duration", Math.max(0.28, 1.9 - output * 0.016) + "s");
    setLoadVisual(type, output, true);

    window.requestAnimationFrame(function () {
      stage.classList.add("is-running");
      if (output > 0) turbineWheel.classList.add("is-spinning");
    });

    recordMessage.textContent = recordedCount >= 6
      ? "اكتمل الجدول بست محاولات. امسح النتائج لبدء جدول جديد."
      : "ظهرت النتيجة. يمكنك تسجيلها في الجدول.";
    showPredictionFeedback();
  }

  function appendCell(row, value) {
    var cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  }

  function recordResult() {
    if (!lastResult) return;
    if (recordedCount >= 6) {
      recordMessage.textContent = "اكتمل الجدول بست محاولات. امسح النتائج لبدء جدول جديد.";
      recordButton.disabled = true;
      return;
    }

    var emptyRow = document.getElementById("emptyResults");
    if (emptyRow) emptyRow.remove();

    recordedCount += 1;
    recordedConditions[lastResult.flow + "-" + lastResult.head] = true;
    var row = document.createElement("tr");
    appendCell(row, String(recordedCount));
    appendCell(row, lastResult.flow + "%");
    appendCell(row, lastResult.head + " م");
    appendCell(row, lastResult.load);
    appendCell(row, lastResult.output + "%");
    appendCell(row, lastResult.speed);
    appendCell(row, lastResult.voltage);
    appendCell(row, lastResult.current);
    resultsBody.appendChild(row);
    recordMessage.textContent = "سُجّلت المحاولة " + recordedCount + " من 6.";
    recordButton.disabled = true;
    lastResult = null;

    if (Object.keys(recordedConditions).length >= 3) {
      conclusionCard.hidden = false;
      recordMessage.textContent += " ظهر قسم الاستنتاج أسفل الجدول.";
    } else if (recordedCount >= 3) {
      recordMessage.textContent += " سجّل حالات مختلفة لإظهار الاستنتاج.";
    }
  }

  function clearResults() {
    resultsBody.textContent = "";
    var row = document.createElement("tr");
    row.id = "emptyResults";
    var cell = document.createElement("td");
    cell.colSpan = 8;
    cell.textContent = "لم تُسجَّل نتائج بعد.";
    row.appendChild(cell);
    resultsBody.appendChild(row);
    recordedCount = 0;
    recordedConditions = {};
    conclusionCard.hidden = true;
    recordMessage.textContent = "تم مسح النتائج.";
  }

  function setPreset(button) {
    flowRange.value = button.getAttribute("data-flow");
    headRange.value = button.getAttribute("data-head");
    updateControls();
    runSimulation();
  }

  [flowRange, headRange].forEach(function (input) {
    input.addEventListener("input", updateControls);
  });

  loadSelect.addEventListener("change", updateControls);

  document.querySelectorAll(".preset-button").forEach(function (button) {
    button.addEventListener("click", function () {
      setPreset(button);
    });
  });

  document.querySelectorAll('input[name="prediction"]').forEach(function (input) {
    input.addEventListener("change", function () {
      predictionFeedback.textContent = "تم تسجيل توقّعك. شغّل التجربة للتحقق منه.";
    });
  });

  runButton.addEventListener("click", runSimulation);
  recordButton.addEventListener("click", recordResult);
  clearButton.addEventListener("click", clearResults);
  resetButton.addEventListener("click", function () {
    flowRange.value = "60";
    headRange.value = "6";
    loadSelect.value = "bell";
    updateControls();
  });
  printButton.addEventListener("click", function () {
    window.print();
  });

  updateControls();
}());
