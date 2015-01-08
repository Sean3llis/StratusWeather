
var app = angular.module('stratusApp', [])

app.controller('WeatherCtrl', function($http, $scope){
	// make API call to Yahoo with the ZIP code parameter
	$scope.getWeather = function(zip){
		$scope.zip = zip
		$http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=')
		.success(function(data){
			$scope.weather = data.query.results.channel
			$scope.forecast = data.query.results.channel.item.forecast
			$scope.tempIndex = (parseInt($scope.weather.item.condition.temp) - parseInt($scope.forecast[0].low)) / (parseInt($scope.forecast[0].high) - parseInt($scope.forecast[0].low)) * 100
			console.log($scope.weather)
		})
	}
	//decide which weather icon SVG to display for the current weather
	$scope.weatherImg = function(code){
		if([6, 9, 11, 12, 35, 40].indexOf(parseInt(code)) > -1){
			return "Cloud-Drizzle"
		} else if ([3, 4, 37, 38, 39, 45, 47].indexOf(parseInt(code)) > -1){
			return "Cloud-Lightning"
		} else if ([26, 27, 28, 29, 30, 44].indexOf(parseInt(code)) > -1){
			return "Cloud-Sun"
		} else if ([32, 36].indexOf(parseInt(code)) > -1){
			return "Sun"
		} else {
			return "Cloud-Sun"
		}
	}

	$scope.resetWeather = function(){
		$scope.zip = null
		$scope.weather = null
	}

	
})
