const express = require('express')
const app = express();
const path = require('path');

app.get('/:usuario', (req, res) => {
    const { usuario } = req.params;
    return res.send(`Hello World ${usuario}`);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.get('/home', (req, res) => {
    
})