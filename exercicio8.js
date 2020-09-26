let candidato1 = 0;
let candidato2 = 0;
let branco = 0;
let nul = 0;

function calcular(){
    let element = parseFloat(document.getElementById('Candidato').value);

    if(element === 1){
        candidato1 += 1;
    }else if(element === 2){
        candidato2 += 1;
    }else if(element === 3){
        branco += 1;
    }else if(element === 4){
        nul += 1;
    }

}

function exibir(){
    let element = document.getElementById('result');

    let aux = "<ul>"

    let soma = candidato1 + candidato2 + branco + nul;

    let perCand1 = (candidato1 / soma) * 100;

    aux += `<li>candidato1: ${perCand1}%</li>` 

    let perCand2 = (candidato2 / soma) * 100;

    aux += `<li>candidato2: ${perCand2}%</li>` 

    let perBranco = (branco / soma) * 100;

    aux += `<li>Branco: ${perBranco}%</li>` 

    let perNul = (nul / soma) * 100;

    aux += `<li>Null: ${perNul}%</li>` 

    aux += "</ul>"

    element.innerHTML = aux;

}