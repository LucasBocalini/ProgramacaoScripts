function calcular() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = peso / (altura * altura);

    if(imc < 20){
        document.write("Abaixo do peso")
    }else if(imc >= 20 && imc < 25){
        document.write("Peso ideal")
    }else if(imc >= 25){
        document.write("Acima do peso")
    }
}