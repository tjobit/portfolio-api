import { Router } from 'express';
import * as projectController from '../controllers/project.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { errorMiddleware } from '../middlewares/error.middleware.js';

export function getRouter() {
    const router = Router();

    router.post('/project', authMiddleware, projectController.createProject, errorMiddleware);
    router.get('/project', projectController.getProjects, errorMiddleware);
    router.get('/project/:id', projectController.getProjectById, errorMiddleware);
    router.put('/project/:id', authMiddleware, projectController.updateProject, errorMiddleware);
    router.delete('/project/:id', authMiddleware, projectController.deleteProject, errorMiddleware);

    return router;
}