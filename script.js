//animation section blog 
let body = document.querySelector('.body'); // все тело документа
let mainContainer = document.querySelector('.container');
let popupBg = document.querySelector('.popup-bg'); // Фон попап окна
let popupClick = document.querySelectorAll('.blog-news1');
let popupText = document.querySelectorAll('.blog-news1-text-wrapper');

const blog = document.getElementById('blog');

const sport = document.getElementById('sport');
const legs = document.getElementById('legs');
const massotherapy = document.getElementById('massotherapy');
const wellness = document.getElementById('wellness');
const back = document.getElementById('back');
const anticellulite = document.getElementById('anticellulite');
const limphatic = document.getElementById('limphatic');
const microtherapy = document.getElementById('microtherapy');
const neckcollar = document.getElementById('neck-collar');



var lockPaddingValue = window.innerWidth - body.offsetWidth + 'px'; //подсчет толщины скролла
const wrapper = document.querySelector('.blog');
const button1 = document.querySelector('.blog-button-dark');
const blogNewsVisible = document.querySelectorAll ('.blog-news1-wrapper-visible')
const blogNews1Wrapper2 = document.querySelectorAll ('.blog-news1-wrapper2')


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.bg-opasity');
const hero = document.querySelector('.section-hero');
const navLinks = document.querySelectorAll('.nav-item'); // searches for all links with class nav-items


function toggleMenu() {
    body.classList.toggle('no-scroll')
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    header.classList.toggle('bg-opasity-visible');
}
hamburger.addEventListener('click', toggleMenu);

/* Hiding menu on click< 768px */


function closeMenu(event) {
    body.classList.remove('no-scroll')
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    header.classList.remove('bg-opasity-visible');
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu)); // click events are passed to the function


function toggleBlog() {
   wrapper.classList.toggle('blog-big');
   blogNewsVisible.forEach((Element) => Element.classList.toggle('blog-news1-wrapper-visible'));
   button1.classList.toggle('button-visible');
if (button1.textContent == 'ПОСМОТРЕТЬ ВСЁ') {
    button1.textContent = 'СКРЫТЬ';
}   else{
    button1.textContent = 'ПОСМОТРЕТЬ ВСЁ';
}

}

button1.addEventListener('click', toggleBlog);

/*start slider Portfolio*/



new Swiper('.portfolio-slider-wrapper',{
    navigation: {
        nextEl: '.portfoli-slider-left-button',
        prevEl: '.portfoli-slider-right-button'
    }, 

spaceBetween: 30,

slidesPerView: 4,

slidesPerGroup: 1,

loop: true,

autoHeight: true,

autoplay: {
    delay: 2000
},

speed: 1000,



});

/*end slider portfolio*/





/*start Popup*/

let selectedPopup;

blog.onclick = function(event) {
  let target = event.target; // где был клик?
if (target.parentNode.classList.contains('sport')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    sport.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
if (target.parentNode.classList.contains('legs')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    legs.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
if (target.parentNode.classList.contains('massotherapy')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    massotherapy.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
if (target.parentNode.classList.contains('wellness')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    wellness.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
if (target.parentNode.classList.contains('back')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    back.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
if (target.parentNode.classList.contains('anticellulite')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    anticellulite.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
if (target.parentNode.classList.contains('limphatic')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    limphatic.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
if (target.parentNode.classList.contains('microtherapy')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    microtherapy.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
if (target.parentNode.classList.contains('neck-collar')) {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    neckcollar.classList.add('active'); // И для самого окна
    document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    body.style.paddingRight = lockPaddingValue;
}
};


 document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
     if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        sport.classList.remove('active');
        legs.classList.remove('active'); 
        massotherapy.classList.remove('active');
        wellness.classList.remove('active');
        back.classList.remove('active');
        limphatic.classList.remove('active');
        microtherapy.classList.remove('active');
        neckcollar.classList.remove('active');
        setTimeout(function() {
            body.style.overflowY = "visible"; // возвращаем возможность прокрутки документа
            body.style.paddingRight = '0px'; // возвращаем нулевой отступ для body
        }, 500);
    }
});
/*end Popup*/