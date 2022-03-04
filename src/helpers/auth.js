const jwt = require('jsonwebtoken');

exports.authCheck = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith('Bearer')) {
        const token = authorization.substr(7);
        const data = jwt.verify(token, 'secret');
        if (data) {
            req.userData = data;
            return next();
        }
    }
    return res.status(401).json({
        success: false,
        message: 'Authorization needed'
    });
};