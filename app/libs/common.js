/* eslint-disable no-new */
$(document).ready(() => {
  $(() => {
    $('.navbar-toggle, nav').click(() => {
      $('.navbar-toggle').toggleClass('navbar-on');
      $('nav').fadeToggle();
      $('nav').removeClass('nav-hide');
    });
  });

  const checkStickyMenu = function () {
    if ($(window).scrollTop() > $('.block_numberfon').offset().top) {
      $('.top_line_box').addClass('tlb_active');
      $('.top_line').addClass('tlb_active');
      $('.top_logo_icon .img-responsive').addClass('tlb_image');
    } else {
      $('.top_line_box').removeClass('tlb_active');
      $('.top_line').removeClass('tlb_active');
      $('.top_logo_icon .img-responsive').removeClass('tlb_image');
    }
  };
  $(window).on('scroll', () => {
    checkStickyMenu();
  });

  /* Page Scroll to id fn call */
  $('#perehod li a').mPageScroll2id({
    layout: 'auto',
    offset: '.top_line',
    autoScrollSpeed: true,
    scrollSpeed: 1000,
    highlightSelector: '#perehod li a',
  });

  /* demo functions */
  $("a[rel='next']").click(function (e) {
    e.preventDefault();
    const to = $(this).parent().parent('section').next()
      .attr('id');
    $.mPageScroll2id('scrollTo', to);
  });

  $(() => {
    $('#phone_key').mask('+7(000)000-00-00', { placeholder: '+7(___)___-__-__', clearIfNotMatch: true });
    $('#phone_header').mask('+7(000)000-00-00', { placeholder: '+7(___)___-__-__', clearIfNotMatch: true });
  });

  // слайдер команды

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
    stopOnHover: false,
  });
  $('#trade_mark_carousel').owlCarousel({
    loop: true,
    margin: 30,
    slideSpeed: 2500,
    //	autoplay             : true,
    autoplayTimeout: 3500,
    nav: false,
    dragBeforeAnimFinish: true,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 30,
    stopOnHover: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      961: {
        items: 5,
      },
    },
  });

  $('#cor').owlCarousel({
    // center: true,
    loop: true,
    nav: true,
    dots: true,
    //  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
      320: {
        items: 1,
      },
      961: {
        items: 2,
      },
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
    $('.owl-item')
      .eq(idx - 1)
      .addClass('medium mdleft');
    $('.owl-item').eq(idx).addClass('big');
    $('.owl-item')
      .eq(idx + 1)
      .addClass('medium mdright');
    $('.owl-item')
      .eq(idx + 2)
      .addClass('smallRight');
    $('.owl-item')
      .eq(idx - 2)
      .addClass('smallLeft');
  }

  $('.hc_watch').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    tClose: 'Закрыть (Esc)',
    fixedContentPos: false,
  });

  // всплывающие окна обратной связи позвонить мне
  $("a[href='#call-backtimer']").magnificPopup({
    mainClass: 'mfp-fade',
    removalDelay: 400,
    type: 'inline',
    fixedContentPos: false,
  });

  /* чтобы в формах был индивидуальный заголовок */
  $("a[href='#call-backtimer']").click(function () {
    const dataForm = $(this).data('form');
    const dataYandex = $(this).data('yandex');
    const dataTitle = $(this).data('title');
    $('form.form-callback').attr('onsubmit', dataYandex);
    $('.form-callback [name=admin-data]').val(dataForm);
    $('.get__title').text(dataTitle);
  });

  new window.JustValidate('#form_podpiska', {
    rules: {
      email: {
        required: true,
      },
      checkbox: {
        required: true,
      },
    },
    messages: {
      email: {
        required: 'Поле обязательно к заполнению!',
      },
      checkbox: {
        required: 'Поле обязателено к заполнению!',
      },
    },
    focusWrongField: true,
    submitHandler(form, values, ajax) {
      console.log(values);
      ajax({
        url: 'mail.php',
        method: 'POST',
        data: values,
        async: true,
        callback: (response) => {
          const MassPopup = "<div id='contact-form__send'><div class='success'><p>Спасибо за заявку</p></div></div>";
          $('button.popup_submit').attr('disabled');
          $('.forms').html(MassPopup);
          setTimeout(() => {
            form.reset();
            $('.forms').html(' ');
            // $('#ontact-form__send').removeClass('success');
            $.magnificPopup.close();
          }, 2000);
          //       console.log(response);
        },
      });
    },
    invalidFormCallback(errors) {
      // console.log(errors);
    },
  });
  new window.JustValidate('.form-callback', {
    rules: {
      famely: {
        required: true,
        minLength: 5,
        maxLength: 38,
      },
      tel: {
        required: true,
      },
      checkbox: {
        required: true,
      },
    },
    messages: {
      famely: {
        required: 'Поле обязально к заполнению!',
        minLength: 'Введите не менее 5 символов',
        maxLength: 'Введите не более 38 символов',
      },
      tel: {
        required: 'Поле обязательно к заполнению!',
      },
      checkbox: {
        required: 'Поле обязателено к заполнению!',
      },
    },
    focusWrongField: true,
    submitHandler(form, values, ajax) {
      console.log(values);
      ajax({
        url: 'mail.php',
        method: 'POST',
        data: values,
        async: true,
        callback: (response) => {
          const MassPopup = "<div id='contact-form__send'><div class='success'><p>Спасибо за заявку</p></div></div>";
          $('button.popup_submit').attr('disabled');
          $('.forms').html(MassPopup);
          setTimeout(() => {
            form.reset();
            $('.forms').html(' ');
            // $('#ontact-form__send').removeClass('success');
            $.magnificPopup.close();
          }, 2000);
          //       console.log(response);
        },
      });
    },
    invalidFormCallback(errors) {
      // console.log(errors);
    },
  });

  // 2 форма

  new window.JustValidate('#full_contactform', {
    rules: {
      famely: {
        required: true,
        minLength: 5,
        maxLength: 38,
      },
      theme: {
        required: true,
        minLength: 15,
        maxLength: 38,
      },
      texted: {
        required: true,
        minLength: 15,
        maxLength: 300,
      },
      tel: {
        required: true,
      },
      checkbox: {
        required: true,
      },
    },
    messages: {
      famely: {
        required: 'Поле обязально к заполнению!',
        minLength: 'Введите не менее 5 символов',
        maxLength: 'Введите не более 38 символов',
      },
      theme: {
        required: 'Поле обязально к заполнению!',
        minLength: 'Введите не менее 5 символов',
        maxLength: 'Введите не более 38 символов',
      },
      texted: {
        required: 'Поле обязально к заполнению!',
        minLength: 'Введите не менее 15 символов',
        maxLength: 'Введите не более 300 символов',
      },
      tel: {
        required: 'Поле обязательно к заполнению',
      },
      checkbox: {
        required: 'Поле обязателено к заполнению',
      },
    },
    focusWrongField: true,
    submitHandler(form, values, ajax) {
      console.log(values);
      ajax({
        url: 'mailbig.php',
        method: 'POST',
        data: values,
        async: true,
        callback: (response) => {
          const MassPopup = "<div id='contact-form__send'><div class='success'><p>Спасибо за заявку</p></div></div>";
          $('.forms').html(MassPopup);
          setTimeout(() => {
            form.reset();
            $('.forms').html(' ');
            // $('#ontact-form__send').removeClass('success');
            $.magnificPopup.close();
          }, 2000);
          //       console.log(response);
        },
      });
    },
    invalidFormCallback(errors) {
      // console.log(errors);
    },
  });
  // castom code
});
