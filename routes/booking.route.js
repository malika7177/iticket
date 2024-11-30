const express = require('express');
const router = express.Router()
const bookingController = require("../controllers/booking.controller")

router.post("/booking", bookingController.createBooking);
router.get("/booking", bookingController.getBookings);
router.get("/booking/:id", bookingController.getBookingById);
router.put("/booking/:id", bookingController.updateBooking);
router.delete("/booking/:id", bookingController.deleteBooking);

/**
 * @swagger
 * tags:
 *    name: Booking
 *    description: Booking management
 */

/**
 * @swagger
 * /api/booking:
 *    post:
 *        tags: [Booking]
 *        summary: create an Booking
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      cart_id:
 *                        type: number
 *                      createdAt:
 *                        type: data
 *                      finishedAt:
 *                        type: date
 *                      payment_id:
 *                        type: number
 *                      delivery_id:
 *                        type: number
 *                      discount_id:
 *                        type: number
 *                      status_id: 
 *                        type: number
 *        responses:
 *         201:
 *           description: Booking created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/booking:
 *    get:
 *       tags: [Booking]
 *       summary: get a Booking
 *       responses:
 *        200:
 *         description: List of Booking
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/booking/{id}:
 *    get:
 *      tags: [Booking]
 *      summary: Get a Booking by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Booking id
 *      responses:
 *        200:
 *          description: Booking details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/booking/{id}:
 *    put:
 *      tags: [Booking]
 *      summary: edit Booking
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Booking ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      cart_id:
 *                        type: number
 *                      createdAt:
 *                        type: data
 *                      finishedAt:
 *                        type: date
 *                      payment_id:
 *                        type: number
 *                      delivery_id:
 *                        type: number
 *                      discount_id:
 *                        type: number
 *                      status_id: 
 *                        type: number
 *      responses:
 *        200:
 *         description: Booking updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/booking/{id}:
 *    delete:
 *        tags: [Booking]
 *        summary: delete Booking
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Booking ID
 *        responses:
 *           200:
 *            description: Booking deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router