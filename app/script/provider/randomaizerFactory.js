'use strict';
angular.module('demo1.provider')
    .factory('randomaizer', ['$rootScope', function($rootScope) {
        var factory = {};
        factory.data;
        var full;

        factory.generate = function() {
            var startTime = Date.now();

            console.log('Generation has started!');
            for (var i = 0; i < 4000; ++i) {
                factory.data[i] = {};

                for (var j = 0; j < 5; ++j) {
                    factory.data[i][j] = Math.random();
                }
            }
            console.log('Finished generating in ' + (Date.now() - startTime) + 'ms!');
            $rootScope.$broadcast('generate');
            full = true;
        }
        factory.clear = function() {
            if (full) {
                for (var i = factory.data.length - 2; i >= 0; i--) {
                    factory.data.pop();
                };
                $rootScope.$broadcast('generate');
                full = false;
            }
        }
        factory.changeRandomRow = function() {
            var i = (full) ? Math.floor(Math.random() * (10 + 1)) : 0;
            for (var j = 0; j < 5; ++j) {
                factory.data[i][j] = Math.random();
            }
            $rootScope.$broadcast('generate');
        }

        factory.data = [];
        factory.data[0] = {};
        $rootScope.$broadcast('generate');
        full = false;

        return factory;
    }]);
