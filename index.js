const express = require( 'express');
const http =  require( 'http');
const morgan =  require( 'morgan');
const helmet =  require( 'helmet');
const compression = require( 'compression');
const cors =  require( 'cors');
const sequelize = require( './database/database');

const app = express();
const { PORT } = process.env;

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());

const prefix = '/api';

app.get('/', (req, res) => res.json({message: "Welcome to We Want You Server"}))

const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
    //database build control
    sequelize.sync({ force: false })
        .then(() => console.log('Conectados a la base de datos'))
        .catch(error => console.log('Se ha producido un error', error))
})