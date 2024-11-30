const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region.controller");

router.post("/region", regionController.createRegion);
router.get("/region", regionController.getRegions);
router.get("/region/:id", regionController.getRegionById);
router.put("/region/:id", regionController.updateRegion);
router.delete("/region/:id", regionController.deleteRegion);

/**
 * @swagger
 * tags:
 *    name: Region
 *    description: Region management
 */

/**
 * @swagger
 * /api/region:
 *    post:
 *        tags: [Region]
 *        summary: create a region
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      postpone:
 *                         type: number
 *        responses:
 *         201:
 *           description: region created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/region:
 *    get:
 *       tags: [Region]
 *       summary: get a region
 *       responses:
 *        200:
 *         description: List of regions
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/region/{id}:
 *    get:
 *      tags: [Region]
 *      summary: Get a Region by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Region id
 *      responses:
 *        200:
 *          description: Region details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/region/{id}:
 *    put:
 *      tags: [Region]
 *      summary: edit region
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: region ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                    name:
 *                      type: string
 *                    postpone:
 *                      type: number
 *      responses:
 *        200:
 *         description: region updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/region/{id}:
 *    delete:
 *        tags: [Region]
 *        summary: delete Region
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Region ID
 *        responses:
 *           200:
 *            description: Region deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router