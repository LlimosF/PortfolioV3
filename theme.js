var toggleThemeButton = document.getElementById("container-toggle-theme-click");
var themeActive = "light";
var containerThemeLogo = document.getElementById("toggleThemeToTop");

let about = document.querySelector("#about");
let skills = document.querySelector("#skills");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");
let imgLight = document.getElementById("toggleThemeLight");
let imgDark = document.getElementById("toggleThemeDark");
let dropDown = document.querySelector("#drop-down");
let imgModal = document.getElementById("close-modal");

about.classList.add("container-light");
skills.classList.add("container-light");
projects.classList.add("container-light");
contact.classList.add("container-light");

function toggleTheme() {

  if (themeActive === "light") {

    about.classList.remove("container-light");
    about.classList.add("container-dark");
    skills.classList.remove("container-light");
    skills.classList.add("container-dark");
    projects.classList.remove("container-light");
    projects.classList.add("container-dark");
    contact.classList.remove("container-light");
    contact.classList.add("container-dark");
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

    about.classList.add("container-light");
    about.classList.remove("container-dark");
    skills.classList.add("container-light");
    skills.classList.remove("container-dark");
    projects.classList.add("container-light");
    projects.classList.remove("container-dark");
    contact.classList.add("container-light");
    contact.classList.remove("container-dark");
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