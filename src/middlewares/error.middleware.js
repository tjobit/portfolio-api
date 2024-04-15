export function errorMiddleware(
    error,
    req,
    res,
    next
) {
    try {
        res.status(error.status).json(error.message);
    } catch (error) {
        next(error);
    }
}