app.factory('dataRestService', ['$resource', function($resource){


return $resource(
        "http://localhost:8888/pizza-service/:controller/:id",
        {
        	id: '@id',
        	controller:'@controller'
        },
        { 'update': {method: 'PUT' }}
        
    );

}]);

app.factory('dataModifService', function($http) {

	var serviceUrl = "http://localhost:8888/pizza-service/";
	return {
		modifier: function(url, data){

			//var data = {'duree': parcours.duree, 'distance': parcours.distance, 'calorie': parcours.calorie};
			//alert(data);
			var promise = $http.post( serviceUrl + url, data).then(function(response){
				//console.log("promise : "+response.data)
   				return response.data.msg;
   				
			});
			return promise;
		}
	};

});