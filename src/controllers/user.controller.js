import * as controllerUtils from '../utils/controller.util.js';
import * as userService from '../services/user.service.js';

export async function getUsers(req, res, next) {
    try {
        const users = await userService.getUsers();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

export async function getUserById(req, res, next) {
    try {
        let { id } = req.params;

        id = parseInt(id);

        controllerUtils.throwIfNotNumber(id);

        const user = await userService.getUserById(id);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export async function updateUser(req, res, next) {
    try {
        let { id } = req.params;

        id = parseInt(id);

        const { name } = req.body;

        controllerUtils.throwIfNotString(name);

        const updatedUser = await userService.updateUser(id, name);

        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}

export async function deleteUser(req, res, next) {
    try {
        let { id } = req.params;

        id = parseInt(id);

        controllerUtils.throwIfNotNumber(id);

        const result = await userService.deleteUser(id);

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}