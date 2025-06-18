// // Q1) Create an array of states in india.
// // Remove all the names starting with vowels from the list. Use array.filter.

let statesInIndia = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
const vowels = ['a', 'e', 'i', 'o', 'u'];
function startsWithVowel(stateName) {
    if (stateName.length === 0) {
        return false; // An empty string doesn't start with a vowel
    }
    const firstChar = stateName.charAt(0).toLowerCase();
    return vowels.includes(firstChar);
}


let filteredStates= statesInIndia.filter((state) =>{
    return !startsWithVowel(state);
});
console.log(filteredStates);


// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.function 


let str = 'I love my India'
function reverseString( str){

   let reversed = str.split(' ').reverse().join(' ');
   console.log(reversed);

}

reverseString(str);

// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice



let string1 = 'INDIA'
let string2 = 'INDONESIA';
//convering strings to arrays
let array1 = string1.split('');
let array2 = string2.split('');
//splicing the arrays
 array1 =array1.splice(0, 3);
 array2 = array2.splice(3,7);
 //concatenating the arrays
let result = array1.concat(array2);
//converting the result back to string
result = result.join("");


console.log(" ' "+ result + " ' "); // Output: 'INDONESIA'node index.jsss



// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
 let text = "This is a sample string with more than twenty characters.";

 function countVowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
    
    for (let char of text){
        if(vowels.includes(char)){
            vowelsCount++;
        }
        else{
            consonantsCount++;
        }
    }
    console.log(`Number of vowels: ${vowelsCount}`);
    console.log(`Number of consonants: ${consonantsCount}`);


 }
 countVowelsAndConsonants(text);




// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.
function correctfn(sentence, wrongWord, correctWord) {
  
  const newSentence = sentence.replace(wrongWord, correctWord);

  return newSentence;
}

let originalString = "You are using a wrong method to solve this problem. This is a wrong way.";
let wordToReplace = "wrong";
let replacementWord = "right";

let correctedString = correctfn(originalString, wordToReplace, replacementWord);

console.log("Original sentence:", originalString);
console.log("Corrected sentence:", correctedString);


// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.


let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
function greaterThanFive(arr) {
    let  answer = arr.filter((num)=>{
        return num > 5;
    })
    console.log(answer);
}

greaterThanFive(inputArr)



// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];

const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];

function calculateAverageScores(students) {

    const result = students.map((student) =>{


        const averagescore = student.scores.reduce(( score) => {
             let sum = 0;
 
           for(let i=0; i < student.scores.length; i++) {
                sum += student.scores[i];
            }
            return sum / student.scores.length;
        }) 
        return {
            name: student.name,
            average: averagescore
        };

    })
   
}
calculateAverageScores(students);