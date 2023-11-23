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
