function calcularIMC() {
    // Obtener los valores de peso y altura
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    // Convertir la altura de cm a metros
    altura = altura / 100;

    // Calcular el IMC
    let imc = peso / (altura * altura);

    // Determinar el estado de peso
    let resultado;
    if (imc < 18.5) {
        resultado = 'Tienes un peso inferior al normal';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Tienes un peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Tienes sobrepeso';
    } else {
        resultado = 'Tienes obesidad';
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `Tu IMC es ${imc.toFixed(2)}. ${resultado}`;
}
