const express = require("express");
const router = express.Router();
const deliveryController = require("../controllers/delivery.controller");

router.post("/delivery", deliveryController.createDelivery);
router.get("/delivery", deliveryController.getDeliveries);
router.get("/delivery/:id", deliveryController.getDeliveryById);
router.put("/delivery/:id", deliveryController.updateDelivery);
router.delete("/delivery/:id", deliveryController.deleteDelivery);
/**
 * @swagger
 * tags:
 *     name: Delivery
 *     description: delivery management
 */

/**
 * @swagger
 * /api/delivery:
 *    post:
 *        tags: [Delivery]
 *        summary: create a Delivery
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
 *           description: Delivery created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/delivery:
 *    get:
 *       tags: [Delivery]
 *       summary: get a Delivery
 *       responses:
 *        200:
 *         description: List of Delivery
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/delivery/{id}:
 *    get:
 *      tags: [Delivery]
 *      summary: Get a Delivery by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Delivery id
 *      responses:
 *        200:
 *          description: Delivery details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/delivery/{id}:
 *    put:
 *      tags: [Delivery]
 *      summary: edit Delivery
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Delivery ID
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
 *         description: Delivery updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/delivery/{id}:
 *    delete:
 *        tags: [Delivery]
 *        summary: delete Delivery
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Delivery ID
 *        responses:
 *           200:
 *            description: Delivery deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;
