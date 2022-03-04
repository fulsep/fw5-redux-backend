const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        //regular expressions to break apart
        //the original file name and extension
        var regExFileName = /([\w\d_-]*)\.?[^\\/]*$/i,
            regExFileNameExtension =/\.[0-9a-z]{1,5}$/i,
            fileNameBase = file.originalname.match(regExFileName)[1],
            fileNameExtension = file.originalname.match(regExFileNameExtension)[0],
            //build a dynamic file name using Date.now()
            fileName = fileNameBase + '_' + Date.now() + fileNameExtension;

        //call the callback, passing it the dynamic file name
        cb(null, fileName);
    }
});

const upload = multer({storage});

module.exports = upload;
