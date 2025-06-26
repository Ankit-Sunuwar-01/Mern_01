// Q1: Declare a variable called name and assign your name to it.
// Then print "Hello, [your name]" to the console.
const name = "Ankit";
console.log("Hello" + " " + name);

// Q2: Write a program that checks if a number is positive or negative.
let number = -5;
if (number >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// Q3: Write a function that takes a number and returns "Even" or "Odd".
const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// Q4: Write a function that takes two numbers and returns their sum.
const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 10));
// Q5: Create an array of 5 numbers and print each number using a loop.
const array = [5, 10, 15, 20, 50];

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Q6: Write a function that takes three numbers and returns the largest.
const findLargest = (a, b, c) => {
  return Math.max(a, b, c);
};
console.log(findLargest(30, 100, 50));
// Q7: Create an object with properties: name, age, and address.
// Print each property.
const person = (name, age, address) => ({
  name,
  age,
  address,
});
console.log(person("Ankit", 19, "Lalitpur"));
// Q8: Use a `for` loop to print numbers from 1 to 10.
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// Q9: Write a function that reverses a string.
// Example: reverseString("hello") → "olleh"

const reverseString = () => {
  string = "hello";
  return string.split("").reverse().join("");
};
console.log(reverseString());
// Q10: Write a function to find the factorial of a number.
// Example: factorial(5) → 120
const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
const fact = factorial(5);
console.log(fact);
// Q11: Print numbers from 1 to 20.
// For multiples of 3 print "Fizz", for 5 print "Buzz", for both print "FizzBuzz".

const multiples = () => {
  for (i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
multiples();
//Q.12 Write a function that calculates the sum of all numbers in an array.
// Example: [1, 2, 3, 4] → 10

const calculates = (num) => {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
};
const numbers = [1, 2, 3, 4];
console.log(calculates(numbers));
//Q.13 Write a function to check if a given string is a palindrome (reads the same backward as forward).
// Example: ""madam"" → true, "hello" → false
const palindrome = (string) => {
  const reverse = string.split("").reverse().join("");
  return string === reverse; // check true or false.
};
console.log(palindrome("madam"));
console.log(palindrome("hello"));
