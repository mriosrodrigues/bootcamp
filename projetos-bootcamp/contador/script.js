var valoratual = document.getElementById("contador");
var contador = 0;

adiciona.addEventListener("click", adicao);
subtrai.addEventListener("click", subtracao);

function adicao() {
    if (contador >= 10){
        removeEventListener("click", adicao);
    }else{
        contador = contador +1;
        valoratual.innerHTML = contador;
    }
}

function subtracao() {
	if (contador <= 0){
        removeEventListener("click", subtracao);
    }else{
        contador = contador -1;
        valoratual.innerHTML = contador;
    }
}