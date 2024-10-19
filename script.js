// Esto agrega a la pantalla el valor del botón de la calculadora que toquemos.
function agregar(valor) {
    // el valor que ya tiene el value, le vamos a sumar (concatenar) el valor recibido
    document.getElementById('pantalla').value += valor
}

// Esta acción vacía la pantalla
function borrar() {
    document.getElementById('pantalla').value = ''
}

// Esta acción toma el valor de la pantalla y ejecuta los cálculos.
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    // eval es un método propio de JavaScript que toma un string y lo calcula.
    const resultado = eval(valorPantalla)
    // Le pasamos el resultado a la pantalla para que lo muestre.
    document.getElementById('pantalla').value = resultado
}