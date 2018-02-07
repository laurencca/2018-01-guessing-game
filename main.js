  var userName = prompt("Who are you? What is your name?");
  alert("Greetings " + userName + "! Welcome to my website!");
  console.log("User Name: " + userName);

  var birthplace = prompt("Did I grow up in Oregon?");
  console.log("Birthplace: " + birthplace);
  if (birthplace.toLowerCase() === "yes" || birthplace.toLowerCase() === "y") {
    alert("You're right, " + userName + " - I grew up in Oregon!");
  } else {
    alert("You're wrong, " + userName + " - I did grow up in Oregon.");
  }

  var college = prompt("Did I go to Reed College?");
  console.log("College: " + college);
  if (college.toLowerCase() === "yes" || college.toLowerCase() === "y") {
    alert("You're wrong, " + userName + " - I didn't go to Reed College. I went to Dartmouth College.");
  } else {
    alert("You're right, " + userName + " - I didn't go to Reed College. I went to Dartmouth College!");
  }

  var currentHome = prompt("Do I live in Portland?");
  console.log("Current Home: " + currentHome);
  if (currentHome.toLowerCase() === "yes" || currentHome.toLowerCase() === "y") {
    alert("You're wrong, " + userName + " - I don't live in Portland. I live in Hillsboro.");
  } else {
    alert("You're right, " + userName + " - I don't live in Portland. I live in Hillsboro!");
  }

  var numberGuess = prompt("Pick a number between 1 - 20");
  var number = Number(numberGuess);
  console.log("Number " + number);
  if (number < 10) {
    alert("Sorry, " + userName + " - That number is too low.");
  } else if (number > 10) {
      alert("Sorry, " + userName + " - That number is too high.");
  } else if (number === 10) {
    alert("Great job, " + userName + " - that's the right number!");
  } else {
    alert("That's not a valid entry, " + userName + ".");
  }

  var correctGuess = document.write()
