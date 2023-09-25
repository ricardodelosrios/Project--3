d3.csv("Merged_historical_stock_data_daily.csv").then(function(data) {
    const period = 14; // adjust the period as needed

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

    data[i].RSI = RSI;
}



});