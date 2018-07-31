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

// Slideout
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('slide-menu'),
    'padding': 256,
    'tolerance': 70,
    'touch': false
});

document.getElementById('menu-item').onclick = function () {
    slideout.toggle();
};

// Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 1,
    simulateTouch: false,
    allowTouchMove: false,
    breakpoints: {

        768: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelector('.swiper-slide-active').querySelector('.comment').classList.add('is-shown');
document.querySelector('.swiper-slide-active').querySelector('.avatar').classList.add('is-picked');

function showActiveHideNotActive() {
    document.querySelectorAll('.swiper-slide').forEach(function (item) {
        item.querySelector('.comment').classList.remove('is-shown');
        item.querySelector('.avatar').classList.remove('is-picked');
    })

    document.querySelector('.swiper-slide-active').querySelector('.comment').classList.add('is-shown');
    document.querySelector('.swiper-slide-active').querySelector('.avatar').classList.add('is-picked');
}

document.querySelector('.swiper-button-prev').onclick = showActiveHideNotActive;
document.querySelector('.swiper-button-next').onclick = showActiveHideNotActive;

// Sum of all <li class='plan-type'></li> width
var sum = 0;

document.querySelectorAll('.plan-type').forEach(function (item) {
    // Calculate width of <li class='plan-type'></li> element to make <ul class="plans"></ul> width dynamic
    sum += item.offsetWidth;

    if (item.classList.contains('is-active-plan')) {
        var planType = item.classList[1];
        document.querySelector('.' + planType + '_description').classList.add('is-shown');
    }
    // Show/hide plan description depending on the clicked <li class="plan-type"></li>
    item.onclick = function () {
        document.querySelectorAll('.plan-type').forEach(function (el) {
            el.classList.remove('is-active-plan');
            document.querySelectorAll('.description').forEach(function (text) {
                text.classList.remove('is-shown');
            })
        })

        item.classList.add('is-active-plan')

        var planType = item.classList[1];
        document.querySelector('.' + planType + '_description').classList.add('is-shown');
    }
})

document.querySelector('.plans').style.width = sum + 'px';

// Make all <li class="card-item"></li> clickable
document.querySelectorAll('.card-item').forEach(function (item) {
    item.onclick = function () {
        document.querySelectorAll('.card-item').forEach(function (el) {
            el.classList.remove('is-active-card');
        })
        item.classList.add('is-active-card');
    }
})