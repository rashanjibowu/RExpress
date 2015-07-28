
// authentication modules
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var UserModel = require('../models/user');

// define the authentication strategy
passport.use(
    new BasicStrategy(
        function(username, password, done) {
            UserModel.findOne({ username: username }, function(err, user) {
                if (err) return done(err);

                if (!user) return done(null, false);

                user.verifyPassword(password, function(err, isMatch) {
                    if (err) {
                        return done(err);
                    }

                    // Password did not match
                    if (!isMatch) {
                        return done(null, false);
                    }

                    // Success
                    return done(null, user);
                });
            });
        }
    )
);

exports.isAuthenticated = passport.authenticate('basic', { session: false });