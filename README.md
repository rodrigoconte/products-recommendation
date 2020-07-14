# Serviço de recomendação de produtos


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

O serviço foi dividido em três partes compostas por

  - API de catálogo de produtos 
  - API de recomendação de produtos
  - Frontend

# Preparando o ambiente!

  - Será necessário executar uma instancia do postgres SQL na maquina ou container

### Tecnologias utilizadas


* [Html/SCSS] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

### Instalações

Os sistemas requerem o [Node.js](https://nodejs.org/) v4+ para rodar.

Instale as dependencias das duas API para iniciar a execução

```sh
$ cd api-catalog
$ npm install -d
$ node run dev
```

Com o servidor do pgadmin em execução, será necessário executar as migrations do Sequelize

```sh
$ cd api-catalog
$ yarn sequelize db:migrate
//ou
$ cd api-catalog
$ npm ./node_modules/.bin/sequelize db:migrate
```

Para a api de recomendações...

```sh
$ cd api-recommend
$ npm install -d
```
Caso não tenha uma instancia do pgadmin e postgres executando, crie dois containers utilizando o seguinte comando

```sh
$ cd docker-database
$ docker-compose up -d
```
