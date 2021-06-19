let nombre = prompt("Bienvenido a nuestra pagina, ¿Como te llamas?");
alert("Hola" +" " + nombre);


function fecha() 
{
    var hoy = new Date();
    document.write(hoy.toDateString());
}