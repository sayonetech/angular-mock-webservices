
services.factory('mockMiddleware', function ($q, $resource) {
    'use strict';

    function mockMiddleware() {
    }

    mockMiddleware.prototype = {
        authenticate: function (inputData) {

            var deferred = $q.defer();
            var authResponse = $resource('data/response.json').get(function (response) {
                deferred.resolve(response);
            }, function () {
                deferred.reject('Configuration Error');
            });
            
            return deferred.promise;
        }
    }

    return (mockMiddleware);

});

