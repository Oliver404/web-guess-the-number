/// HTML Elements
const vwLabelMaxNumber = document.getElementById('lbl-max-number');
const vwLblNumAttempts = document.getElementById('lbl-n-attempts');
const vwDvQuestion = document.getElementById('dv-question');
const vwHQuestion = document.getElementById('h-question');
const vwBtnIsLess = document.getElementById('btn-is-less');
const vwBtnItIs = document.getElementById('btn-yes-it-is');
const vwBtnIsHigher = document.getElementById('btn-is-higher');
// CONST
const IS_LESS = -1;
const IT_IS = 0;
const IS_HIGHER = 1;
// Vars
var attempts = 0;
var maxNumber = 32;
var minNumTry = 1;
var maxNumberTry = 32;
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
    vwBtnIsLess.onclick = () => { onClickQuestionButton(IS_LESS) };
    vwBtnItIs.onclick = () => { onClickQuestionButton(IT_IS) };
    vwBtnIsHigher.onclick = () => { onClickQuestionButton(IS_HIGHER) };
}

function onClickQuestionButton(answear) {
    if (answear === IS_LESS) {
        maxNumberTry = tryNumber - 1;
        tryGuess();
    }
    else if (answear === IT_IS) {
        alert('Geneial');
    }
    else if (answear === IS_HIGHER) {
        minNumTry = tryNumber + 1;
        tryGuess();
    }
}

function askNumber() {
    vwHQuestion.textContent = `Your number is ${tryNumber}?`;
}

function onRangeChange(e) {
    maxNumber = Number(e.srcElement.value);
    vwLabelMaxNumber.textContent = maxNumber;
}

function startToGuess() {
    attempts = 0;
    maxNumberTry = maxNumber;
    minNumTry = 1;
    tryGuess();
    showDvQuetion();
}

function tryGuess() {
    if (minNumTry <= maxNumberTry) {
        attempts++;
        tryNumber = Math.floor((maxNumberTry + minNumTry) / 2);
    
        setCountAttempts();
        askNumber();
    }
    else {
        alert('No fue posible adivinar tu numero, segurate de dar las instrucciones correctas y de no cambiar de numero :D');
        hiddenDvQuetion();
    }
}