function comparaNumeros(num1, num2){
    var primeiraFrase = criaPrimeiraFrase(num1, num2);
    var segundaFrase = criaSegundaFrase(num1, num2);

    return primeiraFrase + segundaFrase;
}

function criaPrimeiraFrase(num1, num2){
    var primeiraFrase = 'Os numeros ' + num1 + ' e ' + num2;
    var simNao = ' não';

    if (num1 === num2){
        simNao = '';
    }

    return primeiraFrase + simNao + ' são iguais. ';
}

function criaSegundaFrase(num1, num2){
    var segundaFrase = 'Sua soma é '
    var soma = num1 + num2;
    var maiorMenor10;
    var maiorMenor20;
    
    (soma > 10) ? maiorMenor10 = ' que é maior que 10 ' : maiorMenor10 = ' que é menor que 10 ';
    (soma > 20) ? maiorMenor20 = ' e maior que 20.' : maiorMenor20 = ' e menor que 20.';

    return segundaFrase + soma + maiorMenor10 + maiorMenor20;
}

console.log(comparaNumeros(12, 12));