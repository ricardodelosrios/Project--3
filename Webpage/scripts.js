// Initialize First TradingView Widget
new TradingView.widget({
    "width": "100%", /* Use "100%" for responsive width */
    "height": 400,
    "symbol": "AAPL", // Replace with your desired symbol
    "interval": "D", // Replace with your desired interval
    "timezone": "America/New_York",
    "theme": "Light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "hide_side_toolbar": false,
    "allow_symbol_change": true,
    "container_id": "tv-chart-1"
});

// // Function to update the Plotly candlestick chart based on the selected stock
// function updateCandlestickChart(selectedStock) {
//     // Load the merged data CSV
//     d3.csv('../Stock_data/Merged_historical_stock_data_daily.csv').then(function(data) {
//         // Filter data for the selected stock
//         const filteredData = data.filter(row => row.ticker === selectedStock);

//         // Extract necessary columns
//         const dates = filteredData.map(row => row.date);
//         const openPrices = filteredData.map(row => parseFloat(row.open));
//         const highPrices = filteredData.map(row => parseFloat(row.high));
//         const lowPrices = filteredData.map(row => parseFloat(row.low));
//         const closePrices = filteredData.map(row => parseFloat(row.close));

//         const trace = {
//             x: dates,
//             open: openPrices,
//             high: highPrices,
//             low: lowPrices,
//             close: closePrices,
//             type: 'candlestick',
//             name: 'Candlestick Chart'
//         };

//         const layout = {
//             title: `${selectedStock} Candlestick Chart`,
//             xaxis: { title: 'Date' },
//             yaxis: { title: 'Price' }
//         };

//         // Check if the chart container exists
//         if (document.getElementById('candlestick-chart')) {
//             // If it exists, update the existing chart
//             Plotly.react('candlestick-chart', [trace], layout);
//         }
//     });
// }

// // Initialize the candlestick chart with the default stock (AAPL)
// updateCandlestickChart('AAPL');

// // Event listener for the stock selection dropdown
// document.getElementById('stock-select').addEventListener('change', function() {
//     const selectedStock = this.value;
//     updateCandlestickChart(selectedStock);
// });

function loadAAPLStockAnalysis() {
    // Replace this URL with the actual URL or API endpoint for AAPL analysis
    const analysisURL = 'https://example.com/aapl-analysis';
  
    // Make an HTTP request to fetch the analysis content
    fetch(analysisURL)
      .then((response) => response.text())
      .then((data) => {
        // Display the analysis content in the container
        document.getElementById('stock-analysis-container').innerHTML = data;
      })
      .catch((error) => {
        console.error('Error loading AAPL stock analysis:', error);
      });
  }
  
