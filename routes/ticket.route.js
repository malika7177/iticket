const express = require("express");
const router = express.Router();
const TicketController = require("../controllers/ticket.controller");

router.post("/ticket", TicketController.createTicket);
router.get("/ticket", TicketController.getTickets);
router.get("/ticket/:id", TicketController.getTicketById);
router.put("/ticket/:id", TicketController.updateTicket);
router.delete("/ticket/:id", TicketController.deleteTicket)

/**
 * @swagger
 * tags:
 *     name: Ticket
 *     description: Ticket management
 */

/**
 * @swagger
 * /api/ticket:
 *    post:
 *        tags: [Ticket]
 *        summary: create a Ticket
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      event_id:
 *                        type: number
 *                      seat_id:
 *                        type: number
 *                      price: 
 *                        type: number
 *                      service_fee:
 *                        type: number
 *                      ticket_type_id:
 *                        type: number
 *                      status_id: 
 *                        type: number
 *        responses:
 *         201:
 *           description: Ticket created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/ticket:
 *    get:
 *       tags: [Ticket]
 *       summary: get a Ticket
 *       responses:
 *        200:
 *         description: List of Ticket
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/ticket/{id}:
 *    get:
 *      tags: [Ticket]
 *      summary: Get a Ticket by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Ticket id
 *      responses:
 *        200:
 *          description: Ticket details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/ticket/{id}:
 *    put:
 *      tags: [Ticket]
 *      summary: edit Ticket
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Ticket ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      event_id:
 *                        type: number
 *                      seat_id:
 *                        type: number
 *                      price: 
 *                        type: number
 *                      service_fee:
 *                        type: number
 *                      ticket_type_id:
 *                        type: number
 *                      status_id: 
 *                        type: number
 *      responses:
 *        200:
 *         description: Ticket updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/ticket/{id}:
 *    delete:
 *        tags: [Ticket]
 *        summary: delete Ticket
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Ticket ID
 *        responses:
 *           200:
 *            description: Ticket deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;