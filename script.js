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
    modalPassword.classList.remove("modal-light");
    modalPassword.classList.add("modal-dark");
    modalChallenge.classList.remove("modal-light");
    modalChallenge.classList.add("modal-dark");
    modalDiceGame.classList.remove("modal-light");
    modalDiceGame.classList.add("modal-dark");
    modalCCPhotographie.classList.remove("modal-light");
    modalCCPhotographie.classList.add("modal-dark");
    modalCProt.classList.remove("modal-light");
    modalCProt.classList.add("modal-dark");
    modalFrameUse.classList.remove("modal-light");
    modalFrameUse.classList.add("modal-dark");
    modalVPGarage.classList.remove("modal-light");
    modalVPGarage.classList.add("modal-dark");
    modalFakeback.classList.remove("modal-light");
    modalFakeback.classList.add("modal-dark");
    modalClickRush.classList.remove("modal-light");
    modalClickRush.classList.add("modal-dark");
    modalMorpion.classList.remove("modal-light");
    modalMorpion.classList.add("modal-dark");
    modalCalculatrice.classList.remove("modal-light");
    modalCalculatrice.classList.add("modal-dark");
    modalQRCode.classList.remove("modal-light");
    modalQRCode.classList.add("modal-dark");

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
    modalPassword.classList.remove("modal-dark");
    modalPassword.classList.add("modal-light");
    modalChallenge.classList.remove("modal-dark");
    modalChallenge.classList.add("modal-light");
    modalDiceGame.classList.remove("modal-dark");
    modalDiceGame.classList.add("modal-light");
    modalCCPhotographie.classList.remove("modal-dark");
    modalCCPhotographie.classList.add("modal-light");
    modalCProt.classList.remove("modal-dark");
    modalCProt.classList.add("modal-light");
    modalFrameUse.classList.remove("modal-dark");
    modalFrameUse.classList.add("modal-light");
    modalVPGarage.classList.remove("modal-dark");
    modalVPGarage.classList.add("modal-light");
    modalFakeback.classList.remove("modal-dark");
    modalFakeback.classList.add("modal-light");
    modalClickRush.classList.remove("modal-dark");
    modalClickRush.classList.add("modal-light");
    modalMorpion.classList.remove("modal-dark");
    modalMorpion.classList.add("modal-light");
    modalCalculatrice.classList.remove("modal-dark");
    modalCalculatrice.classList.add("modal-light");
    modalQRCode.classList.remove("modal-dark");
    modalQRCode.classList.add("modal-light");

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

let buttonBlur = document.getElementById("add-blur-toggle");

/* MODAL PASSWORD */
/* MODAL PASSWORD */
/* MODAL PASSWORD */

let buttonPassword = document.getElementById("button-modal-password");
let modalPassword = document.getElementById("modal-password");

