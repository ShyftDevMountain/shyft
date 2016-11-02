var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = 'postgres://postgres:@localhost/shyftdb';
// var connectionString = config.connectionString;
var session = require('express-session');
var db = massive.connectSync({ db : "shyftdb"});


// facebook oAuth
var passport = require('passport')
// passkey
var config = require('./configFB/auth.js');
// fb Strategy ? do i need the OAuth2Strategy on the end of line
var FacebookStrategy = require('passport-facebook').Strategy;


var corsOptions = {
  origin:'http://localhost:8000'
}



var app = express();
module.exports = app;

var massiveInstance = massive.connectSync({connectionString: connectionString});

app.set('db', db);
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));

///Controllers///
var citiesCtrl = require('./server/controllers/citiesCtrl.js');
var ridesCtrl = require('./server/controllers/ridesCtrl.js');
var customerCtrl = require('./server/controllers/customerCtrl.js');



///Requests///
app.get('/cities', citiesCtrl.getCities);
app.get('/cityDetails/:id', citiesCtrl.getOneCity);
app.post('/checkZip', citiesCtrl.checkZip);


//RidesComp requests

app.post('/request', ridesCtrl.createRide);
app.put('/arrive', ridesCtrl.arriveRide);
app.put('/cancel', ridesCtrl.cancelRide);


//Customer Requests

app.get('/customerinfo', customerCtrl.getCustomer);



// *********************************************************************************************************************************************************
// FB
// *********************************************************************************************************************************************************

// sesssion
// maybe we'll use sessions later
app.use(session({
    secret: config.config.secret,
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
  // this is putting the user.id into the whole session
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // add in the database call
    db.find_user([id], function(err, user) {
      // req.session.userid = user[0].userid;

    done(err, user[0]);
  });
});

passport.use(new FacebookStrategy({
    clientID: '690120977818625',
    clientSecret: '27892e3ea50e3b10a4890159da63298b',
    callbackURL: "http://localhost:8000/auth/facebook/callback"

  },

  function(accessToken, refreshToken, profile, done) {
        console.log(profile);

          db.find_user([profile.id], function(err, user){
              if (err) return done(err);

              if (!user[0]) {
                db.add_user([profile.id],  function(err, response){
                      if (err) {
                        console.log("*****************", err);
                      }
                      console.log('*********************', response);
                        return done(null, response)
                });
              }
          });
        done(null, profile);
    }
));

// direct user to Fb to login

app.get('/auth/facebook',  passport.authenticate('facebook',  { scope: 'public_profile, email'}));
// Fb oAuth
// Facebook will redirect the user to this URL after approval.
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/#/userdashboard', failureRedirect: '/userdashboard' }));

var port = 8000;
app.listen(port, function(){
  console.log('Shyft: Port ' + port + ' is listening.');
});
