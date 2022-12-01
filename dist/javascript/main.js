/* global anime */

window.addEventListener('DOMContentLoaded', () => {
  const path = anime.path('.bg > svg > path');

  const airplane = anime({
    targets: '.bg .ball',
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
    airplane.seek((scrollPercent() / 100) * airplane.duration);
  });
});
