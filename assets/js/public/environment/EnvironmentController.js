angular.module('EnvironmentModule').controller('EnvironmentController', ['$scope', '$http', 'EnvironmentDetails',function($scope, $http,EnvironmentDetails){
	//all loading states of the forms
	$scope.title = "Environment";
	$scope.environments = "";

	$scope.createEnvironmentForm = {
		loading: false
	},

	EnvironmentDetails.get()
            .success(function(data) {
            	$scope.environments = data;            	

            }).error(function(data) {
                console.log(data);
            });

	$scope.submitEnvironmentForm = function(){
		$scope.createEnvironmentForm.loading = true;
		console.log("Clicked");
		$http.post('/environment',{
			name: $scope.createEnvironmentForm.name
		}).then(function onSuccess(){
			window.location = '/environments'
		}).catch(function onError(sailsResponse){
			console.log(sailsResponse);
		}).finally(function eitherWay(){
			$scope.createEnvironmentForm.loading = false;
		});

	},

	$scope.deleteEnvironment = function(envId){
		
		$http.delete('/environment/'+envId,{
		}).then(function onSuccess(){
			window.location = '/environments'
		}).catch(function onError(sailsResponse){
			console.log(sailsResponse);
		}).finally(function eitherWay(){
			//$scope.createEnvironmentForm.loading = false;
		});

	}

}]);