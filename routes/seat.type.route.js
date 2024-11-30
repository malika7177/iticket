const express = require("express");
const router = express.Router();
const seatTypeController = require("../controllers/seat.type.controller");

/**
 * @swagger
 * tags:
 *     name: Seat Type
 *     description: seat type management
 */

router.post("/seatType", seatTypeController.createSeatType);
router.get("/seatType", seatTypeController.getSeatTypes);
router.get("/seatType/:id", seatTypeController.getSeatTypeById);
router.put("/seatType/:id", seatTypeController.updateSeatType);
router.delete("/seatType/:id", seatTypeController.deleteSeatType);

/**
 * @swagger
 * /api/seatType:
 *    post:
 *        tags: [Seat Type]
 *        summary: create a Seat type
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
 *           description: Seat Type created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/seatType:
 *    get:
 *       tags: [Seat Type]
 *       summary: get a Seat type
 *       responses:
 *        200:
 *         description: List of Seat types
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/seatType/{id}:
 *    get:
 *      tags: [Seat Type]
 *      summary: Get a Seat Type by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Seat Type id
 *      responses:
 *        200:
 *          description: Seat Type details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/seatType/{id}:
 *    put:
 *      tags: [Seat Type]
 *      summary: edit Seat Type
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Seat Type ID
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
 *         description: Seat Type updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/seatType/{id}:
 *    delete:
 *        tags: [Seat Type]
 *        summary: delete Seat Type
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Seat Type ID
 *        responses:
 *           200:
 *            description: Seat Type deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;