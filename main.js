let numCuadrados = 6;
let colors = generateRandomColors(numCuadrados);   //Paso 4 //Paso 11
let cuadrados = document.querySelectorAll(".square"); //Paso 5
let pickedColor = pickColor();
let span = document.querySelector("#colorDisplay")  //Paso 6
span.textContent = pickedColor; //Paso 7
let mensajeSpan = document.getElementById("message");
let h1 = document.querySelector("h1");
var btnReset = document.querySelector("#reset");
var btnFacil = document.querySelector("#btn-facil");
var btnDificil = document.querySelector("#btn-dificil");

btnReset.addEventListener("click", function(){
    colors = generateRandomColors(numCuadrados);
    pickedColor = pickColor();
    span.textContent = pickedColor;
    this.textContent = "New Color";
    message.textContent = "";
    for (var i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
    })

btnDificil.addEventListener("click", function(){
    btnFacil.classList.remove("selected");
    btnDificil.classList.add("selected");
    numCuadrados = 6;
    message.textContent = "";
    h1.style.background = "#232323"
    colors = generateRandomColors(numCuadrados);
    pickedColor = pickColor();
    span.textContent = pickedColor;
    for(var i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.background = colors[i];
        cuadrados[i].style.display = "block";
    }
    })
    ;

btnFacil.addEventListener("click", function(){
    btnDificil.classList.remove("selected");
    btnFacil.classList.add("selected");
    numCuadrados = 3;
    colors = generateRandomColors(numCuadrados);
    pickedColor = pickColor();
    span.textContent = pickedColor;
    message.textContent = "";
    h1.style.background = "#232323"
    for(var i = 0; i < cuadrados.length; i++) {
        if (colors[i]) {
            cuadrados[i].style.background = colors[i];
        } else {
            cuadrados[i].style.display = "none";
        }
        }
    })
    ;

function cualColor(){   //Paso 8.2
    var clickedColor = this.style.backgroundColor;
    if (clickedColor == pickedColor) {
        mensajeSpan.textContent = "Correct!";
        btnReset.textContent = "Play Again ?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    }else{
        this.style.background = "#232323";
        mensajeSpan.textContent = "Try Again";
    }
}
function changeColors(color){
    for(let i = 0; i < cuadrados.length; i++){
        cuadrados[i].style.background = color;
    }
}
function pickColor(){
    var num = Math.floor(Math.random() * colors.length);
    return colors[num]
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b +")";
}
function generateRandomColors(num){
    var arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

for(let i = 0; i < cuadrados.length;i++){
    cuadrados[i].style.backgroundColor = colors[i];     //Paso 5 - Colorear los cuadrados
    cuadrados[i].addEventListener("click",cualColor);
}