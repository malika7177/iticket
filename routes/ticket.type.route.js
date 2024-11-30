const express = require("express");
const router = express.Router();
const ticketTypeController = require("../controllers/ticket.type.controller");

router.post("/ticketType", ticketTypeController.createTicketType);
router.get("/ticketType", ticketTypeController.getTicketTypes);
router.get("/ticketType/:id", ticketTypeController.getTicketTypeById);
router.put("/ticketType/:id", ticketTypeController.updateTicketType);
router.delete("/ticketType/:id", ticketTypeController.deleteTicketType);

/**
 * @swagger
 * tags:
 *     name: Ticket Type
 *     description: ticket type management
 */

/**
 * @swagger
 * /api/ticketType:
 *    post:
 *        tags: [Ticket Type]
 *        summary: create a Ticket type
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      color:
 *                        type: string
 *        responses:
 *         201:
 *           description: Ticket Type created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/ticketType:
 *    get:
 *       tags: [Ticket Type]
 *       summary: get a Ticket type
 *       responses:
 *        200:
 *         description: List of Ticket types
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/ticketType/{id}:
 *    get:
 *      tags: [Ticket Type]
 *      summary: Get a Ticket Type by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Ticket Type id
 *      responses:
 *        200:
 *          description: Ticket Type details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/ticketType/{id}:
 *    put:
 *      tags: [Ticket Type]
 *      summary: edit Ticket Type
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Ticket Type ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                    name:
 *                      type: string
 *                    color:
 *                      type: string
 *      responses:
 *        200:
 *         description: Ticket Type updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/ticketType/{id}:
 *    delete:
 *        tags: [Ticket Type]
 *        summary: delete Ticket Type
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Ticket Type ID
 *        responses:
 *           200:
 *            description: Ticket Type deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */


module.exports = router;