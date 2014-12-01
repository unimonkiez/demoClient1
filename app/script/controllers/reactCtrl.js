'use strict';
var Table = React.createClass({

    render: function render() {
        var _self = this;

        var thead = React.DOM.thead({},
            React.DOM.tr({},
                this.props.cols.map(function(col) {
                    return React.DOM.th({}, col);
                })));

        var tbody = this.props.rows.map(function(row) {

            return React.DOM.tr({},
                _self.props.cols.map(function(col) {
                    return React.DOM.td({}, row[col]);
                }));
        });

        return React.DOM.table({}, [thead, tbody]);
    }

});

angular.module('demo1.controller')
    .controller('reactCtrl', ['$scope', 'randomaizer', '$timeout', function($scope, randomaizer, $timeout) {
        $scope.framework = 'ReactJs';
        $scope.data = [];
        $scope.get = function() {
            $scope.data = randomaizer.data;
        }
        $scope.clear = function() {
            $scope.data = [];
        }
    }]).directive('fastRepeat', ['randomaizer', function(randomaizer) {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function(scope, el, attrs) {
                var render = function() {
                    var startTime = Date.now();
                    console.log(attrs.name + ' is starting to manipulate the DOM!');
                    React.render(
                        Table({
                            cols: [0, 1, 2, 3, 4],
                            rows: randomaizer.data
                        }),
                        el[0]
                    );
                    console.log(attrs.name + ' has finished changing in ' + (Date.now() - startTime) + 'ms!');
                }
                scope.$on('generate', render);
                render();

            }
        }
    }]);
