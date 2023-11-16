// models/articulo.js

const db = require('../utils/db'); // Assuming you have a utility file for DB operations

class Articulo {
    static getAll(callback) {
        const sql = 'SELECT * FROM articulos';
        db.query(sql, function(err, results) {
            callback(err, results);
        });
    }

    // Add more methods for CRUD operations as needed
}

module.exports = Articulo;
