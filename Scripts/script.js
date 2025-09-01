// =======================
// For Variables & Conditionals
// =======================
let age = 36;
let name = "Abdulganiyu";

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// =======================
// For the Functions
// =======================

// Function 1: Greet user
function greetUser(username) {
  return "Welcome, " + username + "!!!";
}

// Function 2: Calculate square of a number
function calculateSquare(num) {
  return num * num;
}

// =======================
// For the Loops
// =======================

// Loop 1: For loop
let outputText = "";
for (let i = 1; i <= 5; i++) {
  outputText += "Number " + i + "<br>";
}

// Loop 2: While loop
let count = 1;
let whileOutput = "";
while (count <= 3) {
  whileOutput += "Count is " + count + "<br>";
  count++;
}

// =======================
// For the DOM Interactions
// =======================

// DOM Interaction 1: Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
  document.getElementById("greeting").textContent = greetUser(name);
});

// DOM Interaction 2: Display loop output in the DOM
document.getElementById("loop-output").innerHTML = outputText + whileOutput;

// DOM Interaction 3: Use function result in DOM
document.getElementById("calculate-btn").addEventListener("click", function () {
  let result = calculateSquare(5);
  document.getElementById("function-output").textContent = "Square of 5 is " + result;
});
