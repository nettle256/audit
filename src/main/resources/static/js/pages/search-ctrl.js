/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('search', {
                url: '/search',
                templateUrl: '/html/pages/search',
                controller: 'searchCtrl'
            })
    }])
    .controller('searchCtrl', function ($scope, $http) {
        $http
            .get(['api', 'news'].join('/'))
            .then(function (result) {
                $scope.news = result.data;
            }, function () {
                
            });
    });
