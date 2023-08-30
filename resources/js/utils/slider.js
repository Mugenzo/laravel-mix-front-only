// Import Swiper and modules
import Swiper from 'swiper';
import {Pagination, Navigation, Autoplay, Scrollbar, Thumbs, EffectFade} from "swiper/modules";

Swiper.use([Pagination, Navigation, Autoplay, Scrollbar, Thumbs, EffectFade])
//
// new Swiper('.heroSwiper', {
//     slidesPerView: 1,
//     loop: true,
//     autoplay: {
//         delay: 5000
//     },
//     effect: 'fade',
//     disableOnInteraction: false,
//     fadeEffect: {
//         crossFade: true
//     },
//     allowTouchMove: false,
//     speed: 500,
//     breakpoints: {
//         768: {
//             slidesPerView: 5,
//             spaceBetween: 10,
//         }
//     },
//     navigation: {
//         prevEl: ".gallery-prev",
//         nextEl: ".gallery-next"
//     },
// })