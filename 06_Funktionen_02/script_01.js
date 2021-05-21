
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: DONE
*/

let a = Number(prompt("wert für a:"));
let b = Number(prompt("wert für b:"));

//#region // Modul Adddition a+b | Test:

//ausgabe("ergebnis: " + addieren(a,b)); // | Funktions-Test
function addieren(a,b){
    return a + b;
}
//#endregion

//#region // Modul Subtraktion a+b | Test:

//ausgabe("ergebnis: " + subtrahieren(a,b)); // | Funktions-Test
function subtrahieren(a,b){
    return a - b;
}
//#endregion

//#region // Modul Multiplikation a*b | Test:

//ausgabe("ergebnis: " + multiplizieren(a,b)); // | Funktions-Test
function multiplizieren(a,b){
    return a * b;
}
//#endregion

//#region // Modul Division a/b | Test:

ausgabe("ergebnis: " + dividieren(a,b)); // | Funktions-Test
function dividieren(a,b){
    if (b!=0){return a/b};
        return "Division by Zero not possible";
}

//#endregion

//#region // Modul: Konsoleneingabe | Test:

//ausgabe("Hello World!"); | Funktions-Test
/*
function eingabe(a,b){
    let a = Number(prompt("wert für a:"));
    let b = Number(prompt("wert für b:"));
}
*/
//#endregion

//#region // Modul: Konsolenausgabe | Test:

//ausgabe("Hello World!"); | Funktions-Test
function ausgabe(outputStr){
    console.log(outputStr);
}
//#endregion
