'use strict';
angular.module('demo1.controller')
    .controller('repeatCtrl', ['$scope', 'randomaizer', function($scope, randomaizer) {
        $scope.items = randomaizer.randomList;
        $scope.generate = function(type){
        	var startTime = Date.now();
        	console.log('[Generator, ' + type + '] started');
        	$scope.items = []
        	console.log('[Generator, ' + type + '] empty in - ' + (Date.now() - startTime));
        	randomaizer.generate();
        	console.log('[Generator, ' + type + '] generated list in - ' + (Date.now() - startTime));
        	$scope.items = randomaizer.randomList;
        	console.log('[Generator, ' + type + '] fill in - ' + (Date.now() - startTime));
        };
    }]);
