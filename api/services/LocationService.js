module.exports = {

    searchLocation: function(field, q, next) {
        var locQuery = Location.find().populate(['location_region', 'location_browser']);

        //console.log(field);
        if (field == 'Active' || field == 'In-Active') {
            locQuery.where({ 'active': (field == 'Active' ? true : false) });
        } else {
            if(field == ''){}
            else if (field == 'name') {
                locQuery.where({
                    'name': { startsWith: q }
                });
            } else if (field == 'display_name') {
                locQuery.where({
                    'display_name': { startsWith: q }
                });
            } else if (field == 'location_region') {
                regQuery = Region.find().populate(['locations']);
                regQuery.where({
                    'name': { startsWith: q }
                });
                var regionIds = []
                regQuery.exec(function(err, regions) {
                    if (err) throw err;
                    for (var i = 0; i < regions.length; i++) {
                        regionIds.push(regions[i].id)
                    }
                    locQuery.where({
                        'location_region': regionIds
                    });
                    locQuery.exec(function(err, locations) {
                        if (err) throw err;
                        next(locations);
                    });

                });

            } else {
                browserQuery = Browser.find().populate(['locations']);
                browserQuery.where({
                    'name': { startsWith: q }
                });
                var browserIds = []
                browserQuery.exec(function(err, browsers) {
                    if (err) throw err;
                    for (var i = 0; i < browsers.length; i++) {
                        browserIds.push(browsers[i].id)
                    }                    
                    locQuery.where({
                        'location_browser': browserIds
                    });
                    locQuery.exec(function(err, locations) {
                        if (err) throw err;
                        next(locations);
                    });

                });

            }

        }

        if (field != 'location_region' && field != 'location_browser') {
            locQuery.exec(function(err, locations) {
                if (err) throw err;
                next(locations);
            });
        }
    }


}
