
$(document).ready(function() {
    var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
    },
})
}); 
