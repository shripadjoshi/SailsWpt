module.exports = {

    searchLocation: function(field, q, next) {
        var locQuery = Location.find();
        if(field == 'Active' || field == 'In-Active'){
        	locQuery.where({ 'active': (field == 'Active' ? true : false) });
        }
        else {
        	console.log(field);
        	locQuery.where({ ("'"+field+"'"): { startsWith: q } });	
        }

        locQuery.exec(function(err, locations) {
            if(err) throw err;
            next(locations);
        });
    }


}