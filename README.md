# Cadastro de Usuário com Validação de Campos

Este é um projeto de página de cadastro de usuário que inclui validação de campos utilizando HTML, CSS (via Bootstrap) e JavaScript. A página coleta informações do usuário, como nome, ano de nascimento, e-mail e senha, e fornece feedback em tempo real sobre a validade dos dados inseridos.

### Campos do Formulário

1. **Nome**: Deve conter apenas letras e ter no mínimo 6 caracteres.
2. **Ano de Nascimento**: Deve estar entre 1900 e 2022.
3. **Email**: Verifica se o e-mail tem o formato válido, incluindo domínios comuns.
4. **Senha**: Avaliada em relação a:
   - Comprimento mínimo e máximo (6-20 caracteres).
   - Inclusão de caracteres especiais, números e letras maiúsculas.
   - Verificação contra o nome e ano de nascimento do usuário (para evitar senhas fracas).

### Estrutura do Código

1. **HTML**: Estrutura da página, contendo um formulário de cadastro com os campos de entrada e exibição de mensagens de ajuda e feedback.
2. **JavaScript**:
   - Funções de validação para cada campo de entrada, exibindo mensagens de erro ou sucesso.
   - Validação da senha com um medidor de segurança, alterando o nível de força conforme os requisitos atendidos.
   - Função principal de validação que verifica todos os campos e exibe uma mensagem geral de confirmação ou erro.

## Funcionalidades de Validação

As validações são feitas ao perder o foco (evento `focusout`) de cada campo individual, e novamente ao enviar o formulário. Se algum campo não atender aos critérios de validação, uma mensagem de erro é exibida abaixo do campo. Ao submeter o formulário com todos os campos válidos, é exibida uma mensagem de sucesso.

### Exemplo de Validação de Senha

A força da senha é categorizada como:
- **Fraca**: Menor que 8 caracteres, com um caractere especial e um número.
- **Moderada**: Entre 8 e 12 caracteres, contendo caractere especial, número e uma letra maiúscula.
- **Forte**: Maior que 12 caracteres, contendo mais de um caractere especial, números e letras maiúsculas.

### Exemplos de Entradas de Teste

| Nome       | Ano  | Email                | Senha           | Resultado               |
|------------|------|----------------------|------------------|-------------------------|
| Ana        | 1990 | ana@example.com      | Senha@123       | Sucesso                 |
| Carlos     | 1890 | carlos@example.org   | Senha@123       | Erro (ano inválido)     |
| Leticia    | 1980 | maria.example.net    | Senha@123       | Erro (e-mail inválido)  |
| Arnaldo    | 1975 | pedro@example.br     | senha123        | Erro (senha inválida)   |
| Roberta    | 1988 | roberta@example.com  | Roberta@123     | Erro (nome na senha)    |
| Marcos     | 2000 | marcos@example.org   | Senha@2000      | Erro (ano na senha)     |
| Camila     | 1995 | camila@example.com   | SSenha@@20222   | Sucesso (senha forte)   |

## Tecnologias Utilizadas

- **HTML5** e **CSS3** para estrutura e estilo.
- **Bootstrap** para layout responsivo e estilização.
- **JavaScript** para validação dos campos e verificação de segurança da senha.

## Como Executar o Projeto

1. Clone o repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Preencha os campos e observe a validação automática ao perder o foco de cada campo e ao enviar o formulário.

## Considerações

Este projeto demonstra a importância de validações no lado do cliente para fornecer uma experiência de usuário interativa e intuitiva. Para maior segurança, recomenda-se adicionar validações adicionais no lado do servidor ao integrar o sistema em um ambiente de produção.
