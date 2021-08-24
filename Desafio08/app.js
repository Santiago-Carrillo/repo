import express from "express";

let arr = [
    {
        "title": "cafe",
        "price": "400$",
        "thumbnail": "url de la foto",
        "id": 0
    },
    {
        "title": "cafe1",
        "price": "400$",
        "thumbnail": "url de la foto",
        "id": 1
    },
    {
        "title": "cafe2",
        "price": "400$",
        "thumbnail": "url de la foto",
        "id": 2,
    }
];
const app = express();

const server = app.listen(8080, () => {
    console.log('Escuchando en el puerto 8080');
});

app.get('/api/productos/listar', (req, res) => {
    res.send(arr)
    }); 

app.get('/api/productos/listar/:id', (req, res) => {
    res.send(arr[req.params.id])
});    

app.get('/api/productos/guardar/',(req, res) => {
    let guardar = (producto) => {
        arr.push({...producto,id:arr.length})
        return arr[arr.length-1];
    }
    res.send(JSON.stringify(guardar({
        "title": "cafe2",
        "price": "400$",
        "thumbnail": "url de la foto",
    })))
})


