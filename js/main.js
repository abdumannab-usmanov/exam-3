let array = [false, true, false,true,true]


function func(arr){
    var num = 0;

    for (i = 0; i < arr.length; i++){
        if(arr[i] === true){
            num++
        }
    }
    return num
}

console.log(func(array));

// =============2masala===============

var numbers=[-2,-5,2,7,3,5];

function func(array){
  var num = 0
  for(abdu of array){
    if(abdu > 0){
      num += abdu
    }
  }
  return num;
}
console.log(func(numbers));


// ==============3masala============

var numbers=[1,3,0,5,0,7,0];
function addition(array){
var count = []

for(abdu of array){
    if (abdu == 0){
        count.push(abdu)
    }else{
        count.unshift(abdu)
    }

}

return count("") 

}

console.log(addition(numbers));


// =====================


var quantity = [
    {name:"Ali", price:200},
    {name:"Umid", price:800},
    {name:"Sardor", price:700}
  ];  
function func(array){
  var expensive = array[0].price;
  var num = "";
  for(i of array){
    if(i.price > expensive){
        expensive = i.price;
      num = i.name;
   }
}return num;
}
console.log(func(quantity))


