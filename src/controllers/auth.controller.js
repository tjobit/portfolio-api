import * as controllerUtils from '../utils/controller.util.js';
import * as authService from '../services/auth.service.js';

export async function register(req, res, next) {
    try {
        const { name, password } = req.body;

        controllerUtils.throwIfNotString(name, password);

        const createUserData = await authService.register(name, password);

        res.status(201).json(createUserData);
    } catch (error) {
        next(error);
    }
}

export async function login(req, res, next) {
    try {
        const { name, password } = req.body;

        controllerUtils.throwIfNotString(name, password);

        const loginData = await authService.login(name, password);

        res.status(200).json(loginData);
    } catch (error) {
        next(error);
    }
}

export function refreshToken(req, res, next) {
    try {
        const { refreshToken } = req.body;

        controllerUtils.throwIfNotString(refreshToken);

        const loginData = authService.refreshAuthToken(refreshToken);

        res.status(200).json(loginData);
    } catch (error) {
        next(error);
    }
}