app.controller('categorieAJouterController', ['$scope','dataRestService', '$stateParams', '$state', function($scope, dataRestService, $stateParams, $state){

	$scope.etab = dataRestService.get({
		id:$stateParams.id,
		controller:"etablissement"
	});

	$scope.fiche = {};
	$scope.fiche.etablissement = $stateParams.id;


	$scope.ajouter = function(){
		var ajouter = dataRestService.save( {controller:"categorie"}, $scope.fiche, function(){
			//console.log('msg : ' + ajouter);

			//$state.go('utilisateur/liste',{'id':$stateParams.id});
			
			//
			// transitionTo :: force le rafraichissement
			//
			$state.transitionTo('categorie/liste',{'id':$stateParams.id});
		});

	};

}]);