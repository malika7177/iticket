const express = require("express");
const router = express.Router();
const statusController = require("../controllers/status.controller");

router.post("/status", statusController.createStatus);
router.get("/status", statusController.getStatuses);
router.get("/status/:id", statusController.getStatusById);
router.put("/status/:id", statusController.updateStatus);
router.delete("/status/:id", statusController.deleteStatus);

/**
 * @swagger
 * tags:
 *     name: Status
 *     description: Status management
 */

/**
 * @swagger
 * /api/status:
 *    post:
 *        tags: [Status]
 *        summary: create a Status
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      status:
 *                        type: string
 *        responses:
 *         201:
 *           description: Status created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/status:
 *    get:
 *       tags: [Status]
 *       summary: get a Status
 *       responses:
 *        200:
 *         description: List of Status
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/status/{id}:
 *    get:
 *      tags: [Status]
 *      summary: Get a Status by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Status id
 *      responses:
 *        200:
 *          description: Status details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/status/{id}:
 *    put:
 *      tags: [Status]
 *      summary: edit Status
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Status ID
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                    status:
 *                      type: string
 *      responses:
 *        200:
 *         description: Status updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/status/{id}:
 *    delete:
 *        tags: [Status]
 *        summary: delete Status
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Status ID
 *        responses:
 *           200:
 *            description: Status deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;
