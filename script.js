


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