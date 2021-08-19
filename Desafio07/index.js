import express from "express";
// import * as fs from 'fs/promises';
import * as fs from 'fs';

// const fs = require('fs');
let contItems = 0; 
let contItem = 0;
const app = express();
const server = app.listen(8080, () => {
    console.log('Escuchando en el puerto 8080');
});
app.get('/items', (req, res) => {
    fs.promises.readFile('./productos.txt').then(data => data.toString('utf-8')).then(datos => {
        res.send(datos);
        contItems ++;
    }) 
});

app.get('/item-random', (req, res) => {
    let aleatorio = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    fs.promises.readFile('./productos.txt').then(data => data.toString('utf-8')).then(datos => {
        const json = JSON.parse(datos);
        res.json({item:json[aleatorio(0, json.length-1)]});
        contItem ++;
    }) 
});

app.get('/visitas', (req, res) => {
    res.send({visitas:{items:contItems, item:contItem}}); 
});