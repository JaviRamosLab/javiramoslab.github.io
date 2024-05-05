// =======================================================
// * APP Name: CyberGuerrillaAaronSwartz
// * Updated: 2024/01/15
// * APP URL: https://javiramoslab.com/
// * Author: Javier Ramos Nistal (@JaviRamosLab) and Lazaro Ochoa
// * Version: 0.4.4 (beta)
// * License: CC-BY-SA and GPL
// ========================================================

let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
  window.addEventListener("scroll", scroll);
function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}