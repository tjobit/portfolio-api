import * as controllerUtils from '../utils/controller.util.js';
import * as projectService from '../services/project.service.js';

export async function createProject(req, res, next) {
    try {
        const { name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl } = req.body;

        controllerUtils.throwIfNotString(name, description, startDate);

        if(githubUrl) controllerUtils.throwIfNotString(githubUrl);
        if(websiteUrl) controllerUtils.throwIfNotString(websiteUrl);
        if(endDate) controllerUtils.throwIfNotString(endDate);
        if(thumbnailUrl) controllerUtils.throwIfNotString(thumbnailUrl);

        controllerUtils.throwIfNotNumber(nbParticipants);
        controllerUtils.throwIfNotArray(tags, picturesUrl);

        const createdProject = await projectService.createProject(name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl);

        res.status(201).json(createdProject);
    } catch (error) {
        next(error);
    }
}

export async function getProjects(req, res, next) {
    try {
        const projects = await projectService.getProjects();

        res.status(200).json(projects);
    } catch (error) {
        next(error);
    }
}

export async function getProjectById(req, res, next) {
    try {
        const { id } = req.params;

        controllerUtils.throwIfNotString(id);

        const project = await projectService.getProjectById(id);

        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
}

export async function updateProject(req, res, next) {
    try {
        const { id } = req.params;
        const { name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl } = req.body;

        controllerUtils.throwIfNotString(id, name, description, githubUrl, websiteUrl, thumbnailUrl);
        controllerUtils.throwIfNotNumber(nbParticipants);
        controllerUtils.throwIfNotArray(tags, picturesUrl);

        await projectService.updateProject(id, name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl);

        res.status(204).end();
    } catch (error) {
        next(error);
    }
}

export async function deleteProject(req, res, next) {
    try {
        const { id } = req.params;

        controllerUtils.throwIfNotString(id);

        await projectService.deleteProject(id);

        res.status(204).end();
    } catch (error) {
        next(error);
    }
}