function loadDropdown() {
  var apiUrl = "http://127.0.0.1:5000/api/v1.0/tickers";

  // Fetch data from the API using d3.json
  return d3.json(apiUrl)
    .then(function (data) {
      var tickerDropdown = d3.select("#stock-select");

      //data to dropdown options
      tickerDropdown.selectAll("option")
        .data(data)
        .enter()
        .append("option")
        .attr("value", function (d) { return d.ticker; })
        .text(function (d) { return d.name; });

      return data;
    });
}

// Call the loadDropdown function to populate the dropdown list
loadDropdown()
  .then(function (data) {
    var selectedStock = document.getElementById('stock-select').value;
    // Call functions to update charts
    updateCandlestickChart(selectedStock);
    updateBarChart(selectedStock);
    updatePieChart(selectedStock, '2023-01-03');
    updateIndicatorsChart(selectedStock);

  })
  .catch(function (error) {
    console.error("Error:", error);
  });