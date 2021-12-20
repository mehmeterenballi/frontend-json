// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    lazy: true,
    grabCursor: true,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        648: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            // roundLengths: true,
        },
        1091: {
            slidesPerView: 3,
            spaceBetween: 30,
            // roundLengths: true,
        },
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});