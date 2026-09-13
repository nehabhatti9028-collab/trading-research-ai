const startButton = document.getElementById("startButton");
const defineButton = document.getElementById("defineButton");
const testButton = document.getElementById("testButton");
const learnButton = document.getElementById("learnButton");
const restartButton = document.getElementById("restartButton");

const askSection = document.getElementById("askSection");
const clarifySection = document.getElementById("clarifySection");
const defineSection = document.getElementById("defineSection");
const testSection = document.getElementById("testSection");
const learnSection = document.getElementById("learnSection");

const researchQuestion = document.getElementById("researchQuestion");
const message = document.getElementById("message");
const showQuestion = document.getElementById("showQuestion");

const progressFill = document.getElementById("progressFill");
const stepLabel = document.getElementById("stepLabel");
const stepName = document.getElementById("stepName");

function updateProgress(step, name) {
    stepLabel.textContent = "Step " + step + " of 5";
    stepName.textContent = name;
    progressFill.style.width = step * 20 + "%";
}

 
startButton.addEventListener("click", function () {
    const question = researchQuestion.value.trim();

    if (question === "") {
        message.textContent = "Please enter a research question.";
        return;
    }

    showQuestion.textContent = question;

    askSection.hidden = true;
    clarifySection.hidden = false;

    updateProgress(2, "Clarify");
});

 
defineButton.addEventListener("click", function () {
    const fall = document.getElementById("fallPercentage").value;
    const holding = document.getElementById("holdingPeriod").value;
    const period = document.getElementById("testPeriod").value;

    document.getElementById("resultFall").textContent =
        fall + "% or more";

    document.getElementById("resultHolding").textContent =
        holding + " trading days";

    document.getElementById("resultPeriod").textContent =
        "Last " + period + " years";

    clarifySection.hidden = true;
    defineSection.hidden = false;

    updateProgress(3, "Define");
});

 
testButton.addEventListener("click", function () {
    defineSection.hidden = true;
    testSection.hidden = false;

    updateProgress(4, "Test");
});

 
learnButton.addEventListener("click", function () {
    testSection.hidden = true;
    learnSection.hidden = false;

    document.getElementById("dataObservation").textContent =
        "6 out of 10 sample trades were profitable, " +
        "with an average return of 1.20%.";

    document.getElementById("dataConclusion").textContent =
        "The sample shows a positive average return, " +
        "but it does not prove that buying after a sharp fall " +
        "will always work.";

    document.getElementById("nextInvestigation").textContent =
        "Use real historical data, include transaction costs, " +
        "and compare the results with a buy-and-hold strategy.";

    updateProgress(5, "Learn");
});

  
restartButton.addEventListener("click", function () {
    learnSection.hidden = true;
    askSection.hidden = false;

    researchQuestion.value = "";
    message.textContent = "";

    updateProgress(1, "Ask");
});