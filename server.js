const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000; // para heroku y modificar packagejson

app.use(express.static(__dirname + '/public')) // midleware

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Pedro',
        anio: new Date().getFullYear()
    })
});
app.get('/about', function(req, res) {

    res.render('about', {
        anio: new Date().getFullYear()
    })
});

/*
app.get('/data', function(req, res) {
    //res.send('Hola Mundo')

})*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})