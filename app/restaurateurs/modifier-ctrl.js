app.controller('restauModifierController', ['$scope','dataRestService','$stateParams' ,'$state', function($scope,dataRestService,$stateParams, $state){
	
	var infos = {
		id:$stateParams.id,
		controller:"etablissement"
	};

	$scope.fiche = dataRestService.get(infos);

	$scope.modifier = function(){
		$scope.fiche.$update(infos);
		$state.transitionTo("restaurateurs");
	};

}]);