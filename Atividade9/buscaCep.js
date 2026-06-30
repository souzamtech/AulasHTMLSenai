function buscarCep() {
    let cepDigitado = document.getElementById("cep").value;

    /* IMPLEMENTAÇÃO 1: Remove o hífen (-) automaticamente caso ele exista 
    Usamos o .replace para encontrar o "-" e trocá-lo por nada "" */
    cepDigitado = cepDigitado.replace("-", "");

    if (cepDigitado === "") {
        return;
    }
    if (cepDigitado.length !== 8 || isNaN(cepDigitado)) {
        /* Exibe o alerta de erro para o usuário quando não coloca os dígitos válidos de CEP */
        alert("CEP inválido! O CEP deve conter exatamente 8 números.");
        return; /* Esse 'return' finaliza a função aqui, impedindo que a API seja chamada inutilmente */
    }
    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            /* Verifica se a API retornou um CEP inexistente */
            if (dados.erro) {
                alert("CEP não encontrado")
                return;
            }
            /* Preenche automaticamente os inputs da tela com os dads da API */
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("uf").value = dados.uf;
        })
}

const campoCep = document.getElementById("cep");
campoCep.addEventListener('focusout', buscarCep);