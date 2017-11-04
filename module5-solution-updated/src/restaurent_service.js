( function()
{

var app=angular.module("restaurant");

app.service("restservice",restservice);

restservice.$inject=['$http'];

function restservice($http)
{

var service=this;



service.sub=function(index,first,last,email,phone)
{

var arr=[];

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

item=[{id:index,first:first,last:last,email:email,phone:phone,title:response.data.menu_items[i].name,description:response.data.menu_items[i].description}];

arr.push(item);

service.det=item;

console.log(service.det);


console.log(arr);

console.log(arr.length);

break;

}

}


})


return arr;


}


service.get=function()
{

console.log(service.det);


return service.det;


}

}

})();