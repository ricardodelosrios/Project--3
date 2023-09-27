function updateCandlestickChart(selectedStock) {
    // Load data from API
    var apiUrl = "http://127.0.0.1:5000/api/v1.0/stock?ticker=" + selectedStock;

    // Fetch data from the API using d3.json
    d3.json(apiUrl).then(function (data) {
        // Filter data for the selected stock

        // Extract necessary columns from the data
        let dates = data.map(row => row.date);
        let openPrices = data.map(row => parseFloat(row.open));
        let highPrices = data.map(row => parseFloat(row.high));
        let lowPrices = data.map(row => parseFloat(row.low));
        let closePrices = data.map(row => parseFloat(row.close));

        // Convert date strings to JavaScript Date objects
        var dateObjects = dates.map(function(dateStr) {
            return new Date(dateStr);
        });

        // Create an array with dates representing the first day of each month
        var firstDayOfMonthDates = [];
        dateObjects.forEach(function(date) {
            if (date.getDate() === 1) {
                firstDayOfMonthDates.push(date);
            }
        });
        
        // Create an array with labels corresponding to the months
        var xLabels = firstDayOfMonthDates.map(function(date) {
            return date.toLocaleString('default', { month: 'short' });
        });

        // Create the candlestick trace for Plotly
        var trace = {
            x: dateObjects,
            open: openPrices,
            high: highPrices,
            low: lowPrices,
            close: closePrices,
            type: 'candlestick',
            name: 'Candlestick Chart'
        };

        // Define the layout for the chart
        let layout = {
            title: `${selectedStock} Candlestick Chart`,
            xaxis: {
                autorange: true,
                tickvals: firstDayOfMonthDates,
                ticktext: xLabels,
                title: 'Date',
                rangeselector: {
                    x: 0,
                    y: 1.2,
                    xanchor: 'left',
                    font: { size: 8 },
                    buttons: [{
                        step: 'month',
                        stepmode: 'backward',
                        count: 1,
                        label: '1 month'
                    }, {
                        step: 'month',
                        stepmode: 'backward',
                        count: 6,
                        label: '6 months'
                    }, {
                        step: 'all',
                        label: 'All dates'
                    }]
                }
            },
            yaxis: { title: 'Price', autorange: true }
        };


        // Update the existing chart using Plotly
        Plotly.react('candlestick-chart1', [trace], layout);

        

    });
}

// Listener for stock selection dropdown
document.getElementById('stock-select').addEventListener('change', function () {
    let selectedStock = this.value;
    updateCandlestickChart(selectedStock);
});
