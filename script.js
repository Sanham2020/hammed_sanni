var typed2 = new Typed('.text', {
    strings: [' Civil Engineer--',' Developer--',' Graphics Designer--', ' Freelancer--'],
    typeSpeed:100,
    backSpeed:100,
    cursorChar:'',
    loop:true,
});

var typed2 = new Typed('.hero_text', {
    strings: [' --Civil Engineer--',' --Full Stack Developer--',' --Graphics Designer--', ' --Freelancer--'],
    typeSpeed:100,
    backSpeed:100,
    cursorChar:'',
    loop:true,
});


var swiper = new Swiper ('.serviceSwiper', {
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView:3,
            spaceBetween:30,
        },
        900:{
            slidesPerView:2,
            spaceBetween:30,
        },
        500:{
            slidesPerView:1,
            spaceBetween:30,
        }
    },
});
var swiper = new Swiper ('.testimonialSwiper', {
    slidesPerView:2,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView:2,
            spaceBetween:30,
        },
        900:{
            slidesPerView:2,
            spaceBetween:30,
        },
        500:{
            slidesPerView:1,
            spaceBetween:30,
        }
    },
});


let bar = document.querySelector('.bars');
let side_bar = document.querySelector('.side_bar');

bar.addEventListener('click',() =>{
    side_bar.classList.toggle('show_side_bar')
});





