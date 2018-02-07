var userName = prompt("Who are you? What is your name?");
alert("Greetings " + userName + "! Welcome to my website!");
console.log("User Name: " + userName);

var counter = 0;

function birthplace(){
  var answer = prompt("Did I grow up in Oregon?");
  console.log("Birthplace: " + answer);
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    alert("You're right, " + userName + " - I grew up in Oregon!");
    counter++;
  } else {
    alert("You're wrong, " + userName + " - I did grow up in Oregon.");
  }
}
birthplace();

function college(){
  var answer = prompt("Did I go to Reed College?");
  console.log("College: " + answer);
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    alert("You're wrong, " + userName + " - I didn't go to Reed College. I went to Dartmouth College.");
  } else {
    alert("You're right, " + userName + " - I didn't go to Reed College. I went to Dartmouth College!");
    counter++;
  }
}
college();

function currentHome(){
  var answer = prompt("Do I live in Portland?");
  console.log("Current Home: " + answer);
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    alert("You're wrong, " + userName + " - I don't live in Portland. I live in Hillsboro.");
  } else {
    alert("You're right, " + userName + " - I don't live in Portland. I live in Hillsboro!");
    counter++;
  }
}
currentHome();

function numberGuess(){
  var answer = 0;
  console.log("Number " + answer);
  while (answer != 10){
    answer = Number(prompt("Pick a number between 1 - 20"));
    if (answer < 10) {
      alert("Sorry, " + userName + " - That number is too low.");
    } else if (answer > 10) {
      alert("Sorry, " + userName + " - That number is too high.");
    } else if (answer === 10) {
      alert("Great job, " + userName + " - that's the right number!");
      counter++;
    } else {
      alert("That's not a valid entry, " + userName + ".");
    }
  }
}
numberGuess();

alert("Great job " + userName + " - you got " + counter + " questions right!");
