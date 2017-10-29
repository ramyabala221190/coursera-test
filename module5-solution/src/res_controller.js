(function()
{

'use strict';

var app=angular.module("restaurant");

app.controller("cntrl1",cntrl1);

cntrl1.$inject=['pop'];


function cntrl1(pop)
{

var lock=this;


console.log(pop);


if (pop.first !== "")
{
lock.reso="Your info has been saved";

console.log(lock.reso);

}

else
{

lock.reso="The menu no does not exist";
console.log(lock.reso);
}

}


})();