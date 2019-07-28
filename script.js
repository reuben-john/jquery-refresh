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

  // DOM Manipulation

  // Get Content
  $("#btn1").click(function() {
    alert("Text:" + $("#test").text()); // text content
    alert("HTML:" + $("#test").html()); // content including html markup
    alert("Val:" + $("#test").val()); // value of form field
    alert($("#w3s").attr("href")); // attribute value - eg href value
  });

  // Set content
  // To set, simply include value

  $("#btn1").click(function() {
    $("#test").text("Hello World!"); // text content
    $("#test").html("<b>Hello World!</b>"); // content including html markup
    $("#test").val("John Smith"); // value of form field
  });

  // Setting supports callback functions
  $("#btn1").click(function() {
    $("#test1").text(function(i, origText) {
      return (
        "Old text: " + origText + "New text: Hello World! (index: " + i + ")"
      );
    });
  });

  $("#btn1").click(function() {
    $("#test1").html(function(i, origText) {
      return (
        "Old html: " +
        origText +
        "New text: Hello <b>World!</b> (index: " +
        i +
        ")"
      );
    });
  });

  // attr() is used to set/change attribute values
  // can set multiple values at once
  $("button").click(function() {
    $("#w3s").attr({
      href: "https://www.reubenjohn.com/",
      title: "The title of the world"
    });
  });

  // can use callbacks as well
  $("button").click(function() {
    $("#w3s").attr("href", function(i, origValue) {
      return origValue + "/jquery/";
    });
  });

  // Add elements
  // Can add to start and end of elements

  $("p").append("Some appendted text."); // adds content to END of html elements
  $("p").prepend("Some appendted text."); // adds content to BEGINNING  of html elements

  // can add before and after elements
  $("img").after("Some text after");
  $("img").before("Some text after");

  // Can add multiple items at once
  function appendText() {
    let txt1 = "<p>Text.</p>"; // Create element with HTML
    let txt2 = $("<p></p>").text("Text."); // Create with jQuery
    let txt3 = document.createElement("p"); // Create with DOM
    txt3.innerHTML = "Text.";
    $("body").append(txt1, txt2, txt3); // Append the new elements
    $("img").after(txt1, txt2, txt3); // Insert new elements after <img>
  }

  // Remove elements and content

  $("div1").remove(); // remove selected element and child elements
  $("div2").empty(); // remove child elements of selected element

  // remove allows for filtering elements to remove
  $("p").remove(".test"); // remove all <p> elements with class="test"
  $("p").remove(".test", ".demo"); // remove all <p> elements with class="test" or class="demo"

  // Manipulating CSS

  // Adding and removing classes
  $("button").click(function() {
    // add class to selected elements
    $("h1, h2, p").addClass("blue");
    $("div").addClass("important blue"); // can add multiple classes at once

    // remove class from selected elements
    $("h1, h2, p").removeClass("blue");

    // toggle class on and off
    $("h1, h2, p").toggleClass("blue");
  });

  // CSS property
  // css sets or returns the css property
  $("p").css("background-color"); // returns current background color
  $("p").css("background-color", "green"); // sets background color to green
  $("p").css({ "background-color": "green", "font-size": "200%" }); // set multiple properties at once
});
