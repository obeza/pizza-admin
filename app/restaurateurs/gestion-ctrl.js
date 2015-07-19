app.controller('restauGestionController', ['$scope','dataRestService','$stateParams' ,'$state', '$timeout', function($scope,dataRestService,$stateParams, $state, $timeout){
	
	var infos = {
		id:$stateParams.id,
		controller:"etablissement"
	};

	$scope.fiche = dataRestService.get(infos);

	$scope.modifier = function(){
		$scope.fiche.$update(infos);
		$timeout( function(){ 
			$state.transitionTo("restaurateurs"); 
		}, 2000);
		
	};
	
}]);