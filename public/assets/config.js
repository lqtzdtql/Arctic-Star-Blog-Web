const baseRem = 16;

function setRem() {
  document.getElementsByTagName('html')[0].style.fontSize =
    (document.documentElement.clientWidth / 1440) * baseRem + 'px';
}

document.addEventListener('DOMContentLoaded', setRem);
window.onresize = setRem;
