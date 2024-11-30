const express = require("express");
const router = express.Router();
const CAddressController = require("../controllers/customer.address.controller");

router.post("/address", CAddressController.createCAdress);
router.get("/address", CAddressController.getCAddresses);
router.get("/address/:id", CAddressController.getCAddressById);
router.put("/address/:id", CAddressController.updateCAddress);
router.delete("/address/:id", CAddressController.deleteCAddress)

/**
 * @swagger
 * tags:
 *    name: Customer Address
 *    description: Customer Address management
 */

/**
 * @swagger
 * /api/address:
 *    post:
 *        tags: [Customer Address]
 *        summary: create an Customer Address
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      customer_id:
 *                        type: number
 *                      name:
 *                        type: string
 *                      country_id:
 *                        type: number
 *                      region_id:
 *                        type: number
 *                      district_id:
 *                        type: number
 *                      street:
 *                        type: string
 *                      house: 
 *                        type: string
 *                      flat_id:
 *                        type: number
 *                      location:
 *                        type: string
 *                      post_index: 
 *                        type: string
 *                      info: 
 *                        type: string
 *        responses:
 *         201:
 *           description: Customer Address created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/address:
 *    get:
 *       tags: [Customer Address]
 *       summary: get a Customer Address
 *       responses:
 *        200:
 *         description: List of Customer Address
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/address/{id}:
 *    get:
 *      tags: [Customer Address]
 *      summary: Get a Customer Address by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Customer Address id
 *      responses:
 *        200:
 *          description: Customer Address details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/address/{id}:
 *    put:
 *      tags: [Customer Address]
 *      summary: edit Customer Address
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Customer Address ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      customer_id:
 *                        type: number
 *                      name:
 *                        type: string
 *                      country_id:
 *                        type: number
 *                      region_id:
 *                        type: number
 *                      district_id:
 *                        type: number
 *                      street:
 *                        type: string
 *                      house: 
 *                        type: string
 *                      flat_id:
 *                        type: number
 *                      location:
 *                        type: string
 *                      post_index: 
 *                        type: string
 *                      info: 
 *                        type: string
 *      responses:
 *        200:
 *         description: Customer Address updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/address/{id}:
 *    delete:
 *        tags: [Customer Address]
 *        summary: delete Customer Address
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Customer Address ID
 *        responses:
 *           200:
 *            description: Customer Address deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;