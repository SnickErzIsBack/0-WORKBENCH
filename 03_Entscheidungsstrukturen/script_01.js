// Entscheidungsstrukturen | control structures

//#region declaration
/*
let ageJohn, ageMark;
let isJohnOlder,isJohnEqual;

//Wertzuweisung
ageJohn = 30;
ageMark = 30;

//logische Aussagen/Tests
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
*/
//#endregion

//#region tests
//Ausgabe
/*
console.log("test for John older than Mark: " + isJohnOlder);
console.log("test for John as old as Mark: " + isJohnEqual);
*/
//#endregion

//#region IF TINA
/**************** IF ***************/
//alternativlos (TINA) => There Is No Alternative

/*
//if (true)
//if (isJohnOlder)
//if(ageJohn > ageMark)
if (35 > 30)
{
    console.log("John ist älter")
}
*/
//#endregion

//#region IF- ELSE
/**************** IF - ELSE ***************/
// mit Alternative (JA oder NEIN)
/*
if (isJohnOlder) 
{
    //JA-Zweig /true
    console.log("John ist älter");
}
else
{
    //NEIN-Zweig /false
    console.log("John ist jünger");
};
*/
//#endregion

//#region ternary operator
/*********** Ternäre Schreibweise ************/
// console.log (isJohnOlder) ? "John ist älter" : "Mark is older";
//#endregion

//#region IF - ELSE IF
/**************** IF - ELSE IF ***************/
//mit alternativen Fällen (älter, jünger, gleich alt)
/*
if (isJohnOlder) 
{
    //JA-Zweig /true
    console.log("John ist älter");
}
else if (isJohnEqual)
{
    //ODER-Zweig
    console.log("John ist gleich alt");
}
// ggf. weitere Alternativen
else
{
    //NEIN-Zweig /false
    console.log("John ist jünger");
};
*/
//#endregion

//#region CASE|SWITCH 1
/************* Fallunterscheidung /CASE|SWITCH 1 *************/
/* let firstName, job;
firstName = "Jane";
job = "driver"; //.. works as driver
job = "diver"; //.. works as diver
job = "pilot"; //.. works as ...
job = "artist"; // .. malt 
//job = "teacher"; // .. unterrichtet 
job = "instructor"; // .. unterrichtet 

switch (job) {
    case "driver":
        console.log(firstName + " fährt Taxi!");
        break;
    case "diver":
            console.log(firstName + " taucht im Rhein!");
        //    break;
    case "artist":
        console.log(firstName + " malt!");
        break;
    case "teacher":
    case "instructor":
        console.log(firstName + " unterr1chtet!");
        break;
    
    // für alle nicht ausgewiesenen Fälle ...
    default:
        console.log(firstName + " macht etwas anderes.");
        break;
}
*/
//#endregion

/************* Fallunterscheidung /CASE|SWITCH 2 *************/
let a = 1;

switch (true) {
    case (a == 1):
        console.log("a is 1");
        break;
    case (a == 2):
        console.log("a is 2");
        break;

    default:
        console.log("a has differing value")
        break;
}