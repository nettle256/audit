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
    .controller('leaderCtrl', function () {
    });
