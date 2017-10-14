( function()
{

'use strict';

var app=angular.module("NarrowItDownApp",[]);

app.controller("NarrowItDownController",NarrowItDownController);

app.service("MenuSearchService",MenuSearchService);

app.constant("basepath",'https://davids-restaurant.herokuapp.com');

app.directive("foundItems",foundItems);

NarrowItDownController.$inject=['MenuSearchService'];

MenuSearchService.$inject=['$http','basepath'];

function NarrowItDownController(MenuSearchService)
{

var menu=this;

var found=[];

menu.remove=function(itemindex)
{

menu.x=false;

found.splice(itemindex,1);

}

menu.check=function(search)
{
menu.x=false;

found=[];

var promise=MenuSearchService.getMatchedMenuItems(menu.search);


promise.then(function(res)
{


console.log(res.data.menu_items.length);

console.log(search);

if(search !="")
{
for(var i=0;i<res.data.menu_items.length;i++)
{

if(res.data.menu_items[i].description.indexOf(search)!==-1)
{
console.log(res.data.menu_items[i].description);
found.push(res.data.menu_items[i]);
}

}
}
console.log(found);

menu.categories=found;


if(found.length==0|search=="")
{

menu.x=true;

menu.error="Item not found";
}


}).catch(function(error)
{

console.log("error occured",error);

})

}

}

function foundItems()
{

var ddo={

restrict:'E',

scope:{

menu:'='

},

template:'<ol><li ng-repeat="x in menu.categories">{{x.name}}({{x.short_name}}):  {{x.description}}<button ng-click="menu.remove($index)">Dont want this one!</button></li></ol>'

}

console.log(ddo);
return ddo;

}

function MenuSearchService($http,basepath)
{

var service=this;

service.getMatchedMenuItems=function(search)
{

var response=$http({

method:"GET",

url:basepath + "/menu_items.json"



})

console.log(response);

return response;

}



}


})();