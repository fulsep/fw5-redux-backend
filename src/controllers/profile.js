const user = require('../dummyDB/users');

exports.currentUser = (req, res)=>{
    const {id} = req.userData;
    const filtered = user.filter(o => o.id === parseInt(id));
    console.log(id);
    if(filtered.length > 0){
        return res.send({
            success: true,
            message: 'Detail User',
            results: filtered[0]
        });
    }
    return res.status(400).send({
        success: false,
        message: 'User not found!'
    });
};