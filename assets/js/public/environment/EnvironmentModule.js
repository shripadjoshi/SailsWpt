angular.module('EnvironmentModule', [])
.factory('EnvironmentDetails', ['$http', function($http) {
	return {
	get: function() {
            return $http.get('/environment');
        }
    }
    }]);