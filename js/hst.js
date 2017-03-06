angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.items=[];

    $scope.calculateTotal = function(){
        $scope.items.push($scope.amount);
        $scope.subtotal = 0;
        for(var n = 0; n < $scope.items.length; n++){
            $scope.subtotal += Number($scope.items[n]);
        }
        $scope.amount="";
        if($scope.province == "ON"){
            $scope.hst = 0.13 * $scope.subtotal;
        }else if($scope.province == "AB"){
            $scope.hst = 0.05 * $scope.subtotal;
        }
    }
});
