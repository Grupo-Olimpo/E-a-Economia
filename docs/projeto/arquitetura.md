# Documento de Arquitetura

## Historico de Versões

| Data | Versão | Autor(a) | Descrição |
| - | - | - | - |
| 20/10/2020 | 0.1 | João Gabriel | Abertura do documento|
| 20/10/2020 | 0.2 | João Gabriel | Adiciona Representação de Arquitetura,Restriçoes e Visão Lógica|

## Indice

- [1. Introdução](#_1-introdução)
  - [1.1. Objetivos](#_11-objetivos)
  - [1.2. Escopo do documento](#_12-escopo-do-documento)
- [2. Representação da Arquitetura](#_2-representação-da-arquitetura)
- [3. Restrições](#_3-restrições)

## 1. Introdução

### 1.1. Objetivos

O objetivo deste documento é detalhar a arquitetura e tecnologias utilizadas no projeto,que se trata de uma aplicação web de controle de finanças pessoais.

### 1.2. Escopo do documento

Este documento contém detalhes sobre a arquitetura escolhida para o sistema, as lógicas por trás das implementações, as linguagens/tecnologias usadas, os padrões estabelecidos pela equipe, informações referentes à bancos de dados, além dos  diagramas de classe e de caso de uso.

## 2. Representação da Arquitetura

A arquitetura utilizada no projeto é a arquitetura Cliente/Servidor, que se baseia na relação de dois módulos, o cliente e o servidor. O servidor será responsável pela manutenção e processamento dos dados, enquanto ao cliente será encarregada a função de fornecer os dados.

No caso deste projeto, o papel de cliente será desempenhado pelo frontend da aplicação, que está sendo implementado em React, e o de servidor pela API, implementada em Node.js, que faz toda a comunicação com a camada de persistência dos dados.

![Arquitetura](../images/architecture.png)

## 3. Restrições

O sistema será desenvolvido para ser utilizado em web browsers Para alcançar tal finalidade, o backend do sistema, API que fará a comunicação com o banco de dados, será desenvolvido utilizando o Node.js com o framework Express e o frontend, que fará interface com o usuário final, pelo Cliente (em React).
