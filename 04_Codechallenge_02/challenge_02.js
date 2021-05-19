/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */
let ageDrinker, nameDrinker;

nameDrinker = (prompt("Geben Sie bitte ihren Namen ein: ");
ageDrinker = Number(prompt("Geben Sie bitte ihr Alter ein: ")) //parseInt wäre ws besser;

switch (true) {
    case (ageDrinker <0):
        console.log(nameDrinker + " ,bitte geben Sie einen korrekten Wert ein!");
        break;
    case (ageDrinker <=5): //&& ageDrinker <=0
        console.log("Hier, Deine Milch, " + nameDrinker + "!");
        break;
    case (ageDrinker <=13): // && ageDrinker<6
        console.log("Hier, Dein Saft," + nameDrinker + "!");
        break;
    case (ageDrinker <=17): // && ageDrinker <13
        console.log("Hier, Deine Coke, " + nameDrinker + "!");
        break;
    default:
        console.log("Hier, Ihr Wein, " + nameDrinker + "!");
        break;      
}

// ELSE-IF part was not written