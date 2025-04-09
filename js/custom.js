
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
 //if its not mobile then start script otherwise turn it off (just place the script    under this comment
 $( document ).ready(function() {
    //var wow = new WOW();
    //wow.init();
})
}




$(document).ready(function(){
  var wow = new WOW();
  wow.init();

  $(function () {
    $('.custom input[type="file"]').on("change", function() {
      $('.custom .file-text').text($(this).val());
    });
  });

  $('.slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
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

});