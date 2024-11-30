const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country.controller");

router.post("/country", countryController.createCountry);
router.get("/country", countryController.getCountries);
router.get("/country/:id", countryController.getCountryById);
router.put("/country/:id", countryController.updateCountry);
router.delete("/country/:id", countryController.deleteCountry);

/**
 * @swagger
 * tags:
 *    name: Country
 *    description: Country management
 */

/**
 * @swagger
 * /api/country:
 *    post:
 *        tags: [Country]
 *        summary: create a Country
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      country:
 *                        type: string
 *        responses:
 *         201:
 *           description: Country created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/country:
 *    get:
 *       tags: [Country]
 *       summary: get a Country
 *       responses:
 *        200:
 *         description: List of Country
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/country/{id}:
 *    get:
 *      tags: [Country]
 *      summary: Get a Country by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Country id
 *      responses:
 *        200:
 *          description: Country details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/country/{id}:
 *    put:
 *      tags: [Country]
 *      summary: edit Country
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Country ID
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
 *         description: Country updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/country/{id}:
 *    delete:
 *        tags: [Country]
 *        summary: delete Country
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Country ID
 *        responses:
 *           200:
 *            description: Country deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router