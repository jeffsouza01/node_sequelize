const express = require('express');
const app = express();
const {Users} = require('./app/models');

User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Server is Running!!! ')
});

app.listen(3000);