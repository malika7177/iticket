const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin.controller")

/**
 * @swagger
 * tags:
 *    name: Admin
 *    description: Admin management
 */

/**
 * @swagger
 * /api/admin:
 *     post:
 *        tags: [Admin]
 *        summary: create a new admin
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      login:
 *                        type: string
 *                      password:
 *                        type: string
 *                      is_active:
 *                        type: boolean
 *                      is_creator:
 *                        type: boolean
 *        responses:
 *         201:
 *           description: Admin created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */
router.post("/admin", adminController.createAdmin);

/**
 * @swagger
 * /api/admin:
 *    get:
 *       tags: [Admin]
 *       summary: get a admin
 *       responses:
 *        200:
 *         description: List of admin
 *        500:
 *         description: Server error
 */
router.get("/admin", adminController.getAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *    get:
 *      tags: [Admin]
 *      summary: Get a admin by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: admin id
 *      responses:
 *        200:
 *          description: admin details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */
router.get("/admin/:id", adminController.getAdminById);

/**
 * @swagger
 * /api/admin/{id}:
 *    put:
 *      tags: [Admin]
 *      summary: edit admin
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: admin ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                        type: string
 *                      login:
 *                        type: string
 *                      password:
 *                        type: string
 *                      is_active:
 *                        type: boolean
 *                      is_creator:
 *                        type: boolean
 *      responses:
 *        200:
 *         description: admin updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */
router.put("/admin/:id", adminController.updateAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *    delete:
 *        tags: [Admin]
 *        summary: delete admin
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: admin ID
 *        responses:
 *           200:
 *            description: admin deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */
router.delete("/admin/:id", adminController.deleteAdmin)

module.exports = router;