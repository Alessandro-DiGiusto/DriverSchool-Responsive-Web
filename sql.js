const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'autoalvolanteDB'
})

connection.connect((err) =>{
    if (err) {
        console.log("DB connessione fallita, fanculo")
    } else {
        console.log("DB connessione FATTA, fanculo!")
    }
})

module.exports = connection;