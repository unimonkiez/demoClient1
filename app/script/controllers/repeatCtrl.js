'use strict';
angular.module('demo1.controller')
    .controller('repeatCtrl', ['$scope', 'randomaizer', '$timeout', function($scope, randomaizer, $timeout) {
        $scope.framework = 'Repeat';
        $scope.data = randomaizer.data;
        $scope.$on('generate', function(){
            var startTime = Date.now();
            console.log($scope.framework + ' is starting to manipulate the DOM!');
            $timeout(function() {
                console.log($scope.framework + ' has finished manipulating in ' + (Date.now() - startTime) + 'ms!');
            }, true);
        });
    }]);
