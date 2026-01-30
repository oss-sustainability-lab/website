'use strict';

const $ = require('jquery');

class Header {

	constructor(options) {

		var el = $('#site-header'),
			w = $(window),
			b = $('body'),
			d = document;

		var lastScrollTop = 0;

		var threshold = 120;

		if ($('.block-video-hero').length) {
			threshold = 820;
		}

		d.addEventListener("scroll", function () {
			if (w.scrollTop() >= threshold) {
				b.addClass('is-sticky');
			} else {
				b.removeClass('is-sticky');
			}

			var st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				if (b.hasClass('scrolling-up')) {
					b.removeClass('scrolling-up')
				}
			} else {
				if (!b.hasClass('scrolling-up')) {
					b.addClass('scrolling-up');
				}
			}
			lastScrollTop = st <= 0 ? 0 : st;
		}, false);

		$(document).ready(function () {
			if ($(document).scrollTop() >= threshold) {
				b.addClass('is-sticky');
			}
		});


		$('.js-menu-trigger').click(function (e) {
			e.preventDefault();
			if ($('body').hasClass('menu-is-open')) {
				$('body').removeClass('menu-is-open');
			} else {
				$('body').addClass('menu-is-open');
			}
		});

		// $('.navigation-drawer a').click(function(){
		// 	$('body').removeClass('menu-is-open');
		// });
	}

}

module.exports = Header;
