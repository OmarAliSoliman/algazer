$(document).ready(function () {
  var currentDir = $("a").css("direction");
  // gsap.registerPlugin(Flip);

  // if ($(".wow").length) {

  // }

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }


  $(".nav-icon").on("click", function () {
    $(this).toggleClass("closed");
    $(this).parent().toggleClass("menue_open")
    $(".side_nav").toggleClass("side_nav_open");
    $(".custom_navbar .logo").toggleClass('logoremove');

  })

  




  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }


});

new WOW().init();

$(window).on('load', function () {
  $(".page__loader").addClass("splashNone");
})