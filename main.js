$(document).ready(function(){
    $('.slider__items').slick({
    arrows: true, // стрелки
    dots: false, // точки
    adaptiveHeight:true, // адавтивная высота
    slidesToShow: 3, // количество слайдов, которые показываются
    slidesToScroll: 3, // количество слайдов, которые пролистываются
    speed: 1000, // скорость пролистывание
    easing:'ease', // функция пролистывание
    infinite: true, // отвечает за бесконечности слайдов
    // initialSlide:1, // указывает первый слайд
    autoplay: false, // автоматическая прокрутка
    autoplaySpeed:1500, // скорость автоматической прокрутки
    
        // для автоматической прокрутки есть такие параметры
        pauseOnFocus: true,
        pauseOnHover:true,
        pauseOnDotHover:true,
    
    draggable: false, // прокрутка с помощью прокрутки

        swipe: true, // прокрутка по тачскринам
        touchThreshold: 5, // усилие прокрутки по тачкринам
        touchMove: true, // передвижение пальцами 

    waitForAnimate: true, // дает возможность быстро менять слайды
    
    centerMode:false, // главный(первый) слайд становится центральным
    variableWidth:false, // вне зависимости от ширины адавтивный (скрыватся другие слайды которые не влезают в ширину)

    rows:1, // можно указать количество рядов 
    slidesPerRow:1,
    
    vertical:false, // вертикальный слайдер
    verticalSwiping:false, // свайпать слайдер вертикально

    //fade:false,

    // asNavFor:"название_другого_слайдера" связывает слайды
    
        //appendArrows:$(".класс_дива"); // можно перемистить стрелки в другой контейнер
        // appendDots:$("");

    // 
    responsive: [
      {
        breakpoint: 974,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
          
        }
      },
      {
        breakpoint: 626,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.burger').click(function(event){
    $('.burger,.menu,.header__top').toggleClass('active');
    $('body').toggleClass('lock');
  });
})


// const burger = document.querySelector('.burger');

// burger.addEventListener('click', function(){

// })

