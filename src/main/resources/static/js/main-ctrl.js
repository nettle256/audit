/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');
        }
    ])
    .controller('mainCtrl', function ($scope, $state, themeService) {

        $scope.themeMap = {};
        themeService.getThemeTree().then(function (data) {
            $scope.themeTree = data;
            $scope.themeTree.forEach(function (theme) {
                theme.isFather = !(!theme.child || theme.child.length < 1);
                $scope.themeMap[theme.id] = theme;
                if (theme.isFather)
                    theme.child.forEach(function (theme) {
                        $scope.themeMap[theme.id] = theme;
                    });
            });
        });

        $scope.myInterval = 5000;
        $scope.keyword = '';
        $scope.gotoSearch = function () {
            $state.go('search', {keyword: $scope.keyword});
        }
    });