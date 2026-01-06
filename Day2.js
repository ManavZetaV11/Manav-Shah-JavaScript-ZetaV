// Conditional Statements Programs

//Age less than 21 Job Eligiblity

let age = prompt("Enter Age:");

if (age<21)
{
    console.log("Not Eligible");
}
else
{
    console.log("Eligible");
}


/*Electricity bill:
Units ≤ 100 → Low
101–300 → Medium
300 → High */


let bill = prompt("Enter Units: ");

if (bill <= 100)
{
    console.log("Bill is Low");
}
else if (bill > 100 && bill <= 300)
{
    console.log("Bill is Medium");
}
else if (bill > 300)
{
    console.log("High Bill");
}

// Check password length ≥ 8

let pswd = prompt("Enter Password :");
if (pswd.length >=8)
{
    console.log("Password is Strong");
}
else
{
    console.log("Password is weak");
}


//print weekdays using numbers 1-7 using switch case
let input = prompt("Enter Day No: ");
let dayno = Number(input);
let daynm = "";

switch(dayno)
{
    case 1:
        daynm = "Monday";
        break; 
    case 2:
        daynm = "Tuesday";
        break; 
    case 3:
        daynm = "Wednesday";
        break; 
    case 4:
        daynm = "Thursday";
        break; 
    case 5:
        daynm = "Friday";
        break; 
    case 6:
        daynm = "Saturday";
        break; 
    case 7:
        daynm = "Sunday";
        break; 
    default:   
        daynm = "Invalid Input";
        break; 

    }
console.log(daynm);

// Switch Case for Calculator basic operations

let f1 = +prompt("Enter first input: ");
let oper = prompt("Enter Operation like '+ , - , * , /' "); 
let f2 = +prompt("Enter second input: ");
let result;

switch(oper)
{
    case "+":
        result = f1 + f2;
        break; 
    case "-":
        result = f1 - f2;
        break; 
    case "*":
        result = f1 * f2;
        break; 
    case "/":
        result = f1 / f2;
        break;          
    default:   
        result = "Invalid Operator"; 
        break; 
}

console.log("Your result is: " + result);


// Print numbers 1-20 usinf for and while loop

//For Loop

for(i=0 ; i<20; i++)
{
    console.log(i);
}

// while loop

let i = 0;
while(i<20)
{
    i++
    console.log(i);
}

// Print even numbers using for and while loop

for(i=2 ;i<=50 ;i += 2)
{
    console.log("Even numbers are"+i)
}

// while loop

let i = 2;
while (i<=50)
{
    i += 2
    console.log(i);
}

// Print sum of first 10 numbers
let s = 0;
for(let i = 1; i<=10; i++)
{
    s = s+i;
    
}
    console.log(+s);

//while loop

let su = 0;
let m = 1;
while (m <= 10)
{
    su = su+m
    m++
}
console.log(su);


//Table of 5

let f = 5;
let t;
for(let i =1; i<=10; i++)
{
    t = f*i

console.log(t);
}

// while loop
let f = 5;
let i= 1;
while(i<=10)
{
    t = f*i
    i++

console.log(t);
}


// Function to add two numbers
let n1 =+prompt("Enter first number ");
let n2 =+prompt("Enter second number ");

function addno(n1,n2)
{
    return n1 + n2
}
let res = addno(n1,n2);
console.log(res);


//Function for square of a number
let m1 = +prompt("Enter Number ");
function sqrno(m1)
{
    return m1 * m1
}
let out = sqrno(m1);
console.log("Square Root of the number is "+out);

// Function for Even Odd Number
let m1 = +prompt("Enter Number ");

function evodno(m1) {
    if(m1 % 2 === 0 ) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

evodno(m1); 

// Arrow function to find larger number between two numbers

let i1 = +prompt("Enter first number ");
let i2 = +prompt("Enter second number ");
const max = (i1,i2) => {
    if (i1>i2)
    return "First Number is Larger"
    else
    return "Second Number is Larger"
}
console.log(max(i1,i2));


// Arrow function to find factorial of a number
let n  = +prompt("Enter Number ");
let f =1 ;
const fact = (n) =>
{
    for (let i=1 ; i<=n;i++)
 {   f = f * i;
}
    return f;
    
}
console.log("Factorial is "+fact(n));


// Return Add or Subtract using arrow function
let a = +prompt("Enter First no ");
let b = +prompt("Enter Second no ");
let operation = prompt("Enter operation to be done ");
const calculate = (a, b, operation) => {
  if (operation === "add") return a + b;
  if (operation === "subtract") return a - b;
  return "Invalid operation";
}
console.log(calculate(a,b, operation));      


//  Arrow function used to return Pass or Fail for marks given in imput
let marks = +prompt("Enter total marks ");
const calculate = (marks) => {
  if (marks > 35) 
  return "pass";
  else
  return "fail"
}
console.log(calculate(marks));      


//Function Callback capability

function calculate(a, b, callback) {
  const result = a + b;    
  callback(result);        
}

function printResult(value) {
  console.log("Result:", value);
}

calculate(5, 3, printResult);


//Reverse a number

let num = +prompt("Enter the number ");
reversedNumber = (num) => {
    let reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed)
}
console.log("Entered Number is "+(num));
console.log("Reversed Number is "+reversedNumber(num));


// Count digits of numbers
let num = +prompt("Enter the number ");
countNumber = (num) => {
    return Math.abs(num).toString().length;
}
console.log("Count of Number is  "+countNumber(num));


//Palindrome Number
let num = +prompt("Enter the number ");
palindromenum = (num) => {
     str = num.toString();
     let rev = str.split('').reverse('').join('');
     return str === rev ;
     
}
console.log("Palindrome number is  "+palindromenum(num));





