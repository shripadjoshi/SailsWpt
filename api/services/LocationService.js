module.exports = {

    searchLocation: function(next) {
        var locQuery = Location.find();
        locQuery.where({ 'name': { startsWith: 'I' } });

        locQuery.exec(function(err, locations) {
            if(err) throw err;
            next(locations);
        });
    }


}