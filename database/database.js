const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,  //Nombre de Base de Datos de Postgres
    process.env.DB_USER, //Usuario de postgres
    process.env.DB_PASSWORD, //Contraseña de Postgres
    {
        host: process.env.DB_HOST, //Lugar donde se ejecuta
        dialect: process.env.DB_PROTOCOL, //Tecnología SQL que estoy usando
        protocol: process.env.DB_PROTOCOL,
        pool: { //Configuración recomendada por sequelize en su documentación
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        dialectOptions: {
            ssl: {
                require: true, //Activa SSL
                rejectUnauthorized: false //Previene errores de "self-signed"
            }
        },
        logging: false //Para no enviar mensajes desde sequelize, ya que estoy usando morgan
    })

module.exports = sequelize;