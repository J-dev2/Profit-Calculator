document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input fields and the button
    const priceInput = document.getElementById('price');
    const costInput = document.getElementById('cost');
    const quantityInput = document.getElementById('quantity');
    const calcButton = document.querySelector('.calculate-button');

    // Add event listener to the button
    calcButton.addEventListener('click', function() {
        // Get the values from the inputs
        const price = parseFloat(priceInput.value);
        const cost = parseFloat(costInput.value);
        const quantity = parseInt(quantityInput.value);

        // Check if the inputs are valid
        if (isNaN(price) || isNaN(cost) || isNaN(quantity)) {
            alert('Please enter valid numbers for price, cost, and quantity.');
            return;
        }

        // Calculate profit using the formula Profit = (Price * Quantity) - (Cost * Quantity)
        const revenue = price * quantity;
        const totalCost = cost * quantity;
        const profit = (revenue - totalCost).toFixed(2);

        // Display the result
        alert(`Your profit is $${profit}`);
    });
});

function calculateProfit() {
    // Get input values
    const price = parseFloat(document.getElementById('price').value) || 0;
    const cost = parseFloat(document.getElementById('cost').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const taxRate = parseFloat(document.getElementById('tax-rate').value) || 0;

    // Validate inputs
    if (price < 0 || cost < 0 || quantity < 0 || taxRate < 0 || taxRate > 100) {
        alert('Please enter valid values. Price, cost, and quantity must be positive numbers, and tax rate must be between 0 and 100.');
        return;
    }

    // Calculate totals
    const totalRevenue = price * quantity;
    const totalCost = cost * quantity;
    const grossProfit = totalRevenue - totalCost;
    const taxAmount = (grossProfit * taxRate) / 100;
    const netProfit = grossProfit - taxAmount;
    const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;

    // Update results
    document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
    document.getElementById('totalCost').textContent = formatCurrency(totalCost);
    document.getElementById('taxAmount').textContent = formatCurrency(taxAmount);
    document.getElementById('netProfit').textContent = formatCurrency(netProfit);
    document.getElementById('profitMargin').textContent = formatPercentage(profitMargin);

    // Add visual feedback
    highlightResults();
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value / 100);
}

function highlightResults() {
    const results = document.getElementById('results');
    results.style.animation = 'none';
    results.offsetHeight; // Trigger reflow
    results.style.animation = 'highlight 0.5s ease-in-out';
}

// Add input validation
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0) {
            this.value = 0;
        }
        if (this.id === 'tax-rate' && this.value > 100) {
            this.value = 100;
        }
    });
});

// Add keyboard support
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateProfit();
    }
});
