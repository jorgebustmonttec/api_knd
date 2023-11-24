

const express = require('express');
const articuloController = require('../controllers/articuloController');
const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Articulo:
 *       type: object
 *       properties:
 *         IdArticulo:
 *           type: integer
 *           description: The unique identifier for the articulo.
 *         TipoCompra:
 *           type: string
 *           enum: [Gemas, Dinero, Gratis]
 *           description: The type of purchase for the articulo.
 *         TipoArticulo:
 *           type: string
 *           description: The type of the articulo.
 *         NombreArticulo:
 *           type: string
 *           description: The name of the articulo.
 *         DescripcionArticulo:
 *           type: string
 *           description: The description of the articulo.
 *         PrecioArticulo:
 *           type: number
 *           format: double
 *           description: The price of the articulo.
 *         ClaseArticulo:
 *           type: integer
 *           description: The class identifier of the articulo.
 *         ExclusivoCofre:
 *           type: boolean
 *           description: Whether the articulo is exclusively obtained from a chest.
 *         TipoArticuloID:
 *           type: integer
 *           description: The type identifier of the articulo, possibly related to another table.
 *       required:
 *         - IdArticulo
 *       example:
 *         IdArticulo: 1
 *         TipoCompra: Gemas
 *         TipoArticulo: 'Skin'
 *         NombreArticulo: 'Dragon Skin'
 *         DescripcionArticulo: 'A rare dragon skin for your avatar.'
 *         PrecioArticulo: 1500.00
 *         ClaseArticulo: 2
 *         ExclusivoCofre: false
 *         TipoArticuloID: 10
 * 
 * tags:
 *   - name: Articulos
 *     description: Operations about articulos
 * 
 * /articulos:
 *   get:
 *     tags: [Articulos]
 *     summary: Retrieve a list of all articulos
 *     responses:
 *       200:
 *         description: A list of articulos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Articulo'
 */
router.get('/', articuloController.getAllArticulos);

/**
 * @swagger
 * /articulos/usuarioArticulos:
 *   get:
 *     tags: [Articulos]
 *     summary: Retrieve a list of all articulos with their associated usuarios
 *     responses:
 *       200:
 *         description: A list of usuario and articulo associations.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   IdUsuario:
 *                     type: integer
 *                     description: The unique identifier for the usuario.
 *                   IdArticulo:
 *                     type: integer
 *                     description: The unique identifier for the articulo.
 *                 required:
 *                   - IdUsuario
 *                   - IdArticulo
 *                 example:
 *                   IdUsuario: 123
 *                   IdArticulo: 456
 */
router.get('/usuarioArticulos', articuloController.getAllUsuarioArticulo);

/**
 * @swagger
 * /articulos/usuarioArticulos/{id}:
 *   get:
 *     tags: [Articulos]
 *     summary: Retrieve a list of articulos owned by a specific usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the usuario to get the articulos for.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of articulos owned by the specified usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   IdUsuario:
 *                     type: integer
 *                     description: The unique identifier for the usuario.
 *                   IdArticulo:
 *                     type: integer
 *                     description: The unique identifier for the articulo.
 */
router.get('/usuarioArticulos/:id', articuloController.getArticulosByUsuario);


/**
 * @swagger
 * /articulos/usuarioArticulos/add:
 *   post:
 *     tags: [Articulos]
 *     summary: Add a new articulo for a specific usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               IdUsuario:
 *                 type: integer
 *                 description: The unique identifier for the usuario.
 *               IdArticulo:
 *                 type: integer
 *                 description: The unique identifier for the articulo.
 *             required:
 *               - IdUsuario
 *               - IdArticulo
 *     responses:
 *       201:
 *         description: Entry created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Entry added successfully
 *                 IdUsuario:
 *                   type: integer
 *                   example: 1
 *                 IdArticulo:
 *                   type: integer
 *                   example: 22
 *       500:
 *         description: Server error.
 * 
 */
router.post('/usuarioArticulos/add', articuloController.addUsuarioArticulo);


module.exports = router;
