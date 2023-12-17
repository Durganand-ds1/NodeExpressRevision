
// creating a simple server

const express = require("express");

const app= express();
const port =3000;
const obj = {
    id: 1,
    name:"durga",
    address:{
        city:"banga",
        state:"wb"
    }
}

//map function is used to traverse in an array
 const arr =[1,2,3,4,5];

 //filtering 
 //give me the even value
 //first method
 function even(arr){
    let arr2=[];
     for(let i =0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr2.push(arr[i]);
        }
     }
     return arr2;
 }

app.get("/",(req,res)=>{

    //changing array into 2 table
    // res.send(arr.map((i)=>{
    //     return i*2;
    // }))

    //filtering an array
    res.send(arr.filter((i)=>{
        if(i%2==0){
            return true;
        }else{
            return false;
        }
    }))
    // const arr3 = even(arr);
    //  res.send(arr3);
})

app.listen(port,()=>{
    console.log("litsening on :-" +port);
});





