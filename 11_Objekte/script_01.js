

/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Max"];
// ausgabe(arr[2]);

// arr = [["ich","bin","Max"],["ich","bin","Moritz"]];
// ausgabe(arr[0][2]);
// ausgabe(arr[1][2]);

let person = {
                firstName:"Deniz",
                lastName:"Yildiz",
                salary:[120000,125000],
                hasAccess: true,
                sayHello:
                    function (){
                            // return "Hi, ich bin " + person2.firstName;
                            return "Hi, und verdiene " + this.salary;
                        }
};

let person2 = {
                salary: 90000
}

// ausgabe(person);
// ausgabe(person.firstName);
// ausgabe(person.lastName);
// ausgabe(person.salary[0]);
// ausgabe(person.hasAccess);
// ausgabe(person.sayHello());

// let txt = "und verdiene" + " " +
        person.salary[1] + " " + "p.a.";

// ausgabe(txt);


/***** Objekte 2 - Hierarchie *****/


// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest 
// >>>> Nested Object <<<<

let baikal = {
                wert:"10m",
                deep:{
                    deeper:{
                        deepest: "Das Licht - auf 1642m"
                    }
                }



}
 

ausgabe(baikal);
ausgabe(baikal.wert);
ausgabe(baikal.deep.deeper.deepest);

/** Ausgabe */
function ausgabe(outputStr) {
        console.log(outputStr);
    }