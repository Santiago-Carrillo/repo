async function operacion(a:number, b:number, op:string){
    let operaciones = await import('./test');
    switch(op){
        case'+':
            return operaciones.suma(a, b);
            
        case'-':
            return operaciones.resta(a, b);        
    }
}

function operaciones() {
    
}