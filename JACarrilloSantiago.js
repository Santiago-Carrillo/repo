let texto1 = "cinco cuatro";
let texto2 = "tres dos";
let texto3 = "uno cero...";

function mostrarPalabras(arr, i, callback, tiempoMilisegundos) {
    if (arr.length == i) {
        console.log("proceso completo")
        return;
    }
    setTimeout(() => {
        callback(arr[i]);
        mostrarPalabras(arr, i+1, callback);
        
    }, tiempoMilisegundos)
    
}

mostrarPalabras(texto1.split(' '), 0, (e) => {
    console.log(e)
}, 2000);

mostrarPalabras(texto2.split(' '), 0, (e) => {
    console.log(e)
}, 4000);

mostrarPalabras(texto3.split(' '), 0, (e) => {
    console.log(e)
}, 6000);