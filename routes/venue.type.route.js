const express = require('express');
const router = express.Router();
const venueTypeController = require("../controllers/venue.type.controller");

/**
 * @swagger
 * tags:
 *    name: Venue Type
 *    description: Venue type management
 */

/**
 * @swagger
 * /api/venueType:
 *    post:
 *        tags: [Venue Type]
 *        summary: create a venue type
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
 *           description: Venue Type created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */
router.post("/venueType", venueTypeController.createVenueType);

/**
 * @swagger
 * /api/venueType:
 *    get:
 *       tags: [Venue Type]
 *       summary: get a venue type
 *       responses:
 *        200:
 *         description: List of venue types
 *        500:
 *         description: Server error
 */
router.get("/venueType", venueTypeController.getVenueType)

/**
 * @swagger
 * /api/venueType/{id}:
 *    get:
 *      tags: [Venue Type]
 *      summary: Get a Venue Type by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Venue Type id
 *      responses:
 *        200:
 *          description: Venue Type details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */
router.get("/venueType/:id", venueTypeController.getVenueTypeById)

/**
 * @swagger
 * /api/venueType/{id}:
 *    put:
 *      tags: [Venue Type]
 *      summary: edit Venue Type
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Venue Type ID
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
 *         description: Venue Type updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */
router.put("/venueType/:id", venueTypeController.updateVenueType)

/**
 * @swagger
 * /api/venueType/{id}:
 *    delete:
 *        tags: [Venue Type]
 *        summary: delete Venue Type
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Venue Type ID
 *        responses:
 *           200:
 *            description: Venue Type deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */
router.delete("/venueType/:id", venueTypeController.deleteVenueType)

module.exports = router;