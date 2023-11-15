const vwSctnMenu = document.getElementById('sctn-menu');
const vwMnItemGuessUser = document.getElementById('guess-user');
const vwMnItemGuessPC = document.getElementById('guess-pc');
const vwSctGuessUser = document.getElementById('sctn-guess-user');

onload = () => {
    initView()
}

function initView() {
    //
    vwMnItemGuessUser.onclick = goToGuessUserNumber
    vwMnItemGuessPC.onclick = goToGuessPcNumber
}

function showMenu() {
    vwSctnMenu.hidden = false;
}

function hiddenMenu() {
    vwSctnMenu.hidden = true;
}

function showSctnGuessUser() {
    vwSctGuessUser.hidden = false;
}

function hiddenSctnGuessUser() {
    vwSctGuessUser.hidden = true;
}

function goToGuessUserNumber() {
    hiddenMenu();
    showSctnGuessUser();
    initGuessUser();
}

function goToGuessPcNumber() {
    hiddenMenu();
}



/// Guess user number
const vwLabelMaxNumber = document.getElementById('lbl-max-number');
const vwLblNumAttempts = document.getElementById('lbl-n-attempts');
const vwDvQuestion = document.getElementById('dv-question');
const vwHQuestion = document.getElementById('h-question');
const vwBtnIsLess = document.getElementById('btn-is-less');
const vwBtnItIs = document.getElementById('btn-yes-it-is');
const vwBtnIsHigher = document.getElementById('btn-is-higher');
// Logic
var attempts = 0;
var maxNumber = 31;
var minNumTry = 1;
var maxNumberTry = 31;
var tryNumber = 0;

function initGuessUser() {
    initLogicGuessUser();
    initViewGuessUser();
}

function initLogicGuessUser() {
    attempts = 0;
}

function initViewGuessUser() {
    const vwRngMaxValue = document.getElementById('rng-max-number');
    vwRngMaxValue.oninput = onRangeChange;
    vwLabelMaxNumber.textContent = vwRngMaxValue.value;
    document.getElementById('btn-start-guess').onclick = startToGuess;
    hiddenDvQuetion();
    setCountAttempts();
    initViewQuestionButtons();
}

function showDvQuetion() {
    vwDvQuestion.hidden = false;
}

function hiddenDvQuetion() {
    vwDvQuestion.hidden = true;
}

function setCountAttempts() {
    vwLblNumAttempts.textContent = `Attempts: ${attempts}`;
}

function initViewQuestionButtons() {
    vwBtnIsLess.onclick = onClickQuestionButton();
    vwBtnItIs.onclick = onClickQuestionButton();
    vwBtnIsHigher.onclick = onClickQuestionButton();
}

function onClickQuestionButton() {

}

function askNumber() {
    vwHQuestion.textContent = `Your number is ${tryNumber}?`;
}

function onRangeChange(e) {
    maxNumber = e.srcElement.value;
    vwLabelMaxNumber.textContent = maxNumber;
}

function startToGuess() {
    maxNumberTry = maxNumber;
    minNumTry = 1;
    tryGuess();
    showDvQuetion();
}

function tryGuess() {
    tryNumber = maxNumber / 2;
}