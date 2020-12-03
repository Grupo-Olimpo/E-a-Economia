import express from 'express';
// const cors = require('cors');
// const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

router.use('/cadastro', require('./cadastro').default);
router.use('/login', require('./login').default);

// app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));  // apenas dados simples
app.use(bodyParser.json()); // json de entrada no body


app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});


export default router;

// app.listen(2020, () => {
//     console.log('server is listening on port 5000');
// });