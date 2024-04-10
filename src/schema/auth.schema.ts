/**
 * @openapi
 * components:
 *  schemas:
 *    SignUp:
 *      type: object
 *      required:
 *        - email
 *        - fullname
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: sayid@example.com
 *        fullname:
 *          type: string
 *          default: sayid
 *        password:
 *          type: string
 *          default: stringPassword123
 *    SignUpResponse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *        result:
 *          type: object
 *          properties:
 *            id:
 *              type: integer
 *              example: 1
 *            name:
 *              type: string
 *              example: "sayid"
 *    SignIn:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: sayid@example.com
 *        password:
 *          type: string
 *          default: password123
 *    SignInResponse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *        token:
 *          type: string
 */
