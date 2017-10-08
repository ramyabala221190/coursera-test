(function()
{

'use strict';

var app=angular.module("ShoppingListCheckOff",[]);

app.controller("ToBuyController",ToBuyController);

app.controller("AlreadyBoughtController",AlreadyBoughtController);

app.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService)
{
var list1=this;

list1.toBuy=ShoppingListCheckOffService.showBuy();

list1.buy=function(itemindex)
{

console.log(itemindex);

list1.len1=ShoppingListCheckOffService.buy(itemindex);

}

};

/* 2nd controller*/

function AlreadyBoughtController(ShoppingListCheckOffService)

{

var list2=this;

console.log(list2);

list2.bought=ShoppingListCheckOffService.show();



};

/*service function*/

function ShoppingListCheckOffService()

{

var service=this;

var bought=[];

var len2;


var toBuy=[{name:"Cookies",quantity:20},{name:"Coke Bottles",quantity:30},{name:"Chocolates",quantity:100},{name:"Cheese packets",quantity:50},{name:"Chips packets",quantity:70}];




service.buy=function(itemindex)
{

bought.push(toBuy[itemindex]);

toBuy.splice(itemindex,1);

console.log(bought);
console.log(toBuy);

console.log("bought array length:",bought.length);


return toBuy.length;

}

service.show=function()
{

return bought;

}

service.showBuy=function()
{

return toBuy;

}

};

})();

