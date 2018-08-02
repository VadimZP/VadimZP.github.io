 // Blazy
 if (window.innerWidth <= 425) {
     var bLazy = new Blazy({
         breakpoints: [{
             width: 420,
             src: 'data-src'
         }],
         success: function (element) {
             setTimeout(function () {
                 var parent = element.parentNode;
                 parent.className = parent.className.replace(/\bloading\b/, '');
             }, 200);
         }
     });
 } else {
     document.querySelectorAll('.b-lazy').forEach(function (img) {
         img.src = img.getAttribute('data-src');
     })
 };

 // Hamburgers
 document.querySelector('.top-nav_hamburger').onclick = function () {
     this.classList.toggle('is-active')
     document.querySelector('.top-nav_menu').classList.toggle('is-shown')
 }
 document.querySelector('.bottom-nav_hamburger').onclick = function () {
     this.classList.toggle('is-active')
     document.querySelector('.bottom-nav_menu').classList.toggle('is-shown')
 }
 // Swipers
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

 // Yandex map
//  ymaps.ready(init);

//  function init() {
//      var myMap = new ymaps.Map("map", {
//          center: [55.76, 37.64],
//          zoom: 7
//      });
//  }