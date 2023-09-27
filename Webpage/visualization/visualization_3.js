// Function to update the Plotly pie based on the selected stock and date
function updatePieChart(selectedStock, selectedDate) {
    // Load data from API
    var apiUrl = "http://127.0.0.1:5000/api/v1.0/volume?date=" + selectedDate;

    // Fetch data from the API using d3.json
    d3.json(apiUrl).then(function (data) {
        let filteredData = data;

        // Extract labels and values for the pie chart
        let labels = filteredData.map(function (row) {
            return `${row.ticker}`;
        });
        let values = filteredData.map(function (row) {
            return parseFloat(row.volume);
        });

        // Create the pie chart trace for Plotly
        var trace = {
            labels: labels,
            values: values,
            type: 'pie',
            name: 'Pie Chart'
        };

        let layout = {
            title: `Volume Transactions for ${selectedDate}`
        };

        Plotly.react('pie-chart3', [trace], layout);
    });
}

// Event listener for the stock selection dropdown
document.getElementById('stock-select').addEventListener('change', function () {
    let selectedStock = this.value;
    updatePieChart(selectedStock, null);
});
