app.controller('articleAJouterController', ['$scope','dataRestService', '$stateParams', '$state', function($scope, dataRestService, $stateParams, $state){

	$scope.etab = dataRestService.get({
		id:$stateParams.restoId,
		controller:"etablissement"
	});

	$scope.categorie = dataRestService.get({
		id:$stateParams.catId,
		controller:"categorie"
	});

	$scope.fiche = {};
	

	$scope.ajouter = function(){
		$scope.fiche.etablissement = $scope.etab.id;
		$scope.fiche.categorie = $scope.categorie.id;

		console.log ( JSON.stringify($scope.fiche) );
		var ajouter = dataRestService.save( {controller:"article"}, $scope.fiche, function(){
			//console.log('msg : ' + ajouter);

			//$state.go('utilisateur/liste',{'id':$stateParams.id});
			
			//
			// transitionTo :: force le rafraichissement
			//
			$state.transitionTo('categorie/modifier',{
				'restoId':$stateParams.restoId,
				'catId':$stateParams.catId
			});
		});

	};

}]);


