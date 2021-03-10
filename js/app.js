
burgerBtnOpen.onclick = () => burgerMenu.classList.add('open');

burgerBtnClose.onclick = () => burgerMenu.classList.remove('open');



const mainPicEl = document.getElementById('mainPic');

mainPicEl.addEventListener("click", event => {
    const picEl = event.target.closest('.main-pic')
    if (picEl) {
        mainPicEl.classList.toggle('slide');
    };
}) 


const swiper = new Swiper('.card-container', {
    // freeMode: true,
    breakpoints: {
        320: {
            spaceBetween: 30,
            slideActiveClass: 'swiper-slide-active',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
        },
        768: {
            slideActiveClass: '.none', 
            allowSlideNext: false,
            allowSlidePrev: false,
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});

