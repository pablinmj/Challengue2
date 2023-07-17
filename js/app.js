// Se obtiene el valor del html segun el id
function getElementValue(elementId) {
  return document.getElementById(elementId).value;
}

// Establecer el valor de un elemento HTML según su ID
function setElementValue(elementId, value) {
  document.getElementById(elementId).value = value;
}

function addToDisplay(value) {
  // Se obtiene el valor actual del display y le agregamos el nuevo valor
  setElementValue('display', getElementValue('display') + value);
}

function clearDisplay() {
  // Establecemos el valor del display como una cadena vacía
  setElementValue('display', '');
}

function calculate() {
  try {
    const displayValue = getElementValue('display');

    const result = eval(displayValue);

    // Verificamos si el resultado es finito (no es NaN ni infinito)
    if (!isFinite(result)) {
      throw new Error("El cálculo que intentas realizar no es el adecuado. Por favor, revisa la expresión ingresada.");
    }

    // Establecemos el valor del display como el resultado
    setElementValue('display', result);
  } catch (error) {
    // Mostramos un mensaje de error en caso de que ocurra una excepción
    showErrorPopup(error.message);
  }
}

function calculatePercentage() {
  const displayValue = getElementValue('display');

  const porcentaje = parseFloat(displayValue) / 100;

  // Establecemos el valor del display como el porcentaje calculado
  setElementValue('display', porcentaje);
}

// Función para calcular la raíz cuadrada
function calculateSquareRoot() {
  const displayValue = getElementValue('display');

  // Convertimos el valor a un número
  const number = parseFloat(displayValue);

  // Calculamos la raíz cuadrada del número
  const squareRoot = Math.sqrt(number);

  // Verificamos si la raíz cuadrada es válida (no es NaN ni infinita)
  if (!isFinite(squareRoot)) {
    // Mostramos un mensaje de error en caso de que la raíz cuadrada no sea válida
    showErrorPopup("Error al calcular la raíz cuadrada. Por favor, ingresa un número válido.");
  } else {
    // Establecemos el valor del display como la raíz cuadrada calculada
    setElementValue('display', squareRoot);
  }
}

function showErrorPopup() {
  const mensaje = "Por favor, verifica que los números y operadores estén ingresados correctamente y vuelve a intentarlo.";
  alert(mensaje);
}
function deleteLastCharacter() {
  const displayValue = getElementValue('display');
  const newValue = displayValue.slice(0, -1); // Elimina el último carácter

  setElementValue('display', newValue);
}

