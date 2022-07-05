let setting = document.querySelector(".icontSetting");
let ShowColor = document.querySelector("#AllColor");

setting.onclick = () => {
  ShowColor.classList.toggle("AllColor");
};

// chose theme color
let change = document.querySelectorAll(".ChangeColor .ShowColor");
let arr = [];

change.forEach((color) => {
  arr.push(color.getAttribute("data-color"));

  color.onclick = () => {
    let getColor = color.getAttribute("data-color");
    document.body.classList.remove(...arr);
    document.body.classList.add(getColor);
  };
});
