const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cart.controller");

router.post("/cart", CartController.createCart);
router.get("/cart", CartController.getCarts);
router.get("/cart/:id", CartController.getCartById);
router.put("/cart/:id", CartController.updateCart);
router.delete("/cart/:id", CartController.deleteCart);

/**
 * @swagger
 * tags: 
 *     name: Cart
 *     description: Cart management
 */

/**
 * @swagger
 * /api/cart:
 *    post:
 *        tags: [Cart]
 *        summary: create an Cart
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      ticket_id:
 *                        type: number
 *                      customer_id:
 *                        type: number
 *                      createdAt:
 *                        type: date
 *                      finishedAt:
 *                        type: date
 *                      status_id:
 *                        type: number
 *        responses:
 *         201:
 *           description: Cart created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/cart:
 *    get:
 *       tags: [Cart]
 *       summary: get a Cart
 *       responses:
 *        200:
 *         description: List of Cart
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/cart/{id}:
 *    get:
 *      tags: [Cart]
 *      summary: Get a Cart by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Cart id
 *      responses:
 *        200:
 *          description: Cart details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/cart/{id}:
 *    put:
 *      tags: [Cart]
 *      summary: edit Cart
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Cart ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      ticket_id:
 *                        type: number
 *                      customer_id:
 *                        type: number
 *                      createdAt:
 *                        type: date
 *                      finishedAt:
 *                        type: date
 *                      status_id:
 *                        type: number
 *      responses:
 *        200:
 *         description: Cart updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/cart/{id}:
 *    delete:
 *        tags: [Cart]
 *        summary: delete Cart
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Cart ID
 *        responses:
 *           200:
 *            description: Cart deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */


module.exports = router;