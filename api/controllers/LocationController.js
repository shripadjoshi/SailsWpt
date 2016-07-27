/**
 * LocationController
 *
 * @description :: Server-side logic for managing Locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	searchLocation: function (req, res) {
    var locations = LocationService.searchLocation(function(locations){
            res.json(locations);    
    });
  }
};
