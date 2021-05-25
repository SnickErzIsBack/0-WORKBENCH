/* Die Satzbau-Maschine | Arrays */

/***** 1.0. ARRAYS *****/

//Array allows collections of data

/*  let arr;
    arr = new Array(); // constructor notation
    arr = []; // literal notation
    arr = [2,6,7,12]; // array with numerical data, length of 4
    arr = [true, false]; // array with boolean values, length of 2
    arr = ["Ich","bin","Max","Mütze"]; // array with strings,  length of 4

    ausgabe(arr);
    ausgabe(arr.length);
    ausgabe(arr[0]); // index, ALWAYS starting with 0
*/

/* 1a. Loops (for-loop) */

/* For-loop as repetitive structure
for (let i = 0; i < 10; i++) {0
    //const element = array[index];
    ausgabe(i);    
}
*/

/* For-loop for the index of an array (Iteration)

let arr = ["Ich","bin","der","coole","Max","Mütze"]; 
for (let i = 0; i < arr.length; i++) {0
    //const element = array[index];
    ausgabe(arr[i]);    
}
*/

/***** 02a. Funktionalität mit Array *****/
// Criticism | considering:
// word1,word2,... word100 :: semantic structure
// => TRANSFORMATION
// arr[0],arr[1],... arr[100] :: numeric structure (0,1,2,3,... n)
// => transformed a semantic issue to a numeric issue

//ausgabe(getSentenceArr(["Ich","bin","Max","Mütze"])); // Test
function getSentenceArr(arr) {
    let gap = " ";
    let dot = ".";

    let str = arr[0] + gap +
              arr[1] + gap +
              arr[2] + gap +
              arr[3] +
              dot;

    return str;
}


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//ausgabe(getSentence("Ich","bin","Max","Mütze")); // Test

/*function getSentence(word1,word2,word3,word4) {
    let gap = " ";
    let dot = ".";

    let str = word1 + gap +
              word2 + gap +
              word3 + gap +
              word4 +
              dot;

    return str;
    //return "Ich bin Max Mütze.";
}
*/

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}
