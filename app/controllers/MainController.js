var todoApp = angular.module('todoApp', []);

todoApp.controller('MainController', ['$scope','dataService', function MainController($scope,dataService) {
	$scope.items = dataService.items;

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

}]);