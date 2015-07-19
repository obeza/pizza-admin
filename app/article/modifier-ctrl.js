app.controller('articleModifierController', ['$scope','dataRestService','$stateParams', '$state', function($scope, dataRestService, $stateParams, $state){

	$scope.etab = dataRestService.get({
		id:$stateParams.restoId,
		controller:"etablissement"
	});

	$scope.categorie = dataRestService.get({
		id:$stateParams.catId,
		controller:"categorie"
	});

	$scope.fiche = dataRestService.get({
		id:$stateParams.artId,
		controller:"article"
	});

	$scope.modifier = function(){
		
		$scope.fiche.$update({
			id:$stateParams.artId,
			controller:"article"
		}).then(function(){
			$state.transitionTo("categorie/modifier", {
				'restoId':$scope.etab.id,
				'catId':$scope.categorie.id
			});
		});
		
	};

}]);