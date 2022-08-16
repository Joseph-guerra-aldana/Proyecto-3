const color = document.getElementById('color');


window.onload = function() {
    document.getElementById('btnGenerarColorAleatorio').addEventListener('click', function() {
        let color = generarColorAleatorio();

        document.getElementById('principal').style.backgroundColor = color;
    });
}

function generarColorAleatorio() {
    let rojo = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let azul = Math.floor(Math.random() * 256);

    let colorstring =  `rgb(${rojo}, ${verde}, ${azul})`;
    color.innerText =   colorstring;
    return  `rgb(${rojo}, ${verde}, ${azul})`;
}