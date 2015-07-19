app.controller('utilisateurGestionController', ['$scope','dataRestService','$stateParams' ,'$state', function($scope,dataRestService,$stateParams, $state){
	
	var infos = {
		id:$stateParams.id,
		controller:"utilisateur"
	};

	$scope.restoId = $stateParams.restoId;

	$scope.fiche = dataRestService.get(infos);

	$scope.modifier = function(){
		$scope.fiche.$update(infos);
		$state.transitionTo("utilisateur/liste", 
			{
				'id':$stateParams.restoId,
				
			});
	};

}]);