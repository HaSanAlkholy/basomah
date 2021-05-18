$(window).on("load", function () {
  //preloader
  $(".pre-loader").fadeOut("500", function () {
    $("body").removeClass("overflow");
    $(this).remove();
  });

  if ($(".pre-loader").length == 0) {
    $("body").removeClass("overflow");
  }

  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
    easing: "ease-in-out",
  });

  //nava toggle
  $("#nava-icon").click(function (e) {
    $("#nava").toggleClass("nava-active");
    $("html").toggleClass("overflow");
  });

  $("#nava").click(function (e) {
    if (
      e.target.id == "nava" ||
      e.target.id == "close-nava" ||
      e.target.parentNode.id == "close-nava"
    ) {
      $(this).removeClass("nava-active");
      $("html").removeClass("overflow");
    }
  });

  //search toggle
  $("#search-btn").click(function (e) {
    $("#search-form").toggleClass("search-form-active");
    $("html").toggleClass("overflow");
  });

  $("#search-form").click(function (e) {
    if (
      e.target.id == "search-form" ||
      e.target.id == "close-search" ||
      e.target.parentNode.id == "close-search"
    ) {
      $(this).removeClass("search-form-active");
      $("html").removeClass("overflow");
    }
  });

  $(".slide").on("click", function (e) {
    if (
      (e.target.classList.contains("drop") &&
        e.target.parentNode.classList.contains("slide")) ||
      e.target.classList.contains("slide")
    ) {
      e.stopPropagation();
      $(this).toggleClass("slide-active");
      $(this).children(".top-dropDown").slideToggle();
    }
  });

  function changeSlide() {
    if (window.innerWidth <= 1200) {
      $(".sm-slide").removeClass("top-setting");
      $(".sm-slide").addClass("slide");
      $(".sm-slide .top-dropDown").css("display", "none");

      // add swipers
      $(".swiper-container-here").addClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").addClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").addClass("swiper-slide");
    } else {
      $(".sm-slide").addClass("top-setting");
      $(".sm-slide").removeClass("slide");
      $(".sm-slide .top-dropDown").css("display", "flex");

      // remove swipers
      $(".swiper-container-here").removeClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").removeClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").removeClass(
        "swiper-slide"
      );
    }
  }

  changeSlide();

  window.addEventListener("resize", changeSlide);

  // add footer collabse
  function addCollapse() {
    if (window.innerWidth <= 992) {
      $(".footer-list").attr("data-toggle", "collapse");
      $(".footer-list ul").addClass("collapse");
    } else {
      $(".footer-list").attr("data-toggle", "none");
      $(".footer-list ul").removeClass("collapse");
      $(".footer-list ul").css("height", "auto");
    }
  }

  addCollapse();
  window.addEventListener("resize", addCollapse);

  $(".footer-list").on("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      $(this).toggleClass("footer-list-active");
    }
  });

  $(".footer-list ul").on("click", function (e) {
    e.stopPropagation();
  });

  var mySwiper = new Swiper("header .swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var mySwiper3 = new Swiper(".notes-swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: false,
    allowTouchMove: false,

    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
        autoplay: true,
        allowTouchMove: true,
      },

      576: {
        slidesPerView: 2,
        autoplay: true,
        allowTouchMove: true,
      },
      // when window width is >= 480px
      0: {
        slidesPerView: 1,
        autoplay: true,
        allowTouchMove: true,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  if (window.innerWidth <= 1200 && $(".notes-swiper-container").length) {
    setInterval(() => {
      mySwiper3.slideNext();
    }, 4000);
  }

  // sliders

  let sliders = document.getElementById("sliders");

  sliders.addEventListener("click", slidersChange);

  function slidersChange(e) {
    let name = e.target.dataset.name;
    if (name) {
      let sliders = document.getElementById("sliders-body").children;
      let tags = document.getElementById("sliders-head").children;
      removeActiveTag(tags);
      addActiveTag(e.target);
      removeActiveSlider(sliders);
      addActiveSlider(sliders, name);
    }
  }

  function removeActiveTag(list) {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i]);
      if (list[i].classList.contains("active")) {
        list[i].classList.remove("active");
      }
    }
  }

  function addActiveTag(e) {
    e.classList.add("active");
  }

  function removeActiveSlider(list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains("active")) {
        list[i].classList.remove("active");
      }
    }
  }

  function addActiveSlider(list, name) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].dataset.name == name) {
        list[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById("up");
    if (this.scrollY > 200) {
      up.classList.add("active-up");
    } else {
      up.classList.remove("active-up");
    }
  }
});
