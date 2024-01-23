let panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    console.log(e.target);
    deleteclass();
    panel.classList.add("active");
  });
});

function deleteclass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
