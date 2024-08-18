// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function() {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000,
        function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      );
    }
  }
});

// Photo Filter
var activeFilter = "all";

$(".ww-filter-button").on("click", function(e) {
  // remove btn-primary from all buttons first
  $(".ww-filter-button").removeClass("btn-primary");
  $(".ww-filter-button").addClass("btn-outline-primary");

  // add btn-primary to active button
  var button = $(this);
  button.removeClass("btn-outline-primary");
  button.addClass("btn-primary");
  filterItems(button.data("filter"));
  e.preventDefault();
});

function filterItems(filter) {
  if (filter === activeFilter) {
    return;
  }

  activeFilter = filter;
  $(".ww-gallery .card").each(function() {
    var card = $(this);
    var groups = card.data("groups");
    var show = false;
    if (filter === "all") {
      show = true;
    } else {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i] === filter) {
          show = true;
        }
      }
    }
    // hide everything first
    card.fadeOut(400);
    setTimeout(function() {
      if (show && !card.is(":visible")) {
        card.fadeIn(400);
      }
    }, 500);
  });
}

// Light Box
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

document.addEventListener("DOMContentLoaded", function() {
  // Initialize Animate on Scroll library
  AOS.init();

  // Smooth scroll for links with hashes
  $("a.smooth-scroll").click(function(event) {
    // Smooth scroll logic here
  });
/*
  // Intersection Observer for Autoplaying Video
  var invitationVideo = document.getElementById("invitationVideo");

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        invitationVideo.play();
      } else {
        invitationVideo.pause();
      }
    });
  });

  observer.observe(invitationVideo);
*/
});



document.addEventListener("DOMContentLoaded", function() {
  // Set the date we're counting down to
  var weddingDate = new Date("August 28, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  var countdownFunction = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the wedding date
    var distance = weddingDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is finished, write some text
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "The Wedding Has Begun!";
    }
  }, 1000);
});

$(document).ready(function() {
  // Initialize Animate on Scroll library
  AOS.init();

  // Smooth scroll for links with hashes
  $("a.smooth-scroll").click(function(event) {
    // Smooth scroll logic here
  });

  // Photo Filter Logic
  var activeFilter = "wedding-invitation"; // Set the default active filter

  // Function to filter items based on the active filter
  function filterItems(filter) {
    if (filter === activeFilter) {
      return;
    }
  
    activeFilter = filter;
  
    $(".ww-gallery .card").each(function() {
      var card = $(this);
      var groups = card.data("groups");
      var show = false;
      
      if (filter === "all") {
        show = true;
      } else {
        for (var i = 0; i < groups.length; i++) {
          if (groups[i] === filter) {
            show = true;
          }
        }
      }
  
      if (show) {
        card.removeClass("fade-out").addClass("fade-in").fadeIn(400);
      } else {
        card.removeClass("fade-in").addClass("fade-out").fadeOut(400);
      }
    });
  }

  // Set the default active button and filter the items
  filterItems(activeFilter);

  // Handle click events for filter buttons
  $(".ww-filter-button").on("click", function(e) {
    $(".ww-filter-button").removeClass("btn-primary").addClass("btn-outline-primary");
    var button = $(this);
    button.removeClass("btn-outline-primary").addClass("btn-primary");
    activeFilter = button.data("filter");
    filterItems(activeFilter);
    e.preventDefault();
  });
});


$(document).ready(function() {
  // Initialize the carousel with custom settings
  $('#wishes-carousel').carousel({
    interval: 3000, // Change slide every 5 seconds
    pause: false,    // Do not pause the cycling on hover
    ride: 'carousel' // Ensure continuous cycling
  });

  // Progress bar functionality
  var progressBar = $('.carousel-indicators li');
  var carouselInterval = 3000; // Same as the interval for the carousel

  function startProgressBar() {
    progressBar.removeClass('active');
    progressBar.eq(0).addClass('active');
    var width = 0;
    var id = setInterval(frame, carouselInterval / 100);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        progressBar.css('width', width + '%');
      }
    }
  }

  startProgressBar();

  $('#wishes-carousel').on('slide.bs.carousel', function () {
    progressBar.css('width', '0%');
    startProgressBar();
  });
});
