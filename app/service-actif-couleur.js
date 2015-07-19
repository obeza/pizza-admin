app.factory('actifCouleurService', function($http) {

	return {
		get: function(act){

			if (act==="Y"){
				return "list-group-item-info";
			} else {
				return "list-group-item-danger";
			}
		}
	};

});