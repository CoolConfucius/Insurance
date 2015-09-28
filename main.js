'use strict'; 

$( document ).ready(function() {
    console.log( "ready!" );
  $(".dropdown-menu li a").click(function(){
    console.log("working?");
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });    
});

var app = angular.module('app', []);

app.controller('ctrl', ['$scope', function($scope, $window) {
  
  console.log('ctrl loaded');
  console.log('scope:', $scope);
  console.log('scope:', $scope.rooms); //state of ngmodel name. 
  
  $scope.list = ['a', 'b', 'c', 'd'];
  $scope.rooms = ['a', 'b', 'c', 'd'];
  $scope.items = [{name: "chair", count: 2, costEa: 100}, {name: "chair", count: 2, costEa: 100}];
  $scope.roomItems = {}; 
console.log($scope.items);
console.log($scope.items[0].name);

  $scope.clickAddRoom = function() {
    $scope.rooms.push($scope.addRoom); 
    $scope.roomItems[$scope.addRoom] = {}; 
    $scope.addRoom = ""; 
  };

  $scope.clickAddItem = function() {
    $scope.roomItems[$scope.addRoom] = {}; 
    $scope.addRoom = ""; 
  };


}]); 
