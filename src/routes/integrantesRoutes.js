const express = require ("express"); 
const router = express.Router();

const {getHome, getAllIntegrantes, getIntegrantesByDni} = require ("../controllers/integrantesController");


//Rutas
router.get("/", getHome);
router.get("/integrantes", getAllIntegrantes);
router.get("/integrantes/:dni", getIntegrantesByDni);
/*
router.post("/integrantes/agregar", addIntegrantes);
router.put("/integrantes/:email");
router.delete("/integrantes/:dni", deleteIntegrantesByDni);
*/
module.exports = router;