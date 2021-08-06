async function operacion(a:number, b:number, op:string){

    let {Suma} = await import('./suma');
    let {Resta} = await import('./resta');
    let sumar = new Suma(2, 2);
    let restar = new Resta(2, 2);

    switch(op){
        case'suma':
            return sumar.ver();
            
        case'resta':
            return restar.ver();        
    }
}

function operaciones() {
    operacion(2, 2, 'suma');
    operacion(2, 2, 'resta');
}

operaciones();