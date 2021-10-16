var last_position_of_x;
var last_position_of_y;
var color= "black";
var width= 1;
var Canvas= document.getElementById ("canvas1");
var ctx= Canvas.getContext("2d");
var width_of_the_screen= screen.width;
var new_width= screen.width - 70;
var new_height= screen.height - 250;
if (width<992){
Canvas.width= new_width;
Canvas.height= new_height;
document.body.style.overflow= "hidden";
}

Canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
color= document.getElementById("color").value;
width= document.getElementById("width").value;
last_position_of_x= e.touches[0].clientX- Canvas.offsetLeft;
last_position_of_y= e.touches[0].clientY- Canvas.offsetTop;
}

Canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
var current_position_of_x = e.touches[0].clientX - Canvas.offsetLeft;
var current_position_of_y = e.touches[0].clientY - Canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= width;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
last_position_of_x= current_position_of_x;
last_position_of_y= current_position_of_y;
}

function clearArea(){
ctx.clearRect(0, 0, Canvas.width, Canvas.height); 
}