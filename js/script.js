const botao = document.querySelector('button');

const img1 = document.querySelector('#img1');
const nome1 = document.querySelector('#nome1');
const especie1 = document.querySelector("#especie1");
const condicao1 = document.querySelector('#status1');

const img2 = document.querySelector('#img2');
const nome2 = document.querySelector('#nome2');
const especie2 = document.querySelector("#especie2");
const condicao2 = document.querySelector('#status2');

const img3 = document.querySelector('#img3');
const nome3 = document.querySelector('#nome3');
const especie3 = document.querySelector("#especie3");
const condicao3 = document.querySelector('#status3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let personagensAleatorios = gerarValorAleatorio() + "," + gerarValorAleatorio() + "," + gerarValorAleatorio();
    
    return fetch(`https://rickandmortyapi.com/api/character/${personagensAleatorios}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {

        img1.src = data[0].image;
        img1.alt = data[0].name;
        nome1.innerHTML = data[0].name;
        especie1.innerHTML = data[0].species;
        condicao1.innerHTML = data[0].status;

        img2.src = data[1].image;
        img2.alt = data[1].name;
        nome2.innerHTML = data[1].name;
        especie2.innerHTML = data[1].species;
        condicao2.innerHTML = data[1].status;

        img3.src = data[2].image;
        img3.alt = data[2].name;
        nome3.innerHTML = data[2].name;
        especie3.innerHTML = data[2].species;
        condicao3.innerHTML = data[2].status;

    });
}

botao.onclick = pegarPersonagem;