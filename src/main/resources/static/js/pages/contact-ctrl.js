/**
 * Created by Nettle on 2017/1/23.
 */

auditApp
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                templateUrl: '/html/pages/contact',
                controller: 'contactCtrl'
            })
    }])
    .controller('contactCtrl', function () {
    });