function openModalPassword () {

  modalPassword.classList.remove("modal-hidden");
  modalPassword.classList.add("modal");
  modalPassword.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonPassword.addEventListener("click", openModalPassword);

let closeModal = document.getElementById("close-modal-password");

function closingModalPassword () {

  modalPassword.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeModal.addEventListener("click", closingModalPassword);

/* MODAL CHALLENGE */
/* MODAL CHALLENGE */
/* MODAL CHALLENGE */

let buttonChallenge = document.getElementById("button-modal-challenge");
let modalChallenge = document.getElementById("modal-challenge");

function openModalChallenge () {

  modalChallenge.classList.remove("modal-hidden");
  modalChallenge.classList.add("modal");
  modalChallenge.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonChallenge.addEventListener("click", openModalChallenge);

let closeModalChallenge = document.getElementById("close-modal-challenge");

function closingModalChallenge () {

  modalChallenge.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeModalChallenge.addEventListener("click", closingModalChallenge);

/* MODAL DICEGAME */
/* MODAL DICEGAME */
/* MODAL DICEGAME */

let buttonDiceGame = document.getElementById("button-modal-dicegame");
let modalDiceGame = document.getElementById("modal-dicegame");

function openModalDiceGame () {

  modalDiceGame.classList.remove("modal-hidden");
  modalDiceGame.classList.add("modal");
  modalDiceGame.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonDiceGame.addEventListener("click", openModalDiceGame);

let closeModalDiceGame = document.getElementById("close-modal-dicegame");

function closingModalDiceGame () {

  modalDiceGame.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeModalDiceGame.addEventListener("click", closingModalDiceGame);

/* MODAL CCPHOTOGRAPHIE */
/* MODAL CCPHOTOGRAPHIE */
/* MODAL CCPHOTOGRAPHIE */

let buttonCCPhotographie = document.getElementById("button-modal-ccphotographie");
let modalCCPhotographie = document.getElementById("modal-ccphotographie");

function openModalCCPhotographie () {

  modalCCPhotographie.classList.remove("modal-hidden");
  modalCCPhotographie.classList.add("modal");
  modalCCPhotographie.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonCCPhotographie.addEventListener("click", openModalCCPhotographie);

let closeCCPhotographie = document.getElementById("close-modal-ccphotographie");

function closingModalCCPhotographie () {

  modalCCPhotographie.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeCCPhotographie.addEventListener("click", closingModalCCPhotographie);

/* MODAL CPROT */
/* MODAL CPROT */
/* MODAL CPROT */

let buttonCProt = document.getElementById("button-modal-cprot");
let modalCProt = document.getElementById("modal-cprot");

function openModalCProt () {

  modalCProt.classList.remove("modal-hidden");
  modalCProt.classList.add("modal");
  modalCProt.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonCProt.addEventListener("click", openModalCProt);

let closeCProt = document.getElementById("close-modal-cprot");

function closingModalCProt () {

  modalCProt.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeCProt.addEventListener("click", closingModalCProt);

/* MODAL FRAMEUSE */
/* MODAL FRAMEUSE */
/* MODAL FRAMEUSE */

let buttonFrameUse = document.getElementById("button-modal-frameuse");
let modalFrameUse = document.getElementById("modal-frameuse");

function openModalFrameUse () {

  modalFrameUse.classList.remove("modal-hidden");
  modalFrameUse.classList.add("modal");
  modalFrameUse.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonFrameUse.addEventListener("click", openModalFrameUse);

let closeFrameUse = document.getElementById("close-modal-frameuse");

function closingModalFrameUse () {

  modalFrameUse.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeFrameUse.addEventListener("click", closingModalFrameUse);

/* MODAL VPGARAGE */
/* MODAL VPGARAGE */
/* MODAL VPGARAGE */

let buttonVPGarage = document.getElementById("button-modal-vpgarage");
let modalVPGarage = document.getElementById("modal-vpgarage");

function openModalVPGarage () {

  modalVPGarage.classList.remove("modal-hidden");
  modalVPGarage.classList.add("modal");
  modalVPGarage.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonVPGarage.addEventListener("click", openModalVPGarage);

let closeVPGarage = document.getElementById("close-modal-vpgarage");

function closingModalVPGarage () {

  modalVPGarage.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeVPGarage.addEventListener("click", closingModalVPGarage);

/* MODAL FAKEBACK */
/* MODAL FAKEBACK */
/* MODAL FAKEBACK */

let buttonFakeback = document.getElementById("button-modal-fakeback");
let modalFakeback = document.getElementById("modal-fakeback");

function openModalFakeback () {

  modalFakeback.classList.remove("modal-hidden");
  modalFakeback.classList.add("modal");
  modalFakeback.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonFakeback.addEventListener("click", openModalFakeback);

let closeFakeback = document.getElementById("close-modal-fakeback");

function closingModalFakeback () {

  modalFakeback.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeFakeback.addEventListener("click", closingModalFakeback);

/* MODAL CLICKRUSH */
/* MODAL CLICKRUSH */
/* MODAL CLICKRUSH */

let buttonClickRush = document.getElementById("button-modal-clickrush");
let modalClickRush = document.getElementById("modal-clickrush");

function openModalClickRush () {

  modalClickRush.classList.remove("modal-hidden");
  modalClickRush.classList.add("modal");
  modalClickRush.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonClickRush.addEventListener("click", openModalClickRush);

let closeClickRush = document.getElementById("close-modal-clickrush");

function closingModalClickRush () {

  modalClickRush.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeClickRush.addEventListener("click", closingModalClickRush);

/* MODAL MORPION */
/* MODAL MORPION */
/* MODAL MORPION */

let buttonMorpion = document.getElementById("button-modal-morpion");
let modalMorpion = document.getElementById("modal-morpion");

function openModalMorpion () {

  modalMorpion.classList.remove("modal-hidden");
  modalMorpion.classList.add("modal");
  modalMorpion.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonMorpion.addEventListener("click", openModalMorpion);

let closeMorpion = document.getElementById("close-modal-morpion");

function closingModalMorpion () {

  modalMorpion.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeMorpion.addEventListener("click", closingModalMorpion);

/* MODAL MORPION */
/* MODAL MORPION */
/* MODAL MORPION */

let buttonCalculatrice = document.getElementById("button-modal-calculatrice");
let modalCalculatrice = document.getElementById("modal-calculatrice");

function openModalCalculatrice () {

  modalCalculatrice.classList.remove("modal-hidden");
  modalCalculatrice.classList.add("modal");
  modalCalculatrice.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonCalculatrice.addEventListener("click", openModalCalculatrice);

let closeCalculatrice = document.getElementById("close-modal-calculatrice");

function closingModalCalculatrice () {

  modalCalculatrice.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeCalculatrice.addEventListener("click", closingModalCalculatrice);

/* MODAL QRCODE */
/* MODAL QRCODE */
/* MODAL QRCODE */

let buttonQRCode = document.getElementById("button-modal-qrcode");
let modalQRCode = document.getElementById("modal-qrcode");

function openModalQRCode () {

  modalQRCode.classList.remove("modal-hidden");
  modalQRCode.classList.add("modal");
  modalQRCode.classList.add("modal-light");
  buttonBlur.classList.add("blur");

}

buttonQRCode.addEventListener("click", openModalQRCode);

let closeQRCode = document.getElementById("close-modal-qrcode");

function closingModalQRCode () {

  modalQRCode.classList.add("modal-hidden");
  buttonBlur.classList.remove("blur");

}

closeQRCode.addEventListener("click", closingModalQRCode);
