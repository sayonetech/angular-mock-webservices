angular-mock-webservices
========================

This is a sample angular application that will work if the webservice not available

i have added $rootScope.mockEnabled  = true; on the main.js . if mock is enabled the the mockMiddleware will parse the json from the local 

            var authResponse = $resource('data/response.json').get(function (response) {
                deferred.resolve(response);
            }, function () {
                deferred.reject('Configuration Error');
            });
