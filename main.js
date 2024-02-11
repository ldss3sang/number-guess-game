let computerNum = 0;
let playButton = document.querySelector("#play-button");
let userInput = document.querySelector("#user-input");
let resultArea = document.querySelector("#result-area");

const play = () => {
  let userValue = userInput.value;

  if (userValue < computerNum) {
    resultArea.textContent = "UP~!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down~!";
  } else {
    resultArea.textContent = "Hit~!";
  }
};

playButton.addEventListener("click", play);

const pickRandomNumber = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("Answer", computerNum);
};

pickRandomNumber();
