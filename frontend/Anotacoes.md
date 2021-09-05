# Scripts

**ng new nomeProjeto --minimal** - cria um projeto angular. o _--minimal_ tira os arquivos e pastas de testes do projeto.

**DETALHE:** quando criamos o projeto usando o --minimal, ele coloca os arquivos de estilizacao, módulo e html em um arquivo só. Para modificar isso e separar os arquivos, basta ir até o arquivo **angular.json**, procurar por **inlineTemplate** e **inlineStyle** e modificar o atributo para **false**

**ng add @angular/material** - instala a lib do MaterialDesign

**ng generate component** - cria um novo componente

# Elementos do Angular

## Diretivas 

Altera a **aparência** e o **comportamento** de um elemento, componente ou outra diretiva.

**ng g d nomeDaPasta/nomeDoArquivo** - gera uma nova diretiva