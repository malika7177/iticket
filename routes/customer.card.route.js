const express = require("express");
const router = express.Router();
const CustomerCardController = require("../controllers/customer.card.controller");

router.post("/customerCard", CustomerCardController.createCustomerCard);
router.get("/customerCard", CustomerCardController.getCustomerCards);
router.get("/customerCard/:id", CustomerCardController.getCustomerCardById);
router.put("/customerCard/:id", CustomerCardController.updateCustomerCard);
router.delete("/customerCard/:id", CustomerCardController.deleteCustomerCard);

/**
 * @swagger
 * tags:
 *     name: Customer Card
 *     description: Customer Card management
 */

/**
 * @swagger
 * /api/customerCard:
 *    post:
 *        tags: [Customer Card]
 *        summary: create an Customer Card
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
 *                      phone:
 *                        type: string
 *                      number:
 *                        type: date
 *                      year:
 *                        type: number
 *                      month:
 *                        type: string
 *                      is_active:
 *                        type: boolean
 *                      is_main: 
 *                        type: boolean
 *        responses:
 *         201:
 *           description: Customer Card created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/customerCard:
 *    get:
 *       tags: [Customer Card]
 *       summary: get a Customer Card
 *       responses:
 *        200:
 *         description: List of Customer Card
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/customerCard/{id}:
 *    get:
 *      tags: [Customer Card]
 *      summary: Get a Customer Card by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Customer Card id
 *      responses:
 *        200:
 *          description: Customer Card details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/customerCard/{id}:
 *    put:
 *      tags: [Customer Card]
 *      summary: edit Customer Card
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Customer Card ID
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
 *                      phone:
 *                        type: string
 *                      number:
 *                        type: date
 *                      year:
 *                        type: number
 *                      month:
 *                        type: string
 *                      is_active:
 *                        type: boolean
 *                      is_main: 
 *                        type: boolean
 *      responses:
 *        200:
 *         description: Customer Card updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/customerCard/{id}:
 *    delete:
 *        tags: [Customer Card]
 *        summary: delete Customer Card
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Customer Card ID
 *        responses:
 *           200:
 *            description: Customer Card deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;