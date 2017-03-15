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
    }).filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });