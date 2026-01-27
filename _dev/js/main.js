'use strict';

const $ = require('jquery');
const App = require('./modules/app.js');
const Viewport = require('./modules/viewport.js');
const Header = require('./modules/header.js');
const Modal = require('./modules/modal.js');
const Accordion = require('./modules/accordion.js');


$(function () {
	let app = new App();
	let viewport = new Viewport();
	let header = new Header();
	let modal = new Modal();
	let accordion = new Accordion();
});
