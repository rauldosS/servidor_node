// const http = require("http")
// const express = require("express")

// const app = express()

// app.get("/", function(req, res) {
//     res.send("<h1>Servidor rodando com ExpressJS</h1>")
// })

// http.createServer(app).listen(3000, () => 
//     console.log("Servidor rodando local na porta 3000"
// ))

//====================
//  CHAMA OS MODULOS
//====================
var express = require('express');
var request = require('request'); // trata request
var app = express();

//===================
//     MIDDLEWARE
//===================
//levanta o server
app.set('port', process.env.PORT || 3000);

//===================
//  ROTAS DO EXPRESS
//===================

app.get('/videos', function(req, res) {
    var urlTest = 'https://unoflix-video.herokuapp.com/videos'

    request(urlTest, function (error, response) {
        if (!error && response.statusCode == 200) {
            console.log('status é ok, achou videos');
            console.log(JSON.parse(response.body));
            res.send('<h1>Status é ok, achou</h1> <p>Impresso na tela ' + response.statusCode + '</p>');
        } else if (!error && response.statusCode == 404) {
            console.log('deu 404')
        }
    })
})

//Exibe a porta e avisos do app
app.listen(app.get('port'), function () {
    console.log('Node está brincando na porta ' + app.get('port'));
});