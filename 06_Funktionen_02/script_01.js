
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. a Dateneingabe :: DONE
1. b Datenüberprüfung :: DONE 
2. Auswahl Rechenart :: DONE
3. Fkt. Grundrechenarten :: DONE
4. Ausgabe in Konsole :: DONE
*/

start()

function start() {
    ausgabe(rechner(getZahl("1"),getOp(),getZahl("2"))); 
}

//#region // Modul: Zahl1 eingeben | Test:
//ausgabe(getZahl("1"));
//ausgabe(getZahl("2"));

function getZahl(numStr) {
    let zahl  = parseInt(prompt("please enter operand " + numStr))
    while (isNaN(zahl)) {
        zahl = parseInt(prompt("not a number, please reenter"));
    }
    return zahl; 
}
//#endregion

//#region // Modul: Operand eingeben | Test:
//ausgabe(getOp());

function getOp() {
    let op = prompt("Please enter [ + | - | * | / ]") // return "+"; | 1.Test
     while (!isOpValid(op)) { //wrong Input
        op = prompt("please enter correct operator")
    }
    return op;
}
//#endregion

//#region // Modul: Operand überprüfen | Test:

// ausgabe(isOpValid("+"));
// ausgabe(isOpValid("-"));
// ausgabe(isOpValid("*"));
// ausgabe(isOpValid("/"));
// ausgabe(isOpValid("#"));
// ausgabe(isOpValid(" "));
// ausgabe(isOpValid(""));

function isOpValid(op) {
    /*
    switch (op) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;   
    }
    */
   return op == "+" || op == "-" || op == "*" || op == "/";
}
//#endregion

//#region // Modul: Rechenarten auswählen | Test:

// ausgabe (rechner("+",10,4));
// ausgabe (rechner("-",10,4));
// ausgabe (rechner("*",10,4));
// ausgabe (rechner("/",10,0));
// ausgabe (rechner("",10,0));
// ausgabe (rechner("lkjkj",10,0));
// ausgabe (rechner("lkjkj"));

function rechner(a,op,b)
{
    switch (op)
    {
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);
        default:
            return "somehow not working...";
    }    
}
//#endregion

//#region // Modul: Adddition a+b | Test:

//ausgabe("ergebnis: " + addieren(a,b)); // | Funktions-Test
function addieren(a,b){
    return a + b;
}
//#endregion

//#region // Modul: Subtraktion a-b | Test:

//ausgabe("ergebnis: " + subtrahieren(a,b)); // | Funktions-Test
function subtrahieren(a,b){
    return a - b;
}
//#endregion

//#region // Modul: Multiplikation a*b | Test:

//ausgabe("ergebnis: " + multiplizieren(a,b)); // | Funktions-Test
function multiplizieren(a,b){
    return a * b;
}
//#endregion

//#region // Modul: Division a/b | Test:

//ausgabe("ergebnis: " + dividieren(a,b)); // | Funktions-Test
function dividieren(a,b){
    if (b!=0){return a/b};
        return "Division by Zero not possible";
}
//#endregion

//#region // Modul: Konsolenausgabe | Test:

//ausgabe("Hello World!"); | Funktions-Test
function ausgabe(outputStr){
    console.log(outputStr);
}
//#endregion
