// routes/logJuegoRoutes.js

const express = require('express');
const logJuegoController = require('../controllers/logJuegoController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: LogJuego
 *     description: Operations about log juego
 *
 * /logjuego:
 *   post:
 *     tags: [LogJuego]
 *     summary: Create a log juego entry
 *     description: Add a new entry to the log juego table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - IdUsuario
 *               - GemsGanadas
 *               - DuracionJuego
 *             properties:
 *               IdUsuario:
 *                 type: integer
 *                 description: The ID of the usuario.
 *               GemsGanadas:
 *                 type: integer
 *                 description: The number of gems won.
 *               DuracionJuego:
 *                 type: integer
 *                 description: The duration of the game in seconds.
 *     responses:
 *       201:
 *         description: Log entry created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 *                   description: The ID of the created log entry.
 *       500:
 *         description: Server error.
 */

router.post('/', logJuegoController.addLogJuegoEntry);

module.exports = router;
