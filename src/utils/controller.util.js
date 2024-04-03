import { HttpException } from '../exceptions/HttpExceptions.js';

export function isNull(...args) {
    return args.some(arg => arg == null);
}

export function isNaN(...args) {
    return args.some(arg => Number.isNaN(Number(arg)));
}

export function isNotAString(...args) {
    return args.some(arg => typeof arg !== 'string' || arg.length === 0);
}

export function isNotAFunction(...args) {
    return args.some(arg => typeof arg !== 'function');
}

export function isNotABoolean(...args) {
    return args.some(arg => typeof arg !== 'boolean');
}

export function isNotAnEmail(...args) {
    return args.some(
        arg =>
            !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                arg,
            ),
    );
}

export function throwIfNull(...args) {
    if (isNull(...args)) {
        throw HttpException.MISSING_PARAMETER;
    }
}

export function throwIfNotNumber(...args) {
    if (isNaN(...args) || isNull(...args)) {
        throw HttpException.INVALID_PARAMETER;
    }
}

export function throwIfNotString(...args) {
    if (isNotAString(...args) || isNull(...args)) {
        throw HttpException.INVALID_PARAMETER;
    }
}

export function throwIfNotEmail(...args) {
    if (isNotAnEmail(...args) || isNull(...args)) {
        throw HttpException.INVALID_EMAIL;
    }
}

export function throwIfNotBoolean(...args) {
    if (isNotABoolean(...args) || isNull(...args)) {
        throw HttpException.INVALID_PARAMETER;
    }
}

export function throwIfNotFunction(...args) {
    if (isNotAFunction(...args) || isNull(...args)) {
        throw HttpException.INVALID_PARAMETER;
    }
}