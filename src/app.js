const express = require ("express");
const path = require ("path");
const methodOverride = require('method-override');
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./db/db");
const cors = require("cors");


app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(cors());
app.use(methodOverride('_method'));

// Rutas
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);


//Mongo Atlas

require("dotenv").config();

connectDB();

//Servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});