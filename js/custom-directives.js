var app = angular.module('customDirectiveApp', []);

app.controller('DemoController', ['$scope', function($scope){

	$scope.danger = {};
	$scope.info = {};
	$scope.success = {};
	$scope.warning = {};
	$scope.toggleAlert = function(type){

		console.log($scope[type]);
		$scope[type].isOpen = !$scope[type].isOpen;
	};
}]);

app.directive('customDirective', [function(){

	return {
		restrict: 'EACM',
		replace: true,
		scope: {
			alerts: '=alerts',
			dismissFn: '&dismiss'
		},
		link: function($scope, elem, attrs){

			 var alert = {
				type: attrs.alert,
				message: attrs.message,
				isOpen: false
			};
			$scope.alerts = alert;
			console.log($scope.alerts);
			
			$scope.isOpen = false;
			$scope.toggleAlert = function(){

				$scope.alerts.isOpen = !$scope.alerts.isOpen;
			}; 
		},
		templateUrl: 'views/unorderedlist.html'
	}
}]);