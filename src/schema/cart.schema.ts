/**
 * @openapi
 * components:
 *   schemas:
 *     GetAllCartResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           default: Successfully retrirved the cart
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
 *     AddCart:
 *       type: object
 *       properties:
 *         id_book:
 *           type: number
 *           default: 1
 *         qty:
 *           type: number
 *           default: 1
 *     CreateOrderResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           default: "Successfully add to cart."
 *         data:
 *           type: object
 *           properties:
 *           id_cart:
 *             type: number
 *           qty:
 *             type: number
 *           Book:
 *             type: object
 */
