# Documento de Visão

## Historico de versão

 Data | Versão | Descrição | Autor
 ---- | ------ | --------- | -----
27/05/19 | 1.0 | Abertura do documento | Giovanna
27/05/19 | 1.1 | Criação da introdução, Posicionamento, Descrição dos envolvidos e Visão Geral | Giovanna
28/05/19 | 1.2 | Atualização da Visão Geral do Produto | Giovanna
28/05/19 | 1.3 | Criação dos recursos do produto | Giovanna
28/05/19 | 1.4 | Criação dos Outros requisitos do produto | Giovanna
02/11/20 | 2.0 | Refatora documento para a materia de Requisitos | Giovanna

## Índice

1. [Introdução](#1)
2. [Posicionamento](#2)
3. [Descrição dos envolvidos e usuários](#3)
4. [Visão Geral do Produto](#4)
5. [Recursos do produto](#5)
6. [Outros requisitos do produto](#6)
7. [Referências](#7)
# Introdução <a name="1"></a>
Este documento tem como propósito coletar, analisar e definir necessidades e recursos de nível superior do **E a Economia?**, aplicação web de finanças pessoais. Tem como objetivo ajudar pessoas físicas a administrar seu dinheiro.

Auxiliando no controle de entrada e saída de dinheiro, extrato de cartões, organização de compras e cpntrole de metas.

O programa desenvolvido tem como intuito facilitar o acesso a organização financeira pessoal.

# Posicionamento <a name="2"></a>
## Posição do produto <a name="2.1"></a>
Finanças Pessoais é tudo que se associa à area financeira de uma pessoa física. Em suas finanças pessoais, você vai ouvir falar de orçamento, planejamento e fluxo de caixa.

O **E a Economia?** é uma aplicação web que te auxilia a controlar suas finanças e saber para onde seu dinheiro está indo. Monitorar seus gastos em poucos minutos com personalização completa. 

Nosso app é um Progressive Web App(PWA), pode ser acessado através de qualquer navegador, não é necessário instalar nenhum aplicativo.

# Descrições dos envolvidos e usuários <a name="3"></a>
O produto visa facilitar a interação entre aqueles que procuram organizar sua vida financeira, do iniciante ao avançado. Desta forma, o aplicatico terá apenas um tipo usuário, mas com diferentes perfis.

Esses perfis incluem desde adolescentes á adultos que estão iniciando no ambiente de organização financeira.

## Perfil do usuário <a name="3.1"></a>
### Adolescente
* Representante: Adolescente
* Descrição: O usuário adolescente trata-se de jovens que começaram a receber seu primeiro salário e/ou pagar contas e por isso precisam de algo que os introduzam as finanças pessoais
* Envolvimento: Acessar o site, se cadastrar e organizar suas finanças.

### Adultos
* Representante: Adultos
* Descrição: O usuário adulto trata-se de reponsaveis que não possuem conhecimento ou habilidades de finaças pessoais, geralmente possuem varias dividas, por isso precisam de algo que os introduzam as finanças pessoais
* Envolvimento: Acessar o site, se cadastrar e organizar suas finanças.

## Alternativas e Concorrência <a name="3.2"></a>
A vantagem competitiva do **E a Economia?** se dá no fato de poder ser acessado pelo celular sem precisar baixar nenhum aplicativo. Pela customização e liberdade de organizar seus labels e cartões.

Concorrência:
* GuiaBolso: Aplicativo que te ajuda a se entender com a sua própria grana .
* Mobills: Sistema controle financeiro e finanças pessoais que ajuda você a economizar e realizar seus objetivos financeiros.
* Minhas Economias: Gerenciador financeiro.

# Visão Geral do Produto <a name="4"></a>
Esta seção fornece uma visualização de alto nível das capacidades do **E a Economia?**, interfaces para outros aplicativos e configurações dos sistemas. Esta seção, em geral, consiste em três subseções:
* Perspectiva do Produto
* Funções do Produto
* Suposições e Dependências

## Perspectivas do produto <a name="4.1"></a>
Nosso produto tem algumas semelhanças com produtos já feitos, como o aplicativo já citados. **E a Economia?** é independente e totalmente auto contido.

## Resumo das Capacidades <a name="4.2"></a>
Benefício para o Cliente | Recursos de Suporte
------------------------ | -------------------
Organiza as finanças do cliente mensalmente | Permite a criação de entradas e saidas periodicas, além de cartões de credito.
Auxilia no alcance de metas | Através da criação de metas pode-se vizualias o quanto ainda é preciso e quanto tempo irá demorar.
Auxilia no controle de investimentos | Facilita a vizualição dos investimentos criados e seus provaveis rendimentos 
Ajuda nas compras | É possivel criar uma compra, com lista de compras, unidades e seus valores.

## Suposições de dependências <a name="4.3"></a>
O **E a Economia?** é um aplicativo que é independente de aplicativos externos e por se tratar de um site não requer muito do hardware para se obter um bom desempenho.

## Custo e precificação <a name="4.4"></a>
O único gasto previsto será com a hospedagem do site.

## Licenciamento e Instalação <a name="4.5"></a>
Para licença de software escolhemos a GPL (GNU General Public Licence) - 3.0 .

# Recursos do produto <a name="5"></a>

## Cadastro/Login <a name="5.1"></a>
O usuário poderá se cadastrar e fazer login na plataforma para ter acesso às funcionalidades do software.

Essa funcionalidade também atenderá as necessidades de edição do conteúdo informado no momento do cadastro como: nome, email etc.

## Adicionar Transações <a name="5.3"></a>
Essa funcionalidade permite que qualquer usuário, que previamente cadastrou-se no site, adicione transações de entrada e saída, e vincula-la a uma meta ou investimento previamente criado. 

Essa funcionalidade irá permitir edição do conteúdo como nome, label, valor, recorrencia.

## Criar Label <a name="5.6"></a>
Essa funcionalidade permite que qualquer usuário, que previamente cadastrou-se no site, crie um label. 

Essa funcionalidade irá permitir edição do conteúdo como nome e cor.

# Outros requisitos do produto <a name="6"></a>

## Requisito de usuário <a name="6.1"></a>
O usuário da aplicação deverá possuir um dispositivo com acesso a internet para poder usufruir das funcionalidades disponíveis da aplicação.

## Requisistos do sistema <a name="6.2"></a>
* Utilizará o plataforma de desenvolvimento web ANGULAR 1.8
* Será usado  a linguagem TYPESCRIPT em conjunto com ANGULAR
* Terá seu padrões de desenvolvimento em conformidade para ser uma PWA
* Aplicação usará protocolo REST para comunicação com a API usando JSON
* O sistema de banco de dados será o SQLite
* A API deverá ser criada no framework DJANGO
* A conteinerização do ambiente de homologação DOCKER
* O padrão de projeto será Model-View-Template
* Para conexões será usado o padrão  Singleton
* A arquitetura utilizará o padrão de microserviços
* Para sistema de autenticação será usado JWT

## Referências <a name="7"></a>
* Bolso, **Guia Bolso** [<https://www.guiabolso.com.br/>](https://www.guiabolso.com.br/). Acesso em 27 de maio de 2020.
* **Mobills** [<https://www.mobills.com.br/>](https://www.mobills.com.br/). Acesso em 27 de maio de 2020.
* conomias **Minhas** [<http://minhaseconomias.com.br/>](http://minhaseconomias.com.br/). Acesso em 27 de maio de 2020.