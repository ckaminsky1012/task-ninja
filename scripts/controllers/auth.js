'user strict'

app.controller('AuthController', function($scope, $location, Auth, toaster){

	if (Auth.signedIn()) {
		$location.path('/');
	}

	$scope.register = function(user){
		Auth.register(user).then(function(){
			toaster.pop('success', "Registered successfully");
			// console.log("Register successfully!");
			$location.path('/');	
		}, function(err){
			console.log("Error...");
		});
	};

	$scope.login = function (user) {
		Auth.login(user)
			.then(function(){
				toaster.pop('success', "Logged in successfully");
				$location.path('/');
			},
			function(err) {
				// console.log("Error...");
				toaster.pop('error', "Oops, something went wrong!");
			});
	};

	$scope.changePassword = function(user){
		Auth.changePassword(user)
			.then(function() {
				$scope.user.email = '';
				$scope.user.oldPass = '';
				$scope.user.newPass = '';

			// console.log("Password Changed Successfully");
			toaster.pop('success', "Password changed successfully");
			},
			function(err) {
			// console.log("Error...");
			toaster.pop('error', "Oops, something went wrong!");
	
			});
	};
});