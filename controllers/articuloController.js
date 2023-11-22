// controllers/articuloController.js

const Articulo = require('../models/articulo');


exports.getAllArticulos = (req, res) => {
    Articulo.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Add more controller functions as necessary
