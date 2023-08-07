const burgerBtn = document.querySelector('#hamburger-btn')
// const mobileNavModal = document.querySelector('#mobile-nav-modal')
const mobileNavMenu = document.querySelector('#mobile-nav-menu')

let swiperIsActive = false
let swiperServices = null

const swiperUpdates = new Swiper('.swiper-updates', {
  grabCursor: true,
  rewind: true,

  navigation: {
    enabled: false,
    nextEl: '.swiper-updates-button-next',
    prevEl: '.swiper-updates-button-prev',
  },

  pagination: {
    enabled: true,
    el: '.swiper-pagination',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
      navigation: {
        enabled: true,
      },
      pagination: {
        enabled: false,
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
      navigation: {
        enabled: true,
      },
      pagination: {
        enabled: false,
      },
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 0,
      navigation: {
        enabled: true,
      },
      pagination: {
        enabled: false,
      },
    },
  },
})

const swiperRecommendations = new Swiper('.swiper-recommendations', {
  grabCursor: true,
  rewind: true,
  spaceBetween: 20,

  navigation: {
    enabled: false,
    nextEl: '.swiper-recommendations-button-next',
    prevEl: '.swiper-recommendations-button-prev',
  },

  pagination: {
    enabled: true,
    el: '.swiper-pagination',
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
      navigation: {
        enabled: true,
      },
      pagination: {
        enabled: false,
      },
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 0,
      navigation: {
        enabled: true,
      },
      pagination: {
        enabled: false,
      },
    },
  },
})

const swiperServiseToggle = () => {
  if (window.innerWidth < 576 && !swiperIsActive) {
    swiperIsActive = true
    swiperServices = new Swiper('.swiper-services', {
      grabCursor: true,
      rewind: true,
      spaceBetween: 20,

      pagination: {
        enabled: true,
        el: '.swiper-pagination',
      },
    })
  } else if (window.innerWidth > 576 && swiperIsActive) {
    swiperIsActive = false
    swiperServices.destroy()
  }
}
swiperServiseToggle()

burgerBtn.addEventListener('click', () => {
  mobileNavMenu.classList.toggle('hidden')
  burgerBtn.classList.toggle('hamburger-toggle')
})

window.addEventListener('resize', swiperServiseToggle)
