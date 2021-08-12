const http = require('http');

function random(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

http.createServer((req,res) => {
   
    let ob = {
        id: random(1, 10),
        title: "Producto " + random(1, 10),
        price: random(1, 10),
        thumbnail: "Foto " + random(1, 10)
    }
        
    res.end(JSON.stringify(ob))

}).listen(3000, function(){
    console.log(this.address().port)
});