import { Router } from 'express';
import * as metricController from '../controllers/metric.controller.js';
import { errorMiddleware } from '../middlewares/error.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

export function getRouter() {
    const router = Router();

    router.get('/metric/pictures', authMiddleware, metricController.getPictures, errorMiddleware);

    return router;
}