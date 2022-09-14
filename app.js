const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.set('puerto',process.env.PORT || 3001)



app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/register.html'));
});

app.get('/ingresa', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/ingresa.html'));
});



app.listen(app.get('puerto'), () => {
    console.log(`Servidor corriendo de manera satisfactoria ${app.get('puerto')}`);
});