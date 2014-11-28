'use strict';
angular.module('demo1', [
        'ui.router',
        'demo1.provider',
        'demo1.controller'
    ])
    .config(function($stateProvider, $locationProvider) {
        $stateProvider.state('demo', {
                url: '',
                views: {
                    '@': {
                        templateUrl: 'partials/main.html'
                    },
                    '@demo': {
                        templateUrl: 'partials/comparision.html'
                    },
                    'repeatWithoutTrack@demo': {
                        templateUrl: 'partials/repeatWithoutTrack.html',
                        controller: 'repeatCtrl'
                    },
                    'repeatWithTrack@demo': {
                        templateUrl: 'partials/repeatWithTrack.html',
                        controller: 'repeatCtrl'
                    },
                    'repeatWithReact@demo': {
                        templateUrl: 'partials/repeatWithReact.html',
                        controller: 'reactCtrl'
                    }
                }
            })
            .state('demo.repeatWithoutTrack', {
                url: 'repeatWithoutTrack',
                templateUrl: 'partials/repeatWithoutTrack.html',
                controller: 'repeatCtrl'
            })
            .state('demo.repeatWithTrack', {
                url: 'repeatWithTrack',
                templateUrl: 'partials/repeatWithTrack.html',
                controller: 'repeatCtrl'
            })
            .state('demo.repeatWithReact', {
                url: 'repeatWithReact',
                templateUrl: 'partials/repeatWithReact.html',
                controller: 'reactCtrl'
            });
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
    });
