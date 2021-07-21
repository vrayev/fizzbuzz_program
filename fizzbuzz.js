let fizz = 'fizz!';
let buzz = 'buzz!';
let fizzbuzz = 'fizzbuzz!';

function getInputValue(){
    let inputVal = parseInt(document.getElementById("inputId").value);
    let outputVal = document.getElementById("displayNum");
    
    for (let i = 1; i <= inputVal; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log(fizzbuzz);
            if(i === inputVal){
                outputVal.appendChild(document.createTextNode(fizzbuzz));
            }else {
                outputVal.appendChild(document.createTextNode(fizzbuzz + "   |   "));
            }
        } else if (i % 3 === 0) {
            console.log(fizz);
            if(i === inputVal){
                outputVal.appendChild(document.createTextNode(fizz));
            }else {
                outputVal.appendChild(document.createTextNode(fizz + "   |   "));
            }
            
        } else if (i % 5 === 0){
            console.log(buzz);
            if(i === inputVal){
                outputVal.appendChild(document.createTextNode(buzz));
            }else {
                outputVal.appendChild(document.createTextNode(buzz + "   |   "));
            }
        } 
        
        else {
            console.log(i);
            if (i === inputVal) {
                outputVal.appendChild(document.createTextNode(i));
            }else {
                outputVal.appendChild(document.createTextNode(i + "   |   "));
            }
        }
    }
} 

