# Scripts 

**npm init -y** - cria o arquivo **package.json**
**npm i json-server** - instala o **json-server**
**npm start** - roda o backend

# Requisições HTTP

**PATCH** - altera alguns atributos do objeto
**PUT** - altera o objeto inteiro

----

## Paginação

Nós podemos usar a paginação com o json-serve passando como parametro a **_page** e o **_limit**.

Exemplo:

_Teste essa rota no Postman_
http://localhost:3001/products?_page=4&_limit=1