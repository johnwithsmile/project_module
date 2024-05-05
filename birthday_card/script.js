const letterContent = {
  ko: "안녕 내 사랑! 오늘은 너의 생일이야!!\n5월은 정말 행복으로 가득한 달인 것 같아.\n항상 따듯하고 멋진 사람으로 곁에 있어줘서 고맙고\n덕분에 더 많이 웃고 행복해.\n옆에서 더 많은 생일축하 노래를 불러줬으면 좋겠다.\n항상 건강하고 행복하고, 행운을 진심으로 바라!\n너를 정말 사랑해❤️❤️❤️❤️❤️❤️\nP.S 재생버튼을 눌러봐!!!",
  en: "Hello my love! Today is your birthday!!\nMay is such a joyful month, isn't it?\nI'm grateful for having you always by my side as a warm and wonderful person,\nand because of you, I smile and feel happier every day.\nI wish I could sing more birthday songs for you.\nI sincerely wish for your health, happiness, and good luck!\nI love you so much ❤️❤️❤️❤️❤️❤️\nP.S. Press the play button and listen!",
  ru: "Привет, моя любовь! Сегодня твой день рождения!!\nМай - такой радостный месяц, не так ли?\nЯ благодарен тебе за то, что ты всегда рядом, как теплый и замечательный человек,\nи благодаря тебе я улыбаюсь и чувствую себя счастливее каждый день.\nЯ бы хотел спеть тебе больше песен с днем рождения.\nЯ искренне желаю тебе здоровья, счастья и удачи!\nЯ люблю тебя так сильно ❤️❤️❤️❤️❤️❤️\nP.S. Нажми на кнопку воспроизведения и послушай!",
};

let currentLanguage = "ko";
let isPlaying = false;
const audioElement = document.getElementById("birthday-song");
const playButton = document.getElementById("play-button");

// 페이지가 로드될 때 초기 편지 내용을 한국어로 설정
document.addEventListener("DOMContentLoaded", function () {
  updateLetter("ko");
});

document
  .getElementById("language-toggle")
  .addEventListener("click", function () {
    currentLanguage = getNextLanguage(currentLanguage);
    updateLetter(currentLanguage);
    updateSong(currentLanguage);
  });

playButton.addEventListener("click", function () {
  if (!isPlaying) {
    audioElement.play();
    playButton.textContent = "일시정지";
  } else {
    audioElement.pause();
    playButton.textContent = "재생";
  }
  isPlaying = !isPlaying;
});

function getNextLanguage(currentLanguage) {
  switch (currentLanguage) {
    case "ko":
      return "en";
    case "en":
      return "ru";
    case "ru":
      return "ko";
    default:
      return "ko";
  }
}

function updateLetter(language) {
  document.querySelector(".letter p").textContent = letterContent[language];
}

function updateSong(language) {
  audioElement.src = `./resource/${language}.m4a`;
  if (isPlaying) {
    audioElement.play();
  }
}
