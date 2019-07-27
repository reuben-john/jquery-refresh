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

  // events
  // most DOM events have a jquery version
  // ie, click, keyup, focus,scroll, etc
  // format is always $("selector").event(function() {
  // action goes here
  // })

  $("p").dblclick(function() {
    $(this).hide();
  });

  // to attach multiple events to an element, use on()
  // on click, mouseenter, mouseleave, do stuff
  $("p").on({
    mouseenter: function() {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function() {
      $(this).css("background-color", "lightblue");
    },
    click: function() {
      $(this).css("background-color", "yellow");
    }
  });

  // effects all have a speed and callback
  // the number is the time for the animation to take in ms
  // can also use slow or fast

  // some effects below
  $("button").click(function() {
    $("#p1").hide(1000);
    $("#p2").show("slow");
    $("#p3").toggle("fast");
    $("#p4").fadeIn("slow");
    $("#p5").fadeOut("fast");
    $("#p6").fadeToggle(5000);
    $("#p7").fadeTo(600, 0.5); // 2nd number is opacity to fade to
    $("p8").slideDown(500);
    $("p9").slideUp(200);
    $("p10").slideToggle(1500);
  });

  // Animate is used to create custom animation
  // multiple animate functions queue up internally and do one after the other
  $("button").click(function() {
    var img = $("img"); // select img for easier code
    img.animate({ left: "250px" }, 1000); // moves img left 25ox px with 1000ms speed
    img.animate({
      // multiple properties to modify
      // can use relative values
      // can use other effects, such as show, hide etc
      left: "250px",
      opacity: "0.5",
      height: "toggle",
      width: "-=150px"
    }); // speed is optional
  });

  // stop is used to stop animation or effect before finished.
  $("#stop").click(function() {
    $("#panel").stop();
  });

  // all events and effects work with callback functions
  $("button").click(function() {
    $("p").hide("slow", function() {
      alert("The paragraph is now hidden");
    });
    alert("The paragraph is still visible");
  });

  // jQuery supports event chaining
  // makes #p1 red, animates it sliding up, then sliding down
  $("#p1")
    .css("color", "red")
    .slideUp(2000)
    .slideDown(2000);
});
