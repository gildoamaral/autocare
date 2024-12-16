# Testes de Sistema <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 40>

## O que são Testes de Sistema?

Testes de sistema são testes automatizados que verificam o comportamento completo de um sistema, validando que ele funciona conforme esperado em um ambiente real ou próximo do real. Eles englobam a verificação de todas as funcionalidades do sistema, desde a interface do usuário até a integração com bancos de dados, APIs externas e outros serviços.

## Testes de Sistema - AutoCare <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>
### Testes de Sistema (Web)

O teste de sistema no AutoCare foi realizado com o objetivo de validar o funcionamento integral do fluxo de login, tanto na versão web quanto mobile. Para garantir que os componentes do sistema, a comunicação com o backend e o comportamento do usuário estejam operando conforme esperado, foram implementados testes unitários e testes de integração. Esses testes abrangem a renderização dos componentes, a interação com o sistema, a validação de dados e o comportamento do sistema em diferentes cenários.

No contexto do componente de login, foi desenvolvido um teste de sistema utilizando Vitest e Testing Library. O objetivo foi garantir que o fluxo completo de login, desde a renderização do formulário até a interação do usuário e a resposta do backend, funcione corretamente em um cenário real de uso. Esse teste envolve tanto a verificação da interface de usuário quanto a comunicação com o backend, validando o sucesso ou falha do login e o redirecionamento do usuário conforme o resultado da autenticação.


#### O teste de sistema é dividido em duas partes principais:

`1.` **Renderização do Componente**: <br> O teste verifica se o componente de login é renderizado corretamente quando utilizado dentro de um *MemoryRouter*. Esta etapa assegura que todos os elementos visuais necessários, como campos de entrada e o botão de login, estão presentes na tela.

`2.` **Login com Sucesso**: <br> Nesta etapa, simulamos a interação do usuário com o formulário de login. Utilizamos o método `fireEvent` para preencher os campos de e-mail e senha, e em seguida, disparamos um evento de clique no botão de login. O teste também mocka a chamada de API utilizando o axios, simulando uma resposta bem-sucedida com um token. Após a submissão do formulário, o teste verifica se a mensagem de sucesso "Login realizado com sucesso!" é exibida na tela, confirmando que o fluxo de login foi completado com êxito. 

Este teste não apenas valida a interação do front-end com o back-end, mas também garante que o sistema, como um todo, está respondendo corretamente aos inputs do usuário e realizando o redirecionamento adequado.


#### Registro de imagens

<p align="start">
    <img src="https://github.com/user-attachments/assets/59b484a3-355d-4302-a805-bf7a99b065ff" alt="Componente Login" width=50%">
    <br>

<p align="center">
<img src="https://github.com/user-attachments/assets/0ce0d016-d580-4421-a3b9-b2ddd95a5f5c" alt="Registro de Código + Registro de Teste">
<br>

<p align="center">
    <img src="https://github.com/user-attachments/assets/0e9b93a2-f922-4612-aec1-2d9aeb6915ad" alt="Registro de Teste de Integração">
<br>

##

### Testes de Sistema (Mobile)

Para a versão mobile da aplicação, o teste de sistema foi desenvolvido utilizando Jest. Os testes verificam a renderização correta dos elementos da interface, a validação dos campos obrigatórios e o comportamento de autenticação com o backend, abrangendo os seguintes cenários:

`1.` **Renderização do Formulário de Login**: O teste verifica se os elementos da interface, como placeholders e botões, estão sendo exibidos corretamente.

`2.` **Validação dos Campos Obrigatórios**: O teste simula a interação do usuário ao pressionar o botão de login sem preencher os campos obrigatórios, verificando se o alerta é acionado corretamente.

`3.` **Login Bem-Sucedido**: Simula uma requisição ao backend e, caso as credenciais estejam corretas, navega para a tela principal. Este cenário valida o fluxo completo de autenticação do usuário.

`4.` **Login com Falha**: Simula uma tentativa de login com credenciais inválidas e verifica se o alerta de erro é exibido, garantindo que o sistema responda adequadamente às falhas de autenticação.

##

#### Registro de imagens

<p align="start">
<img src="https://github.com/user-attachments/assets/42ac76d9-10ee-4224-8e6f-10300ffd18af" alt="Login.test.js.1" width="80%">
</p>

<p align="start">
<img src="https://github.com/user-attachments/assets/7b00f069-2211-4b93-a628-b385b20ed8ab" alt="Registro de sucesso dos testes unitários Mobile" width="80%">
</p>

<p align="start">
<img src="https://github.com/user-attachments/assets/42ac76d9-10ee-4224-8e6f-10300ffd18af" alt="Login.test.js.1" width="80%">

<img src="https://github.com/user-attachments/assets/985c51e0-35f4-460d-adbb-925bb5789e2b" alt="Login.test.js.2" width="80%">

<img src="https://github.com/user-attachments/assets/90c9bc10-a61c-42e3-a853-c7f0739af348" alt="Login.test.js.3" width="80%">

<img src="https://github.com/user-attachments/assets/31e51b71-0f96-43df-a2e4-7f00351c089f" alt="Terminal - Sucesso" width="80%">
</p>

### Conclusão <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

Os testes realizados para o componente de login, tanto para a versão web quanto mobile, configuram testes de sistema completos, pois envolvem a interação do usuário com o sistema como um todo. Eles verificam a renderização da interface, a validação dos dados inseridos, a comunicação com o backend e o comportamento do sistema em cenários de sucesso e falha. Além disso, validam o redirecionamento do usuário após a autenticação bem-sucedida, garantindo que o sistema atenda às expectativas em um fluxo real de uso.

