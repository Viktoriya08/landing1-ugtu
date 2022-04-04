const coursesSliders = document.querySelectorAll('.courses__slider');
coursesSliders.forEach((coursesSlider) => {

    new Swiper(coursesSlider,{
        noSwipingSelector: 'button',
        //стрелки
        navigation:{
            nextEl: coursesSlider.closest('.studies__example').querySelector('.swiper-btn-next'),
            prevEl: coursesSlider.closest('.studies__example').querySelector('.swiper-btn-prev')
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1366: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 4,
            },
        },
    });

});

new Swiper('.partners__slider',{
    //стрелки
    navigation:{
        nextEl: '.partners-btn-next',
        prevEl: '.partners-btn-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1366: {
            slidesPerView: 6,
        },
    },
});

const personalSwiper = new Swiper('.personal__swiper',{


    //стрелки
    navigation:{
        nextEl: '.personal-btn-next',
        prevEl: '.personal-btn-prev'
    },
    slidesPerView: 1.4, //кол-во слайдов
    watchOverflow: true, //если количество меньше slidesPerView, слайдер отключается
    spaceBetween: 20, //отслупы между слайдами
    breakpoints: {
        390: {
            slidesPerView: 1.7,
            spaceBetween: 15,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        590: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        650: {
            slidesPerView: 2.8,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        1366: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

new Swiper('.gallery-swiper',{
    //стрелки
    navigation:{
        nextEl: '.gallery-btn-next',
        prevEl: '.gallery-btn-prev'
    },
    slidesPerView: 'auto', //кол-во слайдов
    watchOverflow: true, //если количество меньше slidesPerView, слайдер отключается
    spaceBetween: 15, //отслупы между слайдами
    breakpoints: {
         768: {
             spaceBetween: 15,
         },
         1366: {
             spaceBetween: 20,
         },
         1920: {
             spaceBetween: 40,
         },
     },
});

//карточки персонала
 const personalNavs = document.querySelectorAll('.personal-nav');
 personalNavs.forEach((personalNav) => {

        personalNav.addEventListener('click', (event) => {
            personalNavs.forEach((personalNav) => {
                personalNav.classList.remove('active');
            });
            event.target.classList.add('active');
            
            const category = event.target.dataset.category;
            const personalCards = document.querySelectorAll('.personal-card');
            personalCards.forEach((personalCard) => {

                if (personalCard.dataset.category == category || category == 'category-all') {
                    personalCard.style.display = '';
                } else {
                    personalCard.style.display = 'none';
                }

            });

            personalSwiper.update();
        
        });

 });

 //courses__item открыть попап

const coursesItems = document.querySelectorAll('.courses__item');
const bntCross = document.querySelectorAll('.general-btn-cross');
 coursesItems.forEach((Item) =>{

    if (window.innerWidth < 1366) {
        Item.addEventListener('click', (event) => {

        Item.querySelector('.courses-popap').classList.toggle('open');
        }); 
    };
    
 });

// burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const mainNav = document.querySelector('.main-nav');
const navBox = document.querySelectorAll('.navigation__box');

const logo = document.querySelector('.nav-logo');

burger.addEventListener("click", (e) => { 

    e.target.classList.toggle('active');
    nav.classList.toggle("open");
    logo.classList.remove("open");

    navBox.forEach((box) =>{
       if(box.classList.contains("active") || nav.classList.contains("open")) {
            logo.classList.add("open");
        }
    });

    const mailIcon = document.querySelector('.mail-icon');
    mailIcon.querySelector('.navigation__box').classList.remove('active');
    mailIcon.querySelector('.burger-cross').classList.remove('active');
    mailIcon.classList.remove('active');

    const phoneIcon = document.querySelector('.phone-icon');
    phoneIcon.querySelector('.navigation__box').classList.remove('active');
    phoneIcon.querySelector('.burger-cross').classList.remove('active');
    phoneIcon.classList.remove('active');


 });

 //mail-icon
const mailIcon = document.querySelector('.mail-icon');
mailIcon.addEventListener('click', (event) => {

    if (window.innerWidth < 1366) {

        mailIcon.querySelector('.burger-cross').classList.toggle('active');//кнопка закрыть у mail-icon
        mailIcon.classList.toggle('active');
        mailIcon.querySelector('.navigation__box').classList.toggle('active');
        phoneIcon.querySelector('.navigation__box').classList.remove('active');
        phoneIcon.querySelector('.burger-cross').classList.remove('active');
        phoneIcon.classList.remove('active');
        burger.classList.remove('active');
        nav.classList.remove('open');


        
        if (mailIcon.querySelector('.navigation__box').classList.contains('active') || nav.classList.contains("open")) {
            logo.classList.add("open");
        } else {
            logo.classList.remove("open");
        }
    };


}); 
//phone-icon
const phoneIcon = document.querySelector('.phone-icon');
phoneIcon.addEventListener('click', (event) => {

    if (window.innerWidth < 1366) {
        phoneIcon.classList.toggle('active');
        phoneIcon.querySelector('.burger-cross').classList.toggle('active');//кнопка закрыть у phone-icon
        phoneIcon.querySelector('.navigation__box').classList.toggle('active');
        mailIcon.querySelector('.navigation__box').classList.remove('active');
        mailIcon.querySelector('.burger-cross').classList.remove('active');
        mailIcon.classList.remove('active');
        burger.classList.remove('active');
        nav.classList.remove('open');

        if (phoneIcon.querySelector('.navigation__box').classList.contains('active') || nav.classList.contains("open")) {
            logo.classList.add("open");
        } else {
            logo.classList.remove("open");
        }
    };


});
//скролл шапки
if(window.pageYOffset > 50){
    logo.classList.add("scrolled");
};
window.addEventListener('scroll', function() {
    logo.classList.add("scrolled");
    if(window.pageYOffset == 0){
        logo.classList.remove("scrolled");
    };
});

//скролл шапки decktop
const header = document.querySelector('.header');
if(window.pageYOffset > 50){
    header.classList.add("scrolled-deck");
};
window.addEventListener('scroll', function() {
    header.classList.add("scrolled-deck");
    if(window.pageYOffset == 0){
        header.classList.remove("scrolled-deck");
    };
});



//маска для телефона
document.addEventListener("DOMContentLoaded", function(event) {
    let phoneInputs = document.querySelectorAll('.tell-input');
   if (phoneInputs) {
       phoneInputs.forEach((phoneInput) => {
           IMask(phoneInput, {
               mask: '+{7} (000) 000-00-00'
           });
       });
   }
});


//маска для email
function validate(question,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[question].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }

// проверка на заполнение инпута
const formInputs = document.querySelectorAll('.form-elem .js-input');

formInputs.forEach((input) => {

    input.addEventListener("focusin", (event) => {
        input.parentNode.classList.add('active');
    });

    input.addEventListener("focusout", (event) => {
        if(input.value ==''){
            input.parentNode.classList.remove('active');
        };
    });

});


const popups = document.querySelectorAll('.modal-shadow')

const openPopupButtons = document.querySelectorAll('[data-open-popup]');
openPopupButtons.forEach((openPopupButton) => {
    openPopupButton.addEventListener('click', (event) => {
        const popupName = event.target.dataset.openPopup;
        popups.forEach((popup) => {
            if (popup.dataset.name == popupName) {
                popup.classList.add('active');
                document.querySelector('body').style.overflow = 'hidden';
            } else {
                popup.classList.remove('active');
            }
        });
    });
});

document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-close-popup')) {
        popups.forEach((popup) => {
            popup.classList.remove('active');
            document.querySelector('body').style.overflow = '';
        });
    }
});

/* const closePopupButtons = document.querySelectorAll('[data-close-popup]');
closePopupButtons.forEach((closePopupButton) => {
    closePopupButton.addEventListener('click', (event) => {
        popups.forEach((popup) => {
            popup.classList.remove('active');
            document.querySelector('body').style.overflow = '';
        });
    });
}); */


// показать все description__all open
const showAll = document.querySelector('.description__all');
const showHid = document.querySelector('.description__hid');

showAll.addEventListener('click', (event) => {
    document.querySelector('.description__text').classList.toggle('open');
    showAll.classList.toggle('hidden');
    showHid.classList.toggle('open');
});
showHid.addEventListener('click', (event) => {
    document.querySelector('.description__text').classList.toggle('open');
    showAll.classList.toggle('hidden');
    showHid.classList.toggle('open');
});

// popups.forEach((popup) => {

//     popup.addEventListener('click', (event) => {

//         if (event.target.classList.contains('order')) {
//             popups.forEach((popup) => {
//                 console.log('sdf');
//                 popup.classList.remove('active');
//                 document.querySelector('body').style.overflow = '';
//             });
//         }
//     });

// });;

// видео в fancybox
$('.link').fancybox({
    openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });