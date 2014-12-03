'use strict';
angular.module('demo1.controller')
    .controller('repeatCtrl', ['$scope', 'randomaizer', '$timeout', function($scope, randomaizer, $timeout) {
        $scope.framework = 'Repeat';
        $scope.data = randomaizer.data;
        $scope.$on('generate', function() {
            var startTime = Date.now();
            console.log($scope.framework + ' is starting to manipulate the DOM!');
            $timeout(function() {
                console.log($scope.framework + ' has finished manipulating in ' + (Date.now() - startTime) + 'ms!');
            }, true);
        });
    }]).directive('angRepeat', function() {
        return {
            restrict: 'E',
            scope: {
                table: '=ngData'
            },
            template: function(scope, attr, ele) {
                return '<table>' +
                    '<thead>' +
                    '<tr>' +
                    '<th>' +
                    '0' +
                    '</th>' +
                    '<th>' +
                    '1' +
                    '</th>' +
                    '<th>' +
                    '2' +
                    '</th>' +
                    '<th>' +
                    '3' +
                    '</th>' +
                    '<th>' +
                    '4' +
                    '</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr ng-repeat="row in table">' +
                    '<td ng-repeat="value in row">{{ value }}</td>' +
                    '</tr>' +
                    '</tbody>' +
                    '</table>';
            }
        }
    });
