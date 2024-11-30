const express = require('express')
const router = express.Router();
const langController = require("../controllers/language.controller");

router.post("/lang", langController.createLang);
router.get("/lang", langController.getLangs);
router.get("/lang/:id", langController.getLangById);
router.put("/lang/:id", langController.updateLang);
router.delete("/lang/:id", langController.deleteLang);

/**
 * @swagger
 * tags:
 *    name: Language
 *    description: Language management
 */

/**
 * @swagger
 * /api/lang:
 *    post:
 *        tags: [Language]
 *        summary: create a Language
 *        requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      language:
 *                        type: string
 *                      description:
 *                        type: string
 *        responses:
 *         201:
 *           description: Language created
 *         400:
 *           description: Invalid input
 *         500:
 *           description: Server error
 */

/**
 * @swagger
 * /api/lang:
 *    get:
 *       tags: [Language]
 *       summary: get a Language
 *       responses:
 *        200:
 *         description: List of Language
 *        500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/lang/{id}:
 *    get:
 *      tags: [Language]
 *      summary: Get a Language by id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Language id
 *      responses:
 *        200:
 *          description: Language details
 *        404:
 *          description: Not found
 *        500:
 *          description: Internal Server
 */

/**
 * @swagger
 * /api/lang/{id}:
 *    put:
 *      tags: [Language]
 *      summary: edit Language
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Language ID
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
 *         description: Language updated successfully
 *        400:
 *         description: Bad request
 *        404:
 *         description: Not found
 *        500:
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /api/lang/{id}:
 *    delete:
 *        tags: [Language]
 *        summary: delete Language
 *        parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: integer
 *              required: true
 *              description: Language ID
 *        responses:
 *           200:
 *            description: Language deleted
 *           404:
 *            description: Not found
 *           500:
 *            description: Internal Server Error
 */

module.exports = router;