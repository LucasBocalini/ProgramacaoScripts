let qtd = 0;

let array = [];

let otimo = 0;
let bom = 0;
let regular = 0;
let ruim = 0;

function calcular(){

    qtd += 1;

    let idade = parseInt(document.getElementById('idade').value);

    let opniao = parseInt(document.getElementById('Opniao').value);

    if(opniao === 1){
        otimo += 1;
    }else if(opniao === 2){
        bom += 1;
    }else if(opniao === 3){
        regular += 1;
    }else if(opniao === 4){
        ruim += 1;
    }

    array.push({
        idade : idade,
        opniao : opniao
    })

}

function result(){
    let element = document.getElementById('result');

    let aux = "<ul>";

    let booll = false;

    aux += `<li> Quatidade: ${qtd} </li>`;

    let somaIdade = 0;

    let arrayIdadeN = [];

    for(let i = 0; i < array.length; i++){
        somaIdade += array[i].idade < 1 ? 0 : array[i].idade;

        if(array[i].idade < 1){
            booll = true;
            arrayIdadeN.push(array[i].idade);
        }

    }

    aux += `<li> Otimo: ${(otimo / qtd) * 100}%</li>`;
    aux += `<li> Bom: ${(bom / qtd) * 100}%</li>`;
    aux += `<li> Regular: ${(regular / qtd) * 100}%</li>`;
    aux += `<li> Ruim: ${(ruim / qtd) * 100}%</li>`;

    if(booll){

        for(let i = 0; i < arrayIdadeN.length; i++){
            aux += `<li>Idade: ${arrayIdadeN[i]}</li>`;
        }
    }

    aux += `<li> Media idade: ${somaIdade / qtd} </li>`;

    aux += `</ul>`;

    element.innerHTML = aux;

}