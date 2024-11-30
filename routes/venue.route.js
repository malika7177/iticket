const express = require('express');
const router = express.Router();
const venueController = require("../controllers/venue.controller");

/**
 * @swagger
 * tags:
 *    name: Venue
 *    description: Venue management
 */

/**
 * @swagger
 * /api/venue:
 *    post:
 *        tags: [Venue]
 *        summary: create a Venue
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      address:
 *                        type: string
 *                      location:
 *                        type: string
 *                      site:
 *                        type: string
 *                      phone:
 *                        type: string
 *                      schema:
 *                        type: string
 *                      district_id:
 *                        type: number
 *                      region_id:
 *                        type: number
 *                      venue_type_id:
 *                        type: number
 *        responses:
 *         201:
 *           description: Venue created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */
router.post("/venue", venueController.createVenue);
router.get("/venue", venueController.getVenues);
router.get("/venue/:id", venueController.getVenueById);
router.put("/venue/:id", venueController.updateVenue);
router.delete("/delete/:id", venueController.deleteVenue);

/**
 * @swagger
 * /api/venue:
 *    get:
 *       tags: [Venue]
 *       summary: get a Venue
 *       responses:
 *        200:
 *         description: List of Venue
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/venue/{id}:
 *    get:
 *      tags: [Venue]
 *      summary: Get a Venue by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Venue id
 *      responses:
 *        200:
 *          description: Venue details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/venue/{id}:
 *    put:
 *      tags: [Venue]
 *      summary: edit Venue
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Venue ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      address:
 *                        type: string
 *                      location:
 *                        type: string
 *                      site:
 *                        type: string
 *                      phone:
 *                        type: string
 *                      schema:
 *                        type: string
 *      responses:
 *        200:
 *         description: Venue updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/venue/{id}:
 *    delete:
 *        tags: [Venue]
 *        summary: delete Venue
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Venue ID
 *        responses:
 *           200:
 *            description: Venue deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;