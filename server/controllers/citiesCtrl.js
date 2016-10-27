var app = require('../../server.js');
var db = app.get('db');
module.exports = {

getCities: function(req, res, next) {
  db.get_cities(function(err, cities) {
    if(err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(cities);
    }
  });
},


getOneCity: function(req, res, next) {
  db.get_one_city([req.params.id], function(err, cityDetails) {
    if(err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(cityDetails);
    }
  });
},

checkZip: function(req, res, next) {
  db.get_zips(function(err, zips) {
    var id;
    if(err) {
      res.status(500).json(err);
    }
    else{
    for(var i = 0; i < zips.length; i++) {
      if(req.body.zip_code === zips[i].zip_code) {
        id = zips[i].id
      }
    }
    if(id) {
      res.status(200).json(id);
    }
    else {
      res.status(200).json('sorry');
    }
  }
  });
}

}
