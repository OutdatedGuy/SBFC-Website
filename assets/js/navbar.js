$(".navbar-nav li a").click(function (event) {
    var toggle = $(".navbar-collapse").hasClass("show");
    if (toggle) {
      $(".navbar-toggler").click();
    }
  });

  $('.navbar-nav > li > a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});