var userName = prompt("Who are you? What is your name?");
alert("Greetings " + userName + "! Welcome to my website!");
console.log("User Name: " + userName);

var counter = 0;

function askquestion(question, correctAnswer, extraInfo, location) {
  var answer = prompt(question);
  console.log("Question: " + question);
  console.log("Answer  : " + answer);
  var message = "";
  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
    message = ". You're right, " + userName + " - " + extraInfo;
    counter++;
  } else {
    message = ". You're wrong, " + userName + " - " + extraInfo;
  }
  document.getElementById(location).innerHTML = answer + message;
}

askquestion("Did I grow up in Oregon?", "yes", "I did grow up in Oregon!", "question1");
askquestion("Did I go to Reed College?", "no", "I didn't go to Reed College. I went to Dartmouth College.", "question2");
askquestion("Do I live in Portland?", "no", "I don't live in Portland. I live in Hillsboro!", "question3");

function numberGuess(){
  var answer = 0;
  var message = "";
  while (answer != 10){
    answer = Number(prompt("Pick a number between 1 - 20"));
    console.log("Number  : " + answer);
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
