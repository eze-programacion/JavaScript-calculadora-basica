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
    /* En valorPantalla se guarda el String de la pantalla y el .replace(/\^/g, '**') 
    hace que todos los ^ (que representa el exponente) se conviertan en ** ya que esa
    es la expresion correcta para JavaScript para calcular el exponente. 
    En .replace(/√(\d+)/g, 'Math.sqrt($1)'):
      - La expresión "/√(\d+)/g" busca el símbolo √ seguido de uno o más dígitos (\d+) lo que permite extraer el número que sigue al símbolo.
      - En el segundo argumento de replace,"$1" representa el número capturado, que se inserta dentro de Math.sqrt().
    */
    let valorPantalla = document.getElementById('pantalla').value.replace(/\^/g, '**').replace(/√(\d+)/g, 'Math.sqrt($1)');
    // eval es un método propio de JavaScript que toma un string y lo calcula.
    const resultado = eval(valorPantalla)
    // Le pasamos el resultado a la pantalla para que lo muestre.
    document.getElementById('pantalla').value = resultado
}