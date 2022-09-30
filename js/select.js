document.addEventListener('DOMContentLoaded', function () {
  const multiSelect = function () {
    const element = document.querySelectorAll('.select__gallery');

    element.forEach(e => {
      const choices = new Choices(e, {
        searchEnabled: false,
        shouldSort: false,
      });
    });

  }
  multiSelect();
}())
