( function()
{

'use strict';

var app=angular.module("menuapp");
app.controller("cntrl",cntrl);

cntrl.$inject=['categ'];


function cntrl(categ)
{

var list=this;

console.log(categ);

list.categ_list=categ.data;


}


})();