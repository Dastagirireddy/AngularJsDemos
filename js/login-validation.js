var app = angular.module('loginApp', ['alerts']);

app.controller('LoginController', ['$scope', function($scope){

	console.log("I am in LoginController");
	$scope.login = function(){

		console.log($scope.user);
		if($scope.user.email === 'dasta@gmail.com' && $scope.user.password === 'dasta99'){

			$scope.success.isOpen = !$scope.success.isOpen;
		}
		else{
			$scope.danger.isOpen = !$scope.danger.isOpen;
		}
		console.log($scope.danger);
		$scope.user = undefined;
	};
}]);

