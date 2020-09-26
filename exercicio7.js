function calcular(){

    let element = document.getElementById('result');

    let conta = "<ul>"
    for(let i = 1; i < 500; i++){
        if((i % 5) === 0){
            conta += `<li> Valor: ${i} </li>` 
        }
    }
    conta += "</ul>";

    element.innerHTML = conta;

}