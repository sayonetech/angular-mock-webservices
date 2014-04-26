'use strict';
/* App Module */

var app = angular.module('mock', ['ngRoute', 'ui.bootstrap',  'mock.services']);
var services = angular.module('mock.services', ['ngResource']);

app.run(function ($rootScope) {
	
    
    $rootScope.mockEnabled  = true;

    $rootScope.safeApply = function (fn) {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest')
        {
            if (fn && (typeof (fn) === 'function'))
            {
                this.$eval(fn);
            }
        } else
        {
            if (fn)
            {
                this.$apply(fn);
            } else
            {
                this.$apply();
            }
        }
    }

       

});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
       when('/login', {
        templateUrl: 'partials/login.html',
        controller: loginCtrl
    }).
    otherwise({
        redirectTo: '/login'
    });

}]);

