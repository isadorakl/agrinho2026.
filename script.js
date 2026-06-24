document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const area = parseFloat(document.getElementById('area').value);
    const tradicional = parseFloat(document.getElementById('tradicional').value);
    const eficiente = parseFloat(document.getElementById('eficiente').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(area) || isNaN(tradicional) || isNaN(eficiente)) {
        resultadoDiv.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    // Converte mm para metros cúbicos
    const aguaTradicional = area * 10000 * (tradicional / 1000); // mm para m²
    const aguaEficiente = area * 10000 * (eficiente / 1000);

    const economia = aguaTradicional - aguaEficiente;

    resultadoDiv.innerHTML = `
        <p>Você economizará aproximadamente <strong>${economia.toFixed(2)} metros cúbicos</strong> de água.</p>
        <p>Redução percentual: ${(economia / aguaTradicional * 100).toFixed(2)}%</p>
    `;
});
