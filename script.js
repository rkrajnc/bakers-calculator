// Unit conversion factors (to grams)
const unitConversions = {
    g: 1,
    kg: 1000,
    oz: 28.3495,
    lb: 453.592
};

// Recipe presets
const recipes = {
    classicBread: {
        name: 'Classic Bread',
        doughWeight: 1000,
        hydration: 65,
        salt: 2,
        yeast: 1,
        usePoolish: false,
        poolishWeight: 200,
        poolishHydration: 100
    },
    pizza3x: {
        name: '3x Pizza (270g each)',
        doughWeight: 810,
        hydration: 70,
        salt: 2.5,
        yeast: 0.5,
        usePoolish: true,
        poolishWeight: 200,
        poolishHydration: 100
    },
    noKnead: {
        name: 'No-Knead Bread',
        doughWeight: 1000,
        hydration: 70,
        salt: 2,
        yeast: 0.25,
        usePoolish: false,
        poolishWeight: 200,
        poolishHydration: 100
    },
    sourdough: {
        name: 'Sourdough',
        doughWeight: 1000,
        hydration: 75,
        salt: 2,
        yeast: 0,
        usePoolish: true,
        poolishWeight: 200,
        poolishHydration: 100
    },
    focaccia: {
        name: 'Focaccia',
        doughWeight: 800,
        hydration: 80,
        salt: 2.5,
        yeast: 1.5,
        usePoolish: false,
        poolishWeight: 200,
        poolishHydration: 100
    },
    baguette: {
        name: 'Baguette',
        doughWeight: 900,
        hydration: 68,
        salt: 2.2,
        yeast: 0.8,
        usePoolish: true,
        poolishWeight: 250,
        poolishHydration: 100
    }
};

// Load a recipe preset
function loadRecipe(recipeName) {
    const recipe = recipes[recipeName];
    if (!recipe) return;

    // Set all form values
    document.getElementById('doughWeight').value = recipe.doughWeight;
    document.getElementById('hydration').value = recipe.hydration;
    document.getElementById('salt').value = recipe.salt;
    document.getElementById('yeast').value = recipe.yeast;
    document.getElementById('usePoolish').checked = recipe.usePoolish;
    document.getElementById('poolishWeight').value = recipe.poolishWeight;
    document.getElementById('poolishHydration').value = recipe.poolishHydration;

    // Toggle poolish visibility
    const poolishInputs = document.getElementById('poolishInputs');
    poolishInputs.style.display = recipe.usePoolish ? 'block' : 'none';

    // Recalculate
    calculate();
}

// Toggle poolish inputs visibility
function togglePoolish() {
    const checkbox = document.getElementById('usePoolish');
    const poolishInputs = document.getElementById('poolishInputs');
    poolishInputs.style.display = checkbox.checked ? 'block' : 'none';
    calculate();
}

// Main calculation function
function calculate() {
    // Get input values
    const doughWeightInput = parseFloat(document.getElementById('doughWeight').value) || 0;
    const unit = document.getElementById('unitSelect').value;
    const hydration = parseFloat(document.getElementById('hydration').value) || 0;
    const saltPercent = parseFloat(document.getElementById('salt').value) || 0;
    const yeastPercent = parseFloat(document.getElementById('yeast').value) || 0;
    const usePoolish = document.getElementById('usePoolish').checked;

    // Update unit symbols for weight fields
    document.getElementById('doughWeightUnit').textContent = unit;
    document.getElementById('poolishWeightUnit').textContent = unit;

    if (doughWeightInput <= 0) {
        document.getElementById('resultsList').innerHTML = '<p>Please enter a valid dough weight.</p>';
        return;
    }

    // Convert dough weight to grams
    const totalDoughWeight = doughWeightInput * unitConversions[unit];

    let poolishWeight = 0;
    let poolishHydration = 100;
    let poolishFlour = 0;
    let poolishWater = 0;

    // Calculate poolish components if used
    if (usePoolish) {
        const poolishWeightInput = parseFloat(document.getElementById('poolishWeight').value) || 0;
        poolishWeight = poolishWeightInput * unitConversions[unit];
        poolishHydration = parseFloat(document.getElementById('poolishHydration').value) || 100;

        // Poolish: flour + water at specified hydration
        // poolishWeight = poolishFlour * (1 + poolishHydration/100)
        poolishFlour = poolishWeight / (1 + poolishHydration / 100);
        poolishWater = poolishFlour * (poolishHydration / 100);
    }

    // Calculate total flour needed
    // Total dough = flour + water + salt + yeast
    // Total dough = flour * (1 + hydration/100 + saltPercent/100 + yeastPercent/100)
    const totalFlour = totalDoughWeight / (1 + hydration/100 + saltPercent/100 + yeastPercent/100);

    // Calculate additional flour needed (excluding poolish flour)
    const additionalFlour = totalFlour - poolishFlour;

    // Calculate total water needed
    const totalWater = totalFlour * (hydration / 100);

    // Calculate additional water needed (excluding poolish water)
    const additionalWater = totalWater - poolishWater;

    // Calculate salt and yeast amounts
    const saltWeight = totalFlour * (saltPercent / 100);
    const yeastWeight = totalFlour * (yeastPercent / 100);

    // Display results
    displayResults({
        totalFlour,
        additionalFlour,
        totalWater,
        additionalWater,
        poolishFlour,
        poolishWater,
        poolishWeight,
        saltWeight,
        yeastWeight,
        usePoolish
    }, unit);
}

