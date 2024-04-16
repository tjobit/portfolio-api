import client from '../client.js';
import { HttpException } from '../exceptions/HttpExceptions.js';

export async function createProject(name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl) {
    const findProject = await client.project.findUnique({ where: { name } });
    
    if (findProject) {
        throw new HttpException(409, 'This project is already registered');
    }

    console.log('createProject', name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl);

    const createdProject = await client.project.create({
        data: {
            name,
            description,
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

export async function updateProject(id, name, description, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl) {
    const project = await client.project.findUnique({ where: { id } });

    if (!project) {
        throw new HttpException(404, 'No project found with this id');
    }

    await client.project.update({
        where: { id },
        data: {
            name,
            description,
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
}

export async function deleteProject(id) {
    const project = await client.project.findUnique({ where: { id } });

    if (!project) {
        throw new HttpException(404, 'No project found with this id');
    }

    await client.project.delete({ where: { id } });
}