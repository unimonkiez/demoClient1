'use strict';

angular.module('demo1.provider')
    .factory('randomaizer', function() {
        var factory = {};
        factory.randomList;
        var i = 1;

        factory.generate = function() {
            factory.randomList = [];
            var limit = i + 10000;
            while (i < limit) {
                factory.randomList.push({
                    'key': i,
                    'r1': Math.random(),
                    'r2': Math.random(),
                    'r3': Math.random(),
                    'r4': Math.random(),
                    'r5': Math.random(),
                    'r6': Math.random(),
                    'r7': Math.random(),
                    'r8': Math.random()
                });
                i++;
            };
            // console.log('success');
        }
        // factory.generate();

        return factory;
    });
