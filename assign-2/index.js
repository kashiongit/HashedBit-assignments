//1. Write code to display from 1 to 100 but just even numbers.


function printEvenNumbers(){
  for(let num=1 ; num<=100; num++){
    if(num%2 ===0){
            console.log(num);
    }
  }
}

printEvenNumbers();

//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function


function calculate( num1, num2, operation){
    switch(operation) {
        case 'add':
        console.log(num1 + num2);
        break;
        case 'subtract':
        console.log(num1 - num2);
        break;
        case 'multiply':
        console.log(num1 * num2);
        break;
        case 'divide':
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log('Error: Division by zero');
        }
        break;
        default:
        console.log('Invalid operation');
    }
}

calculate( 10, 5, 'add'); 





// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.



function findTax( salary){
    switch(true) {
        case (salary > 0 && salary <= 500000):
            console.log('Tax amount: 0');
            break;
        case (salary > 500000 && salary <= 1000000):
            console.log('Tax amount: ' + (salary * 0.10));
            break;
        case (salary > 1000000 && salary <= 1500000):
            console.log('Tax amount: ' + (salary * 0.20));
            break;
        case (salary > 1500000):
            console.log('Tax amount: ' + (salary * 0.30));
            break;
        default:
            console.log('Invalid salary');
    }

}
 findTax(1200000) ;




// //  4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.


function sumOfProducts(n1,n2){
   let sum = 0;
   
   while(  n1>0 || n2 > 0){
      
      let rightDigitN1 = n1 % 10;
      let rightDigitN2 = n2 % 10;
      const product = rightDigitN1 * rightDigitN2;
      sum = sum + product;

      n1 = Math.floor(n1 / 10);
      n2 = Math.floor(n2 / 10);
   }


  
   console.log(sum);  

}
sumOfProducts(12,24);
