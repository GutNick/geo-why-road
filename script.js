const experience = document.querySelector('.experience');
let height = screen.height;
let executed = false;
const visible_blocks = document.querySelectorAll('.experience__hidden');
window.onscroll = function () {
  visible_blocks.forEach((elem) => {
    if (elem.getBoundingClientRect().top <= height / 1.5) {
      if (elem.classList.contains('experience__dot')) {
        elem.classList.add('experience__dots_flashing');
      }
      elem.classList.add('experience__visible');
    }
  })
}