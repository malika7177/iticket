const express = require('express');
const router = express.Router();
const sectorController = require("../controllers/sector.controller");

/**
 * @swagger
 * tags:
 *    name: Sector
 *    description: Sector management
 */

/**
 * @swagger
 * /api/sector:
 *    post:
 *        tags: [Sector]
 *        summary: create a Sector
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *        responses:
 *         201:
 *           description: Sector created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */
router.post("/sector", sectorController.createSector);

/**
 * @swagger
 * /api/sector:
 *    get:
 *       tags: [Sector]
 *       summary: get a Sector
 *       responses:
 *        200:
 *         description: List of Sectors
 *        500:
 *         description: Server error
 */
router.get("/sector", sectorController.getSector);

/**
 * @swagger
 * /api/sector/{id}:
 *    get:
 *      tags: [Sector]
 *      summary: Get a Sector by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Sector id
 *      responses:
 *        200:
 *          description: Sector details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */
router.get("/sector/:id", sectorController.getSectorById);

/**
 * @swagger
 * /api/sector/{id}:
 *    put:
 *      tags: [Sector]
 *      summary: edit sector
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: sector ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                    name:
 *                      type: string
 *      responses:
 *        200:
 *         description: sector updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */
router.put("/sector/:id", sectorController.updateSector);

/**
 * @swagger
 * /api/sector/{id}:
 *    delete:
 *        tags: [Sector]
 *        summary: delete Sector
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Sector ID
 *        responses:
 *           200:
 *            description: Sector deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */
router.delete("/sector/:id", sectorController.deleteSector);

module.exports = router