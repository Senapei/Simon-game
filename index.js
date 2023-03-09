let buttonColours = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let randomNum = Math.random() * 4;
  randomNum = Math.floor(randomNum);

  let randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);

  $("." + randomChosenColour + "-button")
    .fadeOut(100)
    .fadeIn(100);

  let randomColourAudio = new Audio("./sounds/" + randomChosenColour + ".mp3");
  randomColourAudio.play();

  $("button").on("click", function (e) {
    let userChosenColour = e.currentTarget.className;

    userChosenColour = userChosenColour.slice(0, userChosenColour.length - 7);
    userClickedPattern.push(userChosenColour);
  });
}
