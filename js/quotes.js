const quotes = [
  {
    quotes:
      "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드",
  },
  {
    quotes: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로",
  },
  {
    quotes: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스다윈",
  },
  {
    quotes: "겨울이 오면 봄이 멀지 않으리",
    author: "셸리",
  },
  {
    quotes:
      "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩",
    author: "조 지라드",
  },
  {
    quotes: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다 ",
    author: "헨렌켈러",
  },
  {
    quotes: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료",
  },
  {
    quotes:
      "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
    author: "채근담",
  },
  {
    quotes: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "괴테",
  },
  {
    quotes: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.",
    author: "마크 트웨인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
