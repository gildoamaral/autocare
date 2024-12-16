# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.
<br><br><br>

---

# Programação e Teste de Funcionalidade: <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 50>

## **Pagina Base - User Menu

Prioridade Alta
![navbar autocare](https://github.com/user-attachments/assets/2f7ffdbe-9fe2-49ce-89a0-ba0c3dc3d1ec)

### Especificação Funcional
- ** Menu funcional**: O menu deve conter botões de acesso às outras funcionalidades.
- ** Layout Padrão da Aplicação**
- ![navbar autocare](https://github.com/user-attachments/assets/2f7ffdbe-9fe2-49ce-89a0-ba0c3dc3d1ec)



## Artefatos de Código 
- **Header**
- ![header autocare](https://github.com/user-attachments/assets/2e02463a-f322-4255-bda9-1658b26991f7)
- **Footer**
-  ![footer autocare](https://github.com/user-attachments/assets/21e2f15e-aa3f-4266-a195-f0f89a82c70d)
- **UserMenu**
  ![usermenu autocare](https://github.com/user-attachments/assets/90102af3-bb1c-4610-abaa-71b5cd875626)


  
**Pagina Base Auto Care**
- Localização: `src\components\UserMenu`
   - Descrição: Componente base para inicio de experiencia de usuario já logado.Deve levar o usuário as outras paginas.
     
<h3 align="center">Capturas de Tela</h3>

![pagbase autocare](https://github.com/user-attachments/assets/75785996-cd00-4f80-b683-e4926d0161e5)


## **Tela de Cadastro (RF-01: Cadastro de Usuário)** <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

**Descrição do Requisito**

Nesse requisito, é onde esta contido o formulário para a criação da conta do usuário

Prioridade: **Alta**

## Artefatos de Código <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

**Cadastro Front-end (`Cadastro.jsx`)**  
   - Localização: `src/pages/login/Cadastro.jsx`
   - Descrição: Componente que exibe o formulário de Cadastro com campos de nome, email e senha, além do botão de cadastro.
   
<h3 align="center">Capturas de Tela</h3>

<div align="center">

<img src="https://github.com/user-attachments/assets/2198ae5e-2d62-47a3-b987-415b5d8b5304" alt="Erro - Sem dados" width="80%" />
</div>


<h3> Estruturas de Dados Utilizadas  </h3>

- **Token JWT**: Token de autenticação que garante a segurança das sessões de usuário.
- **Local Storage**: Utilizado para armazenar o token JWT do usuário logado no navegador.
- **Banco de Dados (MongoDB)**: Armazena informações de nome,email e senha dos usuários (senha protegida com hash).

### Teste do Requisito RF-01 <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>
Para verificar o funcionamento do Cadastro, siga estas etapas:

`1.` Acesse a tela de cadastro


`2.` Insira o nome, email e senha nos campos


`3.` Espere a mensagem retornando que o cadastro foi realizado.
<br><br>
<h3 align="center">Testes de Cadastro</h3>
<div align="center">
  
  
<h3>Usuario Cadastrdo</h3>


  <img src="https://github.com/user-attachments/assets/8721d19f-5123-4334-aee3-0570a45306a0" alt="Erro - Sem dados" width="80%" />
<br><br>
<h3>Erro ao Cadastrar</h3>

  <img src="https://github.com/user-attachments/assets/017fbf95-f5f4-472f-a06e-e2d459c9f1ef" alt="Erro - Senha incorreta" width="80%" />
<br><br>

</div>


## **Tela de Login (RF-02: Autenticação de Usuário)** <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

**Descrição do Requisito**

Este requisito assegura que a aplicação AutoCare permita ao usuário realizar login para uma experiência personalizada e segura. Após o login, o sistema fornece uma interface individualizada que possibilita o acesso a funcionalidades específicas de cada conta.

Prioridade: **Alta**

### Especificação Funcional  
- **Validação de Login**: O sistema valida o login utilizando um formulário com campos de email e senha.
- **Autenticação JWT**: Ao submeter credenciais válidas, o sistema gera um token de autenticação (JWT), armazenado com segurança no `localStorage` do navegador.
- **Sessão Contínua**: O token permite autenticação nas requisições enquanto o usuário estiver logado, garantindo uma experiência contínua.

## Artefatos de Código <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

**Login Front-end (`Login.jsx`)**  
   - Localização: `src/pages/login/Login.jsx`
   - Descrição: Componente que exibe o formulário de login com campos para email e senha, além de um botão de login.
   
<h3 align="center">Capturas de Tela</h3>

<div align="center">
  <img src="https://github.com/user-attachments/assets/cce12ac7-aea1-4674-80a6-82f46de945ee" alt="Captura de tela 1" width="80%" />
  <img src="https://github.com/user-attachments/assets/795e0d77-f09f-426e-bfff-48fc2d84fd76" alt="Captura de tela 2" width="80%" />
  <img src="https://github.com/user-attachments/assets/53650ecd-d547-4305-95c0-7bffb09acbd5" alt="Captura de tela 3" width="80%" />
</div>


<h3> Estruturas de Dados Utilizadas  </h3>

- **Token JWT**: Token de autenticação que garante a segurança das sessões de usuário.
- **Local Storage**: Utilizado para armazenar o token JWT do usuário logado no navegador.
- **Banco de Dados (MongoDB)**: Armazena informações de email e senha dos usuários (senha protegida com hash).

### Teste do Requisito RF-02 <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>
Para verificar o funcionamento do login, siga estas etapas:

`1.` Acesse a tela de login em /login.


`2.` Insira credenciais válidas (exemplo: email válido e senha).


`3.` Após o login, verifique o token JWT gerado no localStorage (ele estará visível nas ferramentas de desenvolvedor do navegador).
<br><br>
<h3 align="center">Testes de Login</h3>
<div align="center">


> Importante: As mensagens: "Usuário não encontrado" e "Senha incorreta" são apenas para ilustração da autenticação desenvolvida pelo grupo, e serão substituídas pela mensagem "Usuário ou senha incorretos".
  
  
<h3>Erro: Sem dados</h3>


  <img src="https://github.com/user-attachments/assets/019c44e0-bdb1-4656-915e-dbbf98860dfe" alt="Erro - Sem dados" width="80%" />
<br><br>
<h3>Erro: Senha incorreta</h3>

  <img src="https://github.com/user-attachments/assets/a803d6ef-5dfa-46dc-8124-aecb88be292c" alt="Erro - Senha incorreta" width="80%" />
<br><br>
<h3>Erro: Usuário não encontrado</h3>


  <img src="https://github.com/user-attachments/assets/e118703c-a3e4-4538-a3db-dc69f2a016bb" alt="Erro - Usuário não encontrado" width="80%" />
<br><br>  
<h3>Sucesso: Login realizado e redirecionamento</h3>


  <img src="https://github.com/user-attachments/assets/292e5742-620a-468a-86ce-c092b38b3d14" alt="Sucesso - Login e redirecionamento" width="80%" />




</div>

---
<br><br><br>


## **Mobile - Tela de Cadastro (RF-01: Cadastro do Usuário)** <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>


## Artefatos de Código <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

**Cadastro mobile (`Cadastro.jsx`)**  
   - Localização: `client/mobile/src/app/screens/Cadastro.jsx`
   - Descrição: Componente React que exibe o formulário de cadastro. Inclui campos de nome,email e senha, um botão para encio do formulário, e um botão secundário que redireciona para a página de login.
   
<h3 align="center">Capturas de Tela</h3>

<div align="center">
  <img src="https://github.com/user-attachments/assets/1667f228-9018-471c-816f-52a2f34189c0" alt="Captura de tela 1" width="50%" />
  <img src="https://github.com/user-attachments/assets/72ee3dff-13e0-4a0e-9200-0b5019bd98b9" alt="Captura de tela 2" width="50%" />
  <img src="https://github.com/user-attachments/assets/1d476618-bda5-48d7-a5f0-49f276d81fca" alt="Captura de tela 3" width="50%" />
  <img src="https://github.com/user-attachments/assets/b4e7bebb-a808-4a18-afd4-eb71fb04dfed" alt="Captura de tela 4" width="50%" />
 
</div>

#### Teste do Requisito RF-01 <img src="https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23" height="20">
Para verificar o funcionamento do Cadastro, siga estas etapas:

    1.Abrir a Aplicação:
     - Inicie a aplicação e navegue até a tela de cadastro.
    
    2. Preencher o Formulário de Cadastro:
     - Insira nome de usuário no campo nome.
     - Insira um email válido no campo de email.
     - Insira uma senha válida no campo de senha.
     
    3. Submeter o Formulário:
      - Clique no botão de cadastro para submeter o formulário.

<div align="center">
  <video src="https://github.com/user-attachments/assets/d5f4e5a0-eb5c-4d02-9747-6111217e7e14" height="200" controls></video>

  <br><br>
</div>


## **Mobile - Tela de Login (RF-02: Autenticação de Usuário)** <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

#### Especificação Funcional  
- **Validação de Login**: O sistema valida o login utilizando um formulário com campos de email e senha.
- **Autenticação JWT**: Ao submeter credenciais válidas, o sistema gera um token de autenticação (JWT), armazenado com segurança no `AsyncStorage` do navegador.
- **Sessão Contínua**: O token permite autenticação nas requisições enquanto o usuário estiver logado, garantindo uma experiência contínua.

## Artefatos de Código <img src=https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23 height = 20>

**Login mobile (`Login.jsx`)**  
   - Localização: `client/mobile/src/app/screens/Login.jsx`
   - Descrição: Componente React que exibe o formulário de login. Inclui campos para email e senha, um botão para submissão do formulário, e um botão secundário que redireciona para a página de cadastro. O componente utiliza estilos personalizados para formatação visual, incluindo alinhamento de texto, cores, e sombras. Utiliza `AsyncStorage` para armazenar dados de sessão do usuário de forma persistente no dispositivo.
   
<h3 align="center">Capturas de Tela</h3>

<div align="center">
  <img src="https://github.com/user-attachments/assets/e8fa6584-b5d1-4c8a-900f-94d7f4e63b92" alt="Captura de tela 1" width="50%" />
  <img src="https://github.com/user-attachments/assets/dc57bdca-34eb-4451-98d1-9932d45c8980" alt="Captura de tela 2" width="50%" />
  <img src="https://github.com/user-attachments/assets/d83e2f5d-2984-487a-89b5-b5d705a6c28e" alt="Captura de tela 3" width="50%" />
  <img src="https://github.com/user-attachments/assets/36d11d84-8b0a-42d6-b058-bb4a772018ad" alt="Captura de tela 4" width="50%" />
  <img src="https://github.com/user-attachments/assets/2b204bfe-2505-482b-8723-c3220d26057f" alt="Captura de tela 5" width="50%" />
  <img src="https://github.com/user-attachments/assets/53ac7e8c-fc05-488b-8cea-c46553f02398" alt="Captura de tela 6" width="50%" />
  <img src="https://github.com/user-attachments/assets/c5fc4669-4d54-46bc-b6d9-3101f8bbf00b" alt="Captura de tela 7" width="50%" />
</div>

#### Teste do Requisito RF-02 <img src="https://github.com/user-attachments/assets/04836943-414b-4c19-8506-c6db35370a23" height="20">
Para verificar o funcionamento do login, siga estas etapas:

    1.Abrir a Aplicação:
     - Inicie a aplicação e navegue até a tela de login.
    
    2. Preencher o Formulário de Login:
     - Insira um email válido no campo de email.
     - Insira uma senha válida no campo de senha.
     
    3. Submeter o Formulário:
      - Clique no botão de login para submeter o formulário.
    
    4. Redirecionamento:
      - Após o login bem-sucedido, verifique se o usuário é redirecionado para a página principal da aplicação.

<div align="center">
  <video src="https://github.com/user-attachments/assets/c2e95b80-bd66-40ab-a1d3-baa21d39fa9a" height="200" controls></video>
  (Sucesso ✔️) 
  
  Obs: o vídeo acima também demonstra a função exibir/ocultar senha
  <br><br>
</div>



    5. Botão de Cadastro:
      - Clique no botão secundário para redirecionamento e verifique se o usuário é levado para a página de cadastro.


<div align="center">
  <video src="https://github.com/user-attachments/assets/1a6007aa-6f4f-4df3-8edf-fabace82cac2" height="200" controls></video>
  (Sucesso ✔️) 

  <br><br>
</div>



    6. Mensagens de Erro: ❌
      - Tente submeter o formulário com campos vazios ou dados inválidos e verifique se as mensagens de erro apropriadas são exibidas.


<div align="center">
  <video src="https://github.com/user-attachments/assets/a28a5266-9b37-4df8-8a9c-c9db28c86c26" height="200" controls></video>
  (Preencha todos os campos ❌)

  <br><br>
</div>

<div align="center">
  <video src="https://github.com/user-attachments/assets/d0841e97-f4a9-4083-8056-36d2ada3e419" height="200" controls></video>
  (Senha incorreta ❌)
  <br><br>
</div>

> Importante: As mensagens: "Usuário não encontrado" e "Senha incorreta" são apenas para ilustração da autenticação desenvolvida pelo grupo, e serão substituídas pela mensagem "Usuário ou senha incorretos".


<div align="center">
  <video src="https://github.com/user-attachments/assets/49f8bf3c-8d1c-41a0-a861-75a9569a6071" height="200" controls></video>
  (Usuário não encontrado ❌)

  <br><br>
</div>

