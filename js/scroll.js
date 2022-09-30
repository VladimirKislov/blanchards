document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelectorAll('.accordion__item-mobile');
  let wrapper = document.querySelectorAll('.catalog__artist');
  btn.forEach(e => {
    e.addEventListener('click', function(i) {
      wrapper.forEach(e => e.scrollIntoView({block: "start", behavior: "smooth"}));
    })
  })
}())
