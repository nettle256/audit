/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('articles', {
                url: '/group/{groupId:[0-9]+}',
                templateUrl: '/html/pages/articles',
                controller: 'articlesCtrl'
            })
    }])
    .controller('articlesCtrl', function ($scope, $stateParams) {
        $scope.news = audit_infomations.filter(function (article) {
            return article.belong == $stateParams.groupId;
        });
    });
