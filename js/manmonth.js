angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.items=[];

    $scope.calculateManMonths = function(){
        var nManMonths = 0;
        if($scope.language == "C"){
            nManMonths = $scope.functionpoints / 9.07;
        }else if($scope.language == "VB.net"){
            nManMonths = $scope.functionpoints / 20.90;
        }
        $scope.manmonths = Number(nManMonths.toFixed(2));
    }
});
