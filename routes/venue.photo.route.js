const express = require('express');
const router = express.Router();
const VenuePhotoController = require("../controllers/venue.photo.controller");

router.post("/venuePhoto", VenuePhotoController.createVenuePhoto);
router.get("/venuePhoto", VenuePhotoController.getVenuePhotos);
router.get("/venuePhoto/:id", VenuePhotoController.getVenuePhotoById);
router.put("/venuePhoto/:id", VenuePhotoController.updateVenuePhoto);
router.delete("/venuePhoto/:id", VenuePhotoController.deleteVenuePhoto);

/**
 * @swagger
 * tags:
 *    name: Venue Photo
 *    description: Venue Photo management
 */

/**
 * @swagger
 * /api/venuePhoto:
 *    post:
 *        tags: [Venue Photo]
 *        summary: create a Venue Photo
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      url:
 *                        type: string
 *                      venue_id:
 *                        type: number
 *        responses:
 *         201:
 *           description: Venue Photo created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/venuePhoto:
 *    get:
 *       tags: [Venue Photo]
 *       summary: get a Venue Photo
 *       responses:
 *        200:
 *         description: List of Venue Photo
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *    get:
 *      tags: [Venue Photo]
 *      summary: Get a Venue Photo by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Venue Photo id
 *      responses:
 *        200:
 *          description: Venue Photo details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *    put:
 *      tags: [Venue Photo]
 *      summary: edit Venue Photo
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Venue Photo ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      url:
 *                        type: string
 *                      venue_id:
 *                        type: number
 *      responses:
 *        200:
 *         description: Venue Photo updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *    delete:
 *        tags: [Venue Photo]
 *        summary: delete Venue Photo
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Venue Photo ID
 *        responses:
 *           200:
 *            description: Venue Photo deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;