'use strict';

const $ = require('jquery');

class Accordion {

	constructor(options) {
		this.defaults = {};
		this.settings = $.extend(true, {}, this.defaults, options);
		this.setup();
	}

	setup() {
		if ($('.accordion').length) {
			this.checkEmptyContent();
			this.events();
		} else {
			return;
		}
	}

	checkEmptyContent() {
		$('.accordion').each(function () {
			const $accordion = $(this);
			const $accordionBd = $accordion.find('.accordion__bd > div');
			const $accordionIcon = $accordion.find('.accordion__icon');

			// Check if the div inside accordion__bd is empty or only contains whitespace
			const content = $accordionBd.html().trim();
			const isEmpty = content === '' || content === '<br>' || content === '<br/>';

			if (isEmpty) {
				$accordionIcon.hide();
				$accordion.addClass('is-empty');
			} else {
				$accordionIcon.show();
				$accordion.removeClass('is-empty');
			}
		});
	}

	events() {
		var acc = $(".accordion__hd");
		var abd = $(".accordion__bd");
		abd.hide();

		acc.click(function () {
			var el = $(this);
			var par = el.parents('.accordion');
			var bd = par.find('.accordion__bd');
			if (par.hasClass('is-open')) {
				bd.slideUp();
				par.removeClass('is-open');
			} else {
				bd.slideDown();
				par.addClass('is-open');
			}
		});

	}
}

module.exports = Accordion;
