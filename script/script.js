
const btn = document.querySelector(".menu-btn");
const body = document.querySelector("body");

btn.addEventListener('click', () => {
  body.classList.toggle('blocked')
})