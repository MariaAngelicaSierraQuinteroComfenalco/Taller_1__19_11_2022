addEventListener(`DOMContentLoaded`, (e)=>{
    
    document.querySelector("body").innerHTML = "Ver la consola del navegador o oprima la tecla F12 para ver los resultados";
   
    let Inicio ="Bienvenidos a el punto 4";     
    console.log(Inicio);

    let Dias= 323;   
    console.group("¿Cuantos dias van del año?");
    console.log(Dias);
    console.groupEnd();

    let Hoy= true;   
    console.group("¿hoy es 19 de noviembre 2022?");
    console.log(Hoy);
    console.groupEnd();

    const constante= "la gravedad de la tierra es 9.8 m/s";
    console.log(constante);
})