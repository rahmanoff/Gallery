const express = require('express');
const fs = require('fs');

const server = express();

const port = 3000;

server
    .get('/', (req, res) => {
        fs.readFile('./index.html', (err, html) => {
            if (err) {
                throw new Error(err);
            }
            res.write(html);
            res.end();
        });
    })
    .get('/js/script.js', (req, res) => {
        fs.readFile('./js/script.js', (err, html) => {
            if (err) {
                throw new Error(err);
            }
            res.write(html);
            res.end();
        });
    })
    .get('/css/style.css', (req, res) => {
        fs.readFile('./css/style.css', (err, html) => {
            if (err) {
                throw new Error(err);
            }
            res.write(html);
            res.end();
        });
    })
    .get('/img/Hipster_Vector_2.jpg', (req, res) => {
        fs.readFile('./img/Hipster_Vector_2.jpg', (err, html) => {
            if (err) {
                throw new Error(err);
            }
            res.write(html);
            res.end();
        });
    })
    .listen(port, () => {
        console.log('App start on port', port);
    })