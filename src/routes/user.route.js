import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import { errorMiddleware } from '../middlewares/error.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


export function getRouter() {
    const router = Router();

    router.get('/user', authMiddleware, userController.getUsers, errorMiddleware);
    router.get('/user/:id', authMiddleware, userController.getUserById, errorMiddleware);
    router.put('/user/:id', authMiddleware, userController.updateUser, errorMiddleware);
    router.delete('/user/:id', authMiddleware, userController.deleteUser, errorMiddleware);

    return router;
}