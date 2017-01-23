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
    .controller('indexCtrl', function ($scope) {
        $scope.news = audit_infomations;
        $scope.slideApi = "/img/demo_img/";
        $scope.slides = [{
            imageUrl: '1.jpg',
            text: '重庆市开州区审计局开展“大数据、巧审计”技术方法培训'
        }, {
            imageUrl: '2.jpg',
            text: '开州区审计局：重点关注农村水库整治工程质量审计'
        },  {
            imageUrl: '3.jpg',
            text: '进村入户　真心帮扶'
        }];
    });