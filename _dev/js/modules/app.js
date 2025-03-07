'use strict';

const $ = require('jquery');

class App {

	constructor( options ) {

		$(function(){
			setTimeout(function(){
				$('body').addClass('page-ready');
			}, 400);
		});

		if ( ! ('ontouchstart' in window) ) {
			document.documentElement.classList.add('no-touch');
		}

		if ( 'ontouchstart' in window ) {
			document.documentElement.classList.add('is-touch');
		}

		if(window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1' || window.location.hostname == '192.168.50.86'){
			document.body.classList.add('localhost');
		}

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('darkmode');
		}

	}

}

module.exports = App;
