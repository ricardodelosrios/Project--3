CREATE TABLE IF NOT EXISTS AAPL_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);

CREATE TABLE IF NOT EXISTS GOOGL_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);

CREATE TABLE IF NOT EXISTS META_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);

CREATE TABLE IF NOT EXISTS MSFT_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);

CREATE TABLE IF NOT EXISTS NVDA_data (
    Date TIMESTAMP PRIMARY KEY,
    Ticker VARCHAR(50),
    Open FLOAT,
    High FLOAT,
    Low FLOAT,
    Close FLOAT,
    Volume INT,
    Dividends FLOAT,
    StockSplits FLOAT
);