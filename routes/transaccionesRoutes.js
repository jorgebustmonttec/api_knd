// routes/transaccionesRoutes.js

const express = require('express');
const transaccionesController = require('../controllers/transaccionesController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: LogJuego
 *     description: Operations about log juego
 * 
 * /transacciones/regalarGemas:
 *   post:
 *     tags: [Transacciones]
 *     summary: Add a transaction of type 'Regalo'
 *     description: Insert a gift transaction into the transaccionesdineroreal table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - amount
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: The user ID to which the transaction belongs.
 *               amount:
 *                 type: integer
 *                 description: The amount of gems granted.
 *     responses:
 *       201:
 *         description: Transaction added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 transactionId:
 *                   type: integer
 *                   description: The ID of the created transaction.
 *       500:
 *         description: Server error.
 */
router.post('/regalarGemas', transaccionesController.addTransaccionDineroReal);


module.exports = router;
