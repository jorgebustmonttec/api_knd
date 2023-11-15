const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - IdUsuario
 *       properties:
 *         IdUsuario:
 *           type: integer
 *           description: The unique identifier for the usuario.
 *         UsernameUsuario:
 *           type: string
 *           description: The username of the usuario.
 *         CorreoUsuario:
 *           type: string
 *           description: The email address of the usuario.
 *         PasswordUsuario:
 *           type: string
 *           description: The password of the usuario.
 *         NombresUsuario:
 *           type: string
 *           description: The first name(s) of the usuario.
 *         ApellidoPUsuario:
 *           type: string
 *           description: The paternal surname of the usuario.
 *         ApellidoMUsuario:
 *           type: string
 *           description: The maternal surname of the usuario.
 *         FechaNacimientoUsuario:
 *           type: string
 *           format: date
 *           description: The birth date of the usuario.
 *         DireccionUsuarioCalle:
 *           type: string
 *           description: The street address of the usuario.
 *         GeneroUsuario:
 *           type: string
 *           description: The gender of the usuario.
 *         TelefonoUsuario:
 *           type: string
 *           description: The phone number of the usuario.
 *         FechaCreacionUsuario:
 *           type: string
 *           format: date-time
 *           description: The creation date and time of the usuario record.
 *         Administrador:
 *           type: boolean
 *           description: Whether the usuario is an administrator.
 *       example:
 *         IdUsuario: 1
 *         UsernameUsuario: johndoe
 *         CorreoUsuario: johndoe@example.com
 *         PasswordUsuario: hashpassword
 *         NombresUsuario: John
 *         ApellidoPUsuario: Doe
 *         ApellidoMUsuario: Smith
 *         FechaNacimientoUsuario: "1990-01-01"
 *         DireccionUsuarioCalle: "123 Main St"
 *         GeneroUsuario: "M"
 *         TelefonoUsuario: "123-456-7890"
 *         FechaCreacionUsuario: "2023-01-01T00:00:00Z"
 *         Administrador: false
 *
 * /usuarios:
 *   get:
 *     summary: Retrieve a list of usuarios
 *     responses:
 *       200:
 *         description: A list of usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get('/', usuarioController.getAllUsuarios);

/**
 * @swagger
 * /usuarios/register:
 *   post:
 *     summary: Register a new usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario registered successfully.
 *       400:
 *         description: Error in registration data.
 */
router.post('/register', usuarioController.registerUsuario);

module.exports = router;
