const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcryptjs')
const router2 = express.Router()

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456789',
//     database: 'projet_bdd'
// })

var nmrDoss ={}
router2.post('/doss/' ,async (req , res) => {
    nmrDoss.numero = 1;
    // db.query("INSERT INTO services SET `nmr_dossier_sm`=DEFAULT " ,async (errr , ress) => {
    //     if(errr) {console.log(errr.message)}
    //     else {console.log('INSERTION EFFECTUE')}
    // })
    // db.query(" SELECT nmr_dossier_sm FROM services WHERE nmr_dossier_sm = ( SELECT  MAX(`nmr_dossier_sm`) FROM services)" , async (errrr,resss) =>{
    //     if(errrr){console.log(errrr.message)}
    //     else{
    //         nmrDoss.numero = resss[0].nmr_dossier_sm
    //         console.log(nmrDoss.numero)
    //     }
    // })
})

module.exports ={router2 , nmrDoss}