const barBtn = document.querySelector('.nav__bar-btn');
const navMobile =document.querySelector('.nav__mobile')
const closeBtn = document.querySelector('.nav__mobile-close')
const overlay =document.querySelector('.nav__overlay')

// handle open/close nav mobile
function navToggle() {
    
    if(!(navMobile.classList.contains('open')) && !(overlay.classList.contains('open')))
    {
        navMobile.classList.add('open');
        overlay.classList.add('open');

    }
    else
    {
        navMobile.classList.remove('open');
        overlay.classList.remove('open');

       

    }
    
}

// open / close nav mobile
barBtn.addEventListener('click',navToggle)
closeBtn.addEventListener('click',navToggle)

// handle close nav when click out
function clickOut() {

     navMobile.classList.remove('open');
    overlay.classList.remove('open');
}
// close when click out 
overlay.addEventListener('click',clickOut)


