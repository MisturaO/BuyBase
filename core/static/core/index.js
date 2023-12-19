$(document).ready(function () {
  $("DIV#search-bar").click(function () {
    if ($("header").attr("class") === "green") {
      $("header").removeClass("green").addClass("red");
    } else {
      $("header").removeClass("red").addClass("green");
    }
  });
});
