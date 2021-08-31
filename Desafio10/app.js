const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const PORT = 3000;

app.engine("hbs",handlebars(
{
    extname:".hbs",
    defaultLayout:"index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
}
))

app.set("views","./views");
app.set("view engine","hbs");
app.use(express.static("public"));
app.get('/',(req,res)=>{
    
    res.render("main",{
        "title": "cafe",
        "price": "400$",
        "thumbnail": "url de la foto",
        "id": 0 
    })
});

app.listen(PORT,()=>{
    console.log(`Nuestro server esta en el puerto ${PORT}`);
})

// ------------------------------------------------------

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