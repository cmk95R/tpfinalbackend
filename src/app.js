const express = require ("express");
const path = require ("path");
const methodOverride = require('method-override');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(methodOverride('_method'));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});