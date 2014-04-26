


function loginCtrl($scope, security) {

    
    $scope.authenticate = function () {  	 
        security.authenticateUser($scope.username, $scope.password).then(successCallback,errorCallback);

        function successCallback(data) {
            alert("Success" +JSON.stringify(data) );
        }

        function errorCallback(error) {
            alert("Error" +error);
        }
    }
	

	

      
}