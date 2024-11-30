const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customer.controller");

router.post("/customer", customerController.createCustomer);
router.get("/customer", customerController.getCustomers);
router.get("/customer/:id", customerController.getCustomerById);
router.put("/customer/:id", customerController.updateCustomer);
router.delete("/customer/:id", customerController.deleteCustomer);

/**
 * @swagger
 * tags:
 *     name: Customer
 *     description: Customer management
 */

/**
 * @swagger
 * /api/customer:
 *    post:
 *       tags: [Customer]
 *       summary: create a customer
 *       requestBody: 
 *          required: true
 *          content:
 *             application/json:
 *                schema: 
 *                  type: object
 *                  properties:
 *                      first_name:
 *                         type: string
 *                      last_name:
 *                         type: string
 *                      phone:
 *                         type: string
 *                      hashed_password:
 *                         type: string
 *                      birth_date:
 *                         type: date
 *                      email:
 *                         type: string
 *                      gender_id:
 *                         type: number
 *                      language_id:
 *                         type: number
 *                      hashed_refresh_token:
 *                         type: string
 *       responses:
 *         201:
 *           description: Customer created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/customer:
 *    get:
 *       tags: [Customer]
 *       summary: get a Customer
 *       responses:
 *        200:
 *         description: List of Customer
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/customer/{id}:
 *    get:
 *      tags: [Customer]
 *      summary: Get a Customer by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Customer id
 *      responses:
 *        200:
 *          description: Customer details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/customer/{id}:
 *    put:
 *      tags: [Customer]
 *      summary: edit Customer
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Customer ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      first_name:
 *                         type: string
 *                      last_name:
 *                         type: string
 *                      phone:
 *                         type: string
 *                      hashed_password:
 *                         type: string
 *                      birth_date:
 *                         type: date
 *                      email:
 *                         type: string
 *                      gender_id:
 *                         type: number
 *                      language_id:
 *                         type: number
 *                      hashed_refresh_token:
 *                         type: string
 *      responses:
 *        200:
 *         description: Customer updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/customer/{id}:
 *    delete:
 *        tags: [Customer]
 *        summary: delete Customer
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Customer ID
 *        responses:
 *           200:
 *            description: Customer deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;