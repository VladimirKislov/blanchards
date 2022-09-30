document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion__link, .accordion__link-table, .accordion__link-mobile').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__artist').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion__link-de, .accordion__link-table-de, .accordion__link-mobile-de').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__artist-de').forEach(function (tabContentDe) {
        tabContentDe.classList.remove('tab-content-active-de');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active-de');
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion__link-fr, .accordion__link-table-fr, .accordion__link-mobile-fr').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__artist-fr').forEach(function (tabContentDe) {
        tabContentDe.classList.remove('tab-content-active-fr');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active-fr');
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion__link-ru, .accordion__link-table-ru, .accordion__link-mobile-ru').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__artist-ru').forEach(function (tabContentDe) {
        tabContentDe.classList.remove('tab-content-active-ru');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active-ru');
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion__link-be, .accordion__link-table-be, .accordion__link-mobile-be').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__artist-be').forEach(function (tabContentDe) {
        tabContentDe.classList.remove('tab-content-active-be');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active-be');
    })
  })
})

