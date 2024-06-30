document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/tickers');
        const tickers = await response.json();

        const tableBody = document.getElementById('ticker-table');

        tickers.forEach((ticker, index) => {
            const row = document.createElement('tr');

            const indexCell = document.createElement('td');
            indexCell.textContent = index + 1;
            row.appendChild(indexCell);

            const platformCell = document.createElement('td');
            platformCell.textContent = ticker.name;
            row.appendChild(platformCell);

            const lastPriceCell = document.createElement('td');
            lastPriceCell.textContent = `₹${ticker.last}`;
            row.appendChild(lastPriceCell);

            const buySellCell = document.createElement('td');
            buySellCell.textContent = `₹${ticker.buy} / ₹${ticker.sell}`;
            row.appendChild(buySellCell);

            const differenceCell = document.createElement('td');
            const difference = ((ticker.sell - ticker.buy) / ticker.buy * 100).toFixed(2);
            differenceCell.textContent = `${difference}%`;
            row.appendChild(differenceCell);

            const savingsCell = document.createElement('td');
            const savings = (ticker.sell - ticker.buy).toFixed(2);
            savingsCell.textContent = `₹${savings}`;
            row.appendChild(savingsCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
});
