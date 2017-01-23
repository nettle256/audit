/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('responsibility', {
                url: '/responsibility',
                templateUrl: '/html/pages/responsibility',
                controller: 'responsibilityCtrl'
            })
    }])
    .controller('responsibilityCtrl', function () {
    });
