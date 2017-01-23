app.controller('homeCtrl', [ '$scope', 'cityService', function($scope, cityService){

    $scope.city = cityService.city;


    $scope.$watch('city',function(){
      cityService.city = $scope.city;
    });
}]);
app.controller('forecastCrtl', ['$scope','cityService','$resource', '$routeParams' ,function($scope, cityService, $resource,$routeParams){
 $scope.city = cityService.city;
 $scope.days = $routeParams.days || 3;
 $scope.weatherAPI=
 $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {get: {method: "JSONP"}});
   $scope.weatherResult= $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, appid:'c88d71659fa32f8b06bd2d1c22bb58ad' });
   $scope.convertToFahrenheit = function(degK){
     return Math.round((1.8 * (degK - 273)) + 32);
   };
   $scope.convertToDate = function(dt){
     return new Date(dt * 1000);
   };
}]);
