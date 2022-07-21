// start in settimeout in loading
let Loading = document.getElementById("loading");
window.onload = function LoadingIndex() {
  setTimeout(() => {
    Loading.style.display = "none";
  }, 3000);
};

// start in theme color and change color item
let setting = document.querySelector(".icontSetting");
let ShowColor = document.querySelector(".AllColor");
let change = document.querySelectorAll(".ChangeColor .ShowColor");
let arr = [];

function SettingThemeColor() {
  setting.onclick = () => {
    ShowColor.classList.toggle("AllColor");
  };

  change.forEach((color) => {
    arr.push(color.getAttribute("data-color"));

    color.onclick = () => {
      let getColor = color.getAttribute("data-color");
      document.body.classList.remove(...arr);
      document.body.classList.add(getColor);
    };
  });
}
SettingThemeColor();

// open and close sidebar
let OpenSide = document.querySelector("#OpenSidebar");
let CloseSide = document.querySelector("#CloseSidebar");
let Sidebar = document.querySelector(".sidebar");

let Lists = document.querySelectorAll(".list-group li");
let NameList = document.querySelector(".NameList");
let IconList = document.querySelector(".IconList");

function ChangeColorCloseOpenSidebar() {
  OpenSide.onclick = () => {
    Sidebar.style.width = "80%";
    Sidebar.style.height = "100%";
  };
  CloseSide.onclick = () => {
    Sidebar.style.width = "0";
    // Sidebar.style.height = "0";
  };
}
ChangeColorCloseOpenSidebar();

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

// start in progress
let VlauePrecent = document.querySelectorAll(".Skill .progress-pie-chart");
let RoteatProgres = document.querySelectorAll(".Skill .ppc-progress-fill");
let Mark = document.querySelectorAll(".ppc-percents span");
let started = true;

window.onscroll = function Progress() {
  for (let i = 0; i < VlauePrecent.length; i++) {
    if (window.scrollY >= VlauePrecent[i].offsetTop - 1500) {
      let Precent = VlauePrecent[i].dataset.percent;
      let Deg = (360 * Precent) / 100;

      if (Precent > 50) {
        VlauePrecent[i].classList.add("gt-50");
      }
      RoteatProgres[i].style.transform = `rotate(${Deg}deg)`;
      Mark[i].textContent = `${Precent}%`;
    }
  }
};
// start in swiper js
// let swiper = new Swiper(".mySwiper", {
//   effect: "cards",
//   grabCursor: true,
// });
