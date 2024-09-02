describe('Gerador de CPF', () => {
  // Define um bloco de testes para o "Gerador de CPF".
  it('Gera CPF com início 7', () => {
    // Define um caso de teste específico que verifica se o CPF gerado começa com 7.

    // Intercepta todas as solicitações de rede XHR e Fetch para não serem logadas.
    // Isso ajuda a manter os logs mais limpos, ignorando requisições que não afetam o teste.
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });

    // Trata exceções não capturadas, fazendo com que não interrompam o teste.
    // Isso evita que o teste falhe por erros inesperados que não afetam o objetivo do teste.
    Cypress.on('uncaught:exception', () => false);

    // Navega para a página onde o CPF pode ser gerado.
    cy.visit('https://www.4devs.com.br/gerador_de_cpf');

    // Seleciona o botão ou elemento para remover a pontuação do CPF gerado.
    cy.get('#pontuacao_nao').click();

    // Seleciona o estado 'AM' (Amazonas) na lista suspensa de estados.
    cy.get('[name="cpf_estado"]').select('AM');

    // Define a função 'gerarCpf' para gerar e verificar o CPF.
    function gerarCpf() {
      // Clica no botão para gerar um novo CPF.
      cy.get('#bt_gerar_cpf').click();
      
      // Aguarda 2 segundos para garantir que o CPF seja gerado e atualizado na página.
      cy.wait(2000);

      // Obtém o texto do elemento que contém o CPF gerado.
      cy.get('#texto_cpf').then(($div) => {
        // Armazena o texto do elemento (o CPF gerado) em uma variável.
        const cpfValue = $div.text();

        // Verifica se o CPF começa com o número '7'.
        if (cpfValue.startsWith('7')) {
          // Registra no log que o CPF começa com '7'.
          cy.log('CPF começa com 7: ' + cpfValue);

          // Verifica se o primeiro caractere do CPF é '7' usando uma asserção.
          expect(cpfValue.charAt(0)).to.equal('7');
        } else {
          // Se o CPF não começar com '7', chama a função novamente para tentar gerar outro CPF.
          gerarCpf();
        }
      });
    }

    // Chama a função 'gerarCpf' para iniciar o processo de geração e verificação do CPF.
    gerarCpf();
  });
});