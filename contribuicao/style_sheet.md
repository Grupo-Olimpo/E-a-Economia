# Índice

* [1. Introdução](#_1-introdução)
* [2. Objetivos](#_2-objetivos)
* [3. Guia de estilo para o projeto (frontend)](todo)
* [4. Guia de estilo para o projeto Node (backend)](#_4-Guia-de-estilo-para-o-projeto-Node-backend)
    * [4.1 Estrutura dos arquivos](#_41-Estrutura-dos-arquivos)
    * [4.2. Formatação](#_42-Formatação)
    * [4.3. Nomenclatura](#_43-Nomenclatura)
    * [4.4. Comentários](#_44-Comentários)
* [5. Recomendações](#_5-Recomendações)
* [6. Referências](#_6-Referências)
* [Histórico de Versões](#_histórico-de-versões)

# 1. Introdução

A necessidade da determinação de padrões estruturais e de código se faz presente em todo projeto de software, isso porque projetos mal organizados e com códigos pouco legíveis tendem a se tornar custosos no que se refere à manutenção, entre outros aspectos.

Por conta disso, este documento foi criado. Serão apontados aqui os padrões para os projetos do frontend e do backend, além de algumas recomendações relevantes para o desenvolvimento.

# 2. Objetivos

Este documento tem como objetivo principal guiar o desenvolvimento, apresentando os padrões a serem seguidos com a finalidade de manter o projeto em uma estrutura bem organizada e aumentar a legibilidade do código produzido.

# 4.  Guia de estilo para o projeto Node (backend)

## 4.1. Estrutura dos Arquivos

A estrutura dos arquivos .js devem seguir a seguinte ordem:

1. Informações de licensa ou de direitos autorais
2. Declarações de `import`
3. Declarações de `require`
4. Implementação

## 4.2. Formatação

* **Use 4 espaços para a identação**

    Use 4 espaços para identar o seu código e nunca misture tabs e espaços.
    
* **Novas linhas**
    
    Use o estilo de novas linhas do UNIX (\n), e um caractere de nova linha como último caractere de um arquivo.
    
* **Nenhum espaço em branco à direita**

    Retire todos os espaços em branco que estiverem sobrando à direita de todo código no seu arquivo .js.
    
* **Use ponto e vírgula `;`**

    O uso de ponto e vírgula é um valor central da comunidade JavaScript.

* **80 caracteres por linha**

    Limte as linhas do código a 80 caracteres.

* **Use aspas simples**

    Use aspas simples, a menos que você esteja codificando um tipo JSON.
    
    * Faça:
    ```
    var foo = ‘bar’;
    ```
    
    * Não faça:
    ```
    var foo = "bar";
    ```
    
* **Chaves de abertura `{` vão na mesma linha**

    * Faça:
    ```
    if (true) {
        console.log(‘winning’);
    }
    ```
    
    ```
    if (true) {
        console.log(‘winning’);
    } else if (false) {
        console.log(‘this is good’);
    } else {
        console.log(‘finally’);
    }
    ```
    
    * Não faça:
    ```
    if (true)
    {
        console.log(‘winning’);
    }
    ```
    
    ```
    if (true) 
    {
        console.log(‘winning’);
    } 
    else if (false) 
    {
        console.log(‘this is good’);
    } 
    else 
    {
        console.log(‘finally’);
    }
    ```
    
* **Declare uma variável por declaração `var` ou `const`**

    * Faça:
    ```
    var keys = [‘foo’, ‘bar’];
    var values = [23, 42];
    var object = {};
    ```
    
    * Não faça:
    ```
    var keys = [‘foo’, ‘bar’],
    values = [23, 42],
    object = {},
    key;
    ```
    
* **Use vírgulas à direita e coloque declarações curtas em uma única linha**

    * Faça:
    ```
    var a = ['hello', 'world'];
    var b = {
      good: 'code',
      'is generally': 'pretty',
    };
    ```
    
    * Não faça:
    
    ```
    var a = [
      'hello', 'world'
    ];
    var b = {"good": 'code'
            , is generally: 'pretty'
            };
    ```

Use trailing commas and put short declarations on a single line. 

## 4.3. Nomenclatura

* **Use _camelCase_ para variáveis propriedades e nomes de funções**

    Variáveis, propriedades e nomes de funções devem usar _camelCase_. Eles devem também ser descritivos. Variáveis identificadas com apenas um caracter e abreviações incomuns devem geralmente ser evitadas.

    * Faça:
    ```
    var adminUser = db.query(‘SELECT * FROM users …’);
    ```
    
    * Não faça:
    ```
    var admin_user = db.query(‘SELECT * FROM users …’);
    ```
    
* **Use _PascalCase_ para nomes de classes**

    * Faça:
    ```
    function BankAccount() {
    
    }
    ```
    
    * Não faça:
    ```
    function bank_Account() {
    
    }
    ```
    
* **Use _UPPERCASE_ para propriedades estáticas de classe**

    * Faça:
    ```
    function File() {
    
    }
    
    File.FULL_PERMISSIONS = 0777;
    ```
    
    * Não faça:
    ```
    function File() {
    
    }
    
    File.fullPermissions = 0777;
    ```

## 4.4. Comentários

* O uso de barras duplas `//` ou barras com asteriscos `/**/` é opcional. Recomenda-se utilizar `//` para comentários de uma única linha e `/**/` para comentários de múltiplas linhas.


* Tente escrever comentários que explicam mecanismos de alto nível ou que esclareçam partes difíceis do seu código. Não use comentários para reafirmar coisas triviais.

    * Faça:

    ```
    /* 
     * This function has a nasty side effect where a failure to 
     *  increment a redis counter used for statistics will 
     * cause an exception. This needs to be fixed in a later iteration.
     */
    function loadUser(id, cb) {
        ...
    }


    // Check if user is able to access system functionalities
    var isSessionValid = (session.expires < Date.now());
    if (isSessionValid) {
        ...
    }
    ```

    * Não faça:

    ```
    // Execute a regex
    var matches = item.match(/ID_([^\n]+)=([^\n]+)/);

    // Usage: loadUser(5, function() { ... })
    function loadUser(id, cb) {
      // ...
    }

    // Check if the session is valid
    var isSessionValid = (session.expires < Date.now());
    // If the session is valid
    if (isSessionValid) {
      // ...
    }
    ```

# 5. Recomendações

* Escreva tudo em Inglês (código, comentários, nomes de arquivos e diretórios, etc.), com exceção das informações exibidas para usuários finais.
* Mantenha o código logicamente organizado, para que outras pessoas consigam entendê-lo de maneira fácil.
* Utilize uma nomenclatura simples e descritiva.
* **Não ignore os padrões definidos neste documento.**

# 6. Referências

* https://medium.com/swlh/node-js-coding-style-guidelines-74a20d00c40b
