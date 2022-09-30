document.addEventListener('DOMContentLoaded', function () {
  const eventsBtn = document.querySelector('.events__btn');
  const eventsBlock = document.querySelectorAll('.events__block');

  eventsBtn.addEventListener('click', function () {

    eventsBlock.forEach(function (element) {
      element.style.display = "block";
    })

    eventsBtn.classList.add('btn__hidden');
  });

  $(document).ready(function () {

    $(".fa, .span__search").click(function () {
      $(".wrap, .input__search, .span__search, .fa").toggleClass("act");
      $("input__search[type='text']").focus();
      return false;
    });

  });
}())
