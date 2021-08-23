var count = 0; // variable declare
var countElement = document.querySelector("#count");

function add1() {
    count++;
    countElement.innerHTML =   count + " like(s)";
    console.log(count);
}