var app = angular.module('stratusApp', [])

app.controller('WeatherCtrl', function($http, $scope){
	$scope.getWeather = function(){
		$http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%2211211%22&format=json&diagnostics=true&callback=')
		.success(function(data){
			// console.log(data.query.results.channel.item.condition)
		})
		.error(function(err){
			// console.log(err)
		})
	}
})