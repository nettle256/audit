/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('article', {
                url: '/group/{groupId:[0-9]+}/article/{id:[0-9]+}',
                templateUrl: '/html/pages/article',
                controller: 'articleCtrl'
            })
    }])
    .controller('articleCtrl', function ($scope, $sce, $stateParams) {
        $scope.imageUrl = 'img/demo_img/';
        $.extend($scope, audit_infomations.filter(function (article) {
            return article.id == $stateParams.id;
        })[0]);
        $scope.content = $sce.trustAsHtml($scope.content);
    });
