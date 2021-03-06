"use strict";

var $ = require("jquery");
var BigBird = require("bigbird");

module.exports = BigBird.Module.extend({

  el: $('.message'),

  subscriptions: {
    "messenger:send": "updateMessage"
  },

  updateMessage: function(msg) {
    this.$el.html(msg);
  }

});
