( function()
{

'use strict';

angular.module("restaurant");

angular.module("restaurant").config(RoutesConfig);


RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];

function RoutesConfig($stateProvider,$urlRouterProvider)
{

$urlRouterProvider.otherwise('/');

$stateProvider.state('home',{url:'/', templateUrl:'templates/homepage.html'})

.state('signup',{url:'/sign_up',templateUrl:'templates/SignUp_template.html',controller:'cntrl as cntrl'


})

.state('res',{url:'/response',templateUrl:'templates/Response_template.html',controller:'cntrl1 as lock',

params:{itemId:null,first:null,last:null,email:null,phone:null}

})

.state('info',{url:'/info',templateUrl:'templates/info_template.html',controller:'infocntrl as infom'


})



}

})();