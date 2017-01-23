app.config(function($routeProvider){

  $routeProvider

  .when('/',{
    templateUrl: 'view/homepage.html',
    controller: 'homeCtrl'
  })
  .when('/forecast',{
    templateUrl: 'view/forecast.html',
    controller: 'forecastCrtl'
  })
  .when('/forecast/:days',{
    templateUrl: 'view/forecast.html',
    controller: 'forecastCrtl'
  })

});
