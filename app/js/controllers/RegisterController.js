angular.module('landingPage.register', []).controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = [
  '$scope', 
  '$location', 
  '$http', 
  '$rootScope'
];

function RegisterCtrl ($scope, $location, $http, $rootScope) {

  console.log("Register Controller");

  $scope.register = {};
  $scope.steps = {
    first: true,
    second: false
  };

  $scope.costs_list = {
    costA: 10000,
    costB: 20000,
    costC: 30000
  };

  $scope.employee_number = [
    {
      id: "aaa",
      name: "aaa"
    },
    {
      id: "bbb",
      name: "bbb"
    },
    {
      id: "ccc",
      name: "ccc"
    }
  ];

  $scope.nextStep = function (step, next){
    $scope.steps[step] = false;
    $scope.steps[next] = true;
    console.log("Register Controller", $scope.register);
  }

  $scope.closeRegister = function (){
    location.href= "";
  }
  
}