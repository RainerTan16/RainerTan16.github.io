(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };

  // Photo fallback: ipakita ang "RT" kung hindi ma-load ang larawan
  var photo = $('#photo');
  var fb = $('#photo-fallback');
  if (photo && fb) {
    var showFallback = function () { photo.hidden = true; fb.hidden = false; };
    photo.addEventListener('error', showFallback);
    if (photo.complete && photo.naturalWidth === 0) showFallback();
  }

  // Marquee: i-duplicate para tuloy-tuloy ang scroll
  var track = $('.track');
  if (track) {
    Array.prototype.slice.call(track.children).forEach(function (li) {
      var c = li.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    });
  }
})();