let buttonColours = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];

$("button").on("click", function (e) {
  let userChosenColour = $(this).attr("class");

  userChosenColour = userChosenColour.slice(0, userChosenColour.length - 7);
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function animatePress(currentColour) {
  $("." + currentColour + "-button").addClass("pressed");
  setTimeout(
    () => $("." + currentColour + "-button").removeClass("pressed"),
    100
  );
}

function playSound(name) {
  let buttonAudio = new Audio("./sounds/" + name + ".mp3");
  buttonAudio.play();
}

function nextSequence() {
  let randomNum = Math.random() * 4;
  randomNum = Math.floor(randomNum);

  let randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);

  $("." + randomChosenColour + "-button")
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

//start game
