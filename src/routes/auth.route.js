import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import { errorMiddleware } from '../middlewares/error.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import * as swaggerUi from 'swagger-ui-express';
import options from '../ressources/apiDocs.js';

export function getRouter() {
    const router = Router();

    router.post('/login', authController.login, errorMiddleware);       
    router.post('/register', authMiddleware, authController.register, errorMiddleware);
    router.post('/refreshToken', authController.refreshToken, errorMiddleware);

    router.use('/docs', swaggerUi.serve, swaggerUi.setup(options));

    return router;
}