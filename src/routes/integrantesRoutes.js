const express = require ("express"); 
const router = express.Router();

const {
    getHome, 
    getAllIntegrantes, 
    getIntegrantesByDni,
    addIntegrantes,
    updateIntegranteByEmail,
    deleteIntegrantesByDni

} = require ("../controllers/integrantesController");


//*** RUTAS GET ***//
router.get("/", getHome);
router.get("/integrantes", getAllIntegrantes);
router.get("/integrantes/:dni", getIntegrantesByDni);

//*** RUTAS POST***//

router.post("/integrantes/agregar", addIntegrantes);


//*** RUTAS PUT ***// 

router.put("/integrantes/:email" , updateIntegranteByEmail);

//*** RUTAS DELETE ***//

router.delete("/integrantes/:dni", deleteIntegrantesByDni);


module.exports = router;