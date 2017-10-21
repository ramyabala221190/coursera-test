(function()
{

'use strict';

var app=angular.module("menuapp");

app.controller("itemcntrl",itemcntrl);

itemcntrl.$inject=['itemlist'];

function itemcntrl(itemlist)
{


var item=this;

item.itemDetail=itemlist;

console.log(item.itemDetail);



}

})();