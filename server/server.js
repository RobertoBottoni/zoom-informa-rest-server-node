require ('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 
app.get('/', function (req, res) {
  res.json('Hello World');
});

app.get('/users', function (req, res) {
    res.json('elenco user');
});

app.post('/user', function (req, res) {

    let body = req.body;

    if(body.name === undefined){
        res.status(400).json({
            ok: false,
            messaggio: 'è necessario il nome user'
        });
    }
    res.json({
        body:body
    });
});

app.get('/user/:id', function (req, res) {
    res.json('detail user');
});

app.put('/user/:id', function (req, res) {

    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/user/:id', function (req, res) {
    res.json('delete user');
});
 
app.listen(process.env.PORT, () => {
    console.log('server work port:',process.env.PORT);
});