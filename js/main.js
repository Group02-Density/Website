$(document).on("scroll", function () {
  if ($(window).scrollTop() > 30) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});

function isInViewport() {
  $(".tooltiptext").each(function () {
      var $this = $(this),
          wWidth = $(window).width(),
          offsets = this.getBoundingClientRect();

  if(offsets.x < 0) {
    this.style.transform = "translate(" + ((offsets.x * -1) + 100) + "px, 0)";
  }

  else if(offsets.x + offsets.width > wWidth) {
    this.style.transform = "translate(" + ((offsets.x * -1) - 100) + "px, 0)";
  }
  });
}

isInViewport();

// TOOLTIP
// const tooltip = document.getElementsByClassName("tooltiptext");
// let offsets = [];

// for(k in tooltip) {
//   offsets.push(tooltip[k].getBoundingClientRect());
// }

// for(j in offsets) {
//   console.log(offsets[j]);
//   if(offsets[j].x < 0) {
//     tooltip[j].style.transform = "translate(" + ((offsets[j].x * -1) + 5) + "px, 0)";
//   }
// }






/* http://mit-license.org */ function e() {
  function f(a) {
    var b = g.createElement("link");
    b.type = "image/x-icon";
    b.rel = "icon";
    b.href = a;
    a = h.getElementsByTagName("link");
    for (var c = 0; c < a.length; c++)
      /\bicon\b/i.test(a[c].getAttribute("rel")) && h.removeChild(a[c]);
    h.appendChild(b);
  }
  var g = document,
    h = g.getElementsByTagName("head")[0],
    d = null;
  return {
    defaultPause: 2e3,
    change: function (a, b) {
      clearTimeout(d);
      b && (g.title = b);
      "" !== a && f(a);
    },
    animate: function (a, b) {
      clearTimeout(d);
      a.forEach(function (a) {
        new Image().src = a;
      });
      b = b || this.defaultPause;
      var c = 0;
      f(a[c]);
      d = setTimeout(function k() {
        c = (c + 1) % a.length;
        f(a[c]);
        d = setTimeout(k, b);
      }, b);
    },
    stopAnimate: function () {
      clearTimeout(d);
    },
  };
}
"function" === typeof define && define.amd
  ? define([], e)
  : "object" === typeof module && module.exports
  ? (module.exports = e())
  : (("undefined" !== typeof self ? self : this).favicon = e());

favicon.animate(
  [
    "assets/favico/frame_1.png",
    "assets/favico/frame_2.png",
    "assets/favico/frame_3.png",
    "assets/favico/frame_4.png",
    "assets/favico/frame_5.png",
    "assets/favico/frame_6.png",
    "assets/favico/frame_7.png",
    "assets/favico/frame_8.png",
    "assets/favico/frame_9.png",
    "assets/favico/frame_10.png",
    "assets/favico/frame_11.png",
    "assets/favico/frame_12.png",
    "assets/favico/frame_13.png",
    "assets/favico/frame_14.png",
    "assets/favico/frame_15.png",
    "assets/favico/frame_16.png",
    "assets/favico/frame_17.png",
    "assets/favico/frame_18.png",
  ],
  100
);
