

app.controller('MainController', function($scope, $timeout, Weather, UserService) {
  // Build the date object
  $scope.date = {};
  // Update function
  var updateTime = function() {
    $scope.date.raw = new Date();
    $timeout(updateTime, 1000);
  }
  // Kick off the update function
  updateTime();

  $scope.weather = {}
  // Hardcode San_Francisco for now

  $scope.user = UserService.user;
  Weather.getWeatherForecast($scope.user.location)
  //Weather.getWeatherForecast("CA/San_Francisco")
  //Weather.getWeatherForecast("NY/New_York")
  .then(function(data) {
    $scope.weather.forecast = data;
  });


});
