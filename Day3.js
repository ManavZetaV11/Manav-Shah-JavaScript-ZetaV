// Create  array and get first and last element
const ar = [1,2,3,"manav"];
console.log(ar[0]);
console.log(ar[3]);

//Add elemtn at last  place in array and also remove last elemnt from the array
const ar = [1,2,3,"manav"];
ar.push(5);
console.log(ar);
ar.pop(4);
console.log(ar);

//Add and remove last and first elemnts in array using Push,Pop,Shift,Unshift

const arrr = [1,2,3,4,5,"manav"];
arrr.pop();
arrr.push(33);
arrr.shift();
arrr.unshift(1111);
console.log(arrr);


// To Print all elemnts in object , Updat elements and also remove elemnts from objects
let student = {
    name : "Raj",
    Roll_No : 21,
    Marks : 85
};
Object.entries(student).forEach(([key,value]) => {
   console.log(key,value); 
});

student.name = "Manav";

delete student.Marks;
console.log(student);


//To take 5 inputs of studnet details seprately and printll update one elemnt and removed one elemnt
const std = [
    {Name : "Manav" , rn : 21 , ID : 6},
    {Name : "Sakshi" , rn : 11 , ID : 9},
    {Name : "Sasha" , rn : 41 , ID : 8},
    {Name : "Raj" , rn : 51 , ID : 7},
    ];
    
 Object.entries(std).forEach(([key,value]) =>
    {
     console.log(key,value);   
    });
    
std[1].rn = 20;

delete std[2].ID;
Object.entries(std).forEach(([key,value]) =>
    {
     console.log(key,value);   
    });
    
    
//Map Function used 

const stud = [
    { id: 1, rn :21, name:"Manav" },
    { id: 2, rn :41, name:"Raj" },
    { id: 3, rn :31, name:"Harsh" }
    ];
    
const stdinfo = stud.map(stud =>

    `Id :${stud.id}, Name: ${stud.name}, RollNo: ${stud.rn}`

); 
console.log(stdinfo);


// Filter function program 
const stud = [
    { id: 1, rn :21, name:"Manav" },
    { id: 2, rn :41, name:"Raj" },
    { id: 3, rn :31, name:"Harsh" }
    ];
    
const nme = stud.map(stud => stud.name);
console.log("Names are",nme);


const result = stud.map(stud => {
    return {stud,result:"Pass"};
});
console.log("Updated result is", result);

const roll = stud.filter(stud => stud.rn > 25);
console.log("Students above 25 are ", roll);



 const age = stud.filter(stud => stud.id > 1);
console.log("Students above ID 1 are ", age);


const num = [1,2,3,4,5,6,7,8,10];
const eve = num.filter(num => num %2 === 0);
console.log("Even Numbers are", eve);


//Find function 
const students = [
  { id: 1, name: "Manav", age: 21, marks: 85 },
  { id: 2, name: "Aarav", age: 22, marks: 58 },
  { id: 3, name: "Riya", age: 20, marks: 92 },
  { id: 4, name: "Karan", age: 23, marks: 45 },
  { id: 5, name: "Sneha", age: 21, marks: 88 }
];

const student = students.find(students => students.id === 3);

console.log("Student with roll number 3:", student);


//Reduce functions
const sttd = [
  { id: 1, name: "Manav", age: 21, marks: 85 },
  { id: 2, name: "Aarav", age: 22, marks: 58 },
  { id: 3, name: "Riya", age: 20, marks: 92 },
  { id: 4, name: "Karan", age: 23, marks: 45 },
  { id: 5, name: "Sneha", age: 21, marks: 88 }

]
const marks = [85, 92, 78, 90, 88];

const totalMarks = marks.reduce((acc, curr) => {
    return acc + curr;
}, 0); 

console.log("Total Marks:", totalMarks); 



const cart = [
    { item: "Laptop", price: 50000, qty: 1 },
    { item: "Mouse", price: 1500, qty: 2 },
    { item: "Keyboard", price: 3000, qty: 1 }
];
const grandTotal = cart.reduce((acc, item) => {
    return acc + (item.price * item.qty);
}, 0);

console.log("Grand Total: ₹" + grandTotal);

 


//Destrucuring Object

const cart = {
     Display : "FullHD",
     Grade : "A",
     Hz : 165,
     price : 4000 
             };
const{Display , Hz } = cart;
console.log("Display Quality is"+Display);
console.log("Refresh rate is"+Hz);

// Map Practice code
const namee =[
  {firstname : "Manav" , lastname : "Shah"},
  {firstname : "Harsh" , lastname : "Kamdar"},
  {firstname : "Raj" , lastname : "Desai"}
  ];
  
const flname = namee.map(namee => `${namee.firstname},${namee.lastname} `);
console.log("Full Name is :",flname)


// Find & Filter Practice code
const mov = [
  {moviename : "Avatar", year : 2023},
  {moviename : "Dhurandar", year : 2025},
  {moviename : "Doomsday", year : 2025},
  ];
  
  const ltmov = mov.filter(mov => mov.year === 2025);
  console.log("Movies in 2025 are :",ltmov); 

const mov = [
  {moviename : "Avatar", year : 2023},
  {moviename : "Dhurandar", year : 2025},
  {moviename : "Doomsday", year : 2025},
  ];
  
  const ltmov = mov.find(mov => mov.year === 2025);
  console.log("Movies in 2025 are :",ltmov);
  
  //Reduce practice program 
  const apple = [
    {item : "Macbook", price:22222},
    {item : "Ipad", price:23332},
    {item : "IMac", price:21112},
    ];
    const sale = apple.reduce((acc,item) => {
      return acc + item.price
    },0);
    
    console.log("Totoal revenue is:",sale);
    
























