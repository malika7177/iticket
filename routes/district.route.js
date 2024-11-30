const express = require('express');
const router = express.Router();
const DistrictController = require("../controllers/district.controller");

/**
 * @swagger
 * tags:
 *    name: District
 *    description: District management
 */
/**
 * @swagger
 * /api/district:
 *    post:
 *        tags: [District]
 *        summary: create a new District
 *        requestBody:
 *           required: true
 *           content: 
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                       name: 
 *                         type: string
 *                       region_id:
 *                         type: number
 *        responses:
 *         201:
 *           description: District created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */
router.post("/district", DistrictController.createDistrict);

/**
 * @swagger
 * /api/district:
 *     get:
 *        tags: [District]
 *        summary: get a District
 *        responses:
 *          200:
 *           description: List of human categories
 *          500:
 *           description: Server error
 */
router.get("/district", DistrictController.getDistricts);

/**
 * @swagger
 * /api/district/{id}:
 *     get:
 *        tags: [District]
 *        summary: Get a District by id
 *        parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: District by id
 *        responses:
 *          200:
 *            description: District details
 *          404:
 *            description: Not found
 *          500:
 *            description: Internal Server
 */
router.get("/district/:id", DistrictController.getDistrictById);

/**
 * @swagger
 * /api/district/{id}:
 *    put:
 *      tags: [District]
 *      summary: edit District
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: District ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       name: 
 *                         type: string
 *                       region_id:
 *                         type: number
 *      responses:
 *        200:
 *         description: District updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */
router.put("/district/:id", DistrictController.updateDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *    delete:
 *        tags: [District]
 *        summary: delete District
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: District ID
 *        responses:
 *           200:
 *            description: District deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */
router.delete("/district/:id",DistrictController.deleteDistrict);

module.exports = router