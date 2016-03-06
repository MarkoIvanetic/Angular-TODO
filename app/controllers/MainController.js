var todoApp = angular.module('todoApp', []);

todoApp.controller('MainController', ['$scope','dataService', function MainController($scope,dataService) {
	$scope.items = dataService.items;

    // REGEX
    $scope.minSixChars = /^.{6,}$/;
    $scope.onlyNumbers = /^\d+$/;

    // $scope.formValid = $scope.newItem.name.$valid;

	$scope.pendingFilter = function (items) {
        //console.log(tag, $scope.catSort);
        return items.done == false;
    };
    $scope.finishedFilter = function (items) {
        //console.log(tag, $scope.catSort);
        return items.done == true;
    };

    $scope.doItemClick = function (item, index) {
    	item.done = true;
    	$scope.items.finished.push(item);
    	$scope.items.pending.splice(index, 1);
    };    
    $scope.undoItemClick = function (item, index) {
    	item.done = false;
    	$scope.items.pending.push(item);
    	$scope.items.finished.splice(index, 1);
    };    
    $scope.deleteClick = function(state, index) {
    	if (state == "finished") {
    		$scope.items.finished.splice(index, 1);
    	}
    	else if (state == "pending"){
    		$scope.items.pending.splice(index, 1);
    	} else {
    		console.error("Delete click is not working properly")
    	}
    };
    $scope.update = function () {

        if ($scope.newItemForm.$valid) {
                var newItem = {
                name: $scope.newItem.name,
                creatorName: $scope.newItem.creator,
                duration: $scope.newItem.duration,
                description: $scope.newItem.description,
                done: false
            }
        $scope.items.pending.push(newItem);

            $scope.newItem.name = '';
            $scope.newItem.creator = '';
            $scope.newItem.duration = '';
            $scope.newItem.description = '';
        } else {
            $('.ng-invalid').css('background-color','red');
        }

    };
}]);