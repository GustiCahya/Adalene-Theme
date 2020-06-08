const $ = (target) => {
    const elements = document.querySelectorAll(target)
    return (elements.length > 1) ? elements : document.querySelector(target)
}

document.addEventListener('DOMContentLoaded', function(){
    M.Sidenav.init($('.sidenav'), {
        edge: 'right'
    })
    M.Parallax.init($('.parallax'))
})

const navbarIntersecting = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $('.nav-extended').style.top = '-50%';
    }else{
      $('.nav-extended').style.top = '0%';
    }
  })
}, {
  threshold: .4
})
navbarIntersecting.observe($('.best-sellers'))

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
    800: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
})

new Swiper('.instagram-photos', {
  speed: 400,
  loop: true,
  direction: 'horizontal',
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  }
})
