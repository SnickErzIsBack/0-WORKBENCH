
/***** Funktionen 01 *****/
//#region 1. Kapselung von Codeblöcken

//Funktionsrumpf (body)
function test()
    {
        console.log("Hallo Deniz");
    }

//Funktionsaufruf (call)
//test();
//#endregion

/***** Funktionen 02a *****/
//#region 2.a Parametrisierung + Datenübergabe von INNEN
//mittels ReFactoring

function ausgabeNamae1()
{
    let firstNamae = "Deniz";
    console.log("Hallo " +  firstNamae + "!");
}

/*
function ausgabeNamae2()
{
    let firstNamae = "Frank";
    console.log("Hallo " +  firstNamae + "!");
}
*/

//ausgabeNamae1();
//ausgabeNamae1();
//console.log(firstNamae); // ERROR => local Variable, out of scope!
//#endregion

/***** Funktionen 02b *****/
//#region 2.b Parametrisierung + Datenübergabe von AUSSEN

/*function ausgabeNamaeParam(firstNamae) //Paramater
    {
        //wenn firstNamae leer, dann "Fremder"
        if (firstNamae == undefined || firstNamae =="")
            {
                console.log("Hallo, Fremder!")
            }
        else
            {
                console.log("Hallo, " + firstNamae +"!");
            }
    }
*/
// ausgabeNamae1Param("Frank"); //call + Argument(e)
// ausgabeNamae1Param("Dirk");
// ausgabeNamae1Param(); 
// ausgabeNamaeParam(prompt("Geben Sie bitte jetzt Ihren Namen ein: "));
//#endregion

/***** Funktionen 02c *****/
//#region 2.c Mehrere Parameter

/*function ausgabeNamaeParams(firstNamae,familyNamae) //Paramater
    {
        console.log("Hallo, " + firstNamae + " " + familyNamae + "!");
    }

//ausgabeNamaeParams("Dirk","Frank");
//ausgabeNamaeParams(firstNamae,familyNamae);
ausgabeNamaeParams(prompt("Bitte Vornamen eingeben:"),prompt("Bitte Nachnamen eingeben:"));
*/


/*    //wenn firstNamae leer, dann "Fremder"
        if (firstNamae == undefined || firstNamae =="")
            {
                console.log("Hallo, Fremder!")
            }
        else
            {
                console.log("Hallo, " + firstNamae +"!");
            }
 */
//#endregion

/***** Funktionen 03a *****/
//#region 3a. Vorbereitung //Postulat: one function = one job (Uncle Bob)
// SRP = Single Responsibility Principle
/*            
    function ausgabeNamaeParams2(firstNamae,familyNamae) //Paramater
    {
        // 1st job: string composing
        let gap = " ";
        let outputStr = "Hallo, " + firstNamae + gap + familyNamae + "!";
        
        // 2nd job: output
        console.log(outputStr);
    }
*/    
    //ausgabeNamaeParams2(prompt("Bitte Vornamen eingeben:"),prompt("Bitte Nachnamen eingeben:"));

//#endregion

/***** Funktionen 03b *****/
//#region 3b. Funktionsaufruf aus anderer Funktion mit Variablenübergabe
// 1st job: string composing

output(getString("Drecks","Frank")); //Test
function getString(firstNamae,familyNamae)
{
    let gap = " ";
    let outputStr = "Hallo, " + firstNamae + gap + familyNamae + "!";
    return outputStr; //data will be returned to call of function
    console.log("huhu"); //code after return is unreachable, funtion has exited already
}

// 2nd job: output
//  output("hi") // Unit-Test TDD => test-driven development

function output(outputStr)
{
    console.log(outputStr);
}
//#endregion