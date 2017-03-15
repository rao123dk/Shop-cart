var app = angular.module("myCart", []); 
app.controller("myCtrl", function($rootScope, $scope) {
    $scope.products = [
        {name :"Lenovo K6 Power" ,quantity:2, price:19998}, 
        {name :"Zebronics UMC100B Micro USB ",quantity:1, price:224}, 
        {name :"node.js in action",quantity:1, price:1200}
    ];
    var scope = $rootScope;
    $scope.totalAmount =21422;
    $scope.addItem = function(Pname,Pprice,Pqty){
        $scope.errortext = "";
        if (!$scope.Pname && !$scope.Pprice) {
             return;
        }
        for(var z in $scope.products){
            
            if($scope.products[z].name === Pname){
                $scope.errortext = "The item is already in your shopping list.";
                break;
            }else {
                $scope.products.push({name:Pname, quantity:Pqty, price:Pprice * Pqty});
                //$rootScope.$broadcast('BOOM!', {price:Pprice * Pqty});
                break;
            }
        }
      $scope.totalAmount += Pprice * Pqty;
    }
    $scope.removeItem =function(x){
         $scope.errortext = "";   
       $scope.totalAmount = $scope.totalAmount- $scope.products[x].price;
        $scope.products.splice(x, 1);
       
        
    }

// for total amount
    // $scope.addtoTotal = function(Pprice,Pqty){
            // $scope.totalAmount += Pprice * Pqty;
        // }
    
});