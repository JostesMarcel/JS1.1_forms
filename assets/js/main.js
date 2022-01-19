let numb = document.getElementById("numb");
console.log(numb);
let numbers = document.getElementById("numbers");

function calc() {
    let result = 0;
    console.log(numb.value * 2);
    result = numb.value * 2;
    numbers.innerHTML = result;
}
console.log("test");