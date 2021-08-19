# STEPS

##### Crea un archivo package.json 
```bash
npm init -y
```

## Instalación de Módulos Principales

##### Instalación de Express, framework de NodeJS
[https://expressjs.com/es/starter/installing.html]
```bash
npm i express
```
##### Instalación de Dotenv, para manejo de variables de entorno
[https://expressjs.com/es/starter/installing.html]
```bash
npm i dotenv
```
* Crea un archivo ".env" en la carpeta raíz del proyecto
##### Instalación de Postgres, para hacer consultas en la DB Postgres
```bash
npm i pg pg-hstore
```
##### Instalación de Sequelize, ORM para hacer consultas en Postgres usando una versión simplicada del lenguaje SQL 
[https://sequelize.org]
```bash
npm i sequelize@~4.43.2
```
##### Instalación de Morgan, permite ver por consola los http request que vallan llegando a nuestra aplicación 
```bash
npm i morgan
```

##### Instalación de Helmet, permite configurar cabezeras http para mejorar la seguridad de la api. 
```bash
npm i helmet
```

##### Instalación de Compression, permite comprimir resupestas y así ahorrar recursos en la transferencia de datos.
```bash
npm i compression 
```

##### Instalación de Cors, permite que se puedan solicitar recursos en una web desde un origen distinto.
```bash
npm i cors 
```

##### Instalación de Ejs, permite trabajar con templates de html de fácil y rápida ejecución.
[https://ejs.co/]
```bash
npm i ejs
```

##### Instalación de Json Web Token, permite generar tokens de usuarios para consultar información de forma segura.
```bash
npm i jsonwebtoken
```

##### Instalación de Bcrypt, permite cifrar datos como las contraseñas.
```bash
npm i bcryptjs
```

##### Todos los Módulos principales
```bash
npm i express pg pg-hstore sequelize morgan dotenv helmet compression cors ejs jsonwebtoken bcryptjs
```

## Instalación de Módulos de Desarrollo

#### Reemplaza el comando "test" dentro del "scripts", del archivo "package.json":
Esto:
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
Por:
```json
"scripts": {
    "start": "node -r dotenv/config index.js"
}
```
##### Instalación de Nodemon, para que el servidor se reinicie automáticamente cada vez que modifiquemos el código
```bash
npm i nodemon -D
```
#### Agrega el siguiente script dentro de "scripts" del archivo "package.json"
```json
"scripts": {
    "dev": "nodemon -r dotenv/config index.js",
  }
```

# Scripts del Proyecto

#### Scripts para levantar un servidor local usando Node
```bash
npm run start
``` 

#### Scripts para levantar un servidor local usando Nodemon
```bash
npm run dev
``` 

# Base de datos

#### Postgres con Elephant SQL > [https://www.elephantsql.com/]
