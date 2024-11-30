const express = require("express");
const router = express.Router();
const EventController = require("../controllers/event.controller");

router.post("/event", EventController.createEvent);
router.get("/event", EventController.getEvents);
router.get("/event/:id", EventController.getEventsById);
router.put("/event/:id", EventController.updateEvent);
router.delete("/event/:id", EventController.deleteEvent);

/**
 * @swagger
 * tags:
 *    name: Event
 *    description: Event management
 */

/**
 * @swagger
 * /api/event:
 *    post:
 *        tags: [Event]
 *        summary: create an Event
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      photo:
 *                        type: string
 *                      start_date:
 *                        type: date
 *                      start_time:
 *                        type: string
 *                      finish_date:
 *                        type: date
 *                      finish_time:
 *                        type: string
 *                      info: 
 *                        type: string
 *                      release_date:
 *                        type: date
 *                      event_type_id:
 *                        type: number
 *                      human_category_id: 
 *                        type: number
 *                      venue_id:
 *                        type: number
 *                      language_id: 
 *                        type: number
 *        responses:
 *         201:
 *           description: Event created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/event:
 *    get:
 *       tags: [Event]
 *       summary: get a Event
 *       responses:
 *        200:
 *         description: List of Event
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/event/{id}:
 *    get:
 *      tags: [Event]
 *      summary: Get a Event by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Event id
 *      responses:
 *        200:
 *          description: Event details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/event/{id}:
 *    put:
 *      tags: [Event]
 *      summary: edit Event
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Event ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      photo:
 *                        type: string
 *                      start_date:
 *                        type: date
 *                      start_time:
 *                        type: string
 *                      finish_date:
 *                        type: date
 *                      finish_time:
 *                        type: string
 *                      info: 
 *                        type: string
 *                      release_date:
 *                        type: date
 *                      event_type_id:
 *                        type: number
 *                      human_category_id: 
 *                        type: number
 *                      venue_id:
 *                        type: number
 *                      language_id: 
 *                        type: number
 *      responses:
 *        200:
 *         description: Event updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/event/{id}:
 *    delete:
 *        tags: [Event]
 *        summary: delete Event
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Event ID
 *        responses:
 *           200:
 *            description: Event deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;
