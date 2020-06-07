const $ = (target) => {
    const elements = document.querySelectorAll(target)
    return (elements.length > 1) ? elements : document.querySelector(target)
}

document.addEventListener('DOMContentLoaded', function(){
    M.Sidenav.init($('.sidenav'), {
        edge: 'right'
    })
})

new Swiper('.best-sellers__items', {
  speed: 400,
  direction: 'horizontal',
  loop: true,
  navigation: {
    prevEl: '.fa-chevron-left',
    nextEl: '.fa-chevron-right'
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1000: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
})