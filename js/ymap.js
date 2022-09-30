document.addEventListener('DOMContentLoaded', function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14
    });
    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Group68.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    if (window.innerWidth <= 434) {
      myMap.behaviors.disable('scrollZoom');
    }

  }
}())
