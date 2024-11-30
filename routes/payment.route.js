const express = require('express');
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

router.post("/payment", paymentController.createPayment);
router.get("/payment", paymentController.getPayments);
router.get("/payment/:id", paymentController.getPaymentById)
router.put("/payment/:id", paymentController.updatePayment);
router.delete("/payment/:id", paymentController.deletePayment);

/**
 * @swagger
 * tags:
 *    name: Payment
 *    descrition: Payment management
 */

/**
 * @swagger
 * /api/payment:
 *    post:
 *        tags: [Payment]
 *        summary: create a Payment
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
 *           description: Payment created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/payment:
 *    get:
 *       tags: [Payment]
 *       summary: get a Payment
 *       responses:
 *        200:
 *         description: List of Payment
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/payment/{id}:
 *    get:
 *      tags: [Payment]
 *      summary: Get a Payment by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Payment id
 *      responses:
 *        200:
 *          description: Payment details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/payment/{id}:
 *    put:
 *      tags: [Payment]
 *      summary: edit Payment
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Payment ID
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
 *         description: Payment updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/payment/{id}:
 *    delete:
 *        tags: [Payment]
 *        summary: delete Payment
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Payment ID
 *        responses:
 *           200:
 *            description: Payment deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router