angular.module('alerts', [])
	.directive('alertType', [function(){

		return {
			restrict: 'EACM',
			replace: true,
			scope: {
				alerts: '=alerts'
			},
			link: function($scope, elem, attrs){

				 var alert = {
					type: attrs.alert,
					message: attrs.message,
					isOpen: false
				};
				$scope.alerts = alert;
				$scope.closeAlert = function(){

					console.log($scope.alerts);
					$scope.alerts.isOpen = !$scope.alerts.isOpen;
				};
				console.log($scope.alerts);
			},
			templateUrl: '../alerts/views/alerts.html'
		}		
	}]);