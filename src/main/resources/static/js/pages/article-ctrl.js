/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('article', {
                url: '/theme/{themeId:[0-9]+}/article/{id:[0-9]+}',
                templateUrl: '/html/pages/article',
                controller: 'articleCtrl'
            })
    }])
    .controller('articleCtrl', function ($scope, $sce, $stateParams, $http, $window) {
        $http
            .get(['api', 'news', $stateParams.id].join('/'))
            .then(function (result) {
                $.extend($scope, result.data);
                $scope.content = $sce.trustAsHtml($scope.content);
                $scope.imagesDTO = JSON.parse($scope.images);
                $scope.attachmentsDTO = JSON.parse($scope.attachments);
            }, function (result) {
            });
        
        $scope.goBack = function () {
            $window.history.back();
        }
    });
