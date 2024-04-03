import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
// import { authMiddleware } from '../middlewares/auth.middleware.js';

export function getRouter() {
    const router = Router();

    router.post('/register', authController.register);
    router.post('/login', authController.login);
    router.post('/refreshToken', authController.refreshToken);

    return router;
}