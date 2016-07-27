/**
 * LocationController
 *
 * @description :: Server-side logic for managing Locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	searchLocation: function (req, res) {
    var locations = LocationService.searchLocation(req.query.field, req.query.q, function(locations){
            res.json(locations);    
    });
  }
};
