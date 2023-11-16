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

/**
 * @swagger
 * /usuarios/{id}/articulos:
 *   get:
 *     summary: Retrieve articles owned by a specific usuario
 *     description: Retrieve a list of article IDs that a specific usuario owns.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the usuario to get articles for.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of articles owned by the usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   IdArticulo:
 *                     type: integer
 *                     description: The unique identifier of the article.
 *       404:
 *         description: Usuario not found.
 */
router.get('/:id/articulos', usuarioController.getUsuarioArticulos);

/**
 * @swagger
 * /usuarios/{id}/inventario:
 *   get:
 *     summary: Retrieve the inventory of a specific usuario
 *     description: Retrieve the inventory details for a specific usuario.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the usuario to get the inventory for.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The inventory of the usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   IdInventario:
 *                     type: integer
 *                     description: The unique identifier for the inventory entry.
 *                   IdUsuario:
 *                     type: integer
 *                   IdMarco:
 *                     type: integer
 *                   IdVehiculo:
 *                     type: integer
 *                   IdCabeza:
 *                     type: integer
 *                   IdCuerpo:
 *                     type: integer
 *       404:
 *         description: Usuario not found.
 */
router.get('/:id/inventario', usuarioController.getUsuarioInventario);


/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Retrieve a specific usuario by ID
 *     description: Retrieve details of a specific usuario by their unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the usuario to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detailed information about the usuario.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario not found.
 */
router.get('/:id', usuarioController.getUsuarioById);

/**
 * @swagger
 * /usuarios/{id}/admin:
 *   get:
 *     summary: Check admin status of a usuario
 *     description: Retrieve the admin status for a specific usuario.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the usuario to check admin status for.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin status of the usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Administrador:
 *                   type: boolean
 *       404:
 *         description: Usuario not found.
 */
router.get('/:id/admin', usuarioController.checkAdminStatus);

/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Authenticate a usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Correo:
 *                 type: string
 *                 description: The email of the usuario.
 *               Password:
 *                 type: string
 *                 description: The password of the usuario.
 *     responses:
 *       200:
 *         description: Authentication successful.
 *       401:
 *         description: Authentication failed.
 */
router.post('/login', usuarioController.authenticateUsuario);


module.exports = router;
