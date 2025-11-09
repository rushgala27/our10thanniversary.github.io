//LEFT SLIDER

var swiper=new Swiper('.leftSlider',{
    slidesPerView:1.3,
    spaceBetween:10,
    loop:true,
    autoplay:{
        delay:1500,
    },
    speed:2000,
    direction:'vertical',
    breakpoints:{
        900:{
            slidesPerView:1.55,
        },
        500:{
            slidesPerView:2.6,
        }
    },
});

//CENTER SLIDER
var swiper=new Swiper('.centerSlider',{
    slidesPerView:2.1,
    spaceBetween:10,
    loop:true,
    autoplay:{
        delay:2000,
    },
    speed:1800,
    direction:'vertical',
    breakpoints:{
        1200:{
            slidesPerView:2.2,
        },
        900:{
            slidesPerView:2.25,
        },
        500:{
            slidesPerView:1.9,
        }
    },
});

//RIGHT SLIDER
var swiper=new Swiper('.rightSlider',{
    slidesPerView:1.3,
    spaceBetween:10,
    loop:true,
    autoplay:{
        delay:1500,
    },
    speed:2000,
    direction:'vertical',
    breakpoints:{
        900:{
            slidesPerView:1.55,
        },
        500:{
            slidesPerView:2.6,
        }
    },
});