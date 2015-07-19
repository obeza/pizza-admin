app.controller('utilisateurAjouterController', ['$scope','dataRestService','$state', '$stateParams', function($scope,dataRestService, $state, $stateParams){
	
	$scope.msg = "hello";

	$scope.etab = dataRestService.get({
		id:$stateParams.id,
		controller:"etablissement"
	});

	$scope.fiche = {};
	$scope.fiche.etablissement = $stateParams.id;


	$scope.ficheCreer = function(){
		var ajouter = dataRestService.save( {controller:"utilisateur"}, $scope.fiche, function(){
			console.log('msg : ' + ajouter);

			//$state.go('utilisateur/liste',{'id':$stateParams.id});
			
			//
			// transitionTo :: force le rafraichissement
			//
			$state.transitionTo('utilisateur/liste',{'id':$stateParams.id});
		});

	};

}]);