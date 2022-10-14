// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

const enteredAlphabet = "d";
switch (enteredAlphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("This is a vowel");
    break;
  case "b":
  case "c":
  case "d":
  case "f":
  case "g":
  case "h":
  case "j":
  case "k":
  case "l":
  case "m":
  case "n":
  case "p":
  case "q":
  case "r":
  case "s":
  case "t":
  case "v":
  case "w":
  case "x":
  case "y":
  case "z":
    console.log("This is a consonant");
    break;
  default:
    console.log("This is a non-alphabet");
}

// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.
function Calculatrice(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
}
console.log(Calculatrice(5, 5, "+"));

// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

function Triangle(a, b, c) {
  if (a == b && a == c && b == c && a + b + c === 180) {
    console.log("This is a Equilateral Triangle");
  } else if ((a == b || a == c || b == c) && a + b + c === 180) {
    console.log("This is a Isosceles Triangle.");
  } else if (a !== b && b !== c && a !== c && a + b + c === 180) {
    console.log("This is a Scalene triangle.");
  } else {
    console.log("Input error.");
  }
}

console.log(Triangle(65, 45, 70));

// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

function Charge(unit) {
  if (unit <= 50 && unit > 0) {
    console.log(unit * 0.5);
  } else if (unit > 50 && unit <= 150) {
    console.log(25 + (unit - 50) * 0.75);
  } else if (unit > 150 && unit <= 250) {
    console.log(25 + 75 + (unit - 150) * 0.75);
  } else {
    console.log(1.2 * (25 + 75 + 120 + (unit - 250) * 1.5));
  }
}
console.log(Charge(50));

// Create parametized method/function to multiply 3 numbers
function tripleMultiply(a, b, c) {
  console.log(a * b * c);
}
// Create parametized method to divide 2 numbers
function division(a, b) {
  console.log(a / b);
}
// Find the biggest of 3 numbers  (89, 78, 56)
console.log(Math.max(89, 78, 56));

// Take user input: value is even or odd
function oddEven(inputValue) {
  inputValue = document.getElementById("num").value;
  if (inputValue % 2 == 0) {
    document.getElementById("display").innerHTML = "This is a even number";
  } else {
    document.getElementById("display").innerHTML = "This is a odd number";
  }
}
// Take user input: given number is multiple of 3 or not e.g.10900
function Multiply(inputValue) {
  inputValue = document.getElementById("num").value;
  if (inputValue % 3 == 0) {
    document.getElementById("display2").innerHTML = "It is a multiple of 3";
  } else {
    document.getElementById("display2").innerHTML = "It is not a multiple of 3";
  }
}

// Take user input: calculate simple interest ((p/r * t) * 100 )
function simpleInterest() {
  p = document.getElementById("principal").value;
  r = document.getElementById("rate").value;
  t = document.getElementById("years").value;
  if (p < 0 || r < 0 || t < 0) {
    document.getElementById("displayInterest").innerHTML = "Please key again";
  } else {
    document.getElementById("displayInterest").innerHTML = (
      p *
      (r / 100) *
      t
    ).toFixed(2);
  }
}
// Take user input: 0-6 display day week depending upon what user is entering (0-> sunday) : using switch
function simpleDay(inputDay) {
  inputDay = document.getElementById("dayNum").value;
  switch (inputDay) {
    case "0":
      document.getElementById("displayDay").innerHTML = "Sunday";
      break;
    case "1":
      document.getElementById("displayDay").innerHTML = "Monday";
      break;
    case "2":
      document.getElementById("displayDay").innerHTML = "Tuesday";
      break;
    case "3":
      document.getElementById("displayDay").innerHTML = "Wednesday";
      break;
    case "4":
      document.getElementById("displayDay").innerHTML = "Thursday";
      break;
    case "5":
      document.getElementById("displayDay").innerHTML = "Friday";
      break;
    case "6":
      document.getElementById("displayDay").innerHTML = "Saturday";
      break;
    default:
      document.getElementById("displayDay").innerHTML =
        "Please select only 0-6";
  }
}

//Use loops, conditional statements, take input from user
//Multiplication table (ask number from user)
function simpleMultiply() {
  num1 = document.getElementById("firstNum").value;
  num2 = document.getElementById("secondNum").value;
  document.getElementById("displayCalculate").innerHTML = num1 * num2;
}

//Sum of digits: e.g. (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10) : hint - loops, divisor and modulus
var valueSum = 2568,
  sum = 0;

while (valueSum) {
  sum += valueSum % 10;
  valueSum = Math.floor(valueSum / 10);
}

console.log(sum);

//Pallindrome string (aca: aca(reverse) is a pallindrome, abc: cba is not a Pallindrome)
function checkPalindrome(stringWord) {
  // find the length of a string
  const len = stringWord.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (stringWord[i] !== stringWord[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const stringWord = prompt("Enter a string: ");

// call the function
const value = checkPalindrome(stringWord);

console.log(value);
//display even numbers up to n number (ask user for number)
function printEvenNums() {
  //get the start and end range from user
  var start = parseInt(document.getElementById("start").value);
  var end = parseInt(document.getElementById("end").value);
  var evenNums = "<br>Even Numbers:<br>";

  for (i = start; i <= end; i++) {
    // let's divide the value by 2
    // if the reminder is zero then it's an Even number
    if (i % 2 == 0) {
      evenNums += i + "<br>";
    }
  }
  //print the values
  document.getElementById("result").innerHTML = evenNums;
}
//Count of even and odd number from 1 to 999
var countEven = 0;
var countOdd = 0;
for (var l = 1; l <= 999; l++) {
  if (l % 2 == 0) {
    countEven++;
  } else {
    countOdd++;
  }
}
console.log(
  `The number of even numbers is ${countEven}. The number of odd numbers is ${countOdd}.`
);

//Count occurrence of a particular character in a string (hello: count of l is 2)
var string = "hello";
var countAlpha = string.split("l").length - 1;
console.log(`The number of "l" is ${countAlpha}.`);

//Sum and average of array elements [1, 9, 8];
// Largest number in an array (do with loops)
const arrayEx = [1, 9, 8];

var sum = 0;
for (var number of arrayEx) {
  sum += number;
}
arrayAverage = sum / arrayEx.length;
const max = Math.max(...arrayEx);

console.log(
  `The sum is ${sum}. The average is ${arrayAverage}. The largest number is ${max}`
);

// From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if multiple of both
// display "hello" or else print the number
// e.g.
// 1
// 2
// foo
// 4
// bar
// foo
for (var k = 1; k <= 15; k++) {
  if (k % 3 == 0) {
    console.log("foo");
  } else if (k % 5 == 0) {
    console.log("bar");
  } else if (k % 3 == 0 && k % 5 == 0) {
    console.log("hello");
  } else {
    console.log(k);
  }
}

// Using selectors: create a list in html: ask user any item from list display 'item' found.
function findFruit() {
  var lists = document.getElementsByClassName("item");
  var nameFruit = document.getElementById("nameFruit").value;

  var arrayVal = [];
  for (var i = 0; i < lists.length; i++) {
    console.log(lists[i].innerHTML);
    arrayVal.push(lists[i].innerHTML);
    if (lists[i].innerHTML == nameFruit) {
      document.getElementById("displayFruit").innerHTML = "Fruit exists";
    } else {
      document.getElementById("displayFruit").innerHTML =
        "Fruit does not exist";
    }
  }
}
