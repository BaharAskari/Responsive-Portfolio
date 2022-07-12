/* -----------------show nav menu----------------- */

const navToggle = document.querySelector('#nav-toggle')
const navMenu = document.querySelector('#nav-menu')
const navClose = document.querySelector('#nav-close')

  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show__menu')
  })

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show__menu')
})

navMenu.addEventListener('onscroll', () => {
  navMenu.classList.remove('show__menu')
})

/* ----------------remove nav menu when an nav-link is clicked----------------- */

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show__menu')
}

navLink.forEach(navlink => navlink.addEventListener('click', linkAction))

/* -----------------Accordion skills----------------- */
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click' , toggleSkills)
})

/* -----------------Qualification TABs----------------- */

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () =>
  {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

/* -----------------services Modal----------------- */
// first way
// const ServicesButton = document.querySelectorAll('.services__button')
// const servicesModal = document.querySelectorAll('.services__modal')
// const modalClose = document.querySelectorAll('.services__modal-close')

// servicesModal.forEach(servicesModal => {
    
//     ServicesButton.forEach(servicesButton => {
//       servicesButton.addEventListener('click', () => {
      
//        servicesModal.classList.remove('show-modal')
//        servicesModal.classList.add('show-modal')
//     })
//   })
// })

// servicesModal.forEach(servicesModal => {
  
//   modalClose.forEach(modalClose => {
//     modalClose.addEventListener('click', () => {
//        servicesModal.classList.remove('show-modal')
//     })
//   })
// })

//second way

const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('show-modal')
}
  
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('show-modal')
    })
  })
})

/* -----------------Portfolio Swiper----------------- */
 let swiperPortfolio = new Swiper(".portfolio__container", {
   cssMode: true,
   loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

/* -----------------Testimonial Swiper----------------- */
  let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
    },
    breakpoints: {
      568: {
            slidesPerView: 2,
          }
        }
      });
/* -----------------scroll section active link----------------- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*= ' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*= ' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* -----------------change background header----------------- */
function scrollHeader() {
  const nav = document.getElementById('header')
  // when the scroll is greater then 200 viewport height, add the scroll-header class
  //to the header tag
  if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* -----------------Show Scroll UP----------------- */
function scrollUp() {
  const scrollTop = document.getElementById('scroll-up')
  if (this.scrollY >= 560)
    scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll' , scrollUp)

/* -----------------dark Light theme----------------- */
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darktheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

