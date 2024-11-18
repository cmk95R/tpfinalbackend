const { json } = require("express");
const fs = require ("fs");
const path = require ("path");
const { stringify } = require("querystring");

const productsFilePath = path.join(__dirname, '../db-json/integrantes.JSON');

const getIntegrantes = () => {
    const data = fs.readFileSync(productsFilePath, "utf-8");
    return JSON.parse(data);
};

const saveIntegrantes = (data) =>{
    fs.writeFileSync("integrantes.JSON", json.stringify(data, null, 2), "utf-8");
}



//controladores
const getHome = (req, res) =>{
    res.send("api funcionando correctamente");
}

const getAllIntegrantes = (req,res) => {
    const integrantes = getIntegrantes ();
    res.json(integrantes);
}

const getIntegrantesByDni = (req, res) => {
    const {dni} = req.params;
    console.log(dni);
    const integrante = getIntegrantes().find((i) => i.dni == dni);
    console.log(integrante);
    if(integrante){
        res.json(integrante);
    }else{
        res.status(404).send("integrante no encontrado");
    }
    
}

module.exports = {getHome, getAllIntegrantes, getIntegrantesByDni};