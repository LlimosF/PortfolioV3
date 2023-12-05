var toggleThemeButton = document.getElementById("container-toggle-theme-click");
var themeActive = "light";
var containerThemeLogo = document.getElementById("toggleThemeToTop");

let body = document.querySelector("body");
body.classList.add("body-light");
let imgLight = document.getElementById("toggleThemeLight");
let imgDark = document.getElementById("toggleThemeDark");
let dropDown = document.querySelector("#drop-down");

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


function updateActiveLink() {

    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    var aboutPosition = document.getElementById('about').offsetTop;
    var skillsPosition = document.getElementById('skills').offsetTop;
    var projectsPosition = document.getElementById('projects').offsetTop;
    var contactPosition = document.getElementById('contact').offsetTop;

    var toHomeLink = document.getElementById('to-home');
    var toAboutLink = document.getElementById('to-about');
    var toSkillsLink = document.getElementById('to-skills');
    var toProjectsLink = document.getElementById('to-projects');
    var toContactLink = document.getElementById('to-contact');

    var returnToTop = document.getElementById("back-to-top");

    document.querySelectorAll('nav ul li').forEach(function(li) {

      li.classList.remove('active');

    });

    if (scrollPosition < aboutPosition) {

      toHomeLink.classList.add('active');

      returnToTop.classList.add("container-return-to-top-hidden");
      returnToTop.classList.remove("container-return-to-top");

    } else if (scrollPosition < skillsPosition) {

      toAboutLink.classList.add('active');

      returnToTop.classList.remove("container-return-to-top-hidden");
      returnToTop.classList.add("container-return-to-top");

    } else if (scrollPosition < projectsPosition) {

      toSkillsLink.classList.add('active');

    } else if (scrollPosition < contactPosition) {

      toProjectsLink.classList.add('active');

    } else {

      toContactLink.classList.add('active');

    }
  }

window.addEventListener('scroll', updateActiveLink);

updateActiveLink();

function isElementInViewport(element) {

    var rect = element.getBoundingClientRect();

    return (

        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
          
function showElementsOnScroll() {

    var animatedElements = document.querySelectorAll('.animated-element');
            
    animatedElements.forEach(function(animatedElement) {

      if (isElementInViewport(animatedElement)) {

        animatedElement.style.opacity = '1';
        animatedElement.style.transform = 'translateY(0)';
            
      }
  });
}
          
window.addEventListener('scroll', showElementsOnScroll);
window.addEventListener('resize', showElementsOnScroll);
          
showElementsOnScroll();

let recentsPost = [

  {
      title: "VPGarage",
      image: "media/VPGarage.png"
  },

  {
      title: "ClickRush",
      image: "media/ClickRush.png"
  }

];

let currentIndex = 0;

function updateSlider() {

  document.getElementById('title-of-slider').textContent = recentsPost[currentIndex].title;
  document.getElementById('img-of-slider').src = recentsPost[currentIndex].image;

}

function nextSlide() {

  const container = document.querySelector('.container-slider');
  container.classList.add('fade-out');

  setTimeout(() => {

    currentIndex = (currentIndex + 1) % recentsPost.length;
    updateSlider();
    container.classList.remove('fade-out');

  }, 200);
}

function prevSlide() {

  const container = document.querySelector('.container-slider');
  container.classList.add('fade-out');

  setTimeout(() => {

    currentIndex = (currentIndex - 1 + recentsPost.length) % recentsPost.length;
    updateSlider();
    container.classList.remove('fade-out');

  }, 200);
}

updateSlider();