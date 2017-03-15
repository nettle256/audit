/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('search', {
                url: '/search',
                params: {key: null},
                templateUrl: '/html/pages/search',
                controller: 'searchCtrl'
            })
    }])
    .controller('searchCtrl', function ($scope, $http, $stateParams) {
        $scope.key = $stateParams.key;
        $scope.$watch('key', function () {
            if ($scope.key)
            $http
                .get(['api', 'news'].join('/') + '?' + ($scope.key ? 'keyword='+$scope.key:''))
                .then(function (result) {
                    $scope.news = result.data.content;
                    $scope.total = result.data.total;
                    $scope.currentPage = result.data.number + 1;
                    $scope.totalPages = result.data.totalPages;
                }, function (result) {
                })
        });

        $scope.pageChanged = function (idx) {
            $http
                .get(['api', 'news'].join('/') + '?' + ($scope.key ? 'keyword='+$scope.key:'') + '&page=' + (idx-1) )
                .then(function (result) {
                    $scope.news = result.data.content;
                    $scope.total = result.data.total;
                    $scope.currentPage = result.data.number + 1;
                    $scope.totalPages = result.data.totalPages;
                }, function (result) {
                })
        };

    });
