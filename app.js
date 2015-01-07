
var app = angular.module('stratusApp', [])

app.controller('WeatherCtrl', function($http, $scope){
	$scope.getWeather = function(zip){
		$scope.zip = zip
		$http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=')
		.success(function(data){
			// console.log(data.query.results.channel.item.condition)
			$scope.weather = data.query.results.channel
			$scope.forecast = data.query.results.channel.item.forecast
			$scope.tempIndex = (parseInt($scope.weather.item.condition.temp) - parseInt($scope.forecast[0].low)) / (parseInt($scope.forecast[0].high) - parseInt($scope.forecast[0].low)) * 100
			// console.log(data.query.results.channel)
			console.log($scope.tempIndex)
		})
	}
})
