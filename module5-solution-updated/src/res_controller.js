(function()
{

'use strict';

var app=angular.module("restaurant");

app.controller("cntrl1",cntrl1);

cntrl1.$inject=['$stateParams','restservice'];


function cntrl1($stateParams,restservice)
{

var lock=this;

var pop=[];

pop=restservice.sub($stateParams.itemId,$stateParams.first,$stateParams.last,$stateParams.email,$stateParams.phone);

console.log(pop);

lock.reso=pop;

lock.inf=pop;

console.log(lock.reso);

console.log(lock.inf);

}




})();