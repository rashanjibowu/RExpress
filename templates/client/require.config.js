require.config({
    paths: {
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'jquery':'lib/jquery',
        'text': 'lib/text',
        'handlebars': 'lib/handlebars',
        'bootstrap': 'lib/bootstrap'
    },
    shim: {
        'underscore': {
          exports: '_'
        },
        'backbone': {
            deps: ['lib/underscore', 'jquery'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(["init"], function() {
    // no need for a callback
});