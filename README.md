# API-NODE-EXPRESS

## Instalar dependências
```
npm install 
```
## Configurar variáveis de ambiente
### No arquivo .env informar os seguintes valores

### Banco de Dados
```
DB_NAME=my-database
DB_URL=ds000000.mlab.com:11111
DB_USERNAME=username_database
DB_PASSWORD=password_database

Obs: Exemplo para um banco hospedado no mlab
```
### Chaves para token
```
SECRET=chave_para_token
PUBLIC_KEY=chave_para_token

OBS: A PUBLIC_KEY é uma chave que pode ser 
utilizada no Client-Side, por exemplo, para desfazer um token que contém dados enviados
via query
```
## Run
```
npm run dev
```

### Para Customizaçẽoes
#### [Configuration Reference Node](https://nodejs.org/docss);

#### [Configuration Reference Express](https://expressjs.com/pt-br/4x/api.html)

#### [Configuration Reference Mongoose](https://mongoosejs.com)


