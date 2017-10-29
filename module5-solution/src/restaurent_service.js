( function()
{

var app=angular.module("restaurant");

app.service("restservice",restservice);

restservice.$inject=['$http'];

function restservice($http)
{

var service=this;

var arr=[];

service.sub=function(index,first,last,email,phone)
{


var msg=" ";

console.log(index);

console.log(first);

console.log(last);

console.log(email);



var promise=$http({

method:"GET",

url:"https://ramya-course5.herokuapp.com/menu_items.json"

})

promise.then(function(response)
{

console.log(response.data.menu_items.length);

for(var i=0;i<response.data.menu_items.length;i++)
{

if(response.data.menu_items[i].short_name==index)
{

var item=[{id:index,first:first,last:last,email:email,phone:phone,title:response.data.menu_items[i].name,description:response.data.menu_items[i].description}];

arr.push(item);


console.log(arr);

break;

}

}

})


return arr;

}

}

})();