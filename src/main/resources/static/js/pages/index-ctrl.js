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
    .controller('indexCtrl', function ($scope, $http, $timeout, $state) {

        // $http
        //     .get(['api','news'].join('/'))
        //     .then(function (result) {
        //        $scope.news = result.data;
        //     }, function () {
        //
        //     });

        $timeout(function () {
            $('.photos').tinycarousel({ interval: true });
        });

        $scope.gotoNews = function (id, theme) {
            console.log('click');
            if (id != null && theme != null)
                $state.go('article', {themeId: theme, id: id});
        }
    });