var feedbackApp = angular.module('feedbackApp',
    [

    'ui.router',
    'feedbackApp.home',
    'feedbackApp.dashboard',
    'feedbackApp.profile',
    'feedbackApp.scoreboard',

    ]);

feedbackApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

        .state('dashboard', {
            url: '/dashboard',
            views: {
                "headerView" : {
                    templateUrl : '/static/components/dashboard/views/dashboard.html',
                    controller: 'dashboardController',
                },
                "maincontent" : {
                    templateUrl : '/static/components/home/views/home.html',
                    controller: 'homeController',
                }
            }

        })

        .state('dashboard.profile', {
            url: '/profile',
            views: {
                "content" : {
                    templateUrl : '/static/components/profile/views/profile.html',
                    controller: 'profileController',
                }
            }
        })
        
        .state('dashboard.scoreboard', {
            url: '/scoreboard',
            views: {
                "content" : {
                    templateUrl : '/static/components/scoreboard/views/scoreboard.html',
                    controller: 'scoreboardController',
                }
            }
        })        

});
