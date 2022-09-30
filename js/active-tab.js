document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".accordion__link, .accordion__link-mobile").forEach(function (el) {
    el.addEventListener("click", function () {
      let a = this;
      a.classList.add("active__tab");
      document.querySelectorAll(".accordion__link, .accordion__link-mobile").forEach(function (tab) {
        if (a != tab) {
          tab.classList.remove("active__tab");
        }
      });
    })
  })

  document.querySelectorAll(".accordion__link-ru, .accordion__link-mobile-ru").forEach(function (el) {
    el.addEventListener("click", function () {
      let a = this;
      a.classList.add("active__tab-ru");
      document.querySelectorAll(".accordion__link-ru, .accordion__link-mobile-ru").forEach(function (tab) {
        if (a != tab) {
          tab.classList.remove("active__tab-ru");
        }
      });
    })
  })

  document.querySelectorAll(".accordion__link-be, .accordion__link-mobile-be").forEach(function (el) {
    el.addEventListener("click", function () {
      let a = this;
      a.classList.add("active__tab-be");
      document.querySelectorAll(".accordion__link-be, .accordion__link-mobile-be").forEach(function (tab) {
        if (a != tab) {
          tab.classList.remove("active__tab-be");
        }
      });
    })
  })

  document.querySelectorAll(".accordion__link-fr, .accordion__link-mobile-fr").forEach(function (el) {
    el.addEventListener("click", function () {
      let a = this;
      a.classList.add("active__tab-fr");
      document.querySelectorAll(".accordion__link-fr, .accordion__link-mobile-fr").forEach(function (tab) {
        if (a != tab) {
          tab.classList.remove("active__tab-fr");
        }
      });
    })
  })

  document.querySelectorAll(".accordion__link-de, .accordion__link-mobile-de").forEach(function (el) {
    el.addEventListener("click", function () {
      let a = this;
      a.classList.add("active__tab-de");
      document.querySelectorAll(".accordion__link-de, .accordion__link-mobile-de").forEach(function (tab) {
        if (a != tab) {
          tab.classList.remove("active__tab-de");
        }
      });
    })
  })
}())
