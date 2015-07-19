app.controller('categorieModifierController', ['$scope', 'dataRestService', '$stateParams' ,'$state', 'dataModifService', function($scope, dataRestService, $stateParams, $state, dataModifService){

	$scope.btModifier = true;


	$scope.etab = dataRestService.get({
		id:$stateParams.restoId,
		controller:"etablissement"
	});

	var infos = {
		id:$stateParams.catId,
		controller:"categorie"
	};

	$scope.categorieId = infos.id;

	$scope.fiche = dataRestService.get(infos);

	$scope.listes = dataRestService.query({
		id : infos.id,
		controller : "articles"
	});

	$scope.modifierCategorie = function(fiche){

/*
		fiche.$update(infos, function(){
			console.log("okkkkk !!! : " + fiche.nom);
		});
*/

		var url = "categorie/" + infos.id;
		$scope.btModifier = false;

		dataModifService.modifier(url, fiche).then( function(d){
			console.log("msg : " + d);
			$scope.btModifier = true;
		
		});

	};

}]);


