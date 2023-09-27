function updateIndicatorsChart(selectedStock) {
    // Load data from API
    var apiUrl = "http://127.0.0.1:5000/api/v1.0/stock?ticker=" + selectedStock;

    // Fetch data from the API using d3.json
    d3.json(apiUrl).then(function (data) {

        const period = 14; // ajusta el período según sea necesario
        const shortPeriod = 12; // Período corto para el MACD
        const longPeriod = 26; // Período largo para el MACD
        const signalPeriod = 9; // Período de señal para el MACD
        const rsiValues = []; // aquí almacenaremos los valores de RSI

        
        for (let i = period; i < data.length; i++) {
            const gains = [];
            const losses = [];

            for (let j = i - period; j < i; j++) {
                const priceChange = data[j + 1].close - data[j].close;
                if (priceChange > 0) {
                    gains.push(priceChange);
                } else {
                    losses.push(Math.abs(priceChange));
                }
            }

            const averageGain = gains.reduce((acc, val) => acc + val, 0) / period;
            const averageLoss = losses.reduce((acc, val) => acc + val, 0) / period;

            const RS = averageGain / averageLoss;
            const RSI = 100 - (100 / (1 + RS));

            // Almacenamos el valor de RSI en el array
            rsiValues.push(RSI);
        }

        // Función para calcular el Simple Moving Average (SMA)
        function calculateSMA(data, period) {
            const smaValues = [];
            for (let i = period - 1; i < data.length; i++) {
            const sum = data.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
            const sma = sum / period;
            smaValues.push(sma);
            }
            return smaValues;
        }
        
        // Función para calcular el Exponential Moving Average (EMA)
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
        
        /*
        // Función para calcular el Simple Moving Average (SMA)
        function calculateSMA(data, period) {
            const smaValues = [];
            
            for (let i = 0; i < data.length; i++) {
                if (i < period - 1) {
                    // No hay suficientes datos para calcular el SMA, por lo que simplemente agregamos el precio de cierre.
                    const closePrice = data[i].close;
                    smaValues.push(closePrice);
                } else {
                    // Calculamos el promedio de los últimos 'period' precios de cierre.
                    const sum = data.slice(i - period + 1, i + 1)
                        .map(item => item.close)
                        .reduce((a, b) => a + b, 0);
                    const sma = sum / period;
                    smaValues.push(sma);
                }
            }
            
            return smaValues;
        
        }
        
        // Calcular EMA
        function calculateEMA(data, period) {
            const emaValues = [];
            const multiplier = 2 / (period + 1);
            let ema = 0;
        
            for (let i = 0; i < data.length; i++) {
                const closePrice = data[i].close;
        
                if (i < period - 1) {
                    // No hay suficientes datos para calcular el EMA, por lo que simplemente agregamos el precio de cierre.
                    ema += closePrice;
                } else if (i === period - 1) {
                    // Calculamos el promedio simple para el período inicial.
                    ema = ema / period + closePrice;
                } else {
                    // Calculamos el EMA utilizando la fórmula.
                    ema = (closePrice - ema) * multiplier + ema;
                }
        
                emaValues.push(ema);
            }
        
            return emaValues;
        }
        */
        // Calcula las medias móviles

        const smaValues = calculateSMA(data, period);
        const emaValues = calculateEMA(data, period);

         // Función para calcular el Moving Average Convergence Divergence (MACD)
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

        // Define el diseño de la gráfica
        const layout = {
            title: `${selectedStock} Indicators`,
            xaxis: { title: 'Date' },
            yaxis: { title: 'Value' }
        };

        // Crea la matriz de datos de traza
        const plotData = [rsiTrace, macdTrace, signalTrace, histogramTrace];

        // Crea la gráfica con Plotly
        Plotly.newPlot('indicators-chart', plotData, layout);
    });
}

// Event listener para el cambio de selección de acciones
document.getElementById('stock-select').addEventListener('change', function () {
    let selectedStock = this.value;
    updateIndicatorsChart(selectedStock);
});
