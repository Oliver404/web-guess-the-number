const vwSctnMenu = document.getElementById('sctn-menu');
const vwMnItemGuessUser = document.getElementById('guess-user');
const vwMnItemGuessPC = document.getElementById('guess-pc');

onload = () => {
    initView()
}

function initView() {
    vwMnItemGuessUser.onclick = goToGuessUserNumber
    vwMnItemGuessPC.onclick = goToGuessPcNumber
}

function showMenu() {
    vwSctnMenu.hidden = false;
}

function hiddenMenu() {
    vwSctnMenu.hidden = true;
}

function goToGuessUserNumber() {
    hiddenMenu();
}

function goToGuessPcNumber() {
    hiddenMenu();
}