addEventListener(`DOMContentLoaded`, (e)=>{
    
    document.querySelector("body").innerHTML = "Ver la consola del navegador o oprima la tecla F12 para ver los resultados";
    let valor = Number(prompt("Dame un numero",0));
    console.group("el numero ingresado fue");
    console.log(valor);
    console.groupEnd();
})
