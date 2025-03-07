'use strict';

const $ = require('jquery');

class Modal {

  constructor( options ) {
    this.defaults = {};
    this.settings = $.extend( true, {}, this.defaults, options );
    this.setup();
  }

  setup() {

    const targetOpen = $('*[data-modal]');
    var target;

    targetOpen.click(function(e){
      e.preventDefault();
      let el = $(this);
      let trigger = el.attr('data-modal');
      target = $("#" + trigger);

      if( target.hasClass('modal-active') ) {
        target.removeClass('modal-active');
        $('body').removeClass('modal-is-active');
        window.location.hash = '';
      } else {
        target.addClass('modal-active');
        $('body').addClass('modal-is-active');
      }

      if( el.attr('data-title') ) {
        $('.title-insert').html(el.attr('data-title'));
        $('.js-unit-name input').val(el.attr('data-title'));
      }
    });

    $(document).ready(function(){
      let hash = window.location.hash.replace('#', '');
      $('.modal-wrap').each(function(){
        if( $(this).attr('id') === hash ) {
          $(this).addClass('is-active');
          $('body').addClass('modal-is-active');
        }
      });
    });


  }

}

module.exports = Modal;
