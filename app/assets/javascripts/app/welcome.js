"use strict";

var $ = require("jquery");
var BigBird = require("bigbird");

module.exports = BigBird.Module.extend({

  el: 'body',

  events: {
    "click .js-button": "onButtonClick"
  },

  initialize: function initialize() {
    this.sendMessage("Welcome");
  },

  onButtonClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(e.currentTarget).remove();

    this.$els('bigbird-version').text( BigBird.VERSION );
    this.$els('jquery-version').text( $.fn.jquery );
    this.$els('modernizr-version').text( Modernizr._version );

    this.sendMessage("Framework versions updated");
  },

  sendMessage: function(msg) {
    this.publish('messenger:send', msg);
  }

});
