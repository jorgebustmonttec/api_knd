// controllers/logJuegoController.js

const db = require('../utils/db'); // Import your database configuration

exports.addLogJuegoEntry = (req, res) => {
    // Include Puntuacion in the destructured variables
    const { IdUsuario, GemsGanadas, DuracionJuego, Puntuacion } = req.body;

    const TiempoInicio = new Date(Date.now() - DuracionJuego * 1000).toISOString().slice(0, 19).replace('T', ' ');

    const sql = `
        INSERT INTO logjuego (IdUsuario, TiempoInicio, DuracionJuego, Puntuacion, GemasGanadas)
        VALUES (?, ?, ?, ?, ?)
    `;
    
    // Update the db.query to use the new Puntuacion parameter
    db.query(sql, [IdUsuario, TiempoInicio, DuracionJuego, Puntuacion, GemsGanadas], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Log entry created successfully', id: result.insertId });
    });
};

exports.checkLogs = (req, res) => {
    const sql = `SELECT * FROM logjuego`;
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(result);
    });
};

