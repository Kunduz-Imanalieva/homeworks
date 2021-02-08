let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let h1 = document.querySelector("h1");


h1.innerText = 0;
let num = 0;
let num2 = 32;

button1.addEventListener("click", function(){
    h1.style.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
})
    
button3.addEventListener("click", function(){
  num2 ++;
  h1.style.fontSize = num2 + "px";
})


button2.addEventListener("click", function(){
  num2 --;
  h1.style.fontSize = num2 + "px";
})


button4.addEventListener("click", function(){
  num ++;
  h1.innerText = num;

})

button5.addEventListener("click", function(){
  num --;
  h1.innerText = num;
})


