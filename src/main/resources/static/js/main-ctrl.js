/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');
        }
    ])
    .controller('mainCtrl', function ($scope, $state) {
        $scope.navigations = [
            {name: '信息动态', id: 2, group: 2, sub: [{name: '工作动态', id: 13, group: 2}, {name: '审计信息', id: 14, group: 2}, {name: '审计公告', id: 15, group: 2}]},
            {name: '审计法规', id: 3, group: 3, sub: [{name: '法律法规', id: 5, group: 3}, {name: '地方规章', id: 6, group: 3}, {name: '规范性文件', id: 7, group: 3}]}
        ];
        $scope.navigations.forEach(function (nav) {
            nav.isDropdown = (nav.sub && nav.sub.length > 0);
        });
        $scope.myInterval = 5000;
        $scope.keyword = '';
        $scope.gotoSearch = function () {
            $state.go('search', {keyword: $scope.keyword});
        }
    });