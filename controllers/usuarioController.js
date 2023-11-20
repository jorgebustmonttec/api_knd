const Usuario = require('../models/usuario');
const db = require('../utils/db');

const usuarioModel = new Usuario(db);

exports.getAllUsuarios = (req, res) => {
  usuarioModel.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};


exports.registerUsuario = (req, res) => {
    // Your logic to handle the registration
    const { Nombre, PrimerApellido, SegundoApellido, Direccion, Telefono, Usuario, Correo, Password, Genero, FechaNacimiento } = req.body;
    const sql = "INSERT INTO usuarios (NombresUsuario, ApellidoPUsuario, ApellidoMUsuario, DireccionUsuarioCalle, TelefonoUsuario, UsernameUsuario, CorreoUsuario, PasswordUsuario, GeneroUsuario, FechaNacimientoUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [Nombre, PrimerApellido, SegundoApellido, Direccion, Telefono, Usuario, Correo, Password, Genero, FechaNacimiento], (err, result) => {
        if (err) {
            console.error("Error inserting data into Database!", err);
            return res.status(500).send(err.message);
        }
        res.status(200).send("Usuario registered successfully.");
    });
};

exports.getUsuarioArticulos = (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT * FROM articulousuario WHERE IdUsuario = ?";
  db.query(sql, [userId], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
          return res.status(404).json({ message: 'No articles found for this usuario.' });
      }
      res.json(results);
  });
};

exports.getUsuarioInventario = (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT * FROM inventariousuario WHERE IdUsuario = ?";
  db.query(sql, [userId], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
          return res.status(404).json({ message: 'Inventory not found for this usuario.' });
      }
      res.json(results);
  });
};

exports.getUsuarioById = (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT * FROM usuarios WHERE IdUsuario = ?";
  db.query(sql, [userId], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (result.length === 0) {
          return res.status(404).json({ message: 'Usuario not found.' });
      }
      res.json(result[0]); // Return the first (and should be only) result.
  });
};


exports.checkAdminStatus = (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT Administrador FROM usuarios WHERE IdUsuario = ?";
  db.query(sql, [userId], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (result.length === 0) {
          return res.status(404).json({ message: 'Usuario not found.' });
      }
      res.json({ Administrador: result[0].Administrador });
  });
};

exports.authenticateUsuario = (req, res) => {
  const { Correo, Password } = req.body;
  const sql = "SELECT IdUsuario, PasswordUsuario, Administrador FROM usuarios WHERE CorreoUsuario = ?";

  db.query(sql, [Correo], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
          return res.status(401).json({ message: 'Authentication failed.' });
      }

      const user = results[0];
      // TODO: Compare hashed password if you store hashed passwords
      if (user.PasswordUsuario === Password) {
          // Return some user details (avoid sending sensitive information)
          res.json({ userId: user.IdUsuario, isAdmin: user.Administrador });
      } else {
          res.status(401).json({ message: 'Authentication failed.' });
      }
  });
};


// Method to check if an email exists in the database
exports.checkEmailExists = (req, res) => {
  const email = req.query.email;
  const sql = "SELECT COUNT(*) AS count FROM usuarios WHERE CorreoUsuario = ?";
  
  db.query(sql, [email], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json({ exists: result[0].count > 0 });
  });
};

// Method to check if a username exists in the database
exports.checkUsernameExists = (req, res) => {
  const username = req.query.username;
  const sql = "SELECT COUNT(*) AS count FROM usuarios WHERE UsernameUsuario = ?";
  
  db.query(sql, [username], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json({ exists: result[0].count > 0 });
  });
};

// In usuarioController.js

exports.getUserGenders = (req, res) => {
    const sql = "SELECT GeneroUsuario, COUNT(*) AS count FROM usuarios GROUP BY GeneroUsuario";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Convert the array of results into an object with gender keys and counts
        const genderCount = results.reduce((acc, { GeneroUsuario, count }) => {
            acc[GeneroUsuario] = count;
            return acc;
        }, {});
        // Include "Prefiero No Decir" count if not present
        if (!genderCount["Prefiero No Decir"]) {
            genderCount["Prefiero No Decir"] = 0;
        }
        res.json(genderCount);
    });
};

