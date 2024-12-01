const Movie = require("../models/movie");
const mongoose = require("mongoose");

// Obtener todas las películas
const getAllMovies = async (req, res) => {
    try {
        
        const movies = await Movie.find();  
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las películas" });
    }
};

/*Obtner una pelicula por su ID */
const getMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ error: "Película no encontrada" });
        }

        res.json(movie);
    } catch (error) {
        console.error("Error al obtener la película:", error);
        res.status(500).json({ error: "Error al obtener la película" });
    }
};


/* Agregar película */

const addMovie = async (req, res) => {
    const { title, genre, year, rating } = req.body;
    try {
        const newMovie = new Movie({
            title,
            genre,
            year,
            rating,
            createdBy: req.user.id, 
        });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        console.error("Error al agregar película:", error);
        res.status(400).json({ error: "Error al agregar película" });
    }
};


/* Actualizar datos de una pelicula*/ 

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedMovie) return res.status(404).json({ error: "Película no encontrada" });
        res.json(updatedMovie);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar película" });
    }
};

/*Eliminar película*/
const deleteMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) return res.status(404).json({ error: "Película no encontrada" });
        res.json({ message: "Película eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar película" });
    }
};

module.exports = { getAllMovies, getMovieById ,addMovie, updateMovie, deleteMovie };
