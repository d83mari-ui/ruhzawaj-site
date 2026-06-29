/* ========================================================================
   RuhZawaj — Global JavaScript
   ========================================================================
   Cross-page interactive behaviour:
     - FAQ accordion (faq.html)
     - Scroll reveal animations (.reveal class)
     - Year auto-stamp in footers (#year span if present)
   Page-specific JS (oath form, register flow, video-call mockup,
   burger menu on index) remains inline in those individual files.
   ======================================================================== */

(function () {
  'use strict';

  // ------------------------------------------------------------------
  // FAQ accordion — used on faq.html
  // ------------------------------------------------------------------
  function initFaqAccordion() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var q = item.querySelector('.faq-q');
      if (!q) return;
      q.addEventListener('click', function () {
        item.classList.toggle('open');
      });
    });
  }

  // ------------------------------------------------------------------
  // Scroll-reveal — fades elements in when they enter the viewport
  // Used on most pages via the .reveal class.
  // ------------------------------------------------------------------
  function initScrollReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });
  }

  // ------------------------------------------------------------------
  // Footer year auto-stamp — drop a current year into any #year element
  // ------------------------------------------------------------------
  function initYearStamp() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------------
  // Boot when DOM is ready
  // ------------------------------------------------------------------
  function boot() {
    initFaqAccordion();
    initScrollReveal();
    initYearStamp();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
