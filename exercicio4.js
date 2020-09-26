function calcular() {
    let salario = parseFloat(document.getElementById('salario').value);
    let hora = parseFloat(document.getElementById('hora').value);
    let valorHora = hora * (salario / 2)
    let salarioBruto = hora * valorHora
    let imposto = (salarioBruto * 0.03)
    let salarioFinal = salarioBruto - imposto 

    document.write("valorHora: " + valorHora);
    document.write("salarioBruto: " + salarioBruto);
    document.write("imposto : " + imposto );
    document.write("Salario final: " + salarioFinal);
}