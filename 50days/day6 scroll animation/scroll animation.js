let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  let triggerBottom = (window.innerHeight / 5) * 4;
  console.log("innerHeight", innerHeight);
  console.log("innerheight/5*4", (window.innerHeight / 5) * 4);
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }

    console.log("boxTop", boxTop);
  });
}
