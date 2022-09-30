document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.down__option-btn').forEach(function (item) {
    item.addEventListener('click', (element) => {
      let a = item.parentElement.querySelector('.down__list');
      a.classList.toggle('show');
      item.classList.toggle('is-open');
      document.querySelectorAll('.down__list').forEach(element => {
        if (a != element) {
          element.classList.remove('show');
        }
      })
      document.querySelectorAll('.down__option-btn').forEach(function (el) {
        if (item != el) {
          el.classList.remove('is-open');
        }
      })
      window.addEventListener('click', e => {
        let target = e.target
        if (!target.closest('.down__list') && !target.closest('.down__option-btn')) {
          a.classList.remove('show');
          item.classList.remove('is-open');
        }
      })
    })
  })
})
