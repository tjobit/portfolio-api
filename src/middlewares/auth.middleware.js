import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
    let token = req.headers.authorization;
    const accessKey = process.env.ACCESS_KEY_SECRET;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    token = token.split(' ')[1];

    jwt.verify(token, accessKey, async (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = user;

        next();
    });
}