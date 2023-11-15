class Usuario {
    constructor(db) {
      this.db = db;
    }
  
    getAll(callback) {
      this.db.query('SELECT * FROM usuarios', function (err, results) {
        if (err) {
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // You can add more methods for different operations, like getById, create, update, delete, etc.
  }

  
  
  module.exports = Usuario;
  