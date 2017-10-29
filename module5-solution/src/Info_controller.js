( function()
{

'use strict';

var app=angular.module("restaurant");

app.controller("infocntrl",infocntrl);

infocntrl.$inject=['pop'];

function infocntrl(pop)
{

var infom=this;

infom.info=pop;

console.log(infom);


}




})();