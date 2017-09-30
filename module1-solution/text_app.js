( function()
{

var app=angular.module("LunchCheck",[]);

app.controller("LunchCheckController",cntrl);

cntrl.$inject=['$scope'];

function cntrl($scope)
{

var arr;
var str;
$scope.item="";


$scope.message1="";
$scope.message="";
$scope.message2="";

$scope.check=function()

{

var str=$scope.item;

if(str.length ==0)
{

console.log(str.length);

$scope.y=false;
$scope.n=false;
$scope.z=true;

$scope.message2="Please enter data";
}

else
{


arr=$scope.item.split(",");

if (arr.length>0 && arr.length <= 3)
{
enjoy();
}

if(arr.length>3)
{
enough();
}
}
            

                             }

function enjoy()
{
$scope.y=true;
$scope.n=false;
$scope.z=false;

$scope.message="Enjoy!";

$scope.mystyle={"border-color":"green","border-style":"solid","border-width":"2px"}

console.log($scope.y);
console.log(arr);
console.log(arr.length);

}

function enough()
{
$scope.n=true;
$scope.y=false;
$scope.z=false;
$scope.message1="Too much!";

$scope.mystyle={"border-color":"red","border-style":"solid","border-width":"2px"}

console.log($scope.n);
console.log(arr);
console.log(arr.length);

}




};

})();