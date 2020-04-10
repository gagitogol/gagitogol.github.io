var cuadrito = document.getElementById("area_dibujante");
var button1 = document.getElementById("color1");
var button2 = document.getElementById("color2");
var button3 = document.getElementById("color3");
var borrar = document.getElementById("borrar");

button1.addEventListener("click", color1);
button2.addEventListener("click", color2);
button3.addEventListener("click", color3);
borrar.addEventListener("click", sincolor);

var papel = cuadrito.getContext("2d");
var dibujar = false;
var x;
var y;
var movimiento = 1;
var color_linea;
var grosor = 6;

document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mouseup",dibujarUp);
document.addEventListener("mousedown",dibujarDown);

function dibujarDown()
{
  dibujar = true;
}

function dibujarUp()
{
  dibujar = false;
}

function dibujarMouse(evento)
{
  if (dibujar)
  {
    dibujarLinea(color_linea,x-movimiento,y-movimiento,x+movimiento,y+movimiento,papel);
     x = evento.offsetX;
     y = evento.offsetY;
  }
}
function color1 ()
{
  color_linea = ("blue") ;
}
function color2 ()
{
  color_linea = ("black") ;
}
function color3 ()
{
  color_linea = ("orange") ;
}
function sincolor()
{
  color_linea = ("white");
  grosor = 20;

}

dibujarLinea(color_linea,0,0,0,300,papel);
dibujarLinea(color_linea,0,0,300,0,papel);
dibujarLinea(color_linea,300,0,300,300,papel);
dibujarLinea(color_linea,0,300,300,300,papel);

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
