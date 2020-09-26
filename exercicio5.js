function calcular() {
    let salario = parseFloat(document.getElementById('salario').value);

    if (salario < 1000) {
        const novoSalario = salario + (salario * 0.15);
        document.write("Novo salario: " + novoSalario);
    } else if (salario >= 1000 && salario <= 1500) {
        const novoSalario = salario + (salario * 0.10);
        document.write("Novo salario: " + novoSalario);
    } else if (salario > 1500) {
        const novoSalario = salario + (salario * 0.05);
        document.write("Novo salario: " + novoSalario);
    }
}