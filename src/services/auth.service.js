import client from '../client.js';
import { HttpException } from '../exceptions/HttpExceptions.js';
import { authenticatePassword, createUserToken, encryptPassword } from '../utils/auth.util.js';
import jwt from 'jsonwebtoken';

export async function register(name, password) {
    const findUser = await client.admin.findUnique({ where: { name } });
    
    if (findUser) {
        throw new HttpException(409, 'This name is already registered');
    }
  
    const { salt, hashedPassword } = encryptPassword(password);
  
    const createdUser = await client.admin.create({
        data: {
            name,
            salt,
            password: hashedPassword,
        },
    });

    const profile = {
        id: createdUser.id,
        name: createdUser.name,
    };
  
    return { ...createUserToken(profile), profile };
}

export async function login(name, password) {
    const user = await client.admin.findUnique({ where: { name } });
    if (!user) throw new HttpException(404, 'No user found with this name');
    
    const verified = authenticatePassword(password, user.salt, user.password);
    if (!verified) throw new HttpException(403, 'Wrong password');

    const profile = {
        id: user.id,
        name: user.name,
    };

    return { ...createUserToken(user), profile };
}

export function refreshAuthToken(refreshToken) {
    const secretKey = process.env.REFRESH_KEY_SECRET;
    const user = jwt.verify(refreshToken, secretKey);
  
    return createUserToken(user);
}