window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  shadowHeaderOnScroll()
  backToTopButtonShow()
  activeMenuCurrentSection()
}

function shadowHeaderOnScroll() {
  const header = document.getElementById('header')
  if (scrollY > 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function backToTopButtonShow() {
  const backToTopButton = document.getElementById('backToTop')
  if (scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function activeMenuCurrentSection() {
  const sections = document.querySelectorAll('main section[id]')
  const checkpoints = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoints >= sectionTop
    const checkpointEnd = checkpoints <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('.nav__item a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav__item a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

function showMenu() {
  const toggle = document.querySelectorAll('.toggle')
  const nav = document.getElementById('nav')

  for (const element of toggle) {
    element.addEventListener('click', () => {
      nav.classList.toggle('menu-active')
      document.body.classList.toggle('menu-expanded')
    })
  }

  const links = document.querySelectorAll('.nav__links')
  for (const link of links) {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-active')
      document.body.classList.remove('menu-expanded')
    })
  }
}
showMenu()

// scroll reveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  revert: true,
  duration: 600,
}).reveal(`
  #home .home__img, #home .home__texts,
  #about .about__img, #about .about__texts, 
  #services .header__section, #services .service,
  #testimonials .header__section, #testimonials .content,
  #contact .header__section, #contact .contact__list,
  #footer .brand__footer, #footer .footer__social
`)

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    784: {
      slidesPerView: 2,
    },
  },
})
