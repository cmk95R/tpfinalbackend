const express = require("express");
const router = express.Router();
const { getAllMovies, getMovieById, addMovie, updateMovie, deleteMovie } = require("../controllers/movieController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/", verifyToken, getAllMovies); // Obtener todas las películas del usuario
router.get("/:id", verifyToken, getMovieById); // Obtener una película por ID
router.post("/agregar", verifyToken, addMovie); // Agregar una nueva película
router.put("/:id", verifyToken, updateMovie); // Actualizar una película
router.delete("/:id", verifyToken, deleteMovie); // Eliminar una película

module.exports = router;
