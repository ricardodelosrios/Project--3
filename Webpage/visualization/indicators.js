function updateIndicatorsChart(selectedStock) {
    // Load data from API
    var apiUrl = "http://127.0.0.1:5000/api/v1.0/stock?ticker=" + selectedStock;

    // Fetch data from the API using d3.json
    d3.json(apiUrl).then(function (data) {

        const period = 14; // adjust the period as needed
        const shortPeriod = 12; // Short period for MACD
        const longPeriod = 26; // Long period for MACD
        const signalPeriod = 9; // Signal period for MACD
        const rsiValues = []; // here we will store the RSI values

        
        // This for loop iterates through the historical stock data, starting from day number period (in this case, 14) until the end of the data.
        for (let i = period; i < data.length; i++) {
            // Two arrays, gains and losses, are created to store positive price changes (gains) and negative price changes (losses) during the specified period.
            const gains = [];
            const losses = [];
            //This for loop iterates through the data within the specified period and calculates price changes between consecutive days.
            for (let j = i - period; j < i; j++) {
                //The price change between day j and day j+1 is calculated.
                const priceChange = data[j + 1].close - data[j].close;
                //Positive price changes are added to the gains array, while negative (or zero) price changes are added to the losses array
                if (priceChange > 0) {
                    gains.push(priceChange);
                } else {
                    losses.push(Math.abs(priceChange));//Math.abs() is used to ensure that losses are positive values.
                }
            }
            //The Relative Strength (RS) is calculated by dividing the average gain by the average loss.
            const averageGain = gains.reduce((acc, val) => acc + val, 0) / period;
            const averageLoss = losses.reduce((acc, val) => acc + val, 0) / period;

            const RS = averageGain / averageLoss;
            //The RSI is calculated using the standard RSI formula.
            const RSI = 100 - (100 / (1 + RS));

            // We store the RSI value in the array
            rsiValues.push(RSI);
        }

        // Function to calculate the Simple Moving Average (SMA)
        function calculateSMA(data, period) {
            const smaValues = [];
            for (let i = period - 1; i < data.length; i++) {
            const sum = data.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
            const sma = sum / period;
            smaValues.push(sma);
            }
            return smaValues;
        }
        
        // Function to calculate the Exponential Moving Average (EMA)
        function calculateEMA(data, period) {
            const emaValues = [];
            const multiplier = 2 / (period + 1);
            let ema = data.slice(0, period).reduce((a, b) => a + b, 0) / period;
        
            emaValues.push(ema);
        
            for (let i = period; i < data.length; i++) {
            ema = (data[i] - ema) * multiplier + ema;
            emaValues.push(ema);
            }
        
            return emaValues;
        }
        
        // Calculate mobile media

        const smaValues = calculateSMA(data, period);
        const emaValues = calculateEMA(data, period);

         // Function to calculate the Moving Average Convergence Divergence (MACD)
        function calculateMACD(data, shortPeriod, longPeriod, signalPeriod) {
            const shortEMA = calculateEMA(data, shortPeriod);
            const longEMA = calculateEMA(data, longPeriod);

            const macdLine = shortEMA.map((value, index) => value - longEMA[index]);

            const signalLine = calculateEMA(macdLine, signalPeriod);

            const histogram = macdLine.map((value, index) => value - signalLine[index]);

            return { macdLine, signalLine, histogram };
        }

         // Calcula el MACD
            const { macdLine, signalLine, histogram } = calculateMACD(data.map(d => d.close), shortPeriod, longPeriod, signalPeriod);

        // Crear trazas para cada indicador
        const rsiTrace = {
            x: data.slice(period).map(d => d.date),
            y: rsiValues,
            mode: 'lines',
            name: 'RSI'
        };

        /*
        const smaTrace = {
            x: data.slice(period).map(d => d.date),
            y: smaValues,
            mode: 'lines',
            name: 'SMA'
        }; console.log(smaValues);

        const emaTrace = {
            x: data.slice(period).map(d => d.date),
            y: emaValues,
            mode: 'lines',
            name: 'EMA'
        }; console.log(emaValues);
        */
        
        const macdTrace = {
            x: data.slice(longPeriod - 1).map(d => d.date),
            y: macdLine,
            mode: 'lines',
            name: 'MACD Line'
        };

        const signalTrace = {
            x: data.slice(longPeriod + signalPeriod - 1).map(d => d.date),
            y: signalLine,
            mode: 'lines',
            name: 'Signal Line'
        };

        const histogramTrace = {
            x: data.slice(longPeriod + signalPeriod - 1).map(d => d.date),
            y: histogram,
            type: 'bar',
            name: 'MACD Histogram'
        };

        // Define the layout of the graph
        const layout = {
            title: `${selectedStock} Indicators`,
            xaxis: { title: 'Date' },
            yaxis: { title: 'Value' }
        };

        // Create the trace data array
        const plotData = [rsiTrace, macdTrace, signalTrace, histogramTrace];

        // Create the graph with Plotly
        Plotly.newPlot('indicators-chart', plotData, layout);
    });
}

// Event listener for action selection change
document.getElementById('stock-select').addEventListener('change', function () {
    let selectedStock = this.value;
    updateIndicatorsChart(selectedStock);
});
