var userName = prompt("Who are you? What is your name?");
alert("Greetings " + userName + "! Welcome to my website!");
console.log("User Name: " + userName);

var counter = 0;

function birthplace(){
  var answer = prompt("Did I grow up in Oregon?");
  var message = "";
  console.log("Birthplace: " + answer);
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    message = ". You're right, " + userName + " - I grew up in Oregon!";
    counter++;
  } else {
    message = ". You're wrong, " + userName + " - I did grow up in Oregon.";
  }
  document.getElementById("question1").innerHTML = answer + message;
}
birthplace();

function college(){
  var answer = prompt("Did I go to Reed College?");
  var message = "";
  console.log("College: " + answer);
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    message = ". You're wrong, " + userName + " - I didn't go to Reed College. I went to Dartmouth College.";
  } else {
    message = ". You're right, " + userName + " - I didn't go to Reed College. I went to Dartmouth College!";
    counter++;
  }
  document.getElementById("question2").innerHTML = answer + message;
}
college();

function currentHome(){
  var answer = prompt("Do I live in Portland?");
  var message = "";
  console.log("Current Home: " + answer);
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    message = ". You're wrong, " + userName + " - I don't live in Portland. I live in Hillsboro.";
  } else {
    message = ". You're right, " + userName + " - I don't live in Portland. I live in Hillsboro!";
    counter++;
  }
  document.getElementById("question3").innerHTML = answer + message;
}
currentHome();

function numberGuess(){
  var answer = 0;
  var message = "";
  console.log("Number " + answer);
  while (answer != 10){
    answer = Number(prompt("Pick a number between 1 - 20"));
    if (answer < 10) {
      message = ". Sorry, " + userName + " - That number is too low.";
    } else if (answer > 10) {
      message = ". Sorry, " + userName + " - That number is too high.";
    } else if (answer === 10) {
      message = ". Great job, " + userName + " - that's the right number!";
      counter++;
    } else {
      message = ". That's not a valid entry, " + userName + ".";
    }
  }
  document.getElementById("question4").innerHTML = answer + message;
}
numberGuess();

document.getElementById("question5").innerHTML = "Great job " + userName + " - you got " + counter + " questions right!";