// Display the calculated results
function displayResults(results, unit) {
    const resultsList = document.getElementById('resultsList');
    const conversionFactor = unitConversions[unit];

    let html = '';

    // Show poolish breakdown if used
    if (results.usePoolish && results.poolishWeight > 0) {
        html += '<div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid #e8d4b8;">';
        html += '<h3 style="color: #5d3a1a; margin-bottom: 10px; font-size: 1.1rem;">Poolish</h3>';

        html += `
            <div class="result-item">
                <div class="result-name">Poolish total</div>
                <div class="result-amount">${(results.poolishWeight / conversionFactor).toFixed(2)} ${unit}</div>
            </div>
        `;

        html += `
            <div class="result-item">
                <div class="result-name">├─ Flour (for poolish)</div>
                <div class="result-amount">${(results.poolishFlour / conversionFactor).toFixed(2)} ${unit}</div>
            </div>
        `;

        html += `
            <div class="result-item">
                <div class="result-name">└─ Water (for poolish)</div>
                <div class="result-amount">${(results.poolishWater / conversionFactor).toFixed(2)} ${unit}</div>
            </div>
        `;

        html += '</div>';
    }

    // Main dough ingredients
    html += '<h3 style="color: #5d3a1a; margin-bottom: 10px; font-size: 1.1rem;">Main Dough</h3>';

    // Total flour (highlighted)
    html += `
        <div class="result-item flour">
            <div class="result-name">Total Flour</div>
            <div class="result-amount">${(results.totalFlour / conversionFactor).toFixed(2)} ${unit}</div>
        </div>
    `;

    // Additional flour if poolish is used
    if (results.usePoolish && results.poolishWeight > 0) {
        html += `
            <div class="result-item">
                <div class="result-name">Additional Flour (not in poolish)</div>
                <div class="result-amount">${(results.additionalFlour / conversionFactor).toFixed(2)} ${unit}</div>
            </div>
        `;
    }

    // Total water
    html += `
        <div class="result-item">
            <div class="result-name">Total Water</div>
            <div class="result-amount">${(results.totalWater / conversionFactor).toFixed(2)} ${unit}</div>
        </div>
    `;

    // Additional water if poolish is used
    if (results.usePoolish && results.poolishWeight > 0) {
        html += `
            <div class="result-item">
                <div class="result-name">Additional Water (not in poolish)</div>
                <div class="result-amount">${(results.additionalWater / conversionFactor).toFixed(2)} ${unit}</div>
            </div>
        `;
    }

    // Salt
    html += `
        <div class="result-item">
            <div class="result-name">Salt</div>
            <div class="result-amount">${(results.saltWeight / conversionFactor).toFixed(2)} ${unit}</div>
        </div>
    `;

    // Yeast
    html += `
        <div class="result-item">
            <div class="result-name">Yeast</div>
            <div class="result-amount">${(results.yeastWeight / conversionFactor).toFixed(2)} ${unit}</div>
        </div>
    `;

    resultsList.innerHTML = html;
}

// Initial calculation on page load
document.addEventListener('DOMContentLoaded', () => {
    calculate();
});
