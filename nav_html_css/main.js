const barBtn = document.querySelector('.nav__bar-btn');
const navMobile =document.querySelector('.nav__mobile')
const closeBtn = document.querySelector('.nav__mobile-close')
const overlay =document.querySelector('.nav__overlay.open')
function navOpen() {
    navMobile.classList.add('open');
    overlay.classList.add('open');

    
}
function navClose() {
   
        navMobile.classList.remove('open');
    
}
// open nav mobile
barBtn.addEventListener('click',navOpen)
closeBtn.addEventListener('click',navClose)


console.log(barBtn)