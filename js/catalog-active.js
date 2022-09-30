document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__lang-img').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.accordion__container').forEach(function (tabContent) {
          tabContent.classList.remove('accordion__container-active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('accordion__container-active');
    })
  })
}())
