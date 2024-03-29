const jwt = require('jonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'SECRET_KEY');
        req.userData = { useId: decodedToken.userId};
        next();
    }catch (error) {
        res.status(401).json({ message: "Auth failed!"});
    }
};

module.exports = authMiddleware