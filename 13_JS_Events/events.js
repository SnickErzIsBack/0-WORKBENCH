
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

/***** BTN *****/
let btn = document.getElementById("trigBtn");

//ausgabe(btn);

/***** STATUS *****/
let status = true;


/***** EVENT-Listener *****/
btn.addEventListener("click",toggleStatus);

/***** BUSINESS-LOGIC *****/
// TOGGLE => most important

function toggleStatus() {
    status = !status;
    ausgabe(status);
}


/***** Tools *****/
function test() {
    let cond = (document.body.className == "day");
    if (cond) {
        // night-mode
        classNameSwitcher("night");
        switchBtnTxt("night");
    } else {
        // day-mode
        classNameSwitcher("day");
        switchBtnTxt("day");       
    }
}

/***** Änderung in der View-Schicht *****/

//Modul: Umschaltung Klasse | Test:

//classNameSwitcher("night");
//classNameSwitcher("day");

function classNameSwitcher(modestr) {
    document.body.className = modestr;
    document.body.children[0].className = modestr;
    document.body.children[1].className = modestr;
}

//Modul: Umschaltung BtnTxt | Test:

//switchButtonTest("day");
//switchButtonTest("night");

function switchBtnTxt(modestr){
    btn.innerHtml = modestr;
}
