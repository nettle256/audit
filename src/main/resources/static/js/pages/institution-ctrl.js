/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('institution', {
                url: '/institution',
                templateUrl: '/html/pages/institution',
                controller: 'institutionCtrl'
            })
    }])
    .controller('institutionCtrl', function () {
    });