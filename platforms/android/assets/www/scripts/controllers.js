'use strict';
angular.module('ClearProject.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(playlist) {
    alert('Edit Item: ' + playlist.title);
  };
  $scope.share = function(playlist) {
    alert('Share Item: ' + playlist.title);
  };
  
  $scope.moveItem = function(playlist, fromIndex, toIndex) {
    $scope.playlists.splice(fromIndex, 1);
    $scope.playlists.splice(toIndex, 0, playlist);
  };
  
  $scope.onItemDelete = function(playlist) {
    $scope.playlists.splice($scope.playlists.indexOf(playlist), 1);
  };

	$scope.addItem = function() {
		$scope.playlists.push({title : 'AddedItem', id : $scope.playlists.length + 1 });
	};
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
