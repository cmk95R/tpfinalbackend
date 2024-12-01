const User = require("../models/user");
const Movie = require("../models/movie");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(400).json({ error: "Error al registrar usuario", details: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login exitoso",
            token,
            user: { id: user._id, email: user.email }
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al iniciar sesión",
            details: error.message
        });
    }
};
const profile = async (req, res) => {
    try {
        // El ID del usuario se obtiene del token JWT
        const userId = req.user.id;

        // Buscar los datos del usuario
        const user = await User.findById(userId).select("-password"); // Excluye la contraseña del usuario

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Obtener las películas que el usuario ha creado
        const movies = await Movie.find({ createdBy: userId });

        // Responder con los datos del usuario y las películas asociadas
        res.json({
            user: {
                id: user._id,
                email: user.email,
            },
            movies: movies, // Devuelve las películas asociadas al usuario
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el perfil", details: error.message });
    }
};
const logout = (req, res) => {

    res.json({ message: "Logout exitoso. El token debe ser eliminado del header." });
};



module.exports = { register, login ,profile,logout};
