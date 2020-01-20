/*
  Programming Foundations, Course Assignment
*/

// question 1
var questionOne = "Correct";

// question 2
var person = {
  name: "Robert",
  age: 25
};

// question 3
var outOfStock = false;
if (outOfStock === true) {
  console.log("Out of stock");
}
else {
  console.log("In stock");
}

// question 4
var numbers = [1, 2, 3, 4, 5];
var logNumber = numbers.length;
for(var i = 0; i < logNumber; i++) {
    console.log(numbers[i]);
}

// question 5
for(var counter = 15; counter <= 25; counter++) {
    console.log(counter);
}

// question 6


// question 7
var phonesForSale = [
  // first phone
  {
    phone: "Samsung Galaxy S10",
    price: 8490,
    inStock: true
  },
  // second phone
  {
    phone: "iPhone 11 Pro",
    price: 13890,
    inStock: false
  }
];

for (var i = 0; i < phonesForSale.length; i++) {
  console.log(phonesForSale[i].price);
  console.log(phonesForSale[i].inStock);
}

// question 8
function whatIDontLike(food){
  console.log("I don't like " + food);
}

whatIDontLike("onions");

// question 9
function subtractAndLog(num1,num2){
  var answer = num1 - num2;
  console.log(answer);
}

subtractAndLog(10, 5);

// question 10
var emptyArray = [];
function emptyArrayFuntion(argument){
  return emptyArray;
}

emptyArrayFuntion(7);
