const Integrante = require("../models/integrante");

// Controladores

// GET: Home
const getHome = (req, res) => {
    res.send("API funcionando correctamente con MongoDB Atlas");
};

// GET: Todos los integrantes
const getAllIntegrantes = async (req, res) => {
    try {
        const integrantes = await Integrante.find();
        res.json(integrantes);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener integrantes" });
    }
};

// GET: Integrante por DNI
const getIntegrantesByDni = async (req, res) => {
    try {
        const { dni } = req.params;
        const integrante = await Integrante.findOne({ dni });
        if (integrante) {
            res.json(integrante);
        } else {
            res.status(404).json({ error: "Integrante no encontrado" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error al buscar integrante por DNI" });
    }
};

// POST: Agregar un integrante
const addIntegrantes = async (req, res) => {
    try {
        const { nombre, apellido, dni, email } = req.body;

        if (!nombre || !apellido || !dni || !email) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const nuevoIntegrante = new Integrante({ nombre, apellido, dni, email });
        await nuevoIntegrante.save();
        res.status(201).json(nuevoIntegrante);
    } catch (err) {
        res.status(500).json({ error: "Error al agregar integrante" });
    }
};

// PUT: Actualizar un integrante por Email
const updateIntegranteByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const { apellido } = req.body;

        if (!apellido) {
            return res.status(400).json({ error: "El apellido es obligatorio" });
        }

        const integrante = await Integrante.findOneAndUpdate(
            { email },
            { apellido },
            { new: true } // Retorna el documento actualizado
        );

        if (integrante) {
            res.json(integrante);
        } else {
            res.status(404).json({ error: "Integrante no encontrado para actualizar" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error al actualizar integrante" });
    }
};

// DELETE: Eliminar un integrante por DNI
const deleteIntegrantesByDni = async (req, res) => {
    try {
        const { dni } = req.params;
        const integranteEliminado = await Integrante.findOneAndDelete({ dni });

        if (integranteEliminado) {
            res.status(200).json({
                message: "Integrante eliminado con éxito",
                integrante: integranteEliminado,
            });
        } else {
            res.status(404).json({ error: "Integrante no encontrado para eliminar" });
        }
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar integrante" });
    }
};

module.exports = {
    getHome,
    getAllIntegrantes,
    getIntegrantesByDni,
    addIntegrantes,
    updateIntegranteByEmail,
    deleteIntegrantesByDni,
};
