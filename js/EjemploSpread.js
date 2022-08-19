
function suma (){
    var i;
    var resutado = 0;
    var num = [4];
    for(i=0; i<4; i++){
        num[i] = prompt("Digite 4 numeros que usted quiera sumar:");
    }
    resutado = resultado(...num);
    alert("El resultado de la suma de 4 digitos es :"+ resutado);
}

function resultado (w,x,y,z){
    return parseInt(w) + parseInt(x) + parseInt(y) + parseInt(z);
}


window.onload = suma ();
