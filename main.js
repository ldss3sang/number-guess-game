let computerNum = 0;
const playButton = document.querySelector("#play-button");
const userInput = document.querySelector("#user-input");
const resultArea = document.querySelector("#result-area");
const resetButton = document.querySelector("#reset-button");
const chanceArea = document.querySelector("#chance-area");
let chances = 5;
let gameOver = false;
let userInputHistory = [];

// 랜덤번호 지정
const pickRandomNumber = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("Answer", computerNum);
};

// 유저가 랜덤번호를 맞추면, Hit
// 랜덤번호 < 유저번호 Down
// 랜덤번호 > 유저번호 UP
const play = () => {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "The number should be between 1 and 100!";
    return;
  }

  if (userInputHistory.includes(userValue)) {
    resultArea.textContent =
      "The number has already been used. Please enter another number!";
    return;
  }

  chances--;
  chanceArea.textContent = chances;
  if (userValue < computerNum) {
    resultArea.textContent = "UP~!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down~!";
  } else {
    resultArea.textContent = "You win!!!";
    playButton.disabled = true;
    return;
  }

  userInputHistory.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver) {
    resultArea.textContent = "Game Over!!!";
    playButton.disabled = true;
  }
};

const reset = () => {
  // user input 창 깨끗하게 정리
  userInput.value = "";
  // 새로운 번호가 생성
  pickRandomNumber();

  chances = 5;
  chanceArea.textContent = chances;
  resultArea.textContent = "";
  userInputHistory = [];
  playButton.disabled = false;
  gameOver = false;
};

// 유저가 번호를 입력하고 Go라는 버튼을 누름
playButton.addEventListener("click", play);
// reset버튼을 누르면 게임이 리셋
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => {
  userInput.value = "";
});

pickRandomNumber();
