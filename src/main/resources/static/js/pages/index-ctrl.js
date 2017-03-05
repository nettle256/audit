/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: '/html/pages/index',
                controller: 'indexCtrl'
            })
    }])
    .controller('indexCtrl', function ($scope, $http) {

        $http
            .get(['api', 'carousel'].join('/'))
            .then(function (result) {
                $scope.carousels = result.data.sort(function (a, b) {
                    return a.index > b.index;
                });
            }, function (result) {
            });

        $http
            .get(['api','news'].join('/'))
            .then(function (result) {
               $scope.news = result.data;
            }, function () {

            });
    });