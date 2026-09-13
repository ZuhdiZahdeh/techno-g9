(function () {
  "use strict";

  var windSpeedRange = document.getElementById("windSpeedRange");
  var windSpeedValue = document.getElementById("windSpeedValue");
  var stage = document.getElementById("simulatorStage");
  var windField = document.getElementById("windField");
  var windTurbine = document.getElementById("windTurbine");
  var windRotor = document.getElementById("windRotor");
  var lampUnit = document.getElementById("lampUnit");
  var lampBulb = document.getElementById("lampBulb");
  var relativeOutput = document.getElementById("relativeOutput");
  var turbineSpeedOutput = document.getElementById("turbineSpeedOutput");
  var rpmOutput = document.getElementById("rpmOutput");
  var voltageOutput = document.getElementById("voltageOutput");
  var currentAmpOutput = document.getElementById("currentAmpOutput");
  var lampStateOutput = document.getElementById("lampStateOutput");
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
  var animationFrameId = null;

  var requiredElements = [
    windSpeedRange, windSpeedValue, stage, windField,
    windTurbine, windRotor, lampUnit, lampBulb, relativeOutput,
    turbineSpeedOutput, rpmOutput, voltageOutput, currentAmpOutput,
    lampStateOutput, outputMeter, outputFill, simulationSummary, runButton,
    recordButton, resetButton, clearButton, printButton, resultsBody,
    recordMessage, conclusionCard, predictionFeedback
  ];

  if (requiredElements.some(function (element) { return !element; })) return;

  try {
    window.localStorage.setItem("techno-g9:last-lesson", "html/lesson-week3-student.html");
  } catch (error) {
    /* The activity remains fully usable when browser storage is unavailable. */
  }

  function configureRanges() {
    windSpeedRange.min = "0";
    windSpeedRange.max = "15";
    windSpeedRange.step = "1";

    if (!windSpeedRange.hasAttribute("value")) windSpeedRange.value = "8";
  }

  function numberValue(input) {
    return Number(input.value);
  }

  function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, value));
  }

  function classifySpeed(rpm) {
    if (rpm <= 0) return "متوقفة";
    if (rpm < 225) return "بطيئة";
    if (rpm < 500) return "متوسطة";
    if (rpm < 750) return "سريعة";
    return "سريعة جدًا";
  }

  function calculateLampState(output) {
    if (output < 12) return "مطفأ";
    if (output < 35) return "خافت جدًا";
    if (output < 65) return "خافت";
    if (output < 85) return "متوسط";
    return "قوي";
  }

  function setLampVisual(output, isRunning) {
    var glow = isRunning ? output / 100 : 0;
    var isLit = isRunning && output >= 12;

    lampUnit.style.setProperty("--lamp-glow", glow.toFixed(2));
    lampUnit.style.setProperty("--lamp-glow-size", (8 + 34 * glow).toFixed(1) + "px");
    lampUnit.style.setProperty("--lamp-opacity", String(0.28 + 0.72 * glow));
    lampUnit.classList.toggle("is-lit", isLit);
    lampBulb.classList.toggle("is-lit", isLit);
    lampBulb.setAttribute("aria-label", isLit ? "المصباح مضيء" : "المصباح مطفأ");
  }

  function stopAnimation() {
    if (animationFrameId !== null && typeof window.cancelAnimationFrame === "function") {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    stage.classList.remove("is-running");
    windField.classList.remove("is-running");
    windTurbine.classList.remove("is-running");
    windRotor.classList.remove("is-spinning");
  }

  function stopOutput(message) {
    stopAnimation();
    relativeOutput.textContent = "0%";
    turbineSpeedOutput.textContent = message || "جاهزة";
    rpmOutput.textContent = "0 دورة/د";
    voltageOutput.textContent = "0.0 V";
    currentAmpOutput.textContent = "0.00 A";
    lampStateOutput.textContent = message || "جاهز";
    outputFill.style.width = "0%";
    outputMeter.setAttribute("aria-valuenow", "0");
    outputMeter.setAttribute("aria-valuetext", "الإنتاج النسبي صفر بالمئة");
    simulationSummary.textContent = "اضبط سرعة الرياح، ثم شغّل التجربة.";
    stage.setAttribute("aria-label", "محاكاة عنفة رياح جاهزة للتشغيل");
    recordButton.disabled = true;
    lastResult = null;
    setLampVisual(0, false);
  }

  function updateControls() {
    var wind = numberValue(windSpeedRange);
    var windRatio = wind / 15;

    windSpeedValue.textContent = wind + " م/ث";
    windSpeedRange.setAttribute("aria-valuetext", wind + " مترًا في الثانية");
    stage.style.setProperty("--wind-strength", windRatio.toFixed(2));
    stage.style.setProperty("--wind-opacity", wind === 0 ? "0" : String(0.12 + windRatio * 0.78));
    stage.style.setProperty("--wind-duration", Math.max(0.34, 2.15 - windRatio * 1.62).toFixed(2) + "s");
    windField.style.setProperty("--wind-strength", windRatio.toFixed(2));
    windField.style.setProperty("--wind-opacity", wind === 0 ? "0" : String(0.12 + windRatio * 0.78));
    windField.style.setProperty("--wind-duration", Math.max(0.34, 2.15 - windRatio * 1.62).toFixed(2) + "s");
    stopOutput("جاهزة");
    recordMessage.textContent = "اضغط تشغيل التجربة لمشاهدة النتيجة.";
  }

  function showPredictionFeedback() {
    var selected = document.querySelector('input[name="prediction"]:checked');

    if (!selected) {
      predictionFeedback.textContent = "اختر توقّعًا، ثم قارن بين سرعات الرياح.";
      return;
    }

    if (selected.value === "best") {
      predictionFeedback.textContent = "توقّع صحيح: يكون الإنتاج النسبي أعلى عند رياح قوية، ضمن حدود هذه المحاكاة.";
    } else if (selected.value === "medium") {
      predictionFeedback.textContent = "الرياح المتوسطة تولّد طاقة، لكنها أقل من حالة الرياح العالية.";
    } else {
      predictionFeedback.textContent = "عند توقف الرياح تتوقف العنفة ويصبح الخرج صفرًا.";
    }
  }

  function buildSummary(wind, output, rpm, speed, lampState) {
    if (wind === 0) {
      return "لا توجد رياح؛ لذلك توقفت العنفة ولم يُنتج المولد كهرباء.";
    }
    if (output < 12) {
      return "دارت العنفة بسرعة " + rpm + " دورة/د، لكن الخرج " + output + "% غير كافٍ لإضاءة المصباح.";
    }
    return "عند سرعة رياح " + wind + " م/ث، كان الإنتاج " + output + "%، وكانت سرعة دوران العنفة " + speed + "، وكان المصباح " + lampState + ".";
  }

  function runSimulation() {
    var wind = numberValue(windSpeedRange);
    var effectiveRatio = clamp(wind / 15, 0, 1);
    var outputRatio = clamp(Math.pow(effectiveRatio, 3), 0, 1);
    var exactOutput = outputRatio * 100;
    var output = exactOutput > 0 && exactOutput < 1
      ? Number(exactOutput.toFixed(1))
      : Math.round(exactOutput);
    var rpm = Math.round(900 * effectiveRatio);
    var voltage = 12 * effectiveRatio;
    var current = 0.5 * Math.pow(effectiveRatio, 2);
    var speed = classifySpeed(rpm);
    var lampState = calculateLampState(output);

    lastResult = {
      wind: wind,
      output: output,
      speed: speed,
      rpm: rpm,
      voltage: voltage.toFixed(1) + " V",
      current: current.toFixed(2) + " A",
      lampState: lampState
    };

    relativeOutput.textContent = output + "%";
    turbineSpeedOutput.textContent = speed;
    rpmOutput.textContent = rpm + " دورة/د";
    voltageOutput.textContent = voltage.toFixed(1) + " V";
    currentAmpOutput.textContent = current.toFixed(2) + " A";
    lampStateOutput.textContent = lampState;
    outputFill.style.width = output + "%";
    outputMeter.setAttribute("aria-valuenow", String(output));
    outputMeter.setAttribute("aria-valuetext", "الإنتاج النسبي " + output + " بالمئة");
    simulationSummary.textContent = buildSummary(wind, output, rpm, speed, lampState);
    stage.setAttribute("aria-label", "نموذج عنفة رياح يدور بسرعة تقريبية " + rpm + " دورة في الدقيقة، والإنتاج النسبي " + output + " بالمئة");
    recordButton.disabled = recordedCount >= 6;
    stopAnimation();

    stage.style.setProperty("--effective-wind", effectiveRatio.toFixed(3));
    windRotor.style.setProperty("--rotor-duration", Math.max(0.3, 2.3 - effectiveRatio * 1.92).toFixed(2) + "s");
    windTurbine.style.setProperty("--turbine-vibration", (effectiveRatio * 0.7).toFixed(2) + "px");
    setLampVisual(output, true);

    animationFrameId = window.requestAnimationFrame(function () {
      animationFrameId = null;
      stage.classList.add("is-running");
      windField.classList.add("is-running");
      windTurbine.classList.add("is-running");
      if (effectiveRatio > 0) windRotor.classList.add("is-spinning");
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
    recordedConditions[lastResult.wind] = true;
    var row = document.createElement("tr");
    appendCell(row, String(recordedCount));
    appendCell(row, lastResult.wind + " م/ث");
    appendCell(row, lastResult.output + "%");
    appendCell(row, lastResult.speed + " (" + lastResult.rpm + " دورة/د)");
    appendCell(row, lastResult.voltage);
    appendCell(row, lastResult.current);
    appendCell(row, lastResult.lampState);
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
    cell.colSpan = 7;
    cell.textContent = "لم تُسجَّل نتائج بعد.";
    row.appendChild(cell);
    resultsBody.appendChild(row);
    recordedCount = 0;
    recordedConditions = {};
    conclusionCard.hidden = true;
    recordButton.disabled = !lastResult;
    recordMessage.textContent = "تم مسح النتائج.";
  }

  function setPreset(button) {
    windSpeedRange.value = button.getAttribute("data-wind");
    updateControls();
    runSimulation();
  }

  [windSpeedRange].forEach(function (input) {
    input.addEventListener("input", updateControls);
  });

  document.querySelectorAll(".preset-button[data-wind]").forEach(function (button) {
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
    windSpeedRange.value = "8";
    updateControls();
    recordMessage.textContent = "تمت إعادة قيم المحاكاة، وبقيت النتائج المسجّلة محفوظة.";
  });
  printButton.addEventListener("click", function () {
    window.print();
  });

  simulationSummary.setAttribute("aria-live", "polite");
  recordMessage.setAttribute("aria-live", "polite");
  predictionFeedback.setAttribute("aria-live", "polite");
  outputMeter.setAttribute("aria-valuemin", "0");
  outputMeter.setAttribute("aria-valuemax", "100");

  configureRanges();
  updateControls();
}());
