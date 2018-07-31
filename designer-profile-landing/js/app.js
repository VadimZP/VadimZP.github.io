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

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('mobile-menu'),
    'padding': 256,
    'tolerance': 70
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function () {
    slideout.toggle();
    this.classList.toggle('is-active')
});

var swiper1 = new Swiper('.swiper-container.item-1', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        950: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next-item-1',
        prevEl: '.swiper-button-prev-item-1',
    },
});

var swiper2 = new Swiper('.swiper-container.item-2', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        950: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next-item-2',
        prevEl: '.swiper-button-prev-item-2',
    },
});

document.querySelectorAll('.input-with-text input').forEach(function (el) {
    el.onblur = function () {
        this.value.length ?
            this.parentElement.querySelector('p').style.top = '-25px' :
            this.parentElement.querySelector('p').style.top = ''
    }
})