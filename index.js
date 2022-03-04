const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', require('./src/routes'));

app.listen(5000, ()=>{
    console.log(`App listening on port ${5000}`);
});