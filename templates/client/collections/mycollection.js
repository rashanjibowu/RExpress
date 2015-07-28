/**
 * Sample collection
 */
define(['underscore', 'backbone', "models/mymodel"], function(_, Backbone, MyModel) {

    var MyCollection = Backbone.Collection.extend({

        model: MyModel,

        initialize: function(models, options) {}

    });

    return MyCollection;
});