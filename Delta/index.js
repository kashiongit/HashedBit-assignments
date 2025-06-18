// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?



function variableScopeExample() {     
    let localVariable = "I am a local variable"; // Block scope     
    const constantVariable =        
        "I am a constant variable"; // Block scope     
    var globalVariable = "I am a global variable";
    console.log(localVariable); // Accessible within the function scope
    console.log(constantVariable); // Accessible within the function scope
    console.log(globalVariable); // Accessible within the function scope or globally if declared outside a function
    
    // Function scope or global scope if declared outside a function         
      }
   variableScopeExample();
    // Call the function to see the output
    


// Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.


let fruits = ["apple", "banana", "grapes", "mango", "orange"];

function getSecondFruit(arr) {
    return arr[1]; 
}
getSecondFruit(fruits); 



// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

let myArray = [1, 2, 3, 4, 5];

function modifyArray(arr) {
    arr.push(6); // Add a new element to the end of the array
    console.log("Array after push:", arr);  
    arr.pop(); // Remove the last element from the array
    console.log("Array after pop:", arr);
    return arr; // Return the modified array
}
modifyArray(myArray);


// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

let numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {       
    const squaredNumbers = arr.map(num => num * num);
    console.log(squaredNumbers);
    return squaredNumbers;
}           
squareNumbers(numbers);






// Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterOddNumbers(arr){

    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
    return oddNumbers;
}
filterOddNumbers(number);





// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

let person = { 
    name : "radha",
    age : 25,
    occupation : "developer"

}

function greeting(obj){
    console.log("hello, my name is " + obj.name + ", I am " + obj.age + " years old and I work as a " + obj.occupation + ".");
}
greeting(person);




// Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

let rectangle = {
    width: 5,
    height: 10
};

function calculateArea(rect) {
    const area = rect.width * rect.height;
    console.log(`Area of rectangle: ${area}`);
    return area;
}

calculateArea(rectangle)

// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
 
let personobj = {
    name: "John",
    age: 30,
    city: "New York"
};

function getObjectKeys(obj) {
    const keys = Object.keys(obj);
    console.log(keys);
    return keys;
}

 getObjectKeys(personobj);

// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

function mergeobjects(obj1, obj2) {
    console.log( Object.assign({}, obj1, obj2));
    return Object.assign({}, obj1, obj2);
}


const obj1= { name: "Alice", age: 25 };
const obj2= { city: "New York", country: "USA" };
mergeobjects(obj1, obj2);

//  Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array. -->

let numbersarray = [1, 4, 7, 3];
let sum = numbersarray.reduce((acc, num) => {
  return acc + num;  
}, 0); 
console.log(sum); 