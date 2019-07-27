$(document).ready(function() {
  // Selectors

  $("button").click(function() {
    // any valid css can be used here
    $("p").hide(); // selects all <p> tags
    $("#test").hide(); // select element with id test
    $(".test").hide(); // select element with class test
    $("*").hide(); // hide all elements
    $("p.intro").hide(); // select p with intro class
    $(":button").hide(); // all button elements and type="button"
    $("tr:even").hide(); // all even tr elements
    $("ul lu:first").hide(); // first li element of first ul
    $("ul lu:first-child").hide(); // first li element of every ul
  });
});
