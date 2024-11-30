const express = require("express");
const router = express.Router();
const EventTypeController = require("../controllers/event.type.controller");

/**
 * @swagger
 * tags:
 *     name: Event Type
 *     description: Event type management
 */

router.get("/eventType", EventTypeController.getEventType);
router.get("/eventType/:id", EventTypeController.getEventTypeById);
router.put("/eventType/:id", EventTypeController.updateEventType);
router.delete("/eventType/:id", EventTypeController.deleteEventType);

/**
 * @swagger
 * /api/eventType:
 *    post:
 *        tags: [Event Type]
 *        summary: create a Event type
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      parent_event_type:
 *                        type: string
 *        responses:
 *         201:
 *           description: Event Type created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */
router.post("/eventType", EventTypeController.createEventType);

/**
 * @swagger
 * /api/eventType:
 *    get:
 *       tags: [Event Type]
 *       summary: get a Event type
 *       responses:
 *        200:
 *         description: List of Event types
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/eventType/{id}:
 *    get:
 *      tags: [Event Type]
 *      summary: Get a Event Type by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Event Type id
 *      responses:
 *        200:
 *          description: Event Type details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/eventType/{id}:
 *    put:
 *      tags: [Event Type]
 *      summary: edit Event Type
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Event Type ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      parent_event_type:
 *                        type: string
 *      responses:
 *        200:
 *         description: Event Type updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/eventType/{id}:
 *    delete:
 *        tags: [Event Type]
 *        summary: delete Event Type
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Event Type ID
 *        responses:
 *           200:
 *            description: Event Type deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;
