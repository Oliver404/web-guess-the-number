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