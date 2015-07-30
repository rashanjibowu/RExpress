/**
 * Initializes router and begins tracking navigation history
 */
define(["backbone", "routers/router"], function(Backbone, Router) {

  var App = {};

  App.start = function() {
	new Router();
    Backbone.history.start();
  };

  return App;
});
