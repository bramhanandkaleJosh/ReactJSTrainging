// 2.  Do the same using switch case.

let  age = prompt("enter the age of the person", 25);

switch(true){

    case (age<=12):
        console.log("child");
        alert("child");
        break;

    case (age>12 && age <=18) :
        console.log("teen");
        alert("teen");
        break;

    case (age>18) :
        console.log("adult");
        alert("adult");
        break;
}