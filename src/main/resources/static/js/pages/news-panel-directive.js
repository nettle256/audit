/**
 * Created by Nettle on 2017/3/6.
 */

auditApp
    .directive('newsPanel', function($q, $http) {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                themes: '=themes',
                themeMap: '=themeMap',
                limit: '=?limit'
            },
            templateUrl: '/html/pages/newsPanel',
            link: function (scope, element, attrs) {
                if (!scope.limit) scope.limit = 5;

                var req = [];
                if (scope.themes)
                    scope.themes.forEach(function (theme) {
                        req.push(
                            $http
                                .get(['api', 'news', 'theme', theme].join('/'))
                        )
                    });

                scope.news = [];
                $q.all(req)
                    .then(function (result) {
                        result.forEach(function (res) {
                            // console.log(res.data);
                            scope.news = scope.news.concat(res.data);
                        });
                        if (scope.news.length > scope.limit)
                            scope.splice(scope.limit, scope.news.length - scope.limit);
                    }, function (result) {
                        
                    });
            }
        }
    });