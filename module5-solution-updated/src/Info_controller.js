( function()
{

'use strict';

var app=angular.module("restaurant");

app.controller("infocntrl",infocntrl);

infocntrl.$inject=['restservice'];

function infocntrl(restservice)
{

var infom=this;

infom.info=restservice.get();

console.log(infom.info);


}




})();