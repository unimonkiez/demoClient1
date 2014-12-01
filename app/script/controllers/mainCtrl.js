'use strict';
angular.module('demo1.controller')
    .controller('mainCtrl', ['$scope', 'randomaizer', function($scope, randomaizer) {
        $scope.generate = function(){
        	randomaizer.generate();
        };
        $scope.clear = function(){
        	randomaizer.clear();
        };
        $scope.change = function(){
        	randomaizer.changeRandomRow();
        }
    }]);
