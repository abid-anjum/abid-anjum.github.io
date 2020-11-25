(function ($) {

  "use strict";

  $(window).on('load', function () {

    /* 
   MixitUp
   ========================================================================== */
    $('#portfolio').mixItUp();

    /* 
     One Page Navigation & wow js
     ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    /*Page Loader active
      ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

    /* WOW Scroll Spy
  ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
      delay: 10,
      time: 1000
    });


    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });



  });

}(jQuery));
accessToken = 'pk.eyJ1IjoibWFnbmFyIiwiYSI6ImNqeW5wZG4xODB0b3czaXFkM2hsNWw5dW0ifQ.2ZcxmGUCMZJUh7T__nyXOg'
darkmap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken + ''

var earth;
function initialize() {
  earth = new WE.map('earth_div');
  earth.setView([46.8011, 8.2266], 3);
  WE.tileLayer(darkmap, { id: 'mapbox.dark' }).addTo(earth);

  // Start a simple rotation animation
  var before = null;
  requestAnimationFrame(function animate(now) {
    var c = earth.getPosition();
    var elapsed = before ? now - before : 0;
    before = now;
    earth.setCenter([c[0], c[1] + 0.1 * (elapsed / 30)]);
    requestAnimationFrame(animate);
  });
}


// <section class="counter-section section-padding">
// <div class="container">
//   <div class="row">
//     <!-- Counter Item -->
//     <div class="col-md-3 col-sm-6 work-counter-widget text-center">
//       <div class="counter wow fadeInDown" data-wow-delay="0.3s">
//         <div class="icon"><i class="icon-briefcase"></i></div>
//         <div class="counterUp">250</div>
//         <p>Project Working</p>
//       </div>
//     </div>
//     <!-- Counter Item -->
//     <div class="col-md-3 col-sm-6 work-counter-widget text-center">
//       <div class="counter wow fadeInDown" data-wow-delay="0.6s">
//         <div class="icon"><i class="icon-check"></i></div>
//         <div class="counterUp">950</div>
//         <p>Project Done</p>
//       </div>
//     </div>
//     <!-- Counter Item -->
//     <div class="col-md-3 col-sm-6 work-counter-widget text-center">
//       <div class="counter wow fadeInDown" data-wow-delay="0.9s">
//         <div class="icon"><i class="icon-diamond"></i></div>
//         <div class="counterUp">150</div>
//         <p>Awards Received</p>
//       </div>
//     </div>
//     <!-- Counter Item -->
//     <div class="col-md-3 col-sm-6 work-counter-widget text-center">
//       <div class="counter wow fadeInDown" data-wow-delay="1.2s">
//         <div class="icon"><i class="icon-heart"></i></div>
//         <div class="counterUp">299</div>
//         <p>Happy Clients</p>
//       </div>
//     </div>
//   </div>
// </div>
// </section>


mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc2huYWdsb2RoYSIsImEiOiJjanB4cWJ6c2YwcDdrM3hwaHJnMDE2emlwIn0.P-16drEXI3b9ssNBvxKyeA';

var map = new mapboxgl.Map({
  container: 'map',
  pitch: 60, // pitch in degrees
  bearing: -60, // bearing in degrees
  center: [73.8206266, 18.60],
  style: 'mapbox://styles/mapbox/streets-v11'
});

map.on('load', function () {
  map.loadImage('https://image.flaticon.com/icons/svg/149/149064.svg', function (error, image) {
    if (error) throw error;
    map.addImage('cat', image);
    map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [73.8206266, 18.60]
            }
          }]
        }
      },
      "layout": {
        "icon-image": "cat",
        "icon-size": 0.25
      }
    });
  });
});
