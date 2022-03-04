const jwt = require('jsonwebtoken');
const user = require('../dummyDB/users');

exports.login = (req, res)=>{
    const {email, password} = req.body;
    
    const filtered = user.filter(o => o.email === email);
    if(filtered.length > 0 && password === '1234'){
        const token = jwt.sign({id:filtered[0].id}, 'secret');
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