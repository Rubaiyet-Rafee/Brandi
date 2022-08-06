/* ======= Sticky Header Menu Start ======== */
$(document).on("scroll", function () {
  if ($(this).scrollTop() > 25) {
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }
});
/* ======= Sticky Header Menu End ======== */

/* ======= Scroll Top Area Start ======== */
var scrolltotop = {
  setting: {
    startline: 100,
    scrollto: 0,
    scrollduration: 1e3,
    fadeduration: [500, 100],
  },
  controlHTML: '<img src="/assets/images/scroll-img.png"/>',
  controlattrs: { offsetx: 5, offsety: 5 },
  anchorkeyword: "#top",
  state: { isvisible: !1, shouldvisible: !1 },
  scrollup: function () {
    this.cssfixedsupport || this.$control.css({ opacity: 0 });
    var t = isNaN(this.setting.scrollto)
      ? this.setting.scrollto
      : parseInt(this.setting.scrollto);
    (t =
      "string" == typeof t && 1 == jQuery("#" + t).length
        ? jQuery("#" + t).offset().top
        : 0),
      this.$body.animate({ scrollTop: t }, this.setting.scrollduration);
  },
  keepfixed: function () {
    var t = jQuery(window),
      o =
        t.scrollLeft() +
        t.width() -
        this.$control.width() -
        this.controlattrs.offsetx,
      s =
        t.scrollTop() +
        t.height() -
        this.$control.height() -
        this.controlattrs.offsety;
    this.$control.css({ left: o + "px", top: s + "px" });
  },
  togglecontrol: function () {
    var t = jQuery(window).scrollTop();
    this.cssfixedsupport || this.keepfixed(),
      (this.state.shouldvisible = t >= this.setting.startline ? !0 : !1),
      this.state.shouldvisible && !this.state.isvisible
        ? (this.$control
            .stop()
            .animate({ opacity: 1 }, this.setting.fadeduration[0]),
          (this.state.isvisible = !0))
        : 0 == this.state.shouldvisible &&
          this.state.isvisible &&
          (this.$control
            .stop()
            .animate({ opacity: 0 }, this.setting.fadeduration[1]),
          (this.state.isvisible = !1));
  },
  init: function () {
    jQuery(document).ready(function (t) {
      var o = scrolltotop,
        s = document.all;
      (o.cssfixedsupport =
        !s ||
        (s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest)),
        (o.$body = t(
          window.opera
            ? "CSS1Compat" == document.compatMode
              ? "html"
              : "body"
            : "html,body"
        )),
        (o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>")
          .css({
            position: o.cssfixedsupport ? "fixed" : "absolute",
            bottom: o.controlattrs.offsety,
            right: o.controlattrs.offsetx,
            opacity: 0,
            cursor: "pointer",
          })
          .attr({ title: "Scroll to Top" })
          .click(function () {
            return o.scrollup(), !1;
          })
          .appendTo("body")),
        document.all &&
          !window.XMLHttpRequest &&
          "" != o.$control.text() &&
          o.$control.css({ width: o.$control.width() }),
        o.togglecontrol(),
        t('a[href="' + o.anchorkeyword + '"]').click(function () {
          return o.scrollup(), !1;
        }),
        t(window).bind("scroll resize", function (t) {
          o.togglecontrol();
        });
    });
  },
};
scrolltotop.init();
/* ======= Scroll Top Area End ======== */

$(document).ready(function () {
  /* Banner Slider Start */
  $(".banner-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    arrows: false,
    loop: true,
  });
  /* Banner Slider End */

  /* Banner Slider Start */
  $('#nav').onePageNav({
    currentClass: 'active'
  });
  /* Banner Slider End */

  /* Counter Up Js Start */
  $(".counter").counterUp({
    delay: 10,
    time: 1300,
  });
  /* Counter Up Js End */

  /* Wow js Start */
  var wow = new WOW ({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       120,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
    }
  );
  wow.init();
  /* Wow js End */
  
  /* Isotop js Start */
  var $grid = $('.portfolio-items').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

  // filter items on button active
  $('.portfolio-menu li').on('click', function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
  });
  /* Isotop js End */

  /* Fancybox js End */
  $(function() {
    $('.fancybox').fancybox();
  });
  /* Fancybox js End */

  
});


