"use strict";

var $ = require('jquery');
var BigBird = require('bigbird');

// BigBird Nodules
var Messenger   = require('./app/messenger');
var Welcome     = require('./app/welcome');

// BigBird Initializer
var initializer = new BigBird.Initializer({
  modules: {
    common: {
      initialize: function initializeAction() {
        var messenger = new Messenger();
      }
    },
    static: {
      welcome: function() {
        var welcome = new Welcome();
      }
    }
  }
});
