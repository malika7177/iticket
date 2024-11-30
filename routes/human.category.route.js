const express = require('express');
const router = express.Router();
const HumanCategory = require("../controllers/human.category.controller")

/**
 * @swagger
 * tags:
 *    name: Human Category
 *    description: Human Category management
 */

/** 
 * @swagger
 * /api/humanCategory:
 *    post:
 *        tags: [Human Category]
 *        summary: create a Human Category
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      start_age:
 *                        type: number
 *                      finish_age:
 *                        type: number
 *                      gender_id:
 *                        type: number
 *        responses:
 *         201:
 *           description: Human Category created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */
router.post("/humanCategory", HumanCategory.createHumanCategory)

/**
 * @swagger
 * /api/humanCategory:
 *     get:
 *        tags: [Human Category]
 *        summary: get a Human Category
 *        responses:
 *          200:
 *           description: List of human categories
 *          500:
 *           description: Server error
 */
router.get("/humanCategory", HumanCategory.getHumanCategory)

/**
 * @swagger
 * /api/humanCategory/{id}:
 *     get:
 *        tags: [Human Category]
 *        summary: Get a Human Category by id
 *        parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Human Category by id
 *        responses:
 *          200:
 *            description: Human Category details
 *          404:
 *            description: Not found
 *          500:
 *            description: Internal Server
 */
router.get("/humanCategory/:id", HumanCategory.getHumanCategoryById);

/**
 * @swagger
 * /api/humanCategory/{id}:
 *    put:
 *      tags: [Human Category]
 *      summary: edit Human Category
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Human Category ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      start_age:
 *                        type: number
 *                      finish_age:
 *                        type: number
 *                      gender_id:
 *                        type: number
 *      responses:
 *        200:
 *         description: Human Category updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */
router.put("/humanCategory/:id", HumanCategory.updateHumanCategory)

/**
 * @swagger
 * /api/humanCategory/{id}:
 *    delete:
 *        tags: [Human Category]
 *        summary: delete Human Category
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Human Category ID
 *        responses:
 *           200:
 *            description: Human Category deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */
router.delete("/humanCategory/:id", HumanCategory.deleteHumanCategory);

module.exports = router;