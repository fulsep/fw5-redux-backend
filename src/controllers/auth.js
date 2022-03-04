const jwt = require('jsonwebtoken');

exports.login = (req, res)=>{
    const {email, password} = req.body;
    if(email === 'admin@mail.com' && password === '1234'){
        const token = jwt.sign({id:1}, 'secret');
        return res.json({
            success: true,
            message: 'Login success!',
            results: {
                token
            }
        });
    }
    return res.status(401).json({
        success: false,
        message: 'Wrong email or password!'
    });
};