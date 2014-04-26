
services.factory('middleware', function ($q, $rootScope,mockMiddleware ,apiMiddleware) {
    'use strict';

    function getWrapper() {

        var serviceWrapper;

        if ($rootScope.mockEnabled){
            serviceWrapper = new mockMiddleware();
        }else{
            serviceWrapper = new apiMiddleware();
        }

        return serviceWrapper;
    }

    return {
        authenticateUser: function (username, password) {
            var serviceWrapper = getWrapper();
            return serviceWrapper.authenticate(username, password);
        }
       
    };


    

});


