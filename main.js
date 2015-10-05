// //Multiplication Operations
// var multiplication = function (num_one, num_two) {
//   return parseInt(num_one) * parseInt(num_two);
// };

// //Grab Elements
// var num_one = document.querySelector('#num_one');
// var num_two = document.querySelector('#num_two');
// var multiplyMe = document.querySelector('#multiplyBtn');
// var answerElem = document.querySelector('#answer');

// //Variable Declarations 
// var multiply1, multiply2, multiplyText;

// //Performing Addition Operation
// var calculate = function () {
//   multiply1 = num_one.value;
//   multiply2 = num_two.value;
//   multiplyText = multiplication(multiply1, multiply2);
//     answerElem.textContent = multiplyText; 
// };

// //What happens when the button is clicked 
// multiplyMe.addEventListener('click', calculate);


// //Division Operations
// var division = function (num_one, num_two) {
//   return parseInt(num_one) / parseInt(num_two);
// };

// //Grab Elements
// var num_one = document.querySelector('#num_one');
// var num_two = document.querySelector('#num_two');
// var divideMe = document.querySelector('#divideBtn');
// var answerElem = document.querySelector('#answer');

// //Variable Declarations 
// var divide1, divide2, divideText;

// //Performing Addition Operation
// var calculate = function () {
//   divide1 = num_one.value;
//   divide2 = num_two.value;
//   divideText = division(divide1, divide2);
//     answerElem.textContent = divideText; 
// };

// //What happens when the button is clicked 
// divideMe.addEventListener('click', calculate);

// //Subtraction Operations
// var subtraction = function (num_one, num_two) {
//   return parseInt(num_one) - parseInt(num_two);
// };

// //Grab Elements
// var num_one = document.querySelector('#num_one');
// var num_two = document.querySelector('#num_two');
// var subMe = document.querySelector('#subtractBtn');
// var answerElem = document.querySelector('#answer');

// //Variable Declarations 
// var sub1, sub2, subText;

// //Performing Addition Operation
// var calculate = function () {
//   sub1 = num_one.value;
//   sub2 = num_two.value;
//   subText = subtraction(sub1, sub2);
//     answerElem.textContent = subText; 
// };

// //What happens when the button is clicked 
// subMe.addEventListener('click', calculate);


//Addition Operations
var addition = function (num_one, num_two) {
  return parseInt(num_one) + parseInt(num_two);
};

//Grab Elements
var num_one = document.querySelector('#num_one');
var num_two = document.querySelector('#num_two');
var addMe = document.querySelector('#calculateBtn');
var answerElem = document.querySelector('#answer');

//Variable Declarations 
var add1, add2, additionText;

//Performing Addition Operation
var calculate = function () {
  add1 = num_one.value;
  add2 = num_two.value;
  additionText = addition(add1, add2);
    answerElem.textContent = additionText; 
};

//What happens when the button is clicked 
addMe.addEventListener('click', calculate);













