let inputAdultos = document.querySelector("#adultos");
let inputCriancas = document.querySelector("#criancas");
let inputDuracao = document.querySelector("#duracao");

let resultado = document.querySelector("#resultado");

function calc() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    document.querySelector("#resultado").style.display = "block";

    let meetTotal = meetPerson(duracao) * adultos + (400 / 2 * criancas);
    let beerTotal = beerPerson(duracao) * adultos;
    let drinkTotal = drinkPerson(duracao) * criancas + (100 / 2 * criancas);

    resultado.innerHTML = `<h3> Será necessário</h3>`
    resultado.innerHTML += `<p class="meet">${meetTotal/500} kg de carne</p>`
    resultado.innerHTML += `<p class="beer">${Math.ceil(beerTotal/157)} latas de cerveja</p>`
    resultado.innerHTML += `<p class="soda">${Math.ceil(drinkTotal/500)} garrafas de bebida</p>`
}

function meetPerson(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function beerPerson(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function drinkPerson(duracao) {
    if (duracao >= 6) {
        return 1700;
    } else {
        return 1200;
    }
}