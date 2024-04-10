/**
 * @openapi
 * components:
 *   schemas:
 *     GetAllOrderResponse:
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
 *               user:
 *                 type: object
 *               book:
 *                 type: object
 *               status:
 *                 type: number
 *               price:
 *                 type: number
 */

/**
 *
 * @openapi
 * components:
 *   schemas:
 *     CreateOrder:
 *       type: object
 *       properties:
 *         id_user:
 *           type: number
 *           default: 1
 *         id_book:
 *           type: number
 *           default: 1
 *         status:
 *           type: number
 *           default: 1
 *     CreateOrderResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           default: "Successfully created order."
 */
