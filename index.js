const btn = document.querySelector("button");
const img = document.querySelector("img");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 6) + 1;
  switch (random) {
    case 1:
      img.src = "./img/dice1.jpg";
      break;
    case 2:
      img.src = "./img/dice2.jpg";
      break;
    case 3:
      img.src = "./img/dice3.jpg";
      break;
    case 4:
      img.src = "./img/dice4.jpg";
      break;
    case 5:
      img.src = "./img/dice5.jpg";
      break;
    case 6:
      img.src = "./img/dice6.jpg";
      break;
  }
});
