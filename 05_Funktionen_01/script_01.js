
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
//#region //2.b Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamaeParam(firstNamae) //Paramater
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

//ausgabeNamae1Param("Frank"); //call + Argument(e)
//ausgabeNamae1Param(); //call + Argument(e)
//prompt("Geben Sie bitte jetzt Ihren Namen ein: ")

ausgabeNamaeParam(prompt("Geben Sie bitte jetzt Ihren Namen ein: "));
//#endregion