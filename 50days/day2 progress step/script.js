const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// 增加的按鈕
next.addEventListener("click", () => {
  currentActive++;
  // circles透過queryselectorAll的關係，因此是一個nodelist,可以使用.length
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  //   只會到4因為circle.length只有四而已
  //   console.log(currentActive);
  update();
});

// 減少的按鈕
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  update();
});

// active的class增加或移除

function update() {
  // console.log(circle) 會報錯，因為circle尚未定義
  //利用foreach把circles裡面的items取出來，idx是circle的length，所以當currentActive大於idx的時候增加該circle的class(active)
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
      console.log(circle, idx);
    } else {
      circle.classList.remove("active");
    }
    console.log("circle", circle);
    console.log("index", idx);
  });

  const actives = document.querySelectorAll(".active");
  // actives.length是看div當中有多少的active,初始值是1，因為next的click事件新增了active，因此變成了2。
  console.log(
    "actives.length",
    actives.length - 1,
    "circle length",
    circles.length - 1
  );
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
