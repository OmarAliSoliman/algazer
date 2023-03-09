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

  $("#nav-icon1").click(function () {
    $(this).toggleClass("open");
    $(".side_nav").toggleClass("side_nav_open");
    // $(".my_navbar").toggleClass("removeBackground");
    // $("#mySidenav").toggleClass("openBurgerMenu");
    // $(".bg-sidenavOpen").toggleClass("burgerMenubodybg");
    // $(this).closest(".customnavbar").find(".logo").fadeToggle();
  });
  

  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }
});

new WOW().init();

$(window).on("load", function () {
  $(".page__loader").addClass("splashNone");
});
