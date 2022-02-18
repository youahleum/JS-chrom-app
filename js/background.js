const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);
document.body.appendChild(bgImage); //html파일에 태그를 넣어준다
