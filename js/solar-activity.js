(function () {
  "use strict";

  var lightRange = document.getElementById("lightRange");
  var angleRange = document.getElementById("angleRange");
  var coverRange = document.getElementById("coverRange");
  var lightValue = document.getElementById("lightValue");
  var angleValue = document.getElementById("angleValue");
  var coverValue = document.getElementById("coverValue");
  var stage = document.getElementById("simulatorStage");
  var panel = document.getElementById("solarPanel");
  var panelCover = document.getElementById("panelCover");
  var fan = document.getElementById("motorFan");
  var currentOutput = document.getElementById("currentOutput");
  var speedOutput = document.getElementById("speedOutput");
  var outputMeter = document.getElementById("outputMeter");
  var outputFill = document.getElementById("outputFill");
  var runButton = document.getElementById("runSimulation");
  var recordButton = document.getElementById("recordResult");
  var resetButton = document.getElementById("resetSimulation");
  var clearButton = document.getElementById("clearResults");
  var resultsBody = document.getElementById("resultsBody");
  var recordMessage = document.getElementById("recordMessage");
  var conclusionCard = document.getElementById("conclusionCard");
  var predictionFeedback = document.getElementById("predictionFeedback");
  var lastResult = null;
  var recordedCount = 0;
  var recordedConditions = {};

  var requiredElements = [
    lightRange, angleRange, coverRange, lightValue, angleValue, coverValue,
    stage, panel, panelCover, fan, currentOutput, speedOutput, outputMeter,
    outputFill, runButton, recordButton, resetButton, clearButton,
    resultsBody, recordMessage, conclusionCard, predictionFeedback
  ];

  if (requiredElements.some(function (element) { return !element; })) return;

  try {
    window.localStorage.setItem("techno-g9:last-lesson", "html/lesson-solar-energy-student.html");
  } catch (error) {
    /* The activity remains fully usable when browser storage is unavailable. */
  }

  function numberValue(input) {
    return Number(input.value);
  }

  function stopOutput(message) {
    fan.classList.remove("is-spinning");
    currentOutput.textContent = "0%";
    speedOutput.textContent = message || "جاهز";
    outputFill.style.width = "0%";
    outputMeter.setAttribute("aria-valuenow", "0");
    recordButton.disabled = true;
    lastResult = null;
  }

  function updateControls() {
    var light = numberValue(lightRange);
    var angle = numberValue(angleRange);
    var cover = numberValue(coverRange);
    var lightRatio = light / 100;

    lightValue.textContent = light + "%";
    angleValue.textContent = angle + "°";
    coverValue.textContent = cover + "%";
    panel.style.setProperty("--panel-angle", angle + "deg");
    panelCover.style.width = cover + "%";
    stage.style.setProperty("--sun-opacity", String(0.25 + lightRatio * 0.75));
    stage.style.setProperty("--beam-opacity", String(0.08 + lightRatio * 0.82));
    stage.style.setProperty("--darkness", String((1 - lightRatio) * 0.48));
    stopOutput("جاهز");
    recordMessage.textContent = "اضغط تشغيل التجربة لمشاهدة النتيجة.";
  }

  function classifySpeed(current) {
    if (current < 8) return "متوقف";
    if (current < 35) return "بطيء";
    if (current < 70) return "متوسط";
    return "سريع";
  }

  function showPredictionFeedback() {
    var selected = document.querySelector('input[name="prediction"]:checked');
    if (!selected) {
      predictionFeedback.textContent = "يمكنك الآن اختيار توقّع ثم مقارنة الحالات المختلفة.";
      return;
    }

    if (selected.value === "best") {
      predictionFeedback.textContent = "توقّع صحيح: أعلى خرج يظهر مع ضوء قوي، ومواجهة مباشرة، ومن دون تغطية.";
    } else {
      predictionFeedback.textContent = "قارن توقعك بتجربة الأشعة المباشرة، ثم لاحظ أثر الميل والتغطية.";
    }
  }

  function runSimulation() {
    var light = numberValue(lightRange);
    var angle = numberValue(angleRange);
    var cover = numberValue(coverRange);
    var angleFactor = Math.max(0, Math.cos(angle * Math.PI / 180));
    var effectiveOutput = (light / 100) * angleFactor * (1 - cover / 100);
    var current = Math.round(effectiveOutput * 100);
    var speed = classifySpeed(current);

    lastResult = {
      light: light,
      angle: angle,
      cover: cover,
      current: current,
      speed: speed
    };

    currentOutput.textContent = current + "%";
    speedOutput.textContent = speed;
    outputFill.style.width = current + "%";
    outputMeter.setAttribute("aria-valuenow", String(current));
    recordButton.disabled = false;
    fan.classList.remove("is-spinning");

    if (current >= 8) {
      fan.style.setProperty("--fan-duration", Math.max(0.32, 1.55 - current * 0.012) + "s");
      window.requestAnimationFrame(function () {
        fan.classList.add("is-spinning");
      });
    }

    recordMessage.textContent = "ظهرت النتيجة. يمكنك تسجيلها في الجدول.";
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
      return;
    }

    var emptyRow = document.getElementById("emptyResults");
    if (emptyRow) emptyRow.remove();

    recordedCount += 1;
    recordedConditions[lastResult.light + "-" + lastResult.angle + "-" + lastResult.cover] = true;
    var row = document.createElement("tr");
    appendCell(row, String(recordedCount));
    appendCell(row, lastResult.light + "%");
    appendCell(row, lastResult.angle + "°");
    appendCell(row, lastResult.cover + "%");
    appendCell(row, lastResult.current + "%");
    appendCell(row, lastResult.speed);
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
    cell.colSpan = 6;
    cell.textContent = "لم تُسجَّل نتائج بعد.";
    row.appendChild(cell);
    resultsBody.appendChild(row);
    recordedCount = 0;
    recordedConditions = {};
    conclusionCard.hidden = true;
    recordMessage.textContent = "تم مسح النتائج.";
  }

  function setPreset(button) {
    lightRange.value = button.getAttribute("data-light");
    angleRange.value = button.getAttribute("data-angle");
    coverRange.value = button.getAttribute("data-cover");
    updateControls();
    runSimulation();
  }

  [lightRange, angleRange, coverRange].forEach(function (input) {
    input.addEventListener("input", updateControls);
  });

  document.querySelectorAll(".preset-button").forEach(function (button) {
    button.addEventListener("click", function () {
      setPreset(button);
    });
  });

  document.querySelectorAll('input[name="prediction"]').forEach(function (input) {
    input.addEventListener("change", showPredictionFeedback);
  });

  runButton.addEventListener("click", runSimulation);
  recordButton.addEventListener("click", recordResult);
  clearButton.addEventListener("click", clearResults);
  resetButton.addEventListener("click", function () {
    lightRange.value = "100";
    angleRange.value = "0";
    coverRange.value = "0";
    updateControls();
  });

  updateControls();
}());
