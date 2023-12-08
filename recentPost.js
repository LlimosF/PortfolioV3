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