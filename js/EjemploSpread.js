
function suma (){
    var i;
    var resutado = 0;
    var num = [4];
    for(i=0; i<4; i++){
        num[i] = prompt("Digite un numero:");
    }
    resutado = resultado(...num);
    alert("El resultado de la suma, resta y multiplicacion es :"+ resutado);
}

function resultado (w,x,y,z){
    return parseInt(w) + parseInt(x) - parseInt(y) * parseInt(z);
}


window.onload = suma ();
