var toggleThemeButton = document.getElementById("container-toggle-theme-click");
var themeActive = "light";
var containerThemeLogo = document.getElementById("toggleThemeToTop");

let body = document.querySelector("body");
body.classList.add("body-light");
let imgLight = document.getElementById("toggleThemeLight");
let imgDark = document.getElementById("toggleThemeDark");
let dropDown = document.querySelector("#drop-down");
let imgModal = document.getElementById("close-modal");

function toggleTheme() {

  if (themeActive === "light") {

    body.classList.remove("body-light");
    body.classList.add("body-dark");
    imgDark.classList.add("theme-active");
    imgDark.classList.remove("theme-active-none")
    imgLight.classList.remove("theme-active");
    imgLight.classList.add("theme-active-none");

    dropDown.src= "media/arrow-down-sign-to-navigate.png";

    let allTitleSection = document.querySelectorAll(".title-section");

    allTitleSection.forEach(titleSection => {

      titleSection.classList.remove("title-section-light");
      titleSection.classList.add("title-section-dark");

    });

  } else {

    body.classList.add("body-light");
    body.classList.remove("body-dark");
    imgLight.classList.add("theme-active");
    imgDark.classList.remove("theme-active");
    imgDark.classList.add("theme-active-none");
    imgLight.classList.remove("theme-active-none");

    dropDown.src= "media/arrow-down-dark.png";

    let allTitleSection = document.querySelectorAll(".title-section");

    allTitleSection.forEach(titleSection => {

      titleSection.classList.remove("title-section-dark");
      titleSection.classList.add("title-section-light");

    });

  }

  themeActive = themeActive === "light" ? "dark" : "light";

}

toggleThemeButton.addEventListener("click", toggleTheme);