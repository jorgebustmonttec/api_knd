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



const express = require('express');
const articuloController = require('../controllers/articuloController');
const router = express.Router();

router.get('/', articuloController.getAllArticulos);

module.exports = router;
