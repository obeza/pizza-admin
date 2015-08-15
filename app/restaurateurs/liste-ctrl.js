app.controller('restauListeController', ['$scope','dataRestService', function($scope,dataRestService){
	
	$scope.listes = dataRestService.query({controller:"etablissement"});


}]);