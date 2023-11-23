// controllers/logJuegoController.js

const db = require('../utils/db'); // Import your database configuration

exports.addLogJuegoEntry = (req, res) => {
    const { IdUsuario, GemsGanadas, DuracionJuego } = req.body; // Get variables from request body
    const TiempoInicio = new Date(Date.now() - DuracionJuego * 1000).toISOString().slice(0, 19).replace('T', ' ');

    const sql = `
        INSERT INTO logjuego (IdUsuario, TiempoInicio, DuracionJuego, Puntuacion, GemasGanadas)
        VALUES (?, ?, ?, ?, ?)
    `;
    
    db.query(sql, [IdUsuario, TiempoInicio, DuracionJuego, DuracionJuego, GemsGanadas], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Log entry created successfully', id: result.insertId });
    });
};