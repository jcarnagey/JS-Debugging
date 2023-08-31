//#1: Fix syntax errors first. Run the following code as-is and read the error message. Fix the mistake, and then re-run the code to check it.
let launchReady = false;
let fuelLevel = 17000;


if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
}


//#2: The next block of code hides two syntax errors. Run the code as-is to find the mistakes.
let launchReadyOne = false;
let crewStatus = true;
let computerStatus = "green";


if (crewStatus && computerStatus === "green") {
  console.log("Crew & computer cleared.");
  launchReadyOne = true;
} else {
  console.log("WARNING: Crew or computer not ready!");
  launchReadyOne = false;
}


if (launchReadyOne) {
  console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
  console.log("Fed parrot...");
  console.log("Ignition...");
  console.log("Liftoff!");
 } else {
  console.log("Launch scrubbed.");
}


//#4: The next block of code hides four syntax errors. Run the code as-is to find the mistakes.
var numKids = "5";
var partner = "David Beckham";
var geoLocation = "Costa Rica";
var jobTitle = "web developer";


//var future =
  "You will be a " +
  jobTitle +
  " in " +
  geoLocation +
  ", and married to " +
  partner +
  " " +
  " with " +
  numKids +
  " kids.";
console.log(future);


//#5: The next block of code hides one logical error. Run the code as-is to find the mistakes.
var birthYear = 1984;
var futureYear = 2012;
var age;
age = futureYear - birthYear;


console.log(`I will be either  ${age}   or ${age - 1}`);


//#6: The next block of code hides one logical error. Run the code as-is to find the mistakes.
// Multiplication tables


var multiplier = 9;
for (var i = 0; i <= 10; i++) {
  var result = multiplier * i;
  console.log(multiplier + " * " + i + " = " + result);
}


//#7: The next block of code hides three  logical error. Run the code as-is to find the mistakes.
//The for loop will iterate from 0 to 20, but should stop at 18 then continue


for (var j = 0; j <= 20; j++) {
  if (j % 2 === 0) {
  console.log(j + " is even");
  } else {
    console.log(j + " is odd");
  }
}
//#8: The next block of code hides one-two  logical error. Run the code as-is to find the mistakes.
let a = 5;
let b = 6;
let c = a + b;
while (a > b) {
  console.log(c);
}


//#9: The next block of code hides two syntax errors. Run the code as-is to find the mistakes.
let text = "";
let l = 0;
do {
  text += l + "<br>";
  i++;
} while (l < 5);


//#10: The next block of code hides three  logical error. Run the code as-is to find the mistakes.
const score = 45;


//const scoreRating =
  score > 70
    ? "Excellent"
   : score > 50
    ? "Average"
    : score > 40
   ? "Fair"
    : "Do better";


//console.log(scoreRating);



function tellFortune() {
  let myFortune =new Array (
    "Win $1,000,000",
    "Get your dream job",
    "Be happy",
    "Go on vacation",
    "Meet your future spouse",
    "Find a genie in a bottle",
    "Become President",
    "Become an astronaut",
    "End world hunger",
    "Get a puppy");
  for (let fortune of myFortune) {
    let random = myFortune[Math.floor(Math.random() * myFortune.length)];

    document.getElementById("message").innerHTML = random;
  }
}