// 1] Create Variaables 
let Name = "Manav";
const phonenumber = 8623085163;
let standard  = "Final Year";
let id = 11;
let age = 21;
const city = 'Pune';

// 2] Print Details 
console.log(Name);
console.log(phonenumber);
console.log(standard);
console.log(id);
console.log(age);
console.log(city);

/*3] One Variable of Each Datatype
String
Number
Boolean
null
Object
Array
undefined
*/

// String
let name  = "Manav";

// Number
let Myage = 21;

// Boolean
let student = true;

//null
let marks = null;

//Object
let person = { city:Pune};

//Array
let colors =["Blue","Green","Red"];

//Undefined
let x;

//Print value and type using typeof

console.log(Name, typeof Name);
console.log(age, typeof age);
console.log(id, typeof id);
console.log(standard, typeof standard);

//Compare "10" and 10 & true and 1 
console.log('"10" ==== 10:', "10" === 10);
console.log('"10" == 10:', "10" == 10); 

console.log('true == 1:', true == 1); 
console.log('true === 1:', true === 1); 

/*Difference 
 '===' is strict equality whereas '==' is loose equality */

 //Take 2 numbers
 let a = 11;
 let b = 21;

 console.log(a,b);

//Sum , Difference ,Multiplication , Division

let add  = a + b;
let sub = a - b;
let multi = a * b;
let div = a / b;

//chek number is even or odd
let number = 5;
if (number % 2 === 0)
    {
    console.log("Number is Even");
    }   
    else 
    {
    console.log("Number is Odd");
    }

//Check if student is pass or fail (marks ≥ 35)
let mrks = prompt("Enter your Marks");
 if (mrks >= 35)
    {
    console.log("Pass");
    }
    else
    {
    console.log("Fail");
    }

 //Check if number is positive or negative
let num =prompt("Enter Number");
 if (num>0)
    {
    console.log("Number is poisitve");
    }
    else
    {
    console.log("Number is Negative");
    }

 //Print this output:My name is Manav my age is 21
 let nae = "manav";
 let ag = 21;

 console.log("My Name is "+nae+ " my age is "+ag);


 // JavaScript code to swap two numbers without third variable
 let m = 5;
 let n = 10;

 m = m+n;
 n = m-n;
 m = m-n;

 console.log("After Swap");
 console.log("M :"+m);
 console.log("N :"+n);

// JavaScript code to find greater number between two numbers
let c = 11;
let d = 21;

if(c>d)
{
    console.log(c+" is greater number");
}
else if (c<d)
{
    console.log(d+" D is greater number");
}
else{
    console.log("Both numbers are equal");
}


// Javascript code to find a year is a leap year or not
let yr = prompt("Enter year");
if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0))
{
    console.log("It is a leap year");
}
else
{
    console.log("It's not a leap year");
}

