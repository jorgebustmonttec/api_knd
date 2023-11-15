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