
var count=0;
var arr_test = [1,2,3,4,5];
var arr=[];




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }



function getSums(arr) {
    for( i = 0; i < arr.length; i++) {
        count+=arr[i];
        arr[i]=count;
    }
    return arr;
}



for(i=0;i<getRandomInt(10,20);i++)
{
    arr.push(getRandomInt(1,100));
}

//alert(arr_test+'\n'+getSums(arr_test)); //random

alert(arr+'\n'+getSums(arr)); //test [1,2,3,4,5]