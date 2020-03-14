const header = document.querySelector("header");
const siteTop = document.querySelector(".vm__site__top");

(function() {
  let waypoint = new Waypoint({
    element: header,
    offset: -siteTop.clientHeight,
    handler: function(direction) {
      if (direction == "down") {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
  });
})();

// ScrollSpy
var wpDefaults = {
  context: window,
  continuous: true,
  enabled: true,
  horizontal: false,
  offset: 0,
  triggerOnce: false
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

// SelectNav.JS

selectnav("menu");

// AOS init

AOS.init({
  once: true
});

