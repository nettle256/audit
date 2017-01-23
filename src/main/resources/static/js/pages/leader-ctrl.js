/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('leader', {
                url: '/leader',
                templateUrl: '/html/pages/leader',
                controller: 'leaderCtrl'
            })
    }])
    .controller('leaderCtrl', function ($scope) {
        $scope.avatarUrl = '/img/demo_img/';
        $scope.leaders = [
            {info:'男，重庆市开州区临江镇人，生于1962年7月，本科学历，中共党员，1982年8月参加工作，经济师，现任重庆市开州区审计局党组书记、局长。主持重庆市开州区审计局全面工作。', name:'宋定学'},
            {info:'男，重庆市开州区郭家镇人，生于1976年1月，本科学历，中共党员，1993年12月参加工作，现任重庆市开州区审计局党组成员、副局长。分管行政事业科、社会保障科。', name:'庞辉'},
            {info:'男，重庆市开州区赵家镇人，生于1964年12月，本科学历，中共党员，1984年8月参加工作，审计师，现任重庆市开州区审计局党组成员、副局长（工会主席）。分管经济责任科、内审管理科。', name:'姜平'},
            {info:'女，重庆市开州区临江镇人，生于1965年3月，专科学历，中共党员，1981年8月参加工作，高级审计师，现任重庆市开州区审计局党组成员、副局长，分政府投资科、法规审理科。', name:'王忠芬'}
        ];
    });
