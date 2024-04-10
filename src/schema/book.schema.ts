/**
 * @openapi
 * components:
 *   schemas:
 *     GetAllBookResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           default: Successfully retrirved the book
 *         result:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_book:
 *                 type: number
 *               title:
 *                 type: string
 *               alt_title:
 *                 type: string
 *               writer:
 *                 type: string
 *               cover_image:
 *                 type: string
 *               price:
 *                 type: number
 *               olid:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 */

/**
 *
 * @openapi
 * components:
 *   schemas:
 *     AddBook:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         alt_title:
 *           type: string
 *         writer:
 *           type: string
 *         cover_image:
 *           type: string
 *         price:
 *           type: number
 *         olid:
 *           type: string
 *     AddBookResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           default: "Successfully created the book."
 *         data:
 *           type: object
 *           properties:
 *             id_book:
 *               type: number
 *             title:
 *               type: string
 *             alt_title:
 *               type: string
 *             writer:
 *               type: string
 *             cover_image:
 *               type: string
 *             price:
 *               type: number
 *             olid:
 *               type: string
 *             updatedAt:
 *               type: string
 *               format: "date-time"
 *             createdAt:
 *               type: string
 *               format: "date-time"
 */
