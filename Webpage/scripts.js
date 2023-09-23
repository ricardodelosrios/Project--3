// Initialize First TradingView Widget
new TradingView.widget(
    {
        "width": "100%", /* Use "100%" for responsive width */
        "height": 400,
        "symbol": "AAPL", // Replace with your desired symbol
        "interval": "D", // Replace with your desired interval
        "timezone": "Etc/UTC",
        "theme": "Light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "container_id": "tv-chart-1"
    }
);

