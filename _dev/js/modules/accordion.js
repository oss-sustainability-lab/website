'use strict';

const $ = require('jquery');

class Accordion {

	constructor( options ) {
		this.defaults = {};
		this.settings = $.extend( true, {}, this.defaults, options );
		this.setup();
	}

	setup() {
		if( $('.accordion').length ) {
			this.events();
		} else {
			return;
		}
	}

	events() {
		var acc = $(".accordion__hd");
		var abd = $(".accordion__bd");
		abd.hide();

		acc.click(function(){
			var el = $(this);
			var par = el.parents('.accordion');
			var bd = par.find('.accordion__bd');
			if(par.hasClass('is-open')) {
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
