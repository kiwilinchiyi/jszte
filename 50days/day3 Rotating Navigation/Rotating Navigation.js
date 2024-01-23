let open = document.getElementById("open");
let close = document.getElementById("close");
let container = document.querySelector(".container");
let body = document.getElementById("body");
let circlecontainer = document.querySelector(".circle-container");
// open.addEventListener("click", (e) => {
//   container.classList.add("show-nav");
// });

// close.addEventListener("click", (e) => {
//   container.classList.remove("show-nav");
// });

circlecontainer.addEventListener("click", () => {
  container.classList.toggle("show-nav");
  body.classList.toggle("body-hidden");
});
