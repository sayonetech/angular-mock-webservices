services.factory('security', function ($q, middleware)
{
    'use strict';

    

    return {
        authenticateUser: function (username, password)
        {
            var deferred = $q.defer();
            middleware.authenticateUser(username, password).then(onSuccess, onFailure);

            function onSuccess(data)
            {
                deferred.resolve(data);
            }

            function onFailure(message)
            {
                deferred.reject('Authentication failure. Please. Enter correct email & password to login.');
                
            }

            return deferred.promise;
        }
    };

    

});


