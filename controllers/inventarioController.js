// controllers/articuloController.js
const db = require('../utils/db');


exports.getCarroUsado = (req, res) => {
    const userId = req.params.id; // Get the user ID from the route parameter
    const sql = 'SELECT idvehiculo FROM INVENTARIOUSUARIO WHERE idusuario=? '; // SQL query to fetch articles for a specific user

    db.query(sql, [userId], (err, results) => {
        if (err) {
            // Handle errors, e.g., return a server error response
            return res.status(500).json({ error: err.message });
        }
        // Return the results as JSON
        res.json(results);
    });
};


exports.cambiarVehiculo = (req, res) => {
    const { idUsuario, idArticulo } = req.body;
    const checkOwnershipSql = 'SELECT IdUsuario FROM ArticuloUsuario WHERE IdUsuario = ? AND IdArticulo = ?';
    const checkVehicleTypeSql = 'SELECT IdArticulo FROM Articulos WHERE IdArticulo = ? AND TipoArticuloID = 2';

    // First, check if the user owns the article
    db.query(checkOwnershipSql, [idUsuario, idArticulo], (err, ownershipResults) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (ownershipResults.length === 0) {
            return res.status(404).json({ error: 'Artículo no encontrado para este usuario.' });
        }

        // Second, check if the article is a vehicle
        db.query(checkVehicleTypeSql, [idArticulo], (err, vehicleTypeResults) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (vehicleTypeResults.length === 0) {
                return res.status(400).json({ error: 'El artículo no es un vehículo.' });
            }

            // Both checks passed, proceed with the update
            const updateVehicleSql = 'UPDATE InventarioUsuario SET IdVehiculo = ? WHERE IdUsuario = ?';
            db.query(updateVehicleSql, [idArticulo, idUsuario], (err, updateResults) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.json({ message: 'Vehículo actualizado con éxito.' });
            });
        });
    });
};