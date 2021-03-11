
burgerBtnOpen.onclick = () => burgerMenu.classList.add('open');

burgerBtnClose.onclick = () => burgerMenu.classList.remove('open');

mainPic.onclick = () => mainPic.classList.toggle('slide');


AOS.init();


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