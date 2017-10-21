( function()

{

'use strict';

angular.module("data");

.service("menuservice",menuservice);


menuservice.$inject=['$http'];

function menuservice($http)
{

var service=this;

service.getCategories=function()
{

var promise=$http({

method:"GET",

url:'https://davids-restaurant.herokuapp.com/categories.json'

})

return promise;

}

service.getItemdetail=function(index)
{

var arr=[];


var prom=
$http({

method:"GET",

url:'https://davids-restaurant.herokuapp.com/menu_items.json'

})

console.log(prom);

prom.then(function(response)
{



console.log(response.data.menu_items.length);

for(var i=0;i<response.data.menu_items.length;i++)
{

var str=response.data.menu_items[i].short_name;

console.log(index);


if(str.indexOf(index) !== -1)
{

console.log(response.data.menu_items[i]);

arr.push(response.data.menu_items[i]);


}

}

})

console.log(arr);

return arr;

}


}

})();