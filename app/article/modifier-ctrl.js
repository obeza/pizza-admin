app.controller('articleModifierController', ['$scope','dataRestService','$stateParams', '$state', 'FileUploader', function($scope, dataRestService, $stateParams, $state, FileUploader){

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

    $scope.fiche.img = 'http://fdacentral.com/img/pizza/art'+$stateParams.artId+'.jpg';
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


	$scope.articleId = $stateParams.artId;
	/*
		upload image
	*/

	var uploader = $scope.uploader = new FileUploader({
            url: 'http://fdacentral.com/api/upload-pizza.php'
            
        });

        // FILTERS

        uploader.filters.push({
            name: "art" + $stateParams.artId + ".jpg",
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);

        };
        uploader.onBeforeUploadItem = function(item) {
        	item.formData.push({nomdufichier: 'art' + $stateParams.artId + '.jpg'});
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
            $scope.fiche.img = $scope.fiche.img;
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);


        // -------------------------------


        var controller = $scope.controller = {
            isImage: function(item) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };

}]);