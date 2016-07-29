module.exports = {

    searchLocation: function(field, q, next) {
        var locQuery = Location.find().populate(['location_region','location_browser']);

        if (field == 'Active' || field == 'In-Active') {
            locQuery.where({ 'active': (field == 'Active' ? true : false) });
        } else {
            console.log(field);
            if (field == 'name') {
                locQuery.where({
                    'name': { startsWith: q }
                });
            } else if (field == 'display_name') {
                locQuery.where({
                    'display_name': { startsWith: q }
                });
            }else if(field == 'location_region'){
                locQuery.where(populate('location_region', { name: q }));
            }

        }

        locQuery.exec(function(err, locations) {
            if (err) throw err;
            next(locations);
        });
    }


}
