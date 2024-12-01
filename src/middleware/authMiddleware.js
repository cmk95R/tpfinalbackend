const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Acceso denegado, token faltante" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // El payload del token se guarda en req.user
        next();
    } catch (err) {
        res.status(400).json({ error: "Token inválido" });
    }
};

module.exports = verifyToken;
