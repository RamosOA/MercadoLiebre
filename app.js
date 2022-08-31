const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Puerto 3000 en función');
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});