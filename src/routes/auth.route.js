import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import { errorMiddleware } from '../middlewares/error.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

export function getRouter() {
    const router = Router();

    router.post('/login', authController.login, errorMiddleware);       
    router.post('/register', authMiddleware, authController.register, errorMiddleware);
    router.post('/refreshToken', authController.refreshToken, errorMiddleware);

    return router;
}