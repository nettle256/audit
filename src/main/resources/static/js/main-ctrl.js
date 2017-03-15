/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');
        }
    ])
    .controller('mainCtrl', function ($scope, $state, themeService, $http) {

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
            $state.go('search', {key: $scope.keyword});
        };

        $http
            .get(['api', 'carousel'].join('/'))
            .then(function (result) {
                $scope.carousels = result.data.sort(function (a, b) {
                    return a.index > b.index;
                });
            }, function (result) {
            });

        $http
            .get(['api', 'photo'].join('/'))
            .then(function (result) {
                $scope.photos = result.data;
                $scope.photos.forEach(function (photo) {
                    if (photo.connect && photo.theme) {
                        photo.url = '#!/theme/'+photo.theme+'/article/'+photo.connect;
                    }   else
                        photo.url = '';
                })
            }, function (result) {
            });
    });