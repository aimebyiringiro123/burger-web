/*----------------SHOW MENU---------------*/

const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*------------menu show --------*/

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*-------------menu hidden--------------*/

if(navClose) {
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  } )
}

/*--------------------remove menu mobile--------------------*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*-------------------------add shadow header----------------*/

const shadowHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('shadow-header') 
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*------------------show scroll up----------------*/

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class//
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*--------------------scroll sections  active link------------------*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }                                                    
  })
}
window.addEventListener('scroll', scrollActive)

/*==============scroll reveal animation=============*/

const sr = scrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  // reset: true, //animations repeat
  
})
sr.reveal(`.home__container`)
sr.reveal(`.home__dish`, {delay: 500, distance: '100px',  origin: 'bottom'})
sr.reveal(`.home__burger`, {delay: 1200, distance: '100px', duration: 1500})
sr.reveal(`.home__ingradient`, {delay: 1600, interval: 100})
