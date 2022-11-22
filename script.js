let result = 0;
// with an array you can have it display all teh last functions - ['+5,']
const numArr = [] 

//HTML
//contianer with id

// JS
// TODO
// init state
// number 1 - 9, button.AC button, +/-, %, (+ - * /)
function makeNumKeys(){
    for(let i = 1; i < 10; i++){
        console.log(i)
    }
}




// functions for all operations:
// add, sub, mul, div. equal, percentage, negative, dot
// ac and c
// display


const display = document.querySelector("#display");
display.textContent = result;
display.style.color = "white";
display.style.fontSize = "4rem";

const addition = document.querySelector(".add");
addition.addEventListener("clicl", () =>{
    numArr.push("+");
    console.log({numArr});
})

const equal = document.querySelector(".equal");
equal.addEventListener("clicl", () =>{
    add(result);
})

const oneKey = document.querySelector(".one");
oneKey.addEventListener("click", () => {
    console.log("working");
    numArr.push(1);
})
console.log(oneKey)

function add (a, b){
    return a+b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

console.log({numArr});