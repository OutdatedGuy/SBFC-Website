$(".navbar-nav li a").click(function (event) {
  var toggle = $(".navbar-collapse").hasClass("show");
  if (toggle) {
    $(".navbar-toggler").click();
  }
});

$(".navbar-nav > li > a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// function to hide the navbar when clicking on the page
$(document).on("click", function (e) {
  if ($(e.target).closest(".navbar").length === 0) {
    $(".navbar-collapse").collapse("hide");
  }
});
