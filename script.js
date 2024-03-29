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

  // Dimension methods
  $("p").width(); // sets or returns width of element (excludes padding, border and margin)
  $("p").height(); // sets or returns height of element (excludes padding, border and margin)
  $("p").innerWidth(); // sets or returns width of element (includes padding)
  $("p").innerHeight(); // sets or returns height of element (includes padding)
  $("p").outerWidth(); // sets or returns width of element (includes padding and border)
  $("p").outerHeight(); // sets or returns height of element (includes padding and border)
  $("p").outerWidth(true); // sets or returns width of element (includes padding, border, and margin)
  $("p").outerHeight(true); // sets or returns height of element (includes padding, border, and margin)

  $("button").click(function() {
    var txt = "";
    txt += "Width: " + $("#div1").width() + "</br>";
    txt += "Height: " + $("#div1").height();
    txt += "Inner width: " + $("#div1").innerWidth() + "</br>";
    txt += "Inner height: " + $("#div1").innerHeight();
    txt += "Outer width: " + $("#div1").outerWidth() + "</br>";
    txt += "Outer height: " + $("#div1").outerHeight();
    txt += "Outer width (+margin): " + $("#div1").outerWidth(true) + "</br>";
    txt += "Outer height (+margin): " + $("#div1").outerHeight(true);
    $("#div1").html(txt);
  });

  $("button").click(function() {
    $("#div1")
      .width(500)
      .height(500);
  });

  // Traversing the DOM
  // An ancestor is a parent, grandparent, great-grandparent, and so on.
  // A descendant is a child, grandchild, great-grandchild, and so on.
  // Siblings share the same parent.

  // Traversing Up the DOM Tree
  $("span").parent(); // returns direct parent element of each span
  $("span").parents(); // returns all ancestor elements of selected element up to html
  $("span").parents("ul"); // returns all ancestors that are ul elements
  $("span").parentsUntil("div"); // reutrns all ancestor elements between a span and a div

  // Traversing Down the DOM tree
  $("div").children(); // returns all elements that are direct children of each div
  $("div").children("p.first"); // returns all p elements with class="first" that are direct children of div
  $("div").find("span"); // returns all span elements that are descendents of div
  $("div").find("*"); // returns all descendents of div

  // Traversing Sideways in the DOM Tree
  $("h2").siblings(); // returns all sibling elements of h2
  $("h2").siblings("p"); // returns all sibling elements of h2 that are p element
  $("h2").next(); // returns next sibling element of h2 (top to bottom)
  $("h2").nextAll(); // returns all next sibling element of h2 (top to bottom)
  $("h2").nextUntil("h6"); // returns all sibling elements between h2 and h6
  $("h2").prev(); // returns prev sibling element of h2 (top to bottom)
  $("h2").prevAll(); // returns all prev sibling element of h2 (top to bottom)
  $("h2").prevUntil("h6"); // returns all sibling elements between h6 and h2

  // Filtering

  $("div").first(); // returns first div element
  $("div").last(); // returns last div element
  $("div").eq(1); // returns div element with specific index number
  $("p").filter(".intro"); // returns all p elemens that match class="intro"
  $("p").not(".intro"); // returns all p elemens that do not match class="intro"

  // AJAX -  Asynchronous JavaScript and XML
  // Fetch data from server, then render it into web page without a refresh
  // uses javascript to display content

  // load()
  // loads data from another location and adds it to the element
  // $(selector).load(URL,data,callback);
  // The required URL parameter specifies the URL you wish to load.
  // The optional data parameter specifies a set of querystring key/value pairs to send along with the request.
  // The optional callback parameter is the name of a function to be executed after the load() method is completed.

  $("#div1").load("demo_text.txt"); // loads content of txt into div1
  $("#div1").load("demo_text.txt #p1"); // loads content matching #p1 from txt into div1

  // callback can have different parameters
  // responseTxt - contains the resulting content if the call succeeds
  // statusTxt - contains the status of the call
  // xhr - contains the XMLHttpRequest object

  $("button").click(function() {
    $("#div1").load("demo_text.txt", function(responseTxt, statusTxt, xhr) {
      if (statusTxt == "success") {
        alert("External content loaded successfully!");
      }
      if (statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }
    });
  });
});
