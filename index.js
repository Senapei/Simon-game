let buttonColours = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let levelNumber = 0;

$("button").on("click", function (e) {
  let userChosenColour = $(this).attr("class");

  userChosenColour = userChosenColour.slice(0, userChosenColour.length - 7);
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function startOver() {
  levelNumber = 0;
  gamePattern = [];
  gameStarted = false;
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 200);
    $(".title").text("Game Over");
    startOver();
  }
}

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
  userClickedPattern = [];

  $(".title").text("Level " + levelNumber);
  let randomNum = Math.random() * 4;
  randomNum = Math.floor(randomNum);

  let randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);

  $("." + randomChosenColour + "-button")
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  levelNumber += 1;
}

//start game

$("body").keypress(function () {
  if (gameStarted === false) {
    nextSequence();
    gameStarted = true;
  }
});
