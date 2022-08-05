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
      window.localStorage.setItem("SaveColor", getColor);
      document.body.classList.remove(...arr);
      document.body.classList.add(getColor);
    };
    if (window.localStorage.getItem("SaveColor")) {
      document.body.classList.add(window.localStorage.getItem("SaveColor"));
    }
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
    Sidebar.style.left = "0";
  };
  CloseSide.onclick = () => {
    Sidebar.style.left = "-100%";
  };
}
ChangeColorCloseOpenSidebar();

// start in slide profile project in click card
let profilesSlides = document.querySelectorAll(
  ".profileprojectes .profileproject"
);
let ProfileImages = document.querySelectorAll(".profileproject img");
let SlideProfile = document.querySelector(".SlideProject");
let CardSlideImg = document.querySelector(".card img");
let TitleProject = document.getElementById("TitleProject");
let CloseCard = document.querySelector(".CloseCard");

// show card profilesSlides
profilesSlides.forEach((profile, index) => {
  profile.addEventListener("click", () => {
    SlideProfile.style.transform = "scale(1)";
    TitleProject.textContent = profile.dataset.title;
  });
  // close card
  CloseCard.addEventListener("click", () => {
    SlideProfile.style.transform = "scale(0)";
  });
});

// set src in card
ProfileImages.forEach((ProfileImg) => {
  ProfileImg.addEventListener("click", () => {
    let GetSrc = ProfileImg.getAttribute("src");
    CardSlideImg.setAttribute("src", GetSrc);
  });
});
