/**
 * Created by Nettle on 2017/3/6.
 */


auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('theme', {
                url: '/theme/{id:[0-9]+}',
                templateUrl: '/html/pages/theme',
                controller: 'themeCtrl'
            })
    }])
    .controller('themeCtrl', function ($scope, $stateParams, $http, $sce) {
        $scope.sce = $sce;
        $.extend($scope, $scope.themeMap[$stateParams.id]);
        if (!$scope.module) {
            $http
                .get(['api', 'news', 'theme', $scope.id].join('/'))
                .then(function (result) {
                    $scope.news = result.data.content;
                    $scope.currentPage = result.data.number + 1;
                    $scope.totalItems = result.data.total;
                    $scope.totalPages = result.data.totalPages;
                }, function (result) {

                });
        }   else {
            $http
                .get(['api', 'module', $scope.module].join('/'))
                .then(function (result) {
                    $scope.mod = result.data;
                }, function (result) {

                });
        }

        $scope.pageChanged = function (idx) {
            $http
                .get(['api', 'news', 'theme', $scope.id].join('/') + '?page=' + (idx-1) )
                .then(function (result) {
                    $scope.news = result.data.content;
                    $scope.currentPage = result.data.number + 1;
                    $scope.totalItems = result.data.total;
                    $scope.totalPages = result.data.totalPages;
                }, function (result) {
                })
        };
    });
