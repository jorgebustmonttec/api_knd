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