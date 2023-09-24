function updateBarChart(selectedStock) {
    // Load data from API
    console.log("Bar")
    var apiUrl = "http://127.0.0.1:5000/api/v1.0/stock?ticker=" + selectedStock;

    d3.json(apiUrl).then(function (data) {
        let filteredData = data;

        // Extract necessary columns
        let dates = filteredData.map(row => row.date);
        let volume = filteredData.map(row => parseFloat(row.volume));
                
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

        // Create the bar trace for Plotly
        var trace = {
            x: dateObjects,
            y: volume,
            type: 'bar',
            name: 'Bar Chart'
        };

        let layout = {
            title: `${selectedStock} Volume Transactions`,
            xaxis: {
                title: 'Date',
            },
            yaxis: { 
                title: 'Volume'
         }
        };

        // Update the existing chart using Plotly
        Plotly.react('bar-chart2', [trace], layout);

        document.getElementById('bar-chart2').on('plotly_click', function(data) {
            if (data.points && data.points.length > 0) {
                var selectedPoint = data.points[0];
                var selectedDate = selectedPoint.x.split(" ")[0];
                updatePieChart(selectedStock, selectedDate);
            }
        });

    });
}

// Event listener for the stock selection dropdown
document.getElementById('stock-select').addEventListener('change', function () {
    let selectedStock = this.value;
    updateBarChart(selectedStock);
});
