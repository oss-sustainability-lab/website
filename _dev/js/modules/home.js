'use strict';

const $ = require('jquery');

class Home {

	constructor( options ) {
		//setup any defaults
		this.defaults = {};
		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );
		if( $('.js-anim-default, .js-img-anims').length ) {
			this.events();
		} else {
			return;
		}
	}

	events() {

		let sketches = $('.js-sketch');
		sketches.each(function(){
			let el = $(this);
			gsap.set(el, {yPercent:10, opacity: 0.6});
			gsap.to(el, {
				yPercent:0, opacity: 1,
				immediateRender: false,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 95%",
					end: "top 15%",
					scrub: 1,
				}
			});
			gsap.to(el, {
				yPercent:5, opacity: .1,
				immediateRender: false,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 10%",
					end: "top -20%",
					scrub: 1,
				}
			});
		});

		let animDefault = $('.js-anim-default');
		animDefault.each(function(){
			let el = $(this);
			gsap.set(el, {y:"20px", opacity: 0.4});
			gsap.to(el, {
				y:"0px", opacity: 1,
				immediateRender: false,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 95%",
					end: "top 65%",
					scrub: 1,
				}
			});
			gsap.to(el, {
				y:"-10px", opacity: .2,
				immediateRender: false,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 20%",
					end: "top -5%",
					scrub: 1,
				}
			});
		});


		let animDefaultSlow = $('.js-anim-default-slow');
		animDefaultSlow.each(function(){
			let el = $(this);
			gsap.set(el, {y:"30px", opacity: 0});
			gsap.to(el, {
				y:"0px", opacity: 1,
				immediateRender: false,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 95%",
					end: "top 50%",
					scrub: 2,
				}
			});
			gsap.to(el, {
				y:"-10px", opacity: 0,
				immediateRender: false,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 20%",
					end: "top -5%",
					scrub: 2,
				}
			});
		});


		function checkFades(el) {
			var t = el.getBoundingClientRect(),
			r = t.height.toFixed(2),
			i = window.innerHeight + Number(r);
			if (t.bottom < i && t.bottom > 0) {
				var n = Number(t.bottom / i),
				s = (1 - Math.sqrt(2 * (n - 0.5) * (2 * (n - 0.5)))).toFixed(2);
				el.style.opacity = s;
			}
		}

		// mobile anims
		if ( window.innerWidth < 1012 ) {
			const mobileAnims = $('.js-mobile-anim');
			mobileAnims.each(function(){
				let el = $(this);
				gsap.set(el, {y:"20px", opacity: 0});
				gsap.to(el, {
					y:"0", opacity: 1,
					ease: "none",
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						end: "top 65%"
					}
				});
			});
		}

		let yStart = '20';
		let yEnd = '-20';
		let animStart = '80%';
		let animEnd = '-5%';

		// desktop anims
		if ( window.innerWidth >= 1012 ) {

			const imgs = document.querySelectorAll('.js-img-anims');
			for (let i = 0; i < imgs.length; ++i) {
				let el = imgs[i];

				let yStart = el.getAttribute('data-yStart'),
					yEnd = el.getAttribute('data-yEnd'),
					animStart = el.getAttribute('data-animStart'),
					animEnd = el.getAttribute('data-animEnd');
				if( !yStart ) {
					yStart = '20';
					yEnd = '-20';
					animStart = '80%';
					animEnd = '-5%';
				}
				gsap.set(el, {yPercent: yStart, opacity:0});
				gsap.to(el, {
					yPercent:yEnd,
					//immediateRender: false,
					ease: "ease",
					scrollTrigger: {
						trigger: el,
						start: "top " + animStart,
						end: "top " + animEnd,
						scrub: 1,
						onUpdate: self => {
					    checkFades(el)
					  }
					}
				});
			}

		} // end window width large
	} // end events

}
module.exports = Home;
