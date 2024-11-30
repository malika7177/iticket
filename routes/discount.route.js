const express = require('express');
const router = express.Router();
const discountController = require("../controllers/discount.controller")

router.post("/discount", discountController.createDiscount);
router.get("/discount", discountController.getDiscounts);
router.get("/discount/:id", discountController.getDiscountById)
router.put("/discount/:id", discountController.updateDiscount)
router.delete("/discount/:id", discountController.deleteDiscount)

/**
 * @swagger
 * tags:
 *     name: Discount
 *     description: Discount management
 */

/**
 * @swagger
 * /api/discount:
 *    post:
 *        tags: [Discount]
 *        summary: create a Discount
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      discount:
 *                        type: string
 *                      finish_date:
 *                        type: string
 *        responses:
 *         201:
 *           description: Discount created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/discount:
 *    get:
 *       tags: [Discount]
 *       summary: get a Discount
 *       responses:
 *        200:
 *         description: List of Discount
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/discount/{id}:
 *    get:
 *      tags: [Discount]
 *      summary: Get a Discount by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Discount id
 *      responses:
 *        200:
 *          description: Discount details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/discount/{id}:
 *    put:
 *      tags: [Discount]
 *      summary: edit Discount
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Discount ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      discount:
 *                        type: string
 *                      finish_date:
 *                        type: string
 *      responses:
 *        200:
 *         description: Discount updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/discount/{id}:
 *    delete:
 *        tags: [Discount]
 *        summary: delete Discount
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Discount ID
 *        responses:
 *           200:
 *            description: Discount deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;