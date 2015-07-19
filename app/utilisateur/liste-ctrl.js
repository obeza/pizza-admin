app.controller('utilisateurListeController', ['$scope','dataRestService','$stateParams', function($scope,dataRestService, $stateParams){
	
	$scope.etab = dataRestService.get({
		id:$stateParams.id,
		controller:"etablissement"
	});

	$scope.listes = dataRestService.query({
		id:$stateParams.id,
		controller:"utilisateurs"
	});

}]);