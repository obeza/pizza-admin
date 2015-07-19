app.controller('categorieListeController', ['$scope','$stateParams','dataRestService', 'actifCouleurService', function($scope, $stateParams, dataRestService, actifCouleurService){
	


	$scope.etab = dataRestService.get({
		id:$stateParams.id,
		controller:"etablissement"
	});

	$scope.actif = function(act){
		return actifCouleurService.get(act);
	}

	$scope.listes = dataRestService.query({
		id:$stateParams.id,
		controller:"categories"
	});


}]);

