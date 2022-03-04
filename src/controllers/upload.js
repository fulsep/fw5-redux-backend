const upload = require('../helpers/upload');

exports.photo = (req, res)=> {
    upload.single('photo')(req, res, (err)=>{
        if(err){
            return res.status(400).json({
                success: false,
                message: 'Error!'
            });
        }
        if(req.file){
            return res.send({
                success: true,
                message: 'Upload success!'
            });
        }
        return res.status(400).send({
            success: false,
            message: 'No file to upload!'
        });
    });
};