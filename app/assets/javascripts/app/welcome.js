"use strict";

var BigBird = require("bigbird");

module.exports = BigBird.Module.extend({

  el: 'body',

  events: {
    "click .button": "onButtonClick"
  },

  initialize: function initialize() {
    this.sendMessage("Welcome message");
  },

  onButtonClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.sendMessage("Looks like you clicked the button");
  },

  sendMessage: function(msg) {
    this.publish('messenger:message', msg);
  },

});
