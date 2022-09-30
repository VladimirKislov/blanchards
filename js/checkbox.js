document.addEventListener('DOMContentLoaded', function () {
  let btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    document.querySelectorAll(".checkbox__label").forEach(function (element) {
      element.classList.toggle('checkbox__label-active');
    })
  })

  let checkbox = document.querySelectorAll('.checkbox__label');

  checkbox.forEach(function (event) {
    event.addEventListener('change', function (i) {

      if (i.currentTarget.classList.contains('add__active')) {
        i.currentTarget.classList.remove('add__active');
      } else if (i.currentTarget.classList.contains('checkbox__label')) {
        i.currentTarget.classList.add('add__active');
      }
    })
  })
}())
