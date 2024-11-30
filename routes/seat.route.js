const express = require("express");
const router = express.Router();
const seatController = require("../controllers/seat.controller");

router.post("/seat", seatController.createSeat);
router.get("/seat", seatController.getSeats);
router.get("/seat/:id", seatController.getSeatById);
router.put("/seat/:id", seatController.updateSeat);
router.delete("/seat/:id", seatController.deleteSeat);

/**
 * @swagger
 * tags:
 *     name: Seat
 *     description: seat management
 */

/**
 * @swagger
 * /api/seat:
 *    post:
 *        tags: [Seat]
 *        summary: create a new seat
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                       sector_id:
 *                         type: number
 *                       row_number:
 *                         type: number
 *                       number:
 *                         type: number
 *                       venue_id:
 *                          type: number
 *                       seat_type_id:
 *                          type: number
 *                       location_in_schema:
 *                          type: string
 *        responses:
 *         201:
 *           description: Seat created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/seat:
 *    get:
 *       tags: [Seat]
 *       summary: get a Seat
 *       responses:
 *        200:
 *         description: List of Seat
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/seat/{id}:
 *    get:
 *      tags: [Seat]
 *      summary: Get a Seat by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Seat id
 *      responses:
 *        200:
 *          description: Seat details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/seat/{id}:
 *    put:
 *      tags: [Seat]
 *      summary: edit Seat
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Seat ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       sector_id:
 *                         type: number
 *                       row_number:
 *                         type: number
 *                       number:
 *                         type: number
 *                       venue_id:
 *                          type: number
 *                       seat_type_id:
 *                          type: number
 *                       location_in_schema:
 *                          type: string
 *      responses:
 *        200:
 *         description: Seat updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/seat/{id}:
 *    delete:
 *        tags: [Seat]
 *        summary: delete Seat
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Seat ID
 *        responses:
 *           200:
 *            description: Seat deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router