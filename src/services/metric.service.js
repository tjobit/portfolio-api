import client from '../client.js';

export async function getPictures() {
    const projects = await client.project.findMany();

    const pictures = projects.map(project => project.picturesUrl).flat();

    return pictures;
}