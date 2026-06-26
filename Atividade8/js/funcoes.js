function soma() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Soma", primeiroNumero, segundoNumero, resultado);
}

function subtracao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Subtração", primeiroNumero, segundoNumero, resultado);
}

function multiplicacao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Multiplicação", primeiroNumero, segundoNumero, resultado);
}

function divisao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Divisão", primeiroNumero, segundoNumero, resultado);
}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", SegundoNumero: " + num2);
    console.log("Resultado: " + resultado);
    console.log("--------------------------------------");

    let operacao = {
        funcao: nomeDaFuncao,
        numero1: num1,
        numero2: num2,
        resultado: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoCalculos")) || [];
    historicoLocal.push(operacao);

    localStorage.setItem("historicoCalculos", JSON.stringify(historicoLocal));
}

function apagar_historico() {
    let confirmaApagar = window.confirm("Você deseja apagar apagar seu histórico")

    if (confirmaApagar) {
        localStorage.clear();


    }
}

function calculo_Impostos() {
    let valorProduto = Number(document.getElementById("Calculo de Impostos").value);
    let resultado

    if (valorProduto <= 50) {
        resultado = (valorProduto * 1.20);

    } else {

        let valorCom20 = (valorProduto * 0.20) + valorProduto;


        resultado = valorCom20 * 1.90;


    }
    document.getElementById("resultado").innerText = "R$ " + resultado.toFixed(2);

    salvarHistoricoImpostos(valorProduto, resultado);
}






/* 
    Nova função de calculo de imposto de importação

    Se for menos que 50USD 
    voce vai ter que pagar o valor do produto, mais 20%

    Se o produto custar mais de 50USD
    Voce vai pagar o valor do produto +20%, depois mais 90% sobre o produto

     Seja salvo num novo objeto, dentro do local storage, seu hitórico de coversão.

    Ex: histórico de calculos matemáticos, e histórico de conversões

*/




















