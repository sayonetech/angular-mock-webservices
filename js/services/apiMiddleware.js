
services.factory('apiMiddleware', function ($q) {
    'use strict';

    function apiMiddleware() {
    }

    apiMiddleware.prototype = {
        authenticate: function (inputData) {

            var deferred = $q.defer();
            //deferred.resolve(inputData);
            // Do your REST Calls here
            return deferred.promise;
        }
    }

    return (apiMiddleware);

});

