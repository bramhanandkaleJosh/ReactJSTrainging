

let out = function getNameInLoop(){
    for(let i = 0 ; i<10 ; i++){
        if(i==5){
            return 5;
        }
    }
}
document.write("value returned from loop", out());