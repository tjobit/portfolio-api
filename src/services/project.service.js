import client from '../client.js';
import { HttpException } from '../exceptions/HttpExceptions.js';

export async function createProject(name, shortDescription, longDescription, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl) {
    const findProject = await client.project.findUnique({ where: { name } });
    
    if (findProject) {
        throw new HttpException(409, 'This project is already registered');
    }

    const createdProject = await client.project.create({
        data: {
            name,
            shortDescription,
            longDescription,
            nbParticipants,
            tags,
            githubUrl,
            websiteUrl,
            startDate,
            endDate,
            thumbnailUrl,
            picturesUrl
        },
    });

    return createdProject;
}

export async function getProjects() {
    return await client.project.findMany();
}

export async function getProjectById(id) {
    const project = await client.project.findUnique({ where: { id } });

    if (!project) {
        throw new HttpException(404, 'No project found with this id');
    }

    return project ;
}

export async function updateProject(id, name, shortDescription, longDescription, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl) {
    const project = await client.project.findUnique({ where: { id } });

    if (!project) {
        throw new HttpException(404, 'No project found with this id');
    }

    const result = await client.project.update({
        where: { id },
        data: {
            name,
            shortDescription,
            longDescription,
            nbParticipants,
            tags,
            githubUrl,
            websiteUrl,
            startDate,
            endDate,
            thumbnailUrl,
            picturesUrl
        },
    });

    return result;
}

export async function deleteProject(id) {
    const project = await client.project.findUnique({ where: { id } });

    if (!project) {
        throw new HttpException(404, 'No project found with this id');
    }

    const result = await client.project.delete({ where: { id } });

    return result;
}