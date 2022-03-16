const links = [
  "./assets/img/smile.png",
  "./assets/img/Affectionate.png",
  "./assets/img/angry.png",
  "./assets/img/in-love.png",
  "./assets/img/sad.png",
  "./assets/img/shocked.png",
  "./assets/img/smiling.png",
  "./assets/img/thinking.png",
];

const names = [
  "Smile",
  "Affectionate",
  "Angry",
  "In Love",
  "Sad",
  "Shocked",
  "Smiling",
  "Thinking",
];

const button = document.querySelector("button");
const h2 = document.querySelector("h2");
const img = document.querySelector("img");
let n = 0;
img.setAttribute("src", links[0]);
h2.textContent = "smile";

button.addEventListener("click", function () {
  n++;
  h2.textContent = names[n % names.length];
  img.setAttribute("src", links[n % links.length]);
});
