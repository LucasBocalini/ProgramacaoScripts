function classificar() {
    let idade = parseFloat(document.getElementById('idade').value);

    if (idade >= 5 && idade <= 7) {
        document.write("Infantil A")
    } else if (idade >= 8 && idade <= 10) {
        document.write("Infantil B")
    } else if (idade >= 11 && idade <= 13) {
        document.write("juvenil A")
    } else if (idade >= 14 && idade <= 17) {
        document.write("juvenil B")
    } else if(idade > 17){
        document.write("maior que 17 anos")
    } else{
        document.write("idade invalida")
    }
}