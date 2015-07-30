/**
 * The central point of the application that brings together the views and models.
 * Used to track and navigate with urls and composes the main views of the app
 */
define(["backbone", "views/myview"],
	function(Backbone, MyView) {

		return Backbone.Router.extend({

		routes: {
			"":"index"
		},

		index: function() {

			$(".app").html(new MyView().render().el);
		}

	});
});