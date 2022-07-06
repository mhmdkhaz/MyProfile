let setting = document.querySelector(".icontSetting");
let ShowColor = document.querySelector("#AllColor");

setting.onclick = () => {
  ShowColor.classList.toggle("AllColor");
};

// open and close sidebar
let OpenSide = document.querySelector(".OpenSidebar");
let Sidebar = document.querySelector(".sidebar");

OpenSide.onclick = () => {
  Sidebar.style.width = "100%";
  Sidebar.style.height = "100%";
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

// auto write and remove text

let PlaceWrite = document.querySelector(".AutoWrite");
let Words = ["front end", "web developer"];

let i = 0,
  j = 0;

let INTERVAL_VALue;

let Type = () => {
  let text = Words[i].substring(0, j + 1);
  PlaceWrite.textContent = text;
  j++;
  if (text === Words[i]) {
    clearInterval(INTERVAL_VALue);
    setTimeout(function () {
      INTERVAL_VALue = setInterval(Delete, 50);
    }, 1000);
  }
};

function Delete() {
  let text = Words[i].substring(0, j - 1);
  PlaceWrite.innerHTML = text;
  j--;

  if (text === "") {
    clearInterval(INTERVAL_VALue);

    if (i == Words.length - 1) i = 0;
    else i++;

    j = 0;

    setTimeout(function () {
      INTERVAL_VALue = setInterval(Type, 100);
    }, 200);
  }
}

INTERVAL_VALue = setInterval(Type, 100);
