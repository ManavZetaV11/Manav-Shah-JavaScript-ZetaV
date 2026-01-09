//Template Literal Code

const name = "Rahul";
const marks = 75;
const op = `Student ${name} has scored ${marks} marks`;
console.log(op);

//Multiple variable using Template Literal

const det = [
  {name:"Raj", marks : 88},
  {name:"Varun", marks : 78},
  {name:"Siraj", marks : 98}
  ];
  
  det.forEach(det => {
    console.log(`Student ${det.name} has scored ${det.marks}marks`);
  });
  
  
  
//Merged Two Arrays using Spread Operator

const a1 =[1,2,3,4,5];
const a2 = [ ...a1 , 6,7,8,3,10];
console.log("Merged arrays are : ",a2);


// Updating using Spread Operator
const marks = [
  {name : "Raj", mark1 : 88},
  {name : "Viraj", mark2 : 98},
  {name : "Suraj", mark3 : 78}
  ];
const upd = marks.map(marks =>
{
  if (marks.name === "Viraj") {
    return{...marks, mark2:66};
  }
  return marks;
});
  console.log("Before Update : ",marks);
  console.log("After Update : ",upd);
  


//Adding New element to the exisiting array SPREAD OPERATOR
const marks = [
  {name : "Raj", mark1 : 88},
  {name : "Viraj", mark2 : 98},
  {name : "Suraj", mark3 : 78}
  ];
const  neww = [
  ...marks,
  {name : "Raman", marks4: 89}
  ];
  
  console.log("Before Update : ",marks);
  console.log("After Update : ",neww);
  

  //Copying Array using SPREAD OPERATOR
const orig = [
  {name : "Raj", mark1 : 88},
  {name : "Viraj", mark2 : 98},
  {name : "Suraj", mark3 : 78}
  ];
const copy = [...orig];
  
  console.log("Original Array : ",orig);
  console.log("Copied Array : ",copy);
  

  // Updating element in Object Using SPREAD Operator
  const cart = {
  
  prod : "Pods",
  category : "Tech",
  price : 1234
  };
  
  const upd = {
    ...cart,
    price : 1221
  };
  
  console.log("Before Update",cart);
  console.log("After Update",upd);

 // Adding New property to object using SPREAD operator

const cart = {
  
  prod : "Pods",
  category : "Tech",
  
  };
  
  const upd = {
    ...cart,
    price : 1221
  };
  
  console.log("Before Update",cart);
  console.log("After Update",upd);

  //Function of summing up numbers using REST OPERATOR
  function sumall(...numbers)
{
  return numbers.reduce((acc,num) => acc + num, 0);
}
console.log(sumall(21,121));
console.log(sumall(21,1112,2123));
console.log(sumall(21,121,221,223));

//Max term using Rest Operator
function maxx(...nums)
{
  return Math.max(...nums);
}
console.log(maxx(12,32,44,11,23,55));

//Accept multiple numbers
function sumAll(...numbers) {
  
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(10, 20, 30)); 
console.log(sumAll(5, 15));      
console.log(sumAll(100, 200, 300));



//Deafult Parameter
function hel(name = "Country"){
  return `INDIA ${name}`;
}
console.log(hel());
console.log(hel("Manav"));


function discount( dis = 21){
  return (`Discunt 11% ,${dis}`);
}
console.log(discount(22));
console.log(discount(2112));

function dis(dis = 321){
    return (`Reliablity 
}


