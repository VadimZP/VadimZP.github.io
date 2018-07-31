// hamburgers
document.querySelector('.top-nav_hamburger').onclick = function () {
    this.classList.toggle('is-active')
    document.querySelector('.top-nav_menu').classList.toggle('is-shown')
}
document.querySelector('.bottom-nav_hamburger').onclick = function () {
    this.classList.toggle('is-active')
    document.querySelector('.bottom-nav_menu').classList.toggle('is-shown')
}
// swipers
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
})