
let box = document.getElementById('box');
let h2 = document.getElementById('tabel');


let num = document.getElementById('inp1');
let range = document.getElementById('inp2');
function fun() {

  for (var input = 1; input <= range.value; input++) {
    document.write("<h1>" + num.value + " x ", input + " = ", num.value * input, "<br>", "</h1>");
    
  }

}