import * as controllerUtils from '../utils/controller.util.js';
import * as projectService from '../services/project.service.js';

export async function createProject(req, res, next) {
    try {
        const { name, shortDescription, longDescription, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl } = req.body;

        controllerUtils.throwIfNotString(name, shortDescription, longDescription, startDate);

        if(githubUrl) controllerUtils.throwIfNotString(githubUrl);
        if(websiteUrl) controllerUtils.throwIfNotString(websiteUrl);
        if(endDate) controllerUtils.throwIfNotString(endDate);
        if(thumbnailUrl) controllerUtils.throwIfNotString(thumbnailUrl);

        controllerUtils.throwIfNotNumber(nbParticipants);
        controllerUtils.throwIfNotArray(tags, picturesUrl);

        const createdProject = await projectService.createProject(name, shortDescription, longDescription, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl);

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
        let { id } = req.params;

        id = parseInt(id);

        controllerUtils.throwIfNotNumber(id);

        const project = await projectService.getProjectById(id);

        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
}

export async function updateProject(req, res, next) {
    try {
        let { id } = req.params;

        id = parseInt(id);

        const { name, shortDescription, longDescription, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl } = req.body;

        controllerUtils.throwIfNotString(name, shortDescription, longDescription, githubUrl, websiteUrl, thumbnailUrl);
        controllerUtils.throwIfNotNumber(id, nbParticipants);
        controllerUtils.throwIfNotArray(tags, picturesUrl);

        const result = await projectService.updateProject(id, name, shortDescription, longDescription, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl);

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

export async function deleteProject(req, res, next) {
    try {
        let { id } = req.params;

        id = parseInt(id);

        controllerUtils.throwIfNotNumber(id);

        const result = await projectService.deleteProject(id);

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}