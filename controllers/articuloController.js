// controllers/articuloController.js

const Articulo = require('../models/articulo');
const db = require('../utils/db');


exports.getAllArticulos = (req, res) => {
    Articulo.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};


exports.getAllUsuarioArticulo = (req, res) => {
    const sql = 'SELECT * FROM articulousuario'; // SQL query to fetch all articles
    db.query(sql, (err, results) => {
        if (err) {
            // Handle errors, e.g., return a server error response
            return res.status(500).json({ error: err.message });
        }
        // Return the results as JSON
        res.json(results);
    });
};



exports.getCarrosIdName= (req, res) => {
    const sql = 'SELECT IdArticulo, NombreArticulo FROM articulos WHERE TipoArticuloID=2'; // SQL query to fetch all articles
    db.query(sql, (err, results) => {
        if (err) {
            // Handle errors, e.g., return a server error response
            return res.status(500).json({ error: err.message });
        }
        // Return the results as JSON
        res.json(results);
    });
};

exports.getCarrosId= (req, res) => {
    const sql = 'SELECT IdArticulo FROM articulos WHERE TipoArticuloID=2'; // SQL query to fetch all articles
    db.query(sql, (err, results) => {
        if (err) {
            // Handle errors, e.g., return a server error response
            return res.status(500).json({ error: err.message });
        }
        // Return the results as JSON
        res.json(results);
    });
};

exports.getArticulosByUsuario = (req, res) => {
    const userId = req.params.id; // Get the user ID from the route parameter
    const sql = 'SELECT * FROM articulousuario WHERE IdUsuario = ?'; // SQL query to fetch articles for a specific user

    db.query(sql, [userId], (err, results) => {
        if (err) {
            // Handle errors, e.g., return a server error response
            return res.status(500).json({ error: err.message });
        }
        // Return the results as JSON
        res.json(results);
    });
};

exports.getArticulosByUsuarioCarros = (req, res) => {
    const userId = req.params.id; // Get the user ID from the route parameter
    const sql = 'SELECT au.idarticulo FROM articulousuario au JOIN articulos a ON au.idarticulo = a.idarticulo WHERE a.TipoArticuloID = 2 AND au.IdUsuario=1 '; // SQL query to fetch articles for a specific user

    db.query(sql, [userId], (err, results) => {
        if (err) {
            // Handle errors, e.g., return a server error response
            return res.status(500).json({ error: err.message });
        }
        // Return the results as JSON
        res.json(results);
    });
};



exports.addUsuarioArticulo = (req, res) => {
    const { IdUsuario, IdArticulo } = req.body; // Extract the user ID and article ID from the request body

    // First, check if the entry already exists
    const checkSql = 'SELECT * FROM articulousuario WHERE IdUsuario = ? AND IdArticulo = ?';
    db.query(checkSql, [IdUsuario, IdArticulo], (checkErr, checkResults) => {
        if (checkErr) {
            // Handle errors, e.g., return a server error response
            return res.status(500).json({ error: checkErr.message });
        }

        // If the entry already exists, return a success message indicating so
        if (checkResults.length > 0) {
            return res.status(200).json({ message: 'Entry already exists', IdUsuario, IdArticulo });
        }

        // Since the entry does not exist, proceed to insert
        const insertSql = 'INSERT INTO articulousuario (IdUsuario, IdArticulo) VALUES (?, ?)'; // SQL query to insert the new entry
        db.query(insertSql, [IdUsuario, IdArticulo], (insertErr, insertResults) => {
            if (insertErr) {
                // Handle errors, e.g., return a server error response
                return res.status(500).json({ error: insertErr.message });
            }
            // Return a success response
            res.status(201).json({ message: 'Entry added successfully', IdUsuario, IdArticulo });
        });
    });
};
exports.getArticlePrice = (req, res) => {
    const { id } = req.params; // Assume you pass the article ID in the route parameter

    const sql = 'SELECT PrecioArticulo FROM articulos WHERE IdArticulo = ?'; // SQL query to fetch the price of a specific article

    db.query(sql, [id], (err, results) => {
        if (err) {
            // Handle errors, e.g., return a server error response
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            // No results found for the given article ID
            return res.status(404).json({ message: 'Article not found' });
        }
        // Return only the price as JSON
        res.json({ PrecioArticulo: results[0].PrecioArticulo });
    });
};




// Add more controller functions as necessary
