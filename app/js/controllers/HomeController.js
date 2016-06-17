angular.module('landingPage.home', []).controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = [
  '$scope', 
  '$location', 
  '$http', 
  '$rootScope',
  '$modal'
];

function HomeCtrl ($scope, $location, $http, $rootScope, $modal) {

  console.log("Home Controller");

  var _openModal = function(text) {
      $scope.modalText = text;
      $modal.open({
          templateUrl: 'modalcontent.html',
          scope: $scope
      });
  };

  $scope.showModal = function(){
    _openModal();
  }
  
}