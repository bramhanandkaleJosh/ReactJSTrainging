

// (function (){
//     for(let i = 0 ; i<10 ; i++){
//         document.write("value returned from loop", i);
//         if(i==5){
//            console.log("I am outside of function");
//         }
//     }
// })();



// function outer(){
// let a = 5;

//     function inner(){
//         console.log("printing from outer funciton", a);
//     }
// }


const func = () => {
    return "Test";
}

const returnFunc = () => {
    return func ; 
}

console.log(returnFunc());

console.log(returnFunc()());



// const  obj1= {
//     sample :"hello"
// }
// let num = 5;
// const obj2 = (num) => 
//     num+4;
// ;

// const obj3 = (num) => {
//     return num+4;
// };
// const b = obj2(5);
// const c = obj3(5);
// console.log(c,"outside : ", b);