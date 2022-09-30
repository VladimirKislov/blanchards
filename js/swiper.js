document.addEventListener('DOMContentLoaded', function () {
  var swiperOne = new Swiper('.hero__swiper', {

    direction: 'horizontal',
    effect: 'fade',
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 9000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiperTwo = new Swiper('.swiper-container-two', {

    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    loop: false,
    grid: {
      rows: 1,
      fill: 'column',
    },

    pagination: {
      el: '.swiper-pagination-two',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
    },

    breakpoints: {
      760: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
    },


  });

  let swiperFive;
  const breakpointFive = window.matchMedia('(max-width: 434px)');

  const breakpointCheckerFive = function () {
    if (breakpointFive.matches === true) {
      if (swiperFive !== undefined) swiperFive.destroy(true, true);
      return;
    } else if (breakpointFive.matches === false) {
      return enableSwiperFive();
    }
  }

  const enableSwiperFive = function () {
    swiperFive = new Swiper('.editions__swiper', {

      slidesPerView: 2,
      spaceBetween: 34,
      direction: 'horizontal',

      pagination: {
        el: '.swiper-pagination-editions',
        type: 'fraction',
      },


      navigation: {
        nextEl: '.editions__next',
        prevEl: '.editions__prev',
        disabledClass: 'swiper-button-disabled',
      },

      breakpoints: {

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 49,
        },
        1148: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },

      },

    });
  }

  breakpointFive.addListener(breakpointCheckerFive);
  breakpointCheckerFive();

  var swiperPrev = document.getElementById('editions__prev-swiper-icon');
  var swiperNext = document.getElementById('editions__next-swiper-icon');

  swiperPrev.addEventListener('click', () => {
    swiperFive.slidePrev();
  })
  swiperNext.addEventListener('click', () => {
    swiperFive.slideNext();
  })

  var swiperSix = new Swiper('.projects__swiper-container', {

    slidesPerView: 1,
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.projects__next',
      prevEl: '.projects__prev',
      disabledClass: 'swiper-button-disabled',
    },

    breakpoints: {

      267: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1023: {
        spaceBetween: 50,
      },
      1843: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

  });

  let swiperSeven;
  const breakpointSeven = window.matchMedia('(min-width: 434px)');

  const breakpointCheckerSeven = function () {
    if (breakpointSeven.matches === true) {
      if (swiperSeven !== undefined) swiperSeven.destroy(true, true);
      return;
    } else if (breakpointSeven.matches === false) {
      return enableSwiperSeven();
    }
  }

  const enableSwiperSeven = function () {
    swiperSeven = new Swiper('.events__swiper-container', {

      slidesPerView: 1,
      direction: 'horizontal',
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true,
      // },
      loop: true,

      pagination: {
        el: '.events__swiper-pagination',
        clickable: true,
      },

    });
  }

  breakpointSeven.addListener(breakpointCheckerSeven);
  breakpointCheckerSeven();
}())
