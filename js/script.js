// setup
const tl = gsap.timeline({ paused: true });
let path = document.querySelector("path");
var spanBefore = CSSRulePlugin.getRule("#hamburger span:before");
var menuAfter = CSSRulePlugin.getRule(".menu-item:after");

gsap.set(spanBefore, { background: "#e4e3db" });
gsap.set(menuAfter, { opacity: 0 });
gsap.set(".menu", { visibility: "hidden" });

// toggle menu
function revealMenu() {
  revealMenuItems();

  const hamburger = document.getElementById("hamburger");
  const toggleBtn = document.getElementById("toggle-btn");

  toggleBtn.onclick = function (e) {
    hamburger.classList.toggle("active");
    tl.reversed(!tl.reversed());
  };
}

revealMenu();

// how to reveal
function revealMenuItems() {
  const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
  const power4 = "power4.inOut";
  const power2 = "power2.inOut";

  // Check if the device width is less than or equal to 900px
  if (window.matchMedia("(max-width: 900px)").matches) {
    tl.to("#hamburger", 1.25, {
      x: 0,
      y: 0,
      ease: power4,
    });

    tl.to("#hamburger span", 1, { background: "#e4e3db", ease: power2 }, "<");
    tl.to(spanBefore, 1, { background: "#e4e3db", ease: power2 }, "<");

    tl.to(
      ".btn .btn-outline",
      1.25,
      {
        x: 0,
        y: 0,
        width: "100px", // Set width to 100px for mobile devices
        height: "100px", // Set height to 100px for mobile devices
        border: "1px solid #e4e3db",
        ease: power4,
      },
      "<"
    );
  } else {
    tl.to("#hamburger", 1.25, {
      marginTop: "-5px",
      x: -40,
      y: 40,
      ease: power4,
    });

    tl.to("#hamburger span", 1, { background: "#e4e3db", ease: power2 }, "<");
    tl.to(spanBefore, 1, { background: "#e4e3db", ease: power2 }, "<");

    tl.to(
      ".btn .btn-outline",
      1.25,
      {
        x: -40,
        y: 40,
        width: "140px", // Set width to 140px for desktop devices
        height: "140px", // Set height to 140px for desktop devices
        border: "1px solid #e4e3db",
        ease: power4,
      },
      "<"
    );
  }

  tl.to(path, 0.8, { attr: { d: start }, ease: "power2.in" }, "<").to(
    path,
    0.8,
    { attr: { d: end }, ease: "power2" },
    "-=0.5"
  );

  tl.to(
    ".logo .logo-wrapper a",
    0.5,
    {
      color: "#e4e3db",
    },
    "<"
  );

  gsap.to(".menu", 0.2, { opacity: 1 }, "<");
  tl.to(".menu", 1, { visibility: "visible" });
  gsap.to(menuAfter, 0.1, { opacity: 1 });

  tl.to(
    ".menu-item > a",
    1,
    {
      top: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.5,
      },
    },
    "-=1"
  ).reverse();
}

(($) => {

  $(document).ready(function () {

    var s = $('.slider'), sWrapper = s.find('.slider-wrapper'), sItem = s.find('.slide'), btn = s.find('.slider-link'), sWidth = sItem.width(), sCount = sItem.length, slide_date = s.find('.slide-date'), slide_title = s.find('.slide-title'), slide_text = s.find('.slide-text'), slide_more = s.find('.slide-more'), slide_image = s.find('.slide-image img'), sTotalWidth = sCount * sWidth;

    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);

    var clickCount = 0;

    btn.on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('next')) {

        (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
      } else if ($(this).hasClass('prev')) {

        (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
      }
      TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) });


      //CONTENT ANIMATIONS
      var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
      var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

      TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0' });
      TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

    });

  });
})(jQuery);

$('.overlay').addClass('overlay-blue');