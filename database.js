import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const fs = require('fs');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

async function getUtenti() {
  const [rows] = await pool.query("SELECT * FROM Utente")
  return rows;
}

const lista_utenti = await getUtenti()
console.log(lista_utenti)

/* --------------------------------------------------------------------------------------------------------- */
// dopo aver fatto fs sopra vado a leggere il file json del form
const jsonData = fs.readFileSync('prenotazioni.json', 'utf-8');
const data = JSON.parse(jsonData);
const sql = 'INSERT INTO Utente (nome, email, tel, tipo) VALUES (?,?,?,?)';
data.forEach((item) => {
  pool.query(sql, [item.nomeCliente, item.email, item.telefono, item.veicolo], (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Dati inseriti con successo:', results);
  });
});

const sqlApp = 'INSERT INTO appuntamento (data, ora, booking_Time, FK_Utente) VALUES (?,?,?,?)';
var oggi = new Date();
var dataAttuale = oggi.toLocaleString();
data.forEach((item) => {
  pool.query(sqlApp, [item.dataScelta, item.timePreno, item.dataAttuale, 3], (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Dati inseriti con successo:', results);
  });
});
/* --------------------------------------------------------------------------------------------------------- */