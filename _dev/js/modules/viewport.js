'use strict';

const $ = require('jquery');
//const tween = require('../gsap.min.js');

class Viewport {

	constructor( options ) {
		this.events();
	}

	events() {

		let options = {
			root: null,
			rootMargin: "-20px",
			//threshold: .1
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const square = entry.target;

				if (entry.isIntersecting) {
					square.classList.add("in-view");

					if( square.getAttribute('data-count') ) {
							var item = square;
							let el = jQuery(square);
							let count = el.attr('data-count');
							let fin = el.text();
							// let finWidth = el.width() + 10;
							// el.css('width', finWidth);
							let counter = { var: 0 };

							el.html('0');

							setTimeout(function(){
								gsap.to(counter, 2, {
									val: count,
									roundProps:"val",
									onUpdate:function(){
										var num = Math.ceil(counter.val);
										el.html(num);
									},
									onComplete: function() {
										el.html(fin);
									},
									ease:Circ.easeOut
								});
							}, 300);
						}

					return;
				}
			});
		}, options);

		var elements = document.querySelectorAll('*[data-animate], *[data-animate-in], *[data-detect-viewport]');

		for (let element of elements) {
			observer.observe(element);
		}

	}

}

module.exports = Viewport;
