$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.nav-content,.burger-menu').toggleClass('burger');
    });
});
$(document).ready(function() {
    $('.popup-btn').click(function(event) {
        $('.popup-w').toggleClass('popup');
    });
});
// получаем кнопку и элемент, которому нужно убрать класс
const closeButton = document.querySelector('.popup-w .cross');
const popup = document.querySelector('.popup-w');

// добавляем обработчик события клика на кнопку
closeButton.addEventListener('click', function() {
  // удаляем класс "popup" у элемента
  popup.classList.remove('popup');
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        700: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});