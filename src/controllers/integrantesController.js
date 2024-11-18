const fs = require ("fs");
const path = require ("path");

const integrantesFilePath = path.join(__dirname, '../db-json/integrantes.JSON');

const getIntegrantes = () => {
    const data = fs.readFileSync(integrantesFilePath, "utf-8");
    return JSON.parse(data);
};

const saveIntegrantes = (data) =>{
    fs.writeFileSync(integrantesFilePath, JSON.stringify(data, null, 2), "utf-8");
}


//Controladores

//GET
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
/////////////////

//Post
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
/////////////////

//Put
const updateIntegranteByEmail = (req, res) => {
    const { email } = req.params;
    const { apellido } = req.body;

    if (!apellido) {
        return res.status(400).send("El apellido es obligatorio");
    }

    const integrantes = getIntegrantes();
    console.log("Integrantes disponibles:", integrantes); // Verifica el contenido del archivo
    console.log("Email buscado:", email); // Verifica el email recibido

    const integrante = integrantes.find((i) => i.email === email);

    if (integrante) {
        integrante.apellido = apellido;
        saveIntegrantes(integrantes);
        res.json(integrante);
    } else {
        res.status(404).send("Integrante no encontrado para actualizar");
    }
};
/////////////////

//Delete
const deleteIntegrantesByDni = (req, res) => {
    const { dni } = req.params;
    const integrantes = getIntegrantes();
    const integranteIndex = integrantes.findIndex((i) => i.dni == dni);

    if (integranteIndex === -1) {
        // Si no se encuentra, devolver un 404
        return res.status(404).json({ error: "Integrante no encontrado" });
    }

    const integranteEliminado = integrantes.splice(integranteIndex, 1)[0];

    saveIntegrantes(integrantes);
    res.status(200).json({
        message: "Integrante eliminado con éxito",
        integrante: integranteEliminado,
        integrantes: integrantes
    });
};
/////////////////


module.exports = {getHome, getAllIntegrantes, getIntegrantesByDni,addIntegrantes, updateIntegranteByEmail, deleteIntegrantesByDni};