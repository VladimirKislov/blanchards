document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.editions-form__title').addEventListener('click', () => {
    document.querySelector('.editions-form__title-icon').classList.toggle('icon__show');
  });
  document.querySelectorAll('.checkbox__label').forEach((e) => {
    e.addEventListener('click', function(item) {
      let target = item.currentTarget;
      if(target.classList.contains('add__active')) {
        let a = target.parentElement.querySelector('.editions-form__title-icon-x');
        a.classList.remove('is-close');
      } else {
        let a = target.parentElement.querySelector('.editions-form__title-icon-x');
        a.classList.add('is-close');
      }
    })
  })
}())
