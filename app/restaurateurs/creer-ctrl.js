app.controller('restauCreerController', ['$scope','dataRestService','$state', function($scope,dataRestService, $state){
	
	$scope.msg = "hello";

	$scope.ficheCreer = function(){
		var ajouter = dataRestService.save( {controller:"etablissement"}, $scope.fiche, function(){
			console.log('msg : ' + ajouter);
			$state.transitionTo("restaurateurs");
		});

	};

}]);