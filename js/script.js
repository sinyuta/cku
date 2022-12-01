/* global anime */

window.addEventListener('DOMContentLoaded', () => {
    const path = anime.path('svg > path');
  
    const airplane = anime({
      targets: '.ball',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      autoplay: false,
      duration: 20000,
      // loop: true,
    });
  
    const scrollPercent = () => {
      const bodyST = document.body.scrollTop;
      const docST = document.documentElement.scrollTop;
      const docSH = document.documentElement.scrollHeight;
      const docCH = document.documentElement.clientHeight;
  
      return ((docST + bodyST) / (docSH - docCH)) * 100;
    };
  
    document.addEventListener('scroll', () => {
      airplane.seek((scrollPercent() / 95) * airplane.duration);
      console.log(scrollPercent());
    });
  });
  

SmoothScroll({
    animationTime    : 800,
    stepSize         : 45,
    
    accelerationDelta : 30,  
    accelerationMax   : 2,   

    keyboardSupport   : true,  
    arrowScroll       : 500,

    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    touchpadSupport   : true,
})


function menuOpen() {
  document.getElementById('headMenu').classList.toggle('active');
  document.getElementById('burger').classList.toggle('-active');
  document.body.classList.toggle('no-scroll');
}

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})