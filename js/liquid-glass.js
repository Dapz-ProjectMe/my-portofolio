/* Liquid glass — pil menu yang meluncur.
   Berdiri sendiri: mengikuti link ber-kelas .active yang sudah diatur script.js,
   jadi tidak perlu mengubah js/script.js. */
(function () {
  "use strict";
  var nav = document.getElementById("site-nav");
  var tog = document.querySelector(".menu-toggle");
  if (!nav) return;

  var pill = document.createElement("span");
  pill.className = "lg-pill";
  pill.setAttribute("aria-hidden", "true");
  nav.insertBefore(pill, nav.firstChild);

  var links = [].slice.call(nav.querySelectorAll("a"));
  var first = true;
  var hover = null;

  function desktop() { return !tog || getComputedStyle(tog).display === "none"; }
  function current() { return nav.querySelector("a.active"); }

  function move(a) {
    var d = desktop();
    nav.classList.toggle("lg-desktop", d);
    if (!d || !a) { pill.classList.remove("on"); return; }
    if (first) pill.style.transition = "none";
    pill.style.width = a.offsetWidth + "px";
    pill.style.transform = "translateX(" + a.offsetLeft + "px)";
    pill.classList.add("on");
    if (first) { void pill.offsetWidth; pill.style.transition = ""; first = false; }
  }

  links.forEach(function (a) {
    a.addEventListener("mouseenter", function () { hover = a; move(a); });
    a.addEventListener("focus", function () { hover = a; move(a); });
  });
  nav.addEventListener("mouseleave", function () { hover = null; move(current()); });
  nav.addEventListener("focusout", function () { hover = null; move(current()); });
  window.addEventListener("resize", function () { move(hover || current()); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { move(hover || current()); });

  if ("MutationObserver" in window) {
    new MutationObserver(function (muts) {
      if (muts.some(function (m) { return m.target !== pill; })) move(hover || current());
    }).observe(nav, { subtree: true, attributes: true, attributeFilter: ["class"] });
  }

  move(current());
})();
