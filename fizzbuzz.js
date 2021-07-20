/*let num = inputNum.addEventListener('submit', function(){
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
})

function answer(){
    alert(num);
}

let test = document.getElementById("input_id").value
function input(){
    console.log(test);
}
*/
function getInputValue(){
    let inputVal = parseInt(document.getElementById("inputId").value);
    let outputVal = document.getElementById("displayNum");

    
    for (let i = 1; i <= inputVal; i++) {
        if (i % 3 === 0) {
            console.log('fizz');
            let fizz = 'fizz';
            outputVal.appendChild(document.createTextNode(fizz + "!---"));
            
        } else {
            console.log(i);
            outputVal.appendChild(document.createTextNode(i + "---"));
        }
    }
} 
