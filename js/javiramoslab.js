// =======================================================
// * APP Name: OperationCaribbeanSummer
// * Updated: 2024/01/15
// * APP URL: https://javiramoslab.com/
// * Author: Javier Ramos Nistal (@JaviRamosLab) and Lazaro Ochoa
// * Version: 0.4.4 (beta)
// * License: CC-BY-SA and GPL
// ========================================================

// const hrLogoCubaSvg = document.querySelectorAll('#Cuba-logo_1');
// hrLogoCubaSvg.addEventListener('mouseenter', () => {
//     hrLogoCubaSvg.style.fill = '#ff0000';
// });
// hrLogoCubaSvg.addEventListener('mouseout', () => {
//     Havano.style.fill = '#10324E';
// });

// BTN - Scroll Back To Top
let mybuttonmyBtnToTop = document.getElementById("myBtnToTop");
window.onscroll = function() {scrollFunctionmyBtnToTop()};
function scrollFunctionmyBtnToTop() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybuttonmyBtnToTop.style.display = "block";
  } else {
    mybuttonmyBtnToTop.style.display = "none";
  }
}
function topFunctionmyBtnToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// antipixel permalink - CurrentURL/
function badgeAntipixelPermalink(){
let badgeAntipixelPermalinkURL = window.location.href;
document.getElementById("badgeAntipixelPermalink").setAttribute("src", badgeAntipixelPermalinkURL);
}
badgeAntipixelPermalink();
