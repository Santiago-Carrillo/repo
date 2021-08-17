const fs = require('fs');

class Archivo {
    constructor(file) {
        this.file = file;
    }
    async guardarAsync(producto){
        try {
            const data = await fs.promises.readFile(this.file);
            const json = JSON.parse(data.toString('utf-8'))
            json.push({...producto,id:json.length})
            try{
                await fs.promises.writeFile(this.file, JSON.stringify(json, null, "\t"))
            }
            catch(err) {
                throw new Error(err);
            }
        }
        catch(err) {
            try {
                await fs.promises.writeFile(this.file, JSON.stringify([{...producto, id: 0}]))
            }
            catch(err) {
                throw new Error(err);
            }

        }
    }
    guardar(producto) {
        if (this.exist()) {
            fs.promises.readFile(this.file).then(data => {
                const json = JSON.parse(data.toString('utf-8'))
                json.push({...producto,id:json.length})
                fs.promises.writeFile(this.file, JSON.stringify(json, null, "\t")).then(_ => {
                    console.log('Agregado con exito...');
                })
            });
        } 
        else {
            producto.id = 0;
            fs.promises
                .writeFile(this.file, JSON.stringify([producto]))
                .then(data => {
                    console.log('success...')
                });
        }
    }
    exist() {
        return fs.existsSync(this.file);
    }
}

let myFile = new Archivo('./productos.json');
// myFile.guardar({
//     title: 'cafe',
//     price: '400$',
//     thumbnail: 'url de la foto'
// })
myFile.guardarAsync({
    title: 'cafe',
    price: '400$',
    thumbnail: 'url de la foto'
});