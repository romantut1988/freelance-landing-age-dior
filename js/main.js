const swiperTop = new Swiper('.top__swiper', {
    effect: 'fade',
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    freeMode: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

