// controllers/transaccionesController.js

const db = require('../utils/db'); // Make sure to import your database configuration

exports.addTransaccionDineroReal = (req, res) => {
    // Extracting userId and amount from the request body
    const { userId, amount } = req.body;

    // SQL query to insert the data into the transaccionesdineroreal table
    const sql = `
        INSERT INTO transaccionesdineroreal(idusuario, tiempotransaccion, idarticulo, tipo, cantidadgemasotorgadas)
        VALUES (?, NOW(), NULL, 'Regalo', ?)
    `;

    // Execute the query with the userId and amount as parameters
    db.query(sql, [userId, amount], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Transaction added successfully', transactionId: result.insertId });
    });
};


// transaccionesController.js

exports.addCompraTransaction = (req, res) => {
    const { idUsuario, idArticulo, detalle } = req.body;

    // First, retrieve the price of the article from the 'articulos' table
    const precioSql = 'SELECT PrecioArticulo FROM articulos WHERE IdArticulo = ?';

    db.query(precioSql, [idArticulo], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Article not found.' });
        }
        
        // Retrieve the price of the article
        const precioArticulo = results[0].PrecioArticulo;

        // Now, insert the transaction into the 'transacciones' table
        const insertSql = `
            INSERT INTO transaccionesgemas (idUsuario, TiempoTransaccion, idArticulo, Tipo, CantidadGemas, Detalle)
            VALUES (?, NOW(), ?, 'Compra', ?, ?)
        `;

        db.query(insertSql, [idUsuario, idArticulo, precioArticulo, detalle], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Transaction added successfully', transactionId: result.insertId });
        });
    });
};

