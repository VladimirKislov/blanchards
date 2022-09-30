document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".catalog__item").forEach(function (el) {
    el.addEventListener("click", function () {
      let a = this;
      a.classList.add("active");
      document.querySelectorAll(".catalog__item").forEach(function (tab) {
        if (a != tab) {
          tab.classList.remove("active");
        }
      });
    })
  })
}())
