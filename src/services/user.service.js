import client from '../client.js';
import { HttpException } from '../exceptions/HttpExceptions.js';

export async function getUsers() {
    return await client.admin.findMany();
}

export async function getUserById(id) {
    const user = await client.admin.findUnique({ where: { id } });

    if (!user) {
        throw new HttpException(404, 'No user found with this id');
    }

    return user;
}

export async function updateUser(id, name) {
    const user = await client.admin.findUnique({ where: { id } });

    if (!user) {
        throw new HttpException(404, 'No user found with this id');
    }

    const updatedUser = await client.admin.update({
        where: { id },
        data: {
            name,
        },
    });

    return updatedUser;
}

export async function deleteUser(id) {
    const user = await client.admin.findUnique({ where: { id } });

    if (!user) {
        throw new HttpException(404, 'No user found with this id');
    }

    const result = await client.admin.delete({ where: { id } });

    return result;
}
