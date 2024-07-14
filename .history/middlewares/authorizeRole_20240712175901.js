export const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return next(new appError('Unauthorized: Insufficient permissions', 403));
        }
        next();
    };
};