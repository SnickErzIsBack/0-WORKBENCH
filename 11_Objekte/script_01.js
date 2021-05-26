

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
                    function ()
                        {
                            // return "Hi, ich bin " + person2.firstName;
                            return "Hi, und verdiene " + person2.salary;
                        }
};

let person2 = {
                salary: 90000
}

ausgabe(person);
ausgabe(person.firstName);
ausgabe(person.lastName);
ausgabe(person.salary[0]);
ausgabe(person.hasAccess);

ausgabe(person.sayHello());

let txt = "und verdiene" + " " +
        person.salary[1] + " " + "p.a.";

ausgabe(txt);

/** Ausgabe */
function ausgabe(outputStr) {
        console.log(outputStr);
    }