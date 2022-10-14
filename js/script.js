//Functions

var num = 90;//global scope

// declaration of function
function add() {
    //block of code
    //local scope
    var a = 20;
    var b = 30;
    console.log(a + b + num);
}

//calling a function
add();
add();

// parameterized function
function subtract(a, b) {//parameters
    console.log(a - b);
}

//calling of function
subtract(20, 10);//arguments

subtract(40, 20);//arguments


//passing function a value

// console.log(a);//give error

function multiply(x, y) {
    //local scope
    var result = x * y;
    return result;
}

var r = multiply(2, 3);//passing function a value
console.log(r);


//see html file
function displayName() {
    // capture user input
    var n = document.getElementById('name').value;
    console.log(n);
    document.getElementById('display').innerHTML = n;

    var x = document.getElementsByClassName('example');
    console.log(x);//treat like an array

    var lists = document.getElementsByClassName('item');
    console.log(lists.length);

    var arrayVal = [];
    for (var i = 0; i < lists.length; i++) {
        console.log(lists[i].innerHTML);
        arrayVal.push(lists[i].innerHTML);
        if (lists[i].innerHTML == 'HTML') {
            console.log('exist');
        }
    }
    
    console.log(arrayVal);
}


//self-invoking/anonymous function
(function () {
    console.log(10 + 20);
})();

//parameterized
(function (a, b) {
    console.log(a + b);
})(1, 2);


// Conditional Statement

//if
// syntax
// if(condition) {
//block of code
// }

var firstName = 'alex';

if (firstName === 'alx') {
    console.log(firstName);
}

// if else
if (firstName === 'alx') {
    console.log(firstName);
}
else {
    console.log('not correct input');
}

// Ternary Operator /Conditional Operator
// (condition) ? (true) : (false)
var returnVal = (firstName === 'alx') ? (firstName) : ('not correct input');
console.log(returnVal);

var lastName = 'joe';

// else if
if (firstName == 'alx' && lastName === 'joe') {
    console.log(firstName, lastName)
}
else if (firstName === 'alex') {
    console.log(firstName);
}
else if (lastName === 'joe') {
    console.log(lastName);
}
else {
    console.log('wrong input');
}


// switch
var age = 18;
switch (age) { //strict checking (===)
    case 1:
        console.log('wrong input');
        break;

    case 2:
        console.log('wrong input');
        break;

    case 18:
        console.log('eligible to vote');
        break;

    default:
        console.log('default case');
}



// Loops
// 1 loop = 1 iteration
// for(statement1 ; statement2; statement3) {
//block of code
// }

// statement 1-> initlization value
// statement 2 ->condition
// statement 3-> inc/dec

// steps of execution
// st1 -> st2 -> Block of code -> st3 -> st2 -> block of code, so on...

for (var j = 10; j >= 0; j--) {
    console.log(j);//10 9 8 7 6 5 4 3 2 1 0
}

//infinite loop
// j= 0; j>=0; j++

// getting all odd from 1 till 100
for (var i = 1; i <= 100; i = i + 2) {
    console.log(i);//1 2 ... 19 20
}

// getting all even from 2 till 100
for (var i = 2; i <= 100; i = i + 2) {
    console.log(i);//1 2 ... 19 20
}

//iterate over array
var arr = [90, 89, 78, 56];//4

for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);//90 89 78 56
    if (arr[i] == 90) {
        console.log(arr[i] + ' is found');
    }
}

//get all the even, odd, search number in an array


// while
// while(condition) {
//block of code
// }

var z = 10;
while (z >= 0) {
    console.log(z);
    z--;
}


//do while
// do {

// }while(condition)

var a = 10;
do {
    console.log(a);//10
    a++;
} while (a < 10);


// DOM methods (self-study)
// addEventListerner
// classList


