'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).
  controller('MyCtrl1', function ($scope, $http) {
    $scope.phones = [
      {'name': 'Nexus S',
       'snippet': 'Fast just got faster with Nexus S.'},
      {'name': 'Motorola XOOM™ with Wi-Fi',
       'snippet': 'The Next, Next Generation tablet.'},
      {'name': 'MOTOROLA XOOM™',
       'snippet': 'The Next, Next Generation tablet.'}
    ];
    $scope.items = [];
    $scope.search = function() {
      $http.get('/api/post/' +$scope.term).
        success(function(data) {
          //$scope.post = data.post;
          console.log(data);
           $scope.items = data;
        });
    }

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });