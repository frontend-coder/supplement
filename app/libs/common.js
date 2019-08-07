$(document).ready(function() {
 $("body").niceScroll({
  horizrailenabled: false
 });

 $(function() {
  $('.navbar-toggle, nav').click(function() {
   $('.navbar-toggle').toggleClass('navbar-on');
   $('nav').fadeToggle();
   $('nav').removeClass('nav-hide');
  });
 });

 const checkStickyMenu = function() {
  if ($(window).scrollTop() > $(".block_numberfon").offset().top) {
   $(".top_line_box").addClass("tlb_active");
   $(".top_line").addClass("tlb_active");
   $(".top_logo_icon .img-responsive").addClass("tlb_image");

  } else {
   $(".top_line_box").removeClass("tlb_active");
   $(".top_line").removeClass("tlb_active");
   $(".top_logo_icon .img-responsive").removeClass("tlb_image");
  }
 }
 $(window).on("scroll", function() {
  checkStickyMenu();
 })

 // pagination on lending pages
 $("#perehod li a").mPageScroll2id({
  layout: "auto",
  offset: ".top_line",
  scrollEasing: "linear",
  highlightByNextTarget: true,
  keepHighlightUntilNext: true,
  autoScrollSpeed: true,
  scrollSpeed: 1000
 });


    /* Page Scroll to id fn call */
    $("#perehod li a").mPageScroll2id({
        layout: "auto",
        offset: ".top_line",
        autoScrollSpeed: true,
        scrollSpeed: 1000,
        highlightSelector: "#perehod li a"
    });

    /* demo functions */
    $("a[rel='next']").click(function(e) {
        e.preventDefault();
        var to = $(this).parent().parent("section").next().attr("id");
        $.mPageScroll2id("scrollTo", to);
    });













 $(function() {
  $("#phone_key").mask("+7(000)000-00-00", { placeholder: "+7(___)___-__-__", clearIfNotMatch: true });
  $("#phone_header").mask("+7(000)000-00-00", { placeholder: "+7(___)___-__-__", clearIfNotMatch: true });
 });

 $('.hc_watch').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  tClose: 'Закрыть (Esc)',
  fixedContentPos: false
 });

 //слайдер команды

 $('#comand_carousel').owlCarousel({
  loop: true,
  items: 1,
  margin: 30,
  slideSpeed: 2500,
  //	autoplay             : true,
  autoplayTimeout: 3500,
  nav: false,
  dragBeforeAnimFinish: true,
  mouseDrag: true,
  touchDrag: true,
  stagePadding: 30,
  stopOnHover: false

 });
 $('#trade_mark_carousel').owlCarousel({
  loop: true,
  items: 5,
  margin: 30,
  slideSpeed: 2500,
  //	autoplay             : true,
  autoplayTimeout: 3500,
  nav: false,
  dragBeforeAnimFinish: true,
  mouseDrag: true,
  touchDrag: true,
  stagePadding: 30,
  stopOnHover: false

 });

 $('#cor').owlCarousel({
  // center: true,
  loop: true,
  nav: true,
  dots: true,
  //  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
  responsive: {
   0: {
    items: 1,
   },
   768: {
    items: 2,
   },
   990: {
    items: 2,
   }
  },
  onInitialized: coverFlowEfx,
  onTranslate: coverFlowEfx,
 });

 function coverFlowEfx(e) {
  // if ($('.owl-dots')) {
  //   $('.owl-dots').remove();
  // }
  idx = e.item.index;
  $('.owl-item.big').removeClass('big');
  $('.owl-item.medium').removeClass('medium');
  $('.owl-item.mdright').removeClass('mdright');
  $('.owl-item.mdleft').removeClass('mdleft');
  $('.owl-item.smallRight').removeClass('smallRight');
  $('.owl-item.smallLeft').removeClass('smallLeft');
  $('.owl-item').eq(idx - 1).addClass('medium mdleft');
  $('.owl-item').eq(idx).addClass('big');
  $('.owl-item').eq(idx + 1).addClass('medium mdright');
  $('.owl-item').eq(idx + 2).addClass('smallRight');
  $('.owl-item').eq(idx - 2).addClass('smallLeft');
 }


 // всплывающие окна обратной связи позвонить мне
 $("a[href='#call-backtimer']").magnificPopup({
  mainClass: 'mfp-fade',
  removalDelay: 400,
  type: 'inline'
 });


 /*чтобы в формах был индивидуальный заголовок */
 $("a[href='#call-backtimer']").click(function() {
  var dataForm = $(this).data("form");
  var dataText = $(this).data("text");
  $(".forms-call h4").text(dataText);
  $(".forms-call [name=admin-data]").val(dataForm);
 });

 //Ajax push mesege http://api.jquery.com/jquery.ajax/

 $("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
   type: "POST",
   url: "mail.php", //Change
   data: th.serialize()
  }).done(function() {
   $(".forms-calldecor .success").addClass("active");
   setTimeout(function() {
    // Done Functions
    $(".forms-calldecor .success").removeClass("active");
    th.trigger("reset");
    $.magnificPopup.close();
   }, 3000);
  });
  return false;
 });
 //castom code



});