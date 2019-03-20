/* ==========================
        Preloader
   ========================== */
$(window).on('load', function(){
  $('#status').fadeOut();
  $('#preloader').fadeOut();
}); 
/* ==========================
        Menu Fixed
   ========================== */
$(function(){
$(window).scroll(function(){
    if($(this).scrollTop()>50){
       $('.bg-light').addClass('sticky');
       $('.navbar-brand img').attr('src', 'img/logo_white.png');
       $(".back_to_top").fadeIn();
    }else{
        $('.bg-light').removeClass('sticky');
        $('.navbar-brand img').attr('src', 'img/logo.png');
        $(".back_to_top").fadeOut();
    }
});
});
/* ==========================
    Hover DropDown Menu
===========================*/
$(document).ready(function () {
$('.navbar-light .hover_menu').hover(function () {
        $(this).find('.hover_sm_menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.hover_sm_menu').first().stop(true, true).slideUp(105)
    });
});
/* ==========================
             Skill
===========================*/
$(function(){
  $('#progress_elements').waypoint(function(){
   $('.progress-bar').each(function(){
    $(this).animate({
      width: $(this).attr('aria-valuenow') + '%'
    }, 5000);
   });
    this.destroy();
  },{
    offset: 'bottom-in-view'
  });
});
/* =============================
    Home Owl Carousel 2
   ============================= */
$(document).ready(function(){
  $("#home_content").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:10000,
    smartSpeed:1000,
    dots:false,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
  });
});
/* ==========================
        Owl Carousel 2
   ========================== */
$(document).ready(function(){
  $("#team_members").owlCarousel({
    items:2,
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed:350,
    dots:false,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
  });
});

/* ===============================
     Services_Two Responsive Tab
   =============================== */
$(function(){
  $('#services_tab').responsiveTabs({
  animation: 'slide'
});
});
/* ============================
       Portfolio Isotope
   ============================ */
$(window).on('load', function(){
  var $grid = $('#portfolio_container').isotope({
  itemSelector: '.col-md-3',
  layoutMode: 'fitRows'
});

$('#portfolio_button').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  $('#portfolio_button').find('.active').removeClass('active');
  $(this).addClass('active');
});
});
/* ===========================
    Portfolio Magnific Popup
   =========================== */
$(function(){
  $('#portfolio_container').magnificPopup({
  delegate: 'a', 
  type: 'image',
  gallery: {
      enabled: true
    }
  
});
});
/* ==========================
        Stats Counter
   ========================== */
$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
});
/* =============================
    Testimonial Owl Carousel 2
   ============================= */
$(document).ready(function(){
  $("#testimonial_slider").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:18000,
    smartSpeed:1000,
    dots:false,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
  });
});

/* =============================
     Client Logo Owl Carousel 2
   ============================= */
$(document).ready(function(){
  $("#client_list").owlCarousel({
    items:6,
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:1000,
    smartSpeed:1000,
    dots:false,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
  });
});
/* ==========================
        Smooth Scorlling
   ========================== */
$(function(){
  $('a.smooth_scroll').click(function(e){
     e.preventDefault();
     // Get section id(#home, #about etc)
     var section_id = $(this).attr('href');
     $('html, body').animate(
      {
        scrollTop: $(section_id).offset().top - 64
      },
      1250,
      'easeInOutExpo'
      );
  });
});
/* ==========================
        WOW JS
========================== */
$(function(){
  new WOW().init();
});
$(window).on('load', function(){
  $('#home_content_inner h1').addClass('animated fadeInDown');
  $('#home_content_inner h2').addClass('animated fadeInLeft');
  $('#home_content_inner p').addClass('animated fadeInRight');
  $('#home_content_inner a').addClass('animated jackInTheBox');
});
