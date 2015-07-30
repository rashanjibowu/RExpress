define(["backbone", "text!../templates/mytemplate.html", "handlebars"],
    function(Backbone, template, Handlebars) {

    var MyView = Backbone.View.extend({

        initialize: function() {},

        events: {},

        render: function() {
            var compiled = Handlebars.compile(template);

            // set up parameters
            var attrs = {
                awesome: "indeed"
            };

            this.$el.html(compiled(attrs));
            return this;
        }

    });

    return MyView;
});