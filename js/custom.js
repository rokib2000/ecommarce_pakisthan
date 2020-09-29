// ///////////////// fixed menu on scroll for desktop
// if ($(window).width() > 992) {
//   $(window).scroll(function(){  
//      if ($(this).scrollTop() > 40) {
//         $('#navbar_top').addClass("fixed-top");
//         // add padding top to show content behind navbar
//         $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
//       }else{
//         $('#navbar_top').removeClass("fixed-top");
//          // remove padding top from body
//         $('body').css('padding-top', '0');
//         $('.nav_bar').css('margin-top', '0');
//       }   
//   });
// } // end if


///////////////// fixed menu on scroll for desktop
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 50) {
    $('#navbar_top').addClass('fixed-top');
    $('#navbar_top').css({ "margin-top": "0" });
  } else {
    $('#navbar_top').removeClass('fixed-top');
    $('#navbar_top').css({ "margin-top": "120px" });
  }
});




// site navbar dropdown

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}








// card slider

const nextIcon = '<img src="./img/right-arrow.svg" alt="right">';
const prevIcon = '<img src="./img/left-arrow.svg" alt="left" >';

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: [
        prevIcon,
        nextIcon
      ],
      autoplay:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })





// price range slider


$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );


  // Swiper cat level1 page slider





  var swiper = new Swiper('.swiper-container', {
    
    // spaceBetween: 30,
        // centeredSlides: true,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },

    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });





  // Swiper product picture view

