( function()
{

'use strict';

var app=angular.module("menuapp");


angular.module("menuapp").config(RoutesConfig);


RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];

function RoutesConfig($stateProvider,$urlRouterProvider)

{

$urlRouterProvider.otherwise('/');

$stateProvider.state('home',{url:'/',templateUrl:'templates/home.template.html'})

.state('categories',{url:'/categories',templateUrl:'templates/categories.template.html',controller:'cntrl as list',

resolve:{ categ:['menuservice',function(menuservice)
{

console.log(menuservice.getCategories());

return menuservice.getCategories();


}]

}

})

.state('items',{url:'/items_detail/{itemId}',templateUrl:'templates/items.template.html',controller:'itemcntrl as item',

resolve:{itemlist:['$stateParams','menuservice',function($stateParams,menuservice)
{

var res=[];

return menuservice.getItemdetail($stateParams.itemId);



}]


}

})



}

})();