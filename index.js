// # General exercises

// 1. Write a function that takes in one parameter and logs that parameter 3 times into the console.

const tripleLog = (...param) =>
console.log(param, param, param);

tripleLog("Hello");

const threeTimesLog = (param) => {
for (let i = 0; i < 3; i++) {
    console.log(param);

}};

threeTimesLog("Hello");



let whichOf = "these is better?";



// 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

const fiveRepetitions = param => param+param+param+param+param;

console.log(fiveRepetitions("Octopus"));

// 3. Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs `3` and "Woah" it should return `WoahWoahWoah`

const stringNumRep = function (num, string) {
  for (let i = 0; i < num; i++) {
      console.log(string);
  }
};

stringNumRep(4, "does this work????");


// 4. Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`

const returnLargestNum = (nums) => {return Math.max(...nums)};

console.log(returnLargestNum([5, 11, 200, 3, 55]));



/// MY FUNCTION ANSWERS TASK 6 PERFECTLY::: WHICH MAKES ME THINK I MUST HAVE DONE THIS TASK WRONG



// 5. This question has 2 parts

//     Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisable by 10. Examples:

//     -  printIfDivisibleByTen(1) --> no output
//     -  printIfDivisibleByTen(2) --> no output
//     -  printIfDivisibleByTen(32) --> no output
//     -  printIfDivisibleByTen(10) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(30) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(90000) --> "Even 10!" into the console


function printIfDivisibleByTen (num) {
    let divByTen = num / 10;
    if (divByTen % 2 === 0) {
        console.log("Even 10!");
    }

    // for (let counter = 0; counter < 125; counter++) {
    //     console.log(printIfDivisibleByTen());
    // }
};

printIfDivisibleByTen(11);
printIfDivisibleByTen(80);
printIfDivisibleByTen(223);
printIfDivisibleByTen(900);


////// PART B TOO CONFUSING................ WORKED FINE UNTIL I ADDED INCORRECT FOR LOOP :S



//     Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.


// 6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one



// SAME AS  QUESTION 4 ????????????????



// 7. Write an arrow function that takes in one parameter and returns true if that parameter is a string.

const printIfString = (param) => { 
    if (typeof param === 'string') {
        console.log(true);
    }
};

printIfString(57419);
printIfString("String");
printIfString(true);



// 8. Write an arrow function that takes in two parameters and returns true if both of them are strings.

const bothString = (one, two) => { if (typeof one === "string" && typeof two === "string") { console.log(true); } else { console.log(false);}};

console.log(bothString("Hello", 43));
console.log(bothString("Hello", "Hello"));

//// ??????


// 9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
//     - getFirstWord("Internetting is hard") --> "Internetting"
//     - getFirstWord("Hello World") --> "Hello"
//     - getFirstWord("Hello") --> "Hello"

const getFirstWord = (string) => { 
    const firstWord = string.split(" ");
    return firstWord[0];
    
 };

console.log(getFirstWord("Well then, what a wonderful day"));
console.log(getFirstWord("today is not a wonderful day"));
console.log(getFirstWord("My house exploded"));




// 10. *HARD* Write an arrow function that takes in one string.
// The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
//     - wordRepeater("bunny") --> "bunny"
//     - wordRepeater("Cat food") --> "Cat Cat food food"
//     - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
//     - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"


// function that counts the amount of words. const splitWords = param.split(",");
// count the amount of words. const amountOfWords = splitWords.length;
// console.log(param * splitWords.length)

function wordRepeater (param) {
    const splitWords = param.split(" ");
    let result = [];
    for (i = 0; i < splitWords.length; i++) {
        let words = splitWords[i];
        for (j = 0; j < splitWords.length; j++) {
             result.push(words);
        }
       
    } 
    return result.join(" ");
}

console.log(wordRepeater("HEllo there everyone else"));





// 11. Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
//     - firstLetter("cat") --> "c"
//     - firstLetter("quylthulg") --> "q"


const firstLetter = (word) => typeof word == 'string' ? console.log(word[0]) : false;

firstLetter("Lemon");
firstLetter(33);





// 12. Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
//     - firstLetters("cat") --> "c"
//     - firstLetters("What the fruit") --> "Wtf"
//     - firstLetters("MongoDB Express Node React") --> "MERN"
//     - firstLetters("What You See Is What You Get") --> "WYSIWYG"



function firstLetterOfEveryWord (param) {
    const wordsAsArray = param.split(" ");
    let result = [];
    for (let i = 0; i < wordsAsArray.length; i++) {
        let firstLetter = wordsAsArray[i][0];
        result.push(firstLetter);

    }
    return result.join("");
    
}

console.log(firstLetterOfEveryWord("Lets see if this works I dont think it will"));



// 13. Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!


// function taskThirteen(param) {
//     if (param == 'string') {
//         console.log(param.length);
//     } else if (param == 'array') {
//         console.log(null);
//     };
// };

const taskThirteen = param => param == 'string' ? console.log(param.length) : param == 'array' : console.log(null);
  

console.log(constaskThirteen("hello"));
console.log(taskThirteen(["one", "two", "three"]));


/// W R O N G !  ! ! ! ! ! ! ! ! ! ! ! !

// 14. Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
//     - explode("Cat") --> ["C", "a", "t"]
//     - explode(41) --> null
//     - explode("") --> []
//     - explode("R & D") --> ["R", " ", "&", " ", "D"]












// 15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - foo("") -> false
//     - foo("a") -> false
//     - foo("o") -> true
//     - foo("Cat") -> false
//     - foo("Tomato") -> true
//     - foo("Potato") -> true
//     - foo("Blanket") -> false
//     - foo("1") -> false


const includesLetterO = (param) => param.includes("o") ? console.log(true) : console.log(false);

console.log(includesLetterO("Hello"));




// 16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - bar("") --> "Cat"
//     - bar("x") --> "Cat"
//     - bar("Cat") --> "Catt"
//     - bar("Foobar") --> "Catobar"
//     - bar("Potato") --> "Cattato"
//     - bar("Tomato") --> "Catmato"
//     - bar("International Space Station") --> "Catternational Space Station"
