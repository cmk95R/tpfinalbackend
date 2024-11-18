const { json } = require("express");
const fs = require ("fs");
const { get } = require("http");
const path = require ("path");
const { stringify } = require("querystring");

const integrantesFilePath = path.join(__dirname, '../db-json/integrantes.JSON');

const getIntegrantes = () => {
    const data = fs.readFileSync(integrantesFilePath, "utf-8");
    return JSON.parse(data);
};

const saveIntegrantes = (data) =>{
    fs.writeFileSync(integrantesFilePath, JSON.stringify(data, null, 2), "utf-8");
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
    const { dni } = req.params; 
    const dniNumber = parseInt(dni, 10); 

    const integrantes = getIntegrantes(); 
    const integrante = integrantes.find((i) => i.dni === dniNumber); 

    if (integrante) {
        res.json(integrante); 
    } else {
        res.status(404).send("Integrante no encontrado"); 
    }
};

const addIntegrantes = (req, res) => {
    const {nombre, apellido, dni, email} = req.body;
    if (!nombre || !apellido || !dni || !email){
        return res.status(400).send("Todos los campos son obligatorios")
    }
    const integrante = getIntegrantes();
    integrante.push({nombre,apellido,dni,email});
    saveIntegrantes(integrante);
    res.json(integrante);
}

const updateIntegranteByEmail = (req,res) =>{
    const {email} = req.params;
    const {apellido} = req.body;

    if (!apellido){
        res.status(400).send("El apellido es obligatorio");
    }
    const intengrantes = getIntegrantes();
    const integrante = intengrante.find((i) => i.email === email)

    if (!integrante){
        integrante.apellido = apellido;
        saveIntegrantes(integrantes);
        res.json(integrante)
    }else{
        res.status(404).send("Ingrante no encontrado para actualizar");
    }
}



module.exports = {getHome, getAllIntegrantes, getIntegrantesByDni,addIntegrantes, updateIntegranteByEmail};