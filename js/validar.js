//criando os objetos dos elementos de texto do form
let nome = document.querySelector("#inputName");
let nomeHelp = document.querySelector("#inputNameHelp");
let ano = document.querySelector("#inputYear");
let anoHelp = document.querySelector("#inputYearHelp");
let email = document.querySelector("#inputEmail");
let emailHelp = document.querySelector("#inputEmailHelp");
let senha = document.querySelector("#inputPassword");
let senhaHelp = document.querySelector("#inputPasswordHelp");
let meter = document.querySelector("#passStrengthMeter");
let formulario = document.querySelector("#inputResult");

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo mude, será chamada a função*/
nome.addEventListener('focusout', validarNome);
ano.addEventListener('focusout', validarAno);
email.addEventListener('focusout', validarEmail);
senha.addEventListener('focusout', validarSenha);


// Função para validar o nome do usuário
function validarNome() {
    const valorNome = nome.value;
    const regexNome = /^[a-zA-Z ]{5,}$/; // Somente letras e comprimento maior que 6
    if (!regexNome.test(valorNome)) {
        nomeHelp.textContent = "O nome deve conter apenas letras e ter no mínimo 6 caracteres";
        nomeHelp.style.color = "red";
        return false;
    } else {
        nomeHelp.textContent = "";
        return true;
    }
}

// Função para validar o ano de nascimento
function validarAno() {
    const valorAno = parseInt(ano.value);
    if (valorAno < 1900 || valorAno > 2022) {
        anoHelp.textContent = "O ano de nascimento deve ser entre 1900 e 2022";
        anoHelp.style.color = "red";
        return false;
    } else {
        anoHelp.textContent = "";
        return true;
    }
}

// Função para validar o email
function validarEmail() {
    const valorEmail = email.value;
    const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.(com|br|net|org)$/; // Email válido
    if (!regexEmail.test(valorEmail)) {
        emailHelp.textContent = "O email deve ter um formato válido";
        emailHelp.style.color = "red";
        return false;
    } else {
        emailHelp.textContent = "";
        return true;
    }
}

// Função para validar a senha e retornar o nível de segurança
function validarSenha() {
    const valorSenha = senha.value;
    const valorNome = nome.value;
    const valorAno = ano.value;
    const regexCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const regexNumero = /\d/;
    const regexLetra = /[a-zA-Z]/;
    const regexLetraMaiuscula = /[A-Z]/;

    // Verificar ocorrência de caractere especial, número e letra maiúscula
    const temCaractereEspecial = regexCaractereEspecial.test(valorSenha);
    const temNumero = regexNumero.test(valorSenha);
    const temLetra = regexLetra.test(valorSenha);
    const temLetraMaiuscula = regexLetraMaiuscula.test(valorSenha);

    // Verificar comprimento da senha
    if (valorSenha.length < 6 || valorSenha.length > 20) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
        meter.value = 0;
        return false;
    }

    // Verificar se contém pelo menos um caracter especial, número e letra
    if (!temCaractereEspecial || !temNumero || !temLetra) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
        meter.value = 0;
        return false;
    }

    // Verificar se contém o nome ou ano de nascimento
    if ((valorSenha.includes(valorNome) && valorNome != "") || (valorSenha.includes(valorAno) && valorAno != "")) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
        meter.value = 0;
        return false;
    }

    // Contadores para contar a quantidade de caracteres especiais, números e letras maiúsculas
    let contadorCaracteresEspeciais = 0;
    let contadorNumeros = 0;
    let contadorLetrasMaiusculas = 0;

    // Loop através da senha para contar os caracteres especiais, números e letras maiúsculas
    for (let i = 0; i < valorSenha.length; i++) {
        if (regexCaractereEspecial.test(valorSenha[i])) {
            contadorCaracteresEspeciais++;
        } else if (regexNumero.test(valorSenha[i])) {
            contadorNumeros++;
        } else if (regexLetraMaiuscula.test(valorSenha[i])) {
            contadorLetrasMaiusculas++;
        }
    }

    // Determinar o nível de segurança da senha
    if (valorSenha.length <= 8 && temCaractereEspecial && temNumero) {
        senhaHelp.textContent = "Senha Fraca";
        senhaHelp.style.color = "red";
        meter.value = 10;
        return true;
    } else if (valorSenha.length > 12 && contadorCaracteresEspeciais > 1 && contadorNumeros > 1 && contadorLetrasMaiusculas > 1) {
        senhaHelp.textContent = "Senha Forte";
        senhaHelp.style.color = "green";
        meter.value = 30;
        return true;
    } else if (valorSenha.length > 8 && temCaractereEspecial && temNumero && temLetraMaiuscula) {
        senhaHelp.textContent = "Senha Moderada";
        senhaHelp.style.color = "orange";
        meter.value = 20;
        return true
    } else {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
        meter.value = 0;
        return false;
    }
}

// Função principal para validar todos os campos e exibir mensagem
function validarForm() {
    // Executar todas as funções de validação
    const nomeValido = validarNome();
    const anoValido = validarAno();
    const emailValido = validarEmail();
    const senhaValida = validarSenha();

    // Verificar se todos os campos são válidos
    if (nomeValido && anoValido && emailValido && senhaValida) {
        // Todos os campos são válidos, exibir mensagem de sucesso
        formulario.textContent = "Seus dados foram registrados";
        formulario.style.color = "green";
    } else {
        // Pelo menos um campo não é válido, exibir mensagem de erro
        formulario.textContent = "Seus dados não foram registrados";
        formulario.style.color = "red";
    }
}


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    validarForm(); // Chama a função de validação do formulário
});



/*
Alguns exemplos de entradas para teste:

Ana - erro
1990
ana@example.com
Senha@123

Carlos
1890 / 2023 - erro
carlos@example.org
Senha@123

Leticia
1980
maria.example.net - erro
Senha@123

Arnaldo
1975
pedro@example.br
senha123 - erro

Roberta
1988
roberta@example.com
Roberta@123 - erro

Marcos
2000
marcos@example.org
Senha@2000 - erro

Camila
1995
camila@example.com
SSenha@@20222 - forte

*/