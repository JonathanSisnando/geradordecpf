Teste de Geração de CPF

Este projeto contém um teste automatizado para verificar a funcionalidade de geração de CPFs em um site específico. O teste usa a ferramenta Cypress para garantir que o CPF gerado pelo site começa com o número 7.

Pré-requisitos

Antes de executar os testes, certifique-se de que você tenha as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

Instalação

1. Clone o repositório:

Se ainda não fez isso, clone o repositório para o seu ambiente local:

git clone https://github.com/JonathanSisnando/geradordecpf.git

cd nome-do-repositorio

2.Instale as dependências do projeto:

   Navegue até o diretório do projeto e execute o comando abaixo para instalar o Cypress e outras dependências:
   npm install




Estrutura do Projeto

cypress/integration/: Contém os arquivos de teste Cypress. O arquivo principal é gerador_cpf_spec.js, que contém o teste de geração de CPF.

Executando os Testes

1.Inicie o Cypress:

Para iniciar a interface gráfica do Cypress e executar os testes, use o comando:
npx cypress open

Isso abrirá o Cypress Test Runner, onde você poderá clicar no arquivo de teste gerador_cpf_spec.js para executá-lo.

2. Executar em modo headless (opcional):

Se você preferir executar os testes em modo headless (sem interface gráfica), use o comando:
npx cypress run

Descrição do Teste

O teste gerador_cpf_spec.js realiza as seguintes ações:

1.	Navega para a página de geração de CPF no site 4devs.
2.	Configura o site para gerar um CPF sem pontuação e seleciona o estado Amazonas.
3.	Gera um CPF e verifica se o CPF gerado começa com o número 7.
4.	Se o CPF não começar com 7, o teste gera outro CPF até encontrar um que atenda ao critério.
Código do Teste
O código do teste está localizado em cypress/integration/gerador_cpf_spec.js e segue o padrão Cypress para definição e execução de testes.

Contribuindo

Se você quiser contribuir para este projeto, sinta-se à vontade para enviar pull requests ou abrir problemas. Certifique-se de seguir as melhores práticas e adicionar testes quando necessário.

Licença

Este projeto está licenciado sob a MIT License.
