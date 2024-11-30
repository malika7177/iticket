const express = require("express");
const router = express.Router();
const Flat = require("../controllers/flat.controller");

/**
 * @swagger
 * tags:
 *     name: Flat
 *     description: Flat management
 */

/**
 * @swagger
 * /api/flat:
 *     post:
 *        tags: [Flat]
 *        summary: create a Flat
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      etaj:
 *                        type: number
 *                      condition:
 *                        type: string
 *        responses:
 *         201:
 *           description: Flat created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */
router.post("/flat", Flat.createFlat);

/**
 * @swagger
 * /api/flat:
 *    get:
 *        tags: [Flat]
 *        summary: get a Flat
 *        responses:
 *          200:
 *           description: List of flats
 *          500:
 *           description: Server error
 */
router.get("/flat", Flat.getFlats);

/**
 * @swagger
 * /api/flat/{id}:
 *     get:
 *        tags: [Flat]
 *        summary: Get a Flat by id
 *        parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Flat by id
 *        responses:
 *          200:
 *            description: Flat details
 *          404:
 *            description: Not found
 *          500:
 *            description: Internal Server
 */
router.get("/flat/:id", Flat.getFlatById);

/**
 * @swagger
 * /api/flat/{id}:
 *    put:
 *      tags: [Flat]
 *      summary: edit Flat
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Flat ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      etaj:
 *                        type: number
 *                      condition:
 *                        type: string
 *      responses:
 *        200:
 *         description: Flat updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error
 */
router.put("/flat/id", Flat.updateFlat);

/**
 * @swagger
 * /api/flat/{id}:
 *    delete:
 *        tags: [Flat]
 *        summary: delete Flat
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Flat ID
 *        responses:
 *           200:
 *            description: Flat deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */
router.delete("/flat/:id", Flat.deleteFlat);

module.exports = router;
