function simulateGrowth() {

    const initialYear = parseInt(document.getElementById('initialYear').value);
    const initialPopulation = parseFloat(document.getElementById('population').value);
    const growthRate = parseFloat(document.getElementById('growthRate').value) / 100;
    const finalYear = parseInt(document.getElementById('finalYear').value);

    if (isNaN(initialYear) || isNaN(initialPopulation) || isNaN(growthRate) || isNaN(finalYear) || initialYear >= finalYear || initialPopulation <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    let currentPopulation = initialPopulation;
    let resultHTML = '';
    for (let year = initialYear; year <= finalYear; year++) {
        resultHTML += `<tr><td>${year}</td><td>${currentPopulation.toFixed(2)}</td></tr>`;
        currentPopulation += currentPopulation * growthRate;
    }

    document.getElementById('resultBody').innerHTML = resultHTML;
    document.getElementById('resultTable').style.display = 'table';
}
